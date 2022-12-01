import React from "react";

import { useState } from "react";
import {
    Affix,
  Box,
  Button,
  Card,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Indicator,
  Text,
} from "@mantine/core";
import { IconMenu, IconMenu2, IconShoppingCart } from "@tabler/icons";
import { motion, AnimatePresence } from "framer-motion";
import { CartProvider, useCart } from "react-use-cart";
import axios from "axios";
import getStripe from "../get-stripe";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));

const Navbar = () => {
  const { classes, cx } = useStyles();

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const redirectToCheckout = async () => {
    const {
      data: { id },
    } = await axios.post("/api/checkout_sessions", {
      items: Object.entries(items).map(([_, { id, quantity }]) => ({
        price: id,
        quantity,
      })),
    });

    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  const [open, setOpen] = useState(false);
  const [navopen, setNavOpen] = useState(false);

  const item = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div>
      <Header height={HEADER_HEIGHT}>
        <Container size="100vw" className={classes.header}>
          <AnimatePresence>



            {open && (
              <motion.div
                variants={item}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit="exit"
              >
                <Card
                  shadow="md"
                  sx={{
                    position: "sticky",
                    right: 0,
                    width: 400,
                    height: 500,
                    zIndex: 100,
                  }}
                ></Card>
              </motion.div>
            )}

            <Affix position={{ bottom: 20, right: 20 }}>
            <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setNavOpen(!navopen)}
                    layout
                    transition={spring}
                  >
                    <Indicator
                      label={totalUniqueItems}
                      overflowCount={10}
                      inline
                      size={22}
                    >
                      <IconShoppingCart size={35} />
                    </Indicator>
                  </motion.div>
                  {navopen && (
                    <motion.div
                      variants={item}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "100%", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      exit="exit"
                    >
                      <Card
                        shadow="md"
                        sx={{
                          overflow:'scroll',
                          position: "relative",
                          width: 400,
                          height: 500,
                          zIndex: 100,
                        }}
                      >
                        <>
                          {items.map((item) => (
                            <Card p={10} mt={10} withBorder key={item.id}>
                              <Group>
                                <Image width={50} src={item.image}></Image>

                                <Box sx={{ width: "80%" }}>
                                  <Text fz={15}>
                                    {item.quantity} x {item.name}
                                  </Text>
                                  <Group>
                                    <Button
                                      variant="outline"
                                      color="dark"
                                      onClick={() =>
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity - 1
                                        )
                                      }
                                    >
                                      -
                                    </Button>
                                    <Button
                                      variant="outline"
                                      color="dark"
                                      onClick={() =>
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity + 1
                                        )
                                      }
                                    >
                                      +
                                    </Button>

                                    <Button
                                      ml="auto"
                                      variant="outline"
                                      color="dark"
                                      onClick={() => removeItem(item.id)}
                                    >
                                      x
                                    </Button>
                                  </Group>
                                </Box>
                              </Group>
                            </Card>
                          ))}
                        </>
                        <Button
                          mt={30}
                          size='lg'
                          variant="outline" 
                          color="dark"
                          sx={{width: '100%'}}
                          onClick={() => {
                            redirectToCheckout();
                          }}
                        >Check Out</Button>
                      </Card>
                    </motion.div>
                  )}
            </Affix>
          </AnimatePresence>
        </Container>
      </Header>
    </div>
  );
};

export default Navbar;

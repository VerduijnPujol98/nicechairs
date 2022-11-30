import React from 'react'

import { useState } from 'react';
import { Card, Container, createStyles, Group, Header} from '@mantine/core';
import { IconMenu, IconMenu2, IconShoppingCart } from '@tabler/icons';
import { motion, AnimatePresence } from "framer-motion"

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

}));

const Navbar = () => {
    const { classes, cx } = useStyles();

    const [open, setOpen ] = useState(false)

    const item ={

        visible:{
            opacity:1,
            transition:{
                staggerChildren: 0.3,
            }
        },
        exit:{
            opacity: 0,
            height: 0,
            transition: {
                ease:"easeInOut",
                duration:0.3,
                delay: .9
            }
        }
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };
      

  return (
    <div>
        <Header height={HEADER_HEIGHT}>
            <Container size='100vw' className={classes.header}>
                <AnimatePresence>
                    <Group spacing={30} sx={{
                        marginLeft:'auto'
                    }}>
                        <motion.div
                         layout 
                         transition={spring} 
                         variants={item}
                         animate="visible">
                            <Group>
                                <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                layout transition={spring} 
                                >
                                    <IconShoppingCart size={35}/>
                                </motion.div>

                                <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={()=>setOpen(!open)}
                                layout transition={spring} 
                                >
                                    <IconMenu2 size={35}/>
                                </motion.div>
                            </Group>
                        </motion.div>
                    </Group>
                {open &&(
                    <motion.div
                    variants={item}
                    initial={{height: 0, opacity: 0}}
                    animate={{height:'100%', opacity: 1}}
                    transition={{duration:.3}}
                    exit="exit"
                    >
                    <Card
                    shadow='md'
                    sx={{
                        position:'sticky',
                        right: 0,
                        width:400,
                        height: 500,
                        zIndex:100,
                    }}
                    >
                        
                    </Card>
                    </motion.div>
                )}
                </AnimatePresence>
            </Container>
        </Header>
    </div>
  )
}

export default Navbar
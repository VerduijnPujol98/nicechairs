import { Box, Button, Card, Container, Group, Image, Indicator, SimpleGrid, Tabs, Text } from '@mantine/core'
import { IconCircle, IconShoppingCart } from '@tabler/icons'
import axios from 'axios'
import React, { useState } from 'react'
import getStripe from '../get-stripe'
import { products} from "../utils/data"
import { products2} from "../utils/data2"

import { CartProvider, useCart } from "react-use-cart";

const Shop = () => {

        const {
          isEmpty,
          totalUniqueItems,
          items,
          updateItemQuantity,
          removeItem,
        } = useCart();
      

    const { addItem } = useCart();

    const [selectedOption, setSelectedOption ] = useState(null)

    const onOptionClicked = value => () => {
        setSelectedOption(value)
        console.log(selectedOption);
    }

    const redirectToCheckout = async () => {
        const {
          data: { id },
        } = await axios.post('/api/checkout_sessions', {
          items: Object.entries(items).map(([_, { id, quantity }]) => ({
            price: id,
            quantity,
          })),
        });

        const stripe = await getStripe();
        await stripe.redirectToCheckout({ sessionId: id });
      };



  return (
    <div>
        <Container mt={200} sx={{
            display:'flex',
            justifyContent:'centr',
            alignItems:'center',
            flexDirection:'column'
        }}>
            <Text fw={900} fz={70} sx={{textAlign:'center'}}>
                Køb fremtidens stol i dag.
            </Text>
            <Tabs mt={100} color="dark" variant="outline" defaultValue="alpha">
            <Tabs.List>
                <Tabs.Tab value="alpha"><Text fw={900} fz={40} sx={{textAlign:'center'}}>ALPHA</Text></Tabs.Tab>
                <Tabs.Tab value="beta"><Text fw={900} fz={40}  sx={{textAlign:'center'}}>BETA</Text></Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="beta" pl="xs">
      
            <SimpleGrid cols={3} mt={50} >
            {products.map((p) => (
                        <Card p={20} shadow='md' withBorder key={p.id} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <Image alt={p.name} src={p.image} width={200}/>
                            <Box sx={{width:'100%'}}>
                                <Text fz={24} fw={600}>
                                    {p.name}
                                </Text>
                                <Button sx={{width:'100%'}} variant="outline" color="dark" onClick={() => addItem(p)}>
                                    Tilføj til kurv
                                </Button>
                            </Box>
                        </Card>
                    ))}
            </SimpleGrid>

            </Tabs.Panel>



            <Tabs.Panel value="alpha" pl="xs">
      
            <SimpleGrid cols={3} mt={50} >
            {products2.map((p) => (
                        <Card p={20} shadow='md' withBorder key={p.id} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <Image alt={p.name} src={p.image} width={200}/>
                            <Box sx={{width:'100%'}}>
                                <Text fz={24} fw={600}>
                                    {p.name}
                                </Text>
                                <Button sx={{width:'100%'}} variant="outline" color="dark" onClick={() => addItem(p)}>
                                    Tilføj til kurv
                                </Button>
                            </Box>
                        </Card>
                    ))}
            </SimpleGrid>

            </Tabs.Panel>
            </Tabs>
        </Container>
    </div>
  )
}

export default Shop
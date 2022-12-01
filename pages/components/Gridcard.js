import { Card, Container, SimpleGrid, Text } from '@mantine/core'
import { IconArmchair, IconCurrencyKroneDanish, IconRecycle } from '@tabler/icons'
import React from 'react'
import { motion } from "framer-motion";

const Gridcard = () => {

    const cardVariant = {
        offscreen:{
            y: 100,
            opacity: 0
        },
    
        onscreen:{
            y: -100,
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            }
        }
    }

    const listItem = {
        offscreen: { opacity: 0 },
        onscreen: { opacity: 1 }
      };
  return (
    <div>
        <Container size='xl' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <motion.div 
            variants={cardVariant}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            >
            <SimpleGrid spacing={70} cols={3}>
                <motion.div variants={listItem}>
                    <Card radius={20} p={30} sx={{width: 300}} shadow='md' withBorder>
                        <IconRecycle size={40}/>
                        <Text mt={20} fz={20} fw={600}>
                            Genanvendelig
                        </Text>
                        <Text mt={20} fw={300} fz={18}>
                            Alle vores stole er miljøvenlige og genanvendelige
                        </Text>
                    </Card>
                </motion.div>

                <motion.div variants={listItem}>
                    <Card radius={20} p={30} sx={{width: 300}} shadow='md' withBorder>
                        <IconArmchair size={40}/>
                        <Text mt={20} fz={20} fw={600}>
                            Kvalitetsfremstillede
                        </Text>
                        <Text mt={20} fw={300} fz={18}>
                            Havestole i høj kvalitet og tidløst design
                        </Text>
                    </Card>
                </motion.div>

                <motion.div variants={listItem}>
                    <Card radius={20} p={30} sx={{width: 300}} shadow='md' withBorder>
                        <IconCurrencyKroneDanish size={40}/>
                        <Text mt={20} fz={20} fw={600}>
                            De bedste tilbud
                        </Text>
                        <Text mt={20} fw={300} fz={18}>
                            Vi sikrer dig altid de bedste tilbud på vores stole
                        </Text>
                    </Card>
                </motion.div>
            </SimpleGrid>
            </motion.div>
        </Container>
    </div>
  )
}

export default Gridcard
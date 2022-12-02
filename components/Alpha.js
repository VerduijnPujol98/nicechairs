import { Box, Container, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { motion } from "framer-motion";


const Alpha = () => {

    const cardVariant = {
        offscreen:{
            x: 150,
            opacity: 0
        },
    
        onscreen:{
            x: -450,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }
    
    const textVariant = {
        offscreen: {
            y: 0,
            opacity: 0
        },

        onscreen:{
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }

    }
  return (
    <div>
        <Container mt={200} size="100vw">
            <SimpleGrid cols={2}>
                <Box
                    sx={{
                    overflow:'hidden'
                    }}>

                    <motion.div
                    variants={cardVariant}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.1 }}
                    >
                        <Image radius={50}  width='70vw' alt="homepagepic" src="https://firebasestorage.googleapis.com/v0/b/nicechairs-728b7.appspot.com/o/homepage%2FGroup%2011.png?alt=media&token=b964644f-938d-4426-b2bd-1b90bc7164ee"/>
                    </motion.div>
                </Box>

                <Box mr={150}>
                <motion.div
                variants={textVariant}
                initial="offscreen"
                whileInView='onscreen'
                viewport={{ once: true, amount: 1 }}
                >
                    <Text fw={900} fz={80} color='#00C355'>
                        I mange farver.
                    </Text>

                </motion.div>

                <motion.div
                variants={textVariant}
                initial="offscreen"
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.5 }}
                >
                    <Text mt={30} fw={300} fz={20}>
                    ALPHA of BETA er velegnede som havestole - køkkenbordsstole 
                    eller til terrassen og pynter i ethvert hjem, skole, kontor, 
                    kantine, klinik eller hospital. Stolene er UV-bestandige og er 
                    ette at rengøre eller sterilisere da de er massive og forstærkede.
                     De består af store flader og har ingen kringelkroge. Stolene kan ikke 
                     ruste og er en meget kraftig plastik havestol.

                    </Text>
                </motion.div>
                </Box>
            </SimpleGrid>
        </Container>
    </div>
  )
}

export default Alpha
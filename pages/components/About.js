import { Box, Container, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { motion } from "framer-motion";


const About = () => {

    const cardVariant = {
        offscreen:{
            x: 150,
            opacity: 0
        },
    
        onscreen:{
            x: -250,
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
                        <Image radius={50}  width='50vw' alt="homepagepic" src="https://firebasestorage.googleapis.com/v0/b/nicechairs-728b7.appspot.com/o/homepage%2FNiceChairs%20stole046.jpg?alt=media&token=694d0b0f-23fd-40e7-bf64-a7b099279527"/>
                    </motion.div>
                </Box>

                <Box mr={100}>
                <motion.div
                variants={textVariant}
                initial="offscreen"
                whileInView='onscreen'
                viewport={{ once: true, amount: 1 }}
                >
                    <Text fw={900} fz={80}>
                        Hvem vi Er
                    </Text>

                </motion.div>

                <motion.div
                variants={textVariant}
                initial="offscreen"
                whileInView='onscreen'
                viewport={{ once: true, amount: 1 }}
                >
                    <Text mt={30} fw={300} fz={24}>
                        NICECHAIRS er en designvirksomhed med fokus på kvalitet, 
                        komfort og miljø. Vi sætter design i højsædet med forbrugeren 
                        i sigte og tager afsæt i at lave stole af PP (polypropylene), som 
                        i høj grad kan genanvendes. Køb fremtidens stol i dag.
                    </Text>
                </motion.div>
                </Box>
            </SimpleGrid>
        </Container>
    </div>
  )
}

export default About
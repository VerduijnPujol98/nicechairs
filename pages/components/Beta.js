import { Box, Button, Container, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { motion } from "framer-motion";


const Beta = () => {

const cardVariant = {
    offscreen:{
        x: 0,
        opacity: 0
    },

    onscreen:{
        x: 200,
        y: 0,
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
        <Container mt={200} size='100vw'>
            <SimpleGrid cols={2}>
                <Box ml={200}>
                    <motion.div
                    variants={textVariant}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 1 }}
                    >
                        <Text fw={900} fz={80} color='#E86A3C'>
                            Kvalitets Havestole
                        </Text>
                    </motion.div>

                    <motion.div
                    variants={textVariant}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 1 }}
                    >
                        <Text mt={30} fw={300} fz={24}>
                        Hvis du vil sikre dig perfekt siddekomfort, så fås den næppe bedre!
                        De egner sig til både inden- og udendørs brug. Stolene er fremstillet efter 
                        anatomiske og ergonomiske principper for perfekt siddekomfort. Havestolen er 
                        fremstillet i massiv polypropylen, og er ikke endnu en billig plastik havestol, 
                        for polypropylen gør stolen meget holdbar. Materialet er desuden UV-resistent, 
                        og kan derfor både anvendes indendørs- og udendørs.
                        </Text>
                    </motion.div>
                </Box>

                <Box 
                    sx={{
                    overflow:'hidden',
                    position: 'relative',
                }}>
                    <motion.div
                    variants={cardVariant}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    >
                        <Image radius={50} width='60vw' alt="homepagepic" src="https://firebasestorage.googleapis.com/v0/b/nicechairs-728b7.appspot.com/o/homepage%2FGroup%2010.png?alt=media&token=c883a1c7-021d-42bd-a3e4-64ec2b4de04f"/>
                    </motion.div>
                    
                </Box>
            </SimpleGrid>
        </Container>
    </div>
  )
}

export default Beta
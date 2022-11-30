import { Box, Button, Container, createStyles, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
    hero: {
      position: 'relative',
      backgroundImage:
        'url(https://firebasestorage.googleapis.com/v0/b/nicechairs-728b7.appspot.com/o/homepage%2FArtboard%201.jpg?alt=media&token=50f1deb6-c828-47f5-b396-fa5f127c3eb5)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    container: {
        height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: theme.spacing.xl * 10,
        zIndex: 1,
        position: 'relative',
    
        [theme.fn.smallerThan('sm')]: {
          height: 500,
          paddingBottom: theme.spacing.xl * 3,
        },
      },
  }));

const HeroHeader = () => {

    const { classes } = useStyles();

  return (
    <div className={classes.hero}>
        <Container className={classes.container}>
                <Box sx={{zIndex:3}}>
                    <Text fw={900} fz={130}>
                        NICECHAIRS
                    </Text>
                    <Text fw={300} fz={30}
                    sx={{
                        width:900
                    }}>
                        Enkle møbler med kvalitetsmateriale
                    </Text>
                    <Button mt={30} size='lg' variant="outline" color="dark">
                        Se alle stoler
                    </Button>
                </Box>
        </Container>
    </div>
  )
}

export default HeroHeader
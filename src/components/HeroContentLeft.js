import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';
import Spline from '@splinetool/react-spline';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white  ,
    fontSize: 130,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    fontSize: 38,
    fontWeight: 300,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        opacity={1}
        zIndex={0}
      >
            <Spline scene="https://prod.spline.design/Dlu0mps7dvmrcXjl/scene.splinecode" />

      </Overlay>
      <Container className={classes.container}>
        <Title className={classes.title}>NICECHAIRS</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Havestole i høj kvalitet og tidløst design  
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Se Vores Stoler
        </Button>
      </Container>
    </div>
  );
}
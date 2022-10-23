import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://firebasestorage.googleapis.com/v0/b/nicechairs-728b7.appspot.com/o/homepage%2F304773238_503562715111310_7102583145767317150_n.jpeg?alt=media&token=d1d91feb-e9b1-4114-9c20-1909f446dfd0)',
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
    color: theme.white,
    fontSize: 120,
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
    fontSize: 50,
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
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={0.4}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Nice Chairs</Title>
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
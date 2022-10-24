import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons';
  
  const mockdata = [
    {
      title: 'Høj kvalitet',
      description:
        'Vores stole er lavet af højeste kvalitet af polypropylen, som i høj grad kan genbruges.',
      icon: IconGauge,
    },
    {
      title: 'De bedste tilbud',
      description:
        'Hos Nicechairs.dk sikrer vi dig altid de bedste tilbud på vores stole - vi skærer mellemmanden ud og sælger direkte til dig.',
      icon: IconUser,
    },
    {
      title: 'Sikker betaling',
      description:
        'Vi bruger kun anderkendte og sikre betaling, som sikrer dig som forbruger.',
      icon: IconCookie,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 34,
      fontWeight: 900,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
    return (
      <Container mt={0} size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" size="lg">
          Køb fremtidens stol i dag.
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} align="center" mt="sm">
        NICECHAIRS er en designvirksomhed med fokus på kvalitet, komfort og miljø. 
        </Title>
  
        <Text color="dimmed" className={classes.description} align="center" mt="md">
        Vi sætter design i højsædet med forbrugeren i sigte og tager afsæt i at lave stole af PP (polypropylene), som i høj grad kan genanvendes.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
import { createStyles, Paper, Text, Title, Button, Container, Tabs, SimpleGrid, Card, Image, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    tab: {
        ...theme.fn.focusStyles(),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      },
}));

const images = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  ];

export function Shop() {
  const { classes } = useStyles();

  return (
    <Container mt={200} size='lg'>
        <Tabs className={classes.tab}>
            <Tabs.List grow position='center'>
                <Tabs.Tab value='first'>
                <Text sx={{
                    fontSize: 35,
                    fontWeight: '900'
                }}>
                    ALPHA
                </Text>
                </Tabs.Tab>
                <Tabs.Tab value='second'>
                <Text sx={{
                    fontSize: 35,
                    fontWeight: '900'
                }}>
                    BETA
                </Text>
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='first'>
                <Container size='lg'>
                <SimpleGrid cols={2}>
                    <Card m={40}>
                    <Card.Section mt="sm">
                        <Image src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
                    </Card.Section>

                    <Card.Section inheritPadding mt="sm" pb="md">
                        <SimpleGrid cols={3}>
                        {images.map((image) => (
                            <Image src={image} key={image} radius="sm" />
                        ))}
                        </SimpleGrid>
                    </Card.Section>
                    </Card>

                    <Card m={40}>
                    <Group noWrap>
                        <div>
                        <Text  sx={{
                            fontSize: 35,
                            fontWeight: '900'
                                    }}>
                            ALPHA Stoler
                        </Text>

                        <Group noWrap spacing={10} mt={3}>
                            <Text size="md">
                            tesr
                            </Text>
                        </Group>

                        <Group noWrap spacing={10} mt={5}>
                            <Text size="xs" color="dimmed">
                            test
                            </Text>
                        </Group>
                        </div>
                    </Group>
                    </Card>
                </SimpleGrid>
                </Container>
            </Tabs.Panel>
        </Tabs>
    </Container>
  );
}

import { createStyles, Container, Text, Button, Group, SimpleGrid, Image, Card, Badge, Box } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    display: 'flex',
  },

  inner: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 65,
    fontWeight: 900,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },



  container: {
    [theme.fn.smallerThan('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
    },
  },
  

  container2: {
    width: 600,
    [theme.fn.smallerThan('md')]: {
      width: '80%'
    },
    [theme.fn.smallerThan('sm')]: {
      width: '90%'
    },
  },
  
}));

export function DoubleHero() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size='xl' className={classes.inner}>
      <SimpleGrid cols={2} spacing="100" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Container >
            <h1 className={classes.title}>
                ALPHA Stolen
            </h1>
            <Image height='auto' width="85%" mt={0} src='https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.6435-9/82487409_107281857484898_6153184364038455296_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=XyydLrYiWZwAX_WqlQM&_nc_ht=scontent.fsvg2-1.fna&oh=00_AT9pBvG97ZvKVowEWO3IA0oiTOLDSdXLuBWMDeZ7BECjNw&oe=637C1651'/>
        </Container>
        <Container className={classes.container}>
              <Text m={40} mt={0} sx={{fontSize: 40}} weight="700"  breakpoints={[{ maxWidth: 'md', mt:0}]}>
              Kvalitets havestole.
              </Text>
                <Text m={40} breakpoints={[{ maxWidth: 'md', mt:0}]}>
                Kvalitets havestole i mange farver kan du nu købe her til omgående levering, vi har altid et godt tilbud. Hvis du vil sidde godt og komfortabelt i vore stabelbare kvalitetsstole, så skal du vælge mellem armstolen ALPHA og stolen BETA. Hvis du vil sikre dig perfekt siddekomfort, så fås den næppe bedre! De egner sig til både inden- og udendørs brug. Stolene er fremstillet efter anatomiske og ergonomiske principper for perfekt siddekomfort. Havestolen er fremstillet i massiv polypropylen, og er ikke endnu en billig plastik havestol, for polypropylen gør stolen meget holdbar. 
                </Text>
                <Text mt={30} m={40}>
                Materialet er desuden UV-resistent, og kan derfor både anvendes indendørs- og udendørs.
                </Text>
                <Button m={40}
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                size="xl"
                className={classes.control}
                mt={40}
                >
                Alle Stoler
                </Button>
        </Container>
      </SimpleGrid> 
      <SimpleGrid cols={2} spacing="100" mt={100} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Container className={classes.container} >
            <Text m={40} mt={0} sx={{fontSize: 40}} weight="700"  breakpoints={[{ maxWidth: 'md', mt:0}]}>
              I mange farver.
            </Text>
            <Text m={40}  breakpoints={[{ maxWidth: 'md', mt:0}]}>
            ALPHA of BETA er velegnede som havestole - køkkenbordsstole eller til terrassen og pynter i ethvert hjem, skole, kontor, kantine, klinik eller hospital. Stolene er UV-bestandige og er lette at rengøre eller sterilisere da de er massive og forstærkede. De består af store flader og har ingen kringelkroge. Stolene kan ikke ruste og er en meget kraftig plastik havestol. Modellen kan stables, og er rengøringsvenlig og vi har altid tilbud på havestole klar til dig. Vores Havestole kan fåes med armlæn, og er derfor ekstra behagelig, når man eksempelvis skal sidde udenfor en lang sommeraften. 
                </Text>
                <Text m={40} >
                Meget anvendelig som havestol eller køkkenstol, venteværelsesstol og meget meget mere!
            </Text>

            <Button m={40}
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                size="xl"
                className={classes.control}
                mt={40}
                >
                Alle Stoler
                </Button>

        </Container>
        <Container 
        className={classes.container2}
        sx={{display:'flex', flexDirection:'column'}}
        >
            <Text className={classes.title} >
                BETA Stolen
            </Text>
            <Image height='auto' width="80%" mt={0} src='https://scontent.fsvg2-1.fna.fbcdn.net/v/t1.6435-9/84151286_107282657484818_8405040098197897216_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=rdIt2mChdOIAX-qCGvp&_nc_ht=scontent.fsvg2-1.fna&oh=00_AT-hQW9rzJxqFfh7ajY--mGvn9T9h2huy89G1MXsVbp0Sw&oe=637DAFCC'/>
            
        </Container>
      </SimpleGrid> 
      </Container>
    </div>
  );
}
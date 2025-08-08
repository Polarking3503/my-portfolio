import { useSpring, animated } from '@react-spring/web';
import InfiniteScroll from './UI/InfiniteScroll';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const skills = [
  { src: 'images/laravel-logo.png', alt: 'Laravel' },
  { src: 'images/react-logo.png', alt: 'React' },
  { src: 'images/js-logo.png', alt: 'JavaScript' },
  { src: 'images/php-logo.png', alt: 'PHP' },
  { src: 'images/mariadb-logo.png', alt: 'MariaDB' },
  { src: 'images/bootstrap-logo.png', alt: 'Bootstrap' },
  { src: 'images/tailwind-logo.png', alt: 'Tailwind CSS' },
  { src: 'images/mysql-logo.png', alt: 'MySQL' },
  { src: 'images/Typescript.png', alt: 'TypeScript' },
  { src: 'images/Next.jpg', alt: 'Next.js' },
  { src: 'images/Node.png', alt: 'Node.js' }
];

const items = skills.map((skill, idx) => ({
  key: idx,
  content: (
    <Box
      sx={{
        width: 120,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 2
      }}
    >
      <img
        src={skill.src}
        alt={skill.alt}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </Box>
  )
}));

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 800 }
  });

  const popIn = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 800 },
    delay: 300
  });

  return (
    <animated.div style={fadeIn}>
      <Container sx={{ py: 8 }} id="about">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
        >
          <animated.div style={{ ...popIn, flex: 1 }}>
            <Avatar
              alt="Luis Jorge Reynaga"
              src="images/me.png"
              sx={{ width: 150, height: 150, mb: { xs: 2, md: 0 } }}
            />
          </animated.div>

          <Box sx={{ flex: 4 }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Sobre mí
            </Typography>
            <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
              ¡Hola! Soy Luis Jorge Reynaga, un desarrollador con 2 años de
              experiencia. Me especializo en el desarrollo de aplicaciones
              eficientes y escalables, manteniendo código de alta calidad y
              mejorando continuamente mis habilidades.
            </Typography>
            <Typography variant="body1" align="justify">
              A lo largo de mi carrera, he trabajado en proyectos de desarrollo
              web, API REST y microservicios. Me encanta resolver problemas
              complejos y colaborar en equipos multidisciplinarios.
            </Typography>
          </Box>
        </Stack>

        {/* Tecnologías: Infinite Scroll */}
        <Box sx={{ mt: 8, position: 'relative', height: 300 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
          >
            Tecnologías y Frameworks
          </Typography>

          <Box
            sx={{
              height: '100%',
            }}
          >
            <InfiniteScroll
              width="25rem"
              items={items}
              isTilted={true}
              autoplay={true}
              autoplaySpeed={0.9}
              autoplayDirection="up"
              pauseOnHover={false}
            />
          </Box>
        </Box>
      </Container>
    </animated.div>
  );
};

export default About;

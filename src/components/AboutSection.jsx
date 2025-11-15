// src/components/AboutSection.jsx
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutSection = () => (
  <Box
    component="section"
    aria-labelledby="about-section-title"
    sx={{
      minHeight: '100vh',
      backgroundColor: '#1D2F3A',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Typography
      id="about-section-title"
      variant="h4"
      component="h1"
      gutterBottom
      sx={{
        fontSize: {
          xs: "2rem",   // phones
          sm: "2.4rem", // tablets
          md: "2.8rem", // small laptops
          lg: "3.2rem", // desktops
          xl: "3.6rem", // ultra-wide monitors
        },
      }}
    >
      About Me
    </Typography>

    <Typography
      variant="body1"
      sx={{
        maxWidth: { xs: 350, sm: 500, md: 650, lg: 750 },
        mb: 4,
        fontSize: {
          xs: "1rem",
          sm: "1.1rem",
          md: "1.2rem",
          lg: "1.3rem",
          xl: "1.4rem",
        },
        lineHeight: 1.75,
        letterSpacing: "0.1rem",
      }}
    >
      Welcome to my portfolio! I’m a Master of Engineering student in Computer Science and Applications at Virginia Tech, specializing in Software Development and Applications, with a strong focus on UI/UX design and frontend development. I design intuitive, accessible, and visually engaging interfaces, turning user insights into polished digital experiences. I’m passionate about creating impactful software solutions and continuously learning cutting-edge technologies to solve real-world problems.
    </Typography>

    <Stack
      direction="row"
      spacing={3}
      component="nav"
      aria-label="Social media links"
    >
      <IconButton
        component={Link}
        href="https://www.linkedin.com/in/temitope-emokpae/"
        color="inherit"
        aria-label="Visit Temitope Emokpae's LinkedIn"
        sx={{
          '&:focus': {
            outline: '0.25rem solid white',
            outlineOffset: '0.5rem',
          },
          '& svg': { fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' } }
        }}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component={Link}
        href="https://github.com/temokpae3/"
        color="inherit"
        aria-label="Visit Temitope Emokpae's GitHub"
        sx={{
          '&:focus': {
            outline: '0.25rem solid white',
            outlineOffset: '0.5rem',
          },
          '& svg': { fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' } }
        }}
      >
        <GitHubIcon />
      </IconButton>

    </Stack>
  </Box>
);

export default AboutSection;
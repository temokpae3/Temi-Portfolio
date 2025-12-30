// src/components/AboutSection.jsx
import { Box, Typography, Stack, Avatar, IconButton, Link, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import profilePic from '../assets/my_headshot.jpg';

const AboutSection = () => (
  <Box
    component="section"
    aria-labelledby="about-section-title"
    sx={{
      minHeight: '100vh',
      backgroundColor: '#1D2F3A',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
    }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        {/* Profile Image */}
        <Box
          sx={{
            width: {
              xs: '60vw',
              sm: '40vw',
              md: '20vw',
              lg: '16vw',
            },
            maxWidth: '18rem',
            aspectRatio: '3 / 4',
            border: '0.2rem solid #FFFFFF',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={profilePic}
            alt="Profile Picture"
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>


        {/* Text Section */}
        <Box textAlign={{ xs: 'center', md: 'left' }}>
          <Typography
            id="about-section-title"
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', sm: '2.8rem', md: '3.2rem', lg: '3.6rem' } }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: { xs: 350, sm: 500, md: 650 },
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              lineHeight: 1.75,
              letterSpacing: '0.05rem',
            }}
          >
            I've spent the past 6+ years of my undergraduate and master’s studies working across different areas of frontend development and UI/UX design (including HTML, CSS, JavaScript, React.js, Figma, etc.).  
            <br /><br />
            These days, my time is spent designing and coding in side projects.  
            <br /><br />
            Outside of my career life, you’ll find me playing video games on my Nintendo Switch and binge-watching TV shows on Netflix.
          </Typography>

          {/* Social Links */}
          <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/temitope-emokpae/"
              target="_blank"
              color="inherit"
              aria-label="Visit Temi's LinkedIn"
              sx={{ '&:focus': { outline: '0.25rem solid white', outlineOffset: '0.5rem' } }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://github.com/temokpae3/"
              target="_blank"
              color="inherit"
              aria-label="Visit Temi's GitHub"
              sx={{ '&:focus': { outline: '0.25rem solid white', outlineOffset: '0.5rem' } }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default AboutSection;
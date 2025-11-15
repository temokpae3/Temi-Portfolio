// src/components/HeroSection.jsx
import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textShadow: "0.1em 0.1em 0.3em rgba(0,0,0,0.8)",
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("src/assets/home-landing.webp")',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center top', sm: 'center' },
          zIndex: -2,
        }}
      />

      {/* Avatar */}
      <Box
        component="img"
        src="/src/assets/avatar-icon.webp"
        alt="Temitope Emokpae"
        sx={{
          width: { xs: '8rem', sm: '11rem', md: '13.75rem', lg: '16.25rem' },  // rem units
          height: { xs: '8rem', sm: '11rem', md: '13.75rem', lg: '16.25rem' },
          mb: { xs: '1.25rem', sm: '1.875rem', md: '2.5rem' }, // vertical spacing
          borderRadius: '50%',
          border: { xs: '0.25rem solid #22313C' }, 
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
      />

      {/* Name */}
      <Typography
        component="h1"
        sx={{
          color: '#FFFFFF',
          fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem', lg: '3.4rem' },
          fontWeight: 700,
          mb: { xs: '0.625rem', sm: '0.9375rem', md: '1.25rem' },
        }}
      >
        Temi Emokpae
      </Typography>

      {/* Education lines */}
      <Typography
        component="h2"
        sx={{
          color: 'rgba(255,255,255,0.95)',
          fontSize: { xs: '1rem', sm: '1.15rem', md: '1.35rem' },
          mb: { xs: '0.625rem', sm: '0.75rem' },
          maxWidth: '50rem',
        }}
      >
        M.Eng. Computer Science and Applications at Virginia Tech (In Progress)
      </Typography>

      <Typography
        component="h3"
        sx={{
          color: 'rgba(255,255,255,0.95)',
          fontSize: { xs: '1rem', sm: '1.15rem', md: '1.35rem' },
          mb: { xs: '0.625rem', sm: '0.75rem' },
          maxWidth: '50rem',
        }}
      >
        B.S. Computer Science at SUNY Oswego
      </Typography>

      <Typography
        component="h4"
        sx={{
          color: 'rgba(255,255,255,0.95)',
          fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.2rem' },
          mb: { xs: '0.5rem', sm: '0.625rem' },
          maxWidth: '50rem',
        }}
      >
        Minor in Information Science at SUNY Oswego
      </Typography>
    </Box>
  );
};

export default HeroSection;
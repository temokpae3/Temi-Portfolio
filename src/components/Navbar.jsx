// src/components/Navbar.jsx
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import CrueltyFreeOutlinedIcon from '@mui/icons-material/CrueltyFreeOutlined';

const Navbar = ({ currentSection, setSection }) => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: '#233E4E',
    }}
  >
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: {
          xs: '3.5rem',
          sm: '4rem',
          md: '4.5rem',
          lg: '5rem',
        },
      }}
    >
      {/* Responsive Icon */}
      <CrueltyFreeOutlinedIcon
        sx={{
          mr: '0.5rem',
          fontSize: {
            xs: '1.625rem',
            sm: '2rem',
            md: '2.375rem',
            lg: '2.75rem',
            xl: '3.125rem',
          },
        }}
        aria-hidden="true"
      />

      {/* Responsive Button Stack */}
      <Stack
        direction="row"
        spacing={{
          xs: 0.25,
          sm: 0.5,
          md: 0.75,
        }}
      >
        {['home', 'about', 'projects'].map((section) => (
          <Button
            key={section}
            color="inherit"
            variant={currentSection === section ? 'outlined' : 'text'}
            onClick={() => setSection(section)}
            sx={{
              fontSize: {
                xs: '0.75rem',
                sm: '0.85rem',
                md: '0.95rem',
                lg: '1rem',
                xl: '1.1rem',
              },
              padding: {
                xs: '0.25rem 0.5rem',
                sm: '0.375rem 0.75rem',
                md: '0.5rem 1rem',
              },
              // Focus styles for keyboard users
              '&:focus-visible': {
                outline: '2px solid #ffffff',
                outlineOffset: '2px',
              },
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Navbar;
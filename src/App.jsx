import { useState, Suspense, lazy } from 'react';
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import { CssBaseline, Box, Skeleton } from "@mui/material";

// Lazy-load non-critical sections
const AboutSection = lazy(() => import('./components/AboutSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));

function App() {
  const [currentSection, setSection] = useState('home');

  return (
    <div>
      <CssBaseline />
      <Navigation currentSection={currentSection} setSection={setSection} />

      {currentSection === 'home' && <HeroSection />}

      {currentSection === 'about' && (
        <Suspense
          fallback={
            <Box
              sx={{
                px: { xs: 2, sm: 6 },
                py: { xs: 4, sm: 8 },
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              <Skeleton variant="text" height={50} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
              <Skeleton variant="text" height={40} width="60%" />
            </Box>
          }
        >
          <AboutSection />
        </Suspense>
      )}

      {currentSection === 'projects' && (
        <Suspense
          fallback={
            <Box
              sx={{
                px: { xs: 2, sm: 6 },
                py: { xs: 4, sm: 8 },
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              <Skeleton variant="text" height={50} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
              <Skeleton variant="text" height={40} width="60%" />
            </Box>
          }
        >
          <ProjectsSection />
        </Suspense>
      )}
    </div>
  );
}

export default App;
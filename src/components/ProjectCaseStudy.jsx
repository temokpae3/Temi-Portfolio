// src/components/ProjectCaseStudy.jsx
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
  ImageList,
  ImageListItem,
  useMediaQuery,
  ButtonBase,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const ProjectCaseStudy = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight);

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const handleResize = () => setAspectRatio(window.innerWidth / window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = (src) => {
    setSelectedImg(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  const aspectRatingWide = (ratio) => ratio > 1.3;

  // Responsive column count
  let cols = 2;
  if (isXs) cols = 1;
  else if (isSm) cols = aspectRatingWide(aspectRatio) ? 3 : 2;
  else if (isMd) cols = aspectRatingWide(aspectRatio) ? 4 : 3;
  else if (isLgUp) cols = aspectRatingWide(aspectRatio) ? 5 : 4;

  return (
    <Card sx={{ mb: '3rem' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="subtitle3" color="text.secondary" gutterBottom>
          {project.timeframe}
        </Typography>
        <Divider sx={{ my: '1.5rem' }} />

        {/* Background */}
        <Typography variant="h6" component="h3" gutterBottom>
          Project Background
        </Typography>
        <Typography variant="body2" sx={{ mb: '1rem' }}>
          {project.background}
        </Typography>

        {/* Role */}
        <Typography variant="h6" component="h3" gutterBottom>
          My Role
        </Typography>
        <Typography variant="body2" sx={{ mb: '1rem' }}>
          {project.role}
        </Typography>

        {/* Process */}
        <Typography variant="h6" component="h3" gutterBottom>
          Process
        </Typography>
        <Box component="ul" sx={{ pl: '1rem', mb: '1rem' }}>
          {project.process.map((step, idx) => (
            <li key={idx}>
              <Typography variant="body2">{step}</Typography>
            </li>
          ))}
        </Box>

        {/* Solution */}
        <Typography variant="h6" component="h3" gutterBottom>
          Solution
        </Typography>
        <Box component="ul" sx={{ pl: '1rem', mb: '1rem' }}>
          {project.solution.map((step, idx) => (
            <li key={idx}>
              <Typography variant="body2">{step}</Typography>
            </li>
          ))}
        </Box>

        {/* Results */}
        {project.results && (
          <>
            <Typography variant="h6" component="h3" gutterBottom>
              Results
            </Typography>
            <Typography variant="body2" sx={{ mb: '1rem' }}>
              {project.results}
            </Typography>
          </>
        )}

        {/* Design Artifacts */}
        {project.artifacts && (
          <>
            <Typography variant="h6" component="h3" gutterBottom>
              Design Artifacts
            </Typography>

            <ImageList
              cols={cols}
              gap="0.75rem"
              sx={{
                gridAutoRows: aspectRatingWide(aspectRatio) ? '11.25rem' : '15rem',
              }}
            >
              {project.artifacts.map((artifact, idx) => (
                <ImageListItem key={idx}>
                  <ButtonBase
                    onClick={() => handleOpen(artifact.src)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                      display: 'block',
                      '&:focus-visible': {
                        outline: '0.1em solid #1976d2',
                        outlineOffset: '0.1em',
                      },
                    }}
                  >
                    <img
                      src={artifact.src}
                      alt={artifact.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: '0.3s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                    />
                  </ButtonBase>
                </ImageListItem>
              ))}
            </ImageList>
          </>
        )}

        {/* Tech Stack */}
        <Stack direction="row" spacing={1} sx={{ mt: '1rem', flexWrap: 'wrap' }}>
          {project.techStack.map((tech, idx) => (
            <Typography
              key={idx}
              component="span"
              sx={{
                display: 'inline-block',
                px: 1.5,
                py: 0.5,
                backgroundColor: '#233E4E',
                color: 'white',
                borderRadius: '16px',
                fontSize: '0.875rem',
                margin: '0.25rem',
                userSelect: 'none',
              }}
              aria-label={`Technology used: ${tech}`}
            >
              {tech}
            </Typography>
          ))}
        </Stack>
      </CardContent>

      {/* Enlarged Image Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        aria-labelledby="enlarged-dialog-title"
        aria-describedby="enlarged-dialog-description"
      >
        {/* Hidden heading for screen readers */}
        <Typography id="enlarged-dialog-title" variant="srOnly">
          Project artifact
        </Typography>

        <IconButton
          onClick={handleClose}
          aria-label="Close dialog"
          sx={{
            position: 'absolute',
            right: '0.5rem',
            top: '0.5rem',
            color: 'white',
            backgroundColor: '#233E4E',
            '&:hover': { backgroundColor: '#233E4E' },
            '&:focus-visible': {
              outline: '0.1em solid #233E4E', 
              outlineOffset: '0.1em',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ p: 0, backgroundColor: '#000' }}>
          <img
            src={selectedImg}
            alt="Screenshot of project design artifact"
            id="enlarged-dialog-description"
            loading="lazy"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              display: 'block',
              margin: 'auto',
              borderRadius: '0.5rem',
            }}
          />
        </DialogContent>
      </Dialog>

    </Card>
  );
};

export default ProjectCaseStudy;
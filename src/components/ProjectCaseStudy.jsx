// src/components/ProjectCaseStudy.jsx
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
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
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(
    window.innerWidth / window.innerHeight
  );

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const handleResize = () =>
      setAspectRatio(window.innerWidth / window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = (media) => {
    setSelectedMedia(media);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMedia(null);
  };

  const aspectRatingWide = (ratio) => ratio > 1.3;

  // Responsive column count
  let cols = 2;
  if (isXs) cols = 1;
  else if (isSm) cols = aspectRatingWide(aspectRatio) ? 3 : 2;
  else if (isMd) cols = aspectRatingWide(aspectRatio) ? 4 : 3;
  else if (isLgUp) cols = aspectRatingWide(aspectRatio) ? 5 : 4;

  return (
    <Card
      id={project.slug}
      sx={{
        mb: '3rem',
        scrollMarginTop: '6rem', // prevents anchor being hidden by nav
      }}
    >
      <CardContent>
        {/* Header */}
        <Typography variant="h5" component="h2" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
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

        {/* Key Features */}
        {project.features && (
          <>
            <Typography variant="h6" component="h3" gutterBottom>
              Key Features
            </Typography>
            <Box component="ul" sx={{ pl: '1rem', mb: '1rem' }}>
              {project.features.map((feature, idx) => (
                <li key={idx}>
                  <Typography variant="body2">{feature}</Typography>
                </li>
              ))}
            </Box>
          </>
        )}

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

        {/* UX / Design Artifacts */}
        {project.uxArtifacts && (
          <>
            <Typography variant="h6" component="h3" gutterBottom>
              UX & Design Process
            </Typography>

            <ImageList
              cols={cols}
              gap="0.75rem"
              sx={{
                gridAutoRows: aspectRatingWide(aspectRatio)
                  ? '11.25rem'
                  : '15rem',
              }}
            >
              {project.uxArtifacts.map((artifact, idx) => (
                <ImageListItem key={idx}>
                  <ButtonBase
                    onClick={() => handleOpen(artifact)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                      display: 'block',
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
                      }}
                    />
                  </ButtonBase>
                </ImageListItem>
              ))}
            </ImageList>
          </>
        )}

        {/* Final Application Screens */}
        {project.finalScreens && (
          <>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ mt: '2rem' }}
            >
              Final Application
            </Typography>

            <ImageList
              cols={cols}
              gap="0.75rem"
              sx={{
                gridAutoRows: aspectRatingWide(aspectRatio)
                  ? '11.25rem'
                  : '15rem',
              }}
            >
              {project.finalScreens.map((screen, idx) => (
                <ImageListItem key={idx}>
                  <ButtonBase
                    onClick={() => handleOpen(screen)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    {(screen.type ?? 'image') === 'video' ? (
                      <video
                        muted
                        preload="metadata"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      >
                        <source src={screen.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </ButtonBase>
                </ImageListItem>
              ))}
            </ImageList>
          </>
        )}

        {/* Tech Stack */}
        <Stack direction="row" spacing={1} sx={{ mt: '1.5rem', flexWrap: 'wrap' }}>
          {project.techStack.map((tech, idx) => (
            <Typography
              key={idx}
              component="span"
              sx={{
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

      {/* Enlarged Image and Video Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        aria-labelledby="enlarged-dialog-title"
        aria-describedby="enlarged-dialog-description"
      >
        <Typography id="enlarged-dialog-title" variant="srOnly">
          Project image
        </Typography>

        <IconButton
          onClick={handleClose}
          aria-label="Close dialog"
          sx={{
            position: 'absolute',
            right: '0.5rem',
            top: '0.5rem',
            zIndex: 10,
            color: 'white',
            backgroundColor: '#233E4E',
            '&:hover': { backgroundColor: '#233E4E' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{
          p: 0,
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {selectedMedia && (selectedMedia.type ?? 'image') === 'video' ? (
            <video
              controls
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture
              muted
              onVolumeChange={(e) => {
                e.currentTarget.muted = true;
                e.currentTarget.volume = 0;
              }}
              style={{
                width: '100%',
                maxWidth: '90vw',
                maxHeight: '90vh',
                height: 'auto',
                display: 'block',
                margin: 'auto',
                borderRadius: '0.5rem',
                backgroundColor: '#000',
              }}
            >
              <source src={selectedMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={selectedMedia?.src}
              alt={selectedMedia?.alt || 'Enlarged project media'}
              loading="lazy"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'block',
                margin: 'auto',
                borderRadius: '0.5rem',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProjectCaseStudy;
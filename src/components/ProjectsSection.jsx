// src/components/ProjectsSection.jsx
import { Container, Typography, Box } from '@mui/material';
import ProjectCaseStudy from './ProjectCaseStudy';
import { projects } from '../data/projects';

const ProjectsSection = () => (
  <Box
    sx={{
      backgroundColor: '#bef1ffff',
      py: 8,
    }}
  >
    <Container>
      <Typography variant="h4" component="h1" align="center" sx={{ mb: 6}}>
        UI/UX Case Studies
      </Typography>

      {projects.map((project, idx) => (
        <ProjectCaseStudy project={project} key={idx} />
      ))}
    </Container>
  </Box>
);

export default ProjectsSection;
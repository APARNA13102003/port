import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultProjects = [
    {
      id: 1,
      title: "SilentSiren – Women's Safety Alert System",
      description: "An innovative women's safety application designed to provide immediate assistance during emergency situations. The system enables users to send real-time emergency alerts along with their live location to predefined contacts with a single action. Focuses on ensuring personal safety through quick communication, location tracking, and emergency response features. Key Features: One-click SOS emergency alert system, Real-time GPS location sharing, Instant notification to emergency contacts, User-friendly and responsive interface, Secure user registration and authentication, Fast and reliable emergency communication. My Contribution: Designed and developed the user interface, Implemented emergency alert and location-sharing functionalities, Integrated database operations for user management, Tested and optimized application performance. Outcome: The project demonstrates how technology can be leveraged to enhance personal safety and provide rapid assistance during critical situations.",
      tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Android Studio"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600",
      live: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Full Stack E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tech: ["React", "Firebase", "Material UI"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      live: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts, maps, and location-based alerts.",
      tech: ["React", "OpenWeather API", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600",
      live: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "An elegant personal portfolio showcasing projects and skills.",
      tech: ["React", "CSS3", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600",
      live: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content management system for creating and publishing blog articles.",
      tech: ["React", "Express", "MongoDB", "Markdown"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      live: "#",
      github: "#"
    }
  ];

  useEffect(() => {
    fetch('/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('API not available');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching projects, using default data:', err);
        setProjects(defaultProjects);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (loading) {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            Loading projects...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live"
                  >
                    ↗
                  </a>
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Code"
                  >
                    ⌘
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

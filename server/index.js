const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all fields' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please enter a valid email address' 
    });
  }

  // In production, you would save to MongoDB or send email
  // For now, we'll just simulate success
  console.log('Contact form submission:', { name, email, message });

  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! I will get back to you soon.' 
    });
  }, 1000);
});

// Projects API - Updated with Aparna's project
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: "SILENTSIREN - Smart Personal Safety System",
      description: "AI-based mobile safety platform providing discreet emergency alerts for vulnerable users. Features voice keywords, gesture detection, and abnormal behavior analysis.",
      tech: ["AI/ML", "GPS Tracking", "Mobile Development", "Edge AI"],
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
  res.json(projects);
});

// Skills API - Updated with Aparna's skills
app.get('/api/skills', (req, res) => {
  const skills = {
    programming: [
      { name: "Java", level: 70 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 80 },
      { name: "Full Stack", level: 70 }
    ],
    frontend: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 }
    ],
    tools: [
      { name: "VSCode", level: 95 },
      { name: "GitHub", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "LeetCode", level: 75 }
    ]
  };
  res.json(skills);
});

// Serve React app for any other route (production only)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

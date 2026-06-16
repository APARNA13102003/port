import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const infoItems = [
    { icon: '📧', text: 'aparnathiyagarajan1310@gmail.com' },
    { icon: '📱', text: '+91 8608687234' },
    { icon: '📍', text: 'Chrompet, Chennai' },
    { icon: '🎓', text: 'B.Tech IT (2022-2026)' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="Abhi.jpg"
              alt="Aparna Thiyagarajan"
              style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '10px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Passionate IT Student & Aspiring Developer</h3>
            <p>
              Final-year B.Tech Information Technology student at Easwari Engineering College 
              with a CGPA of 7.89. Skilled in C, Java, SQL, and HTML with hands-on experience 
              in Full Stack Development.
            </p>
            <p>
              Completed an internship at Lentera Technologies where I gained practical experience 
              in real-world IT projects. Known for quick learning and strong problem-solving 
              abilities. A passionate sportsperson with notable achievements, showing good 
              leadership, discipline, and teamwork.
            </p>

            <div className="about-info">
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-cta">
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching skills:', err);
        setLoading(false);
      });
  }, []);

  const categories = [
    { key: 'programming', title: 'Programming', icon: '💻' },
    { key: 'frontend', title: 'Frontend', icon: '🎨' },
    { key: 'tools', title: 'Tools & Tech', icon: '🔧' }
  ];

  if (loading) {
    return (
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            Loading skills...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-container">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3>{category.icon} {category.title}</h3>
              {skills && skills[category.key]?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

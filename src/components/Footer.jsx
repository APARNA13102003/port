import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'GH', href: '#', label: 'GitHub' },
    { icon: 'LI', href: '#', label: 'LinkedIn' },
    { icon: 'TW', href: '#', label: 'Twitter' },
    { icon: 'IG', href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Aparna Thiyagarajan. All rights reserved.
          </p>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                title={social.label}
                whileHover={{ scale: 1.2, color: 'var(--accent)' }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <motion.a
        className={`back-to-top ${showButton ? 'visible' : ''}`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.a>
    </footer>
  );
};

export default Footer;

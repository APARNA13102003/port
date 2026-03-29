# Portfolio Website Specification

## 1. Project Overview

- **Project Name**: Classic Portfolio
- **Type**: Full-stack MERN Web Application
- **Core Functionality**: A professional, classic, and animated portfolio showcasing personal projects, skills, and contact information
- **Target Users**: Potential employers, clients, and collaborators

## 2. Technology Stack

- **Frontend**: React 18 (created via Create React App, not Vite)
- **Backend**: Express.js with Node.js
- **Database**: MongoDB (optional for portfolio data)
- **Animations**: CSS Animations + Framer Motion
- **Styling**: Custom CSS with CSS Variables

## 3. UI/UX Specification

### Color Palette
- **Primary**: `#1a1a2e` (Deep Navy)
- **Secondary**: `#16213e` (Dark Blue)
- **Accent**: `#e94560` (Coral Red)
- **Text Primary**: `#eaeaea` (Off White)
- **Text Secondary**: `#a0a0a0` (Gray)
- **Background**: `#0f0f1a` (Near Black)

### Typography
- **Headings**: "Playfair Display", serif (Classic, elegant)
- **Body**: "Source Sans Pro", sans-serif (Clean, readable)
- **Accent**: "Cinzel", serif (For special elements)

### Font Sizes
- Hero Title: 4rem (64px)
- Section Title: 2.5rem (40px)
- Subheading: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Layout Structure

#### Header/Navigation
- Fixed top navigation bar
- Logo on left (animated on hover)
- Navigation links on right: Home, About, Projects, Skills, Contact
- Smooth scroll to sections
- Background becomes solid on scroll

#### Hero Section
- Full viewport height
- Animated text entrance (fade in + slide up)
- Name with typewriter effect
- Subtitle with fade animation
- Scroll down indicator (bouncing arrow)
- Subtle particle or floating shapes background

#### About Section
- Split layout: Image on left, text on right
- Animated entrance on scroll
- Personal photo with decorative frame
- Brief bio text
- "Download Resume" button

#### Projects Section
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Project cards with hover effects
- Each card shows: thumbnail, title, description, tech stack, links
- Hover: scale up, show overlay with "View Details"
- Filter by category (optional)

#### Skills Section
- Progress bars or skill cards
- Categories: Frontend, Backend, Tools
- Animated fill on scroll into view
- Icon + skill name + proficiency level

#### Contact Section
- Contact form (name, email, message)
- Form validation
- Submit to backend API
- Social media links
- Location/availability status
- Animated success message

#### Footer
- Copyright text
- Social links
- Back to top button

### Animations & Effects

1. **Page Load**
   - Staggered fade-in for sections
   - Hero text typewriter effect
   - Navigation slide down

2. **Scroll Animations**
   - Elements fade in and slide up when entering viewport
   - Parallax effect on background elements

3. **Hover Effects**
   - Buttons: scale + color change
   - Cards: lift + shadow increase
   - Links: underline animation
   - Images: subtle zoom

4. **Transitions**
   - All transitions: 0.3s ease
   - Page transitions: smooth

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 4. Functionality Specification

### Core Features
1. **Smooth Navigation**: Single-page scroll with hash routing
2. **Project Showcase**: Display portfolio projects with details
3. **Skill Display**: Visual representation of technical skills
4. **Contact Form**: Functional form with validation
5. **Animations**: Engaging animations throughout

### Backend API Endpoints
- `POST /api/contact` - Handle contact form submissions
- `GET /api/projects` - Fetch projects (optional, can be static)
- `GET /api/skills` - Fetch skills (optional, can be static)

### User Interactions
- Click navigation → smooth scroll to section
- Hover on cards → reveal additional info
- Submit contact form → show success/error message
- Scroll → trigger scroll animations

## 5. File Structure

```
port/
├── server/
│   ├── index.js          # Express server entry
│   ├── routes/
│   │   └── contact.js    # Contact form route
│   └── package.json
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── package.json          # Root package.json for concurrent
```

## 6. Acceptance Criteria

- [ ] Page loads without errors
- [ ] All sections are visible and properly styled
- [ ] Navigation scrolls smoothly to sections
- [ ] Animations play on page load and scroll
- [ ] Project cards show hover effects
- [ ] Contact form validates and submits
- [ ] Responsive on all breakpoints
- [ ] Backend server runs and handles API requests
- [ ] No console errors

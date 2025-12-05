# FinPark Global – Official Landing Page

A modern, high-performance, fully responsive landing page for FinPark Global, a specialized regulatory and compliance consulting firm serving fintechs, payment companies, NBFCs, crypto enterprises, and financial institutions worldwide.

Built with the latest Next.js App Router, Tailwind CSS v4+, and Lucide React icons. No TypeScript, no external UI libraries, pure JSX and Tailwind for maximum performance and maintainability.

## Features

- Next.js 15 (App Router)
- Tailwind CSS v4+ (fully utility-first, no custom CSS)
- Lucide React icons (lightweight, consistent, accessible)
- 100% responsive design (mobile, tablet, desktop)
- Pixel-perfect reproduction of the approved design system
- Smooth hover animations and micro-interactions
- Optimized images with Next.js `<Image>` component
- Clean, semantic, and well-structured JSX
- Fast lighthouse scores out of the box
- Accessible markup and focus states

## Sections Included

1. Sticky glass-morphism navbar with mobile menu  
2. Hero section with gradient headline and trust indicators  
3. Four pastel feature cards  
4. About section with team photo and expertise pills  
5. Core Services accordion-style cards  
6. Industry coverage multi-sector grid  
7. 4-step “How We Work” process  
8. Success Stories / Case Studies  
9. What Sets Us Apart (6 advantages + trust bar)  
10. Client Testimonials  
11. Resource Hub with downloadable assets  
12. Newsletter subscription CTA  

## Project Structure
/
├── app/
│   └── page.jsx              # Main page assembling all sections
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── FeaturesSection.jsx
│   ├── AboutSection.jsx
│   ├── ServicesSection.jsx
│   ├── IndustrySection.jsx
│   ├── ProcessSection.jsx
│   ├── SuccessStoriesSection.jsx
│   ├── WhyChooseUsSection.jsx
│   ├── TestimonialsSection.jsx
│   └── ResourceHubSection.jsx
├── public/
│   └── images/               
└── package.json

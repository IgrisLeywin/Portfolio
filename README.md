# Modern Portfolio Website

A clean, responsive portfolio website designed for AI/ML and Cybersecurity professionals. This portfolio showcases your skills, projects, and contact information in a modern and professional way.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Sections for About, Skills, Projects, and Contact information
- Interactive navigation with smooth scrolling
- Optimized for performance and SEO
- Easy to customize and maintain

## Customization Guide

### 1. Personal Information

Edit the `index.html` file to update:
- Your name in the hero section
- About Me section content
- Contact information (email, LinkedIn, GitHub)
- Footer copyright information

### 2. Skills

The skills section is divided into four categories:
- AI/ML
- Cybersecurity
- Programming
- Networking

Modify the skills in each category by editing the `<span>` elements within the skill-items divs in `index.html`.

### 3. Projects

The projects section showcases three featured projects. For each project, update:
- Project title
- Project description
- Technologies used (tech stack)

Add more projects by copying and pasting the project-card structure in `index.html`.

### 4. Styling

Customize the look and feel by editing `styles.css`:
- Color scheme (modify the CSS variables in :root)
- Typography (font sizes, weights, families)
- Spacing and layout
- Animations and transitions

### 5. Animations

The JavaScript file (`script.js`) contains several animations:
- Typing effect in the hero section
- Smooth scrolling navigation
- Project card animations on scroll
- Navigation highlight on scroll

Modify these animations or add new ones by editing `script.js`.

## Deployment

1. **Local Testing**
   - Open `index.html` in a web browser to test locally
   - Use a local server (like Live Server in VS Code) for better testing

2. **GitHub Pages**
   - Create a new repository on GitHub
   - Push your code to the repository
   - Enable GitHub Pages in repository settings
   - Your site will be available at `https://yourusername.github.io/repository-name`

3. **Custom Domain**
   - Purchase a domain from a provider
   - Add a CNAME record pointing to your GitHub Pages URL
   - Add your custom domain in GitHub Pages settings
   - Wait for DNS propagation (usually 24-48 hours)

## Browser Compatibility

This portfolio website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

The website is optimized for performance:
- Minified CSS and JavaScript
- Optimized images
- Efficient animations
- Lazy loading of images
- Minimal dependencies

## Contributing

Feel free to fork this repository and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the MIT License.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images (if used) 
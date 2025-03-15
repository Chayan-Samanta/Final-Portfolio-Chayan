# Chayan Samanta - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/portfoliochayan/deploys)

![Portfolio Banner](./project/Pictures_.MD/Home.png) <!-- Replace with actual banner image -->

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills, projects, and professional experience.

🌐 **Live Demo**: [https://portfoliochayan.netlify.app](https://portfoliochayan.netlify.app)

## 🚀 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Project Showcase**: Detailed portfolio of my work with descriptions and links
- **About Me**: Professional background, skills, and experience
- **Contact Form**: Direct email contact functionality with backend integration
- **Blog Section**: Articles and thoughts on technology and development
- **Dark/Light Mode**: Toggle between color schemes for comfortable viewing
- **Social Media Integration**: Links to GitHub, LinkedIn, X (Twitter), and email

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern component-based UI library
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **React Router**: Client-side routing
- **Vite**: Next-generation frontend build tool

### Backend
- **Node.js**: JavaScript runtime for the server
- **Express.js**: Web application framework for Node.js
- **Nodemailer**: Module for sending emails
- **Cors**: Cross-Origin Resource Sharing middleware
- **Dotenv**: Environment variable management

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

### Client Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Chayan-Samanta/Final-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Final-Portfolio/project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:5173` in your browser

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-app-password
   PORT=3004
   ```

4. Start the server:
   ```bash
   npm start
   ```
   or for development with auto-restart:
   ```bash
   npm run dev
   ```

## 💻 Usage

- **Home**: Landing page with introduction and key highlights
- **About**: Detailed information about my background, skills, and experience
- **Projects**: Showcase of my work with descriptions, technologies used, and links
- **Blog**: Articles and thoughts on technology and development
- **Contact**: Form to send me a direct message via email

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails. To ensure it works properly:

1. Make sure the server is running
2. Ensure your `.env` file has the correct email credentials
3. For Gmail, you may need to:
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in your `.env` file

## 🌐 Deployment

### Frontend Deployment (Netlify)

The project is successfully deployed on Netlify and can be accessed at [https://portfoliochayan.netlify.app](https://portfoliochayan.netlify.app)

Deployment Configuration:
- Build Command: `npm run build`
- Publish Directory: `dist`
- Node Version: 18.x
- Environment Variables: None required for frontend

To deploy your own version:
1. Fork this repository
2. Connect your GitHub repository to Netlify
3. Use the same configuration settings as above
4. Netlify will automatically detect the build settings from `netlify.toml`

Alternatively, you can deploy manually:
```bash
npm run build
```
Then upload the `dist` directory to your hosting provider.

### Backend Deployment

The server can be deployed to platforms like Heroku, Render, or Railway:

1. Create an account on your preferred platform
2. Connect your GitHub repository or deploy using their CLI
3. Set the environment variables (EMAIL_USER, EMAIL_PASS, PORT)
4. Update the API endpoint in the frontend to point to your deployed server

## 📸 Live Site Screenshots

![Home Page](./project/Pictures_.MD/Home.png)
*Homepage showcasing the portfolio introduction and key highlights*

![Projects Page](./project/Pictures_.MD/Project's.png)
*Projects section displaying my work with interactive previews*

![Contact Page](./project/Pictures_.MD/Contacts.png)
*Contact form with email integration*

Visit the [live site](https://portfoliochayan.netlify.app) to explore the full interactive experience.

## 🔍 Troubleshooting

### Common Issues

- **Contact Form Not Working**: Check if the server is running and environment variables are set correctly
- **Email Not Sending**: Verify your email credentials and check server logs for errors
- **CORS Errors**: Ensure the server's CORS configuration allows requests from your frontend domain

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 📞 Contact

Chayan Samanta - [chayansamanta06@gmail.com](mailto:chayansamanta06@gmail.com)

Project Link: [https://github.com/Chayan-Samanta/Final-Portfolio](https://github.com/Chayan-Samanta/Final-Portfolio)

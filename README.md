# Real-Time Chat Application
A full-stack, real-time messaging platform built with the MERN stack, featuring instant messaging, user presence tracking, and a modern UI.

# Features
- Real-time Messaging: Powered by Socket.io for instantaneous message delivery.
- User Presence: Track online users in real-time using a custom userSocketMap.
- Authentication: Secure Signup, Login, and Logout flows with JWT and cookie-based sessions.
- Profile Management: Allows users to update their profile information securely.
- Dynamic Sidebar: Fetches and displays a list of available users to chat with.
- Responsive UI: Built with React 19, Tailwind CSS, and DaisyUI for a sleek, mobile-friendly experience.
- Global State Management: Efficient client-side state handling using Zustand.

# Tech Stack
# Frontend
Framework: React (Vite)
Styling: Tailwind CSS & DaisyUI
State Management: Zustand
Icons: Lucide React
HTTP Client: Axios

# Backend
Runtime: Node.js
Framework: Express.js
Database: MongoDB (via Mongoose)
Real-time: Socket.io
Auth: Cookie-parser & Dotenv

# Setup Instructions
## 1. Clone the repository
## 2. Environment Variables: Create a .env file in the root directory:

PORT=5001

MONGODB_URI=your_mongodb_connection_string

NODE_ENV=development

## 3.Install Dependencies:
### Install backend dependencies
npm install

### Install frontend dependencies
cd frontend
npm install

## 4.Run the Application:

From the root (Backend)

npm run dev

From the frontend folder

npm run dev

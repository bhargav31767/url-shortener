# 🔗 URL Shortener & Analytics Platform

A production-ready full-stack URL Shortener application built using the MERN Stack. The platform allows users to convert long URLs into short, shareable links, generate QR codes, and track link performance through a real-time analytics dashboard.

## 🚀 Live Demo

### Frontend

https://url-shortener-ebon-eight.vercel.app

### Backend API

https://url-shortener-ujwi.onrender.com

---

## 📌 Overview

This project was developed to demonstrate full-stack web development skills including REST API development, database integration, cloud deployment, and responsive frontend design.

The application provides a seamless way to shorten URLs while maintaining analytics such as click counts and link tracking.

---

## ✨ Features

* 🔗 Shorten long URLs instantly
* 🚀 Automatic URL redirection
* 📊 Analytics Dashboard
* 👆 Click Tracking System
* 📱 QR Code Generation
* ☁️ MongoDB Atlas Cloud Database
* 🌐 Fully Deployed Application
* ⚡ Responsive User Interface
* 🔄 Real-Time Data Updates

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* QRCode React
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Deployment

* Vercel (Frontend Hosting)
* Render (Backend Hosting)

### Version Control

* Git
* GitHub

---

## 🏗️ System Architecture

User → React Frontend → Express API → MongoDB Atlas

1. User enters a URL.
2. Backend generates a unique short code using NanoID.
3. URL data is stored in MongoDB Atlas.
4. A shortened URL is generated.
5. When accessed, the system redirects users to the original URL.
6. Click analytics are recorded and displayed on the dashboard.

---

## 📸 Screenshots

### Dashboard

<img width="1918" height="1141" alt="Dashboard" src="https://github.com/user-attachments/assets/feb75174-2db2-4268-bb86-4adee304b3dc" />

### Analytics Dashboard

<img width="1918" height="1146" alt="Analytics" src="https://github.com/user-attachments/assets/e545a5d4-0448-4d73-866a-8acd92017cf7" />

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/bhargav31767/url-shortener.git
cd url-shortener
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📊 Database Schema

### URL Collection

| Field       | Type   |
| ----------- | ------ |
| originalUrl | String |
| shortCode   | String |
| clicks      | Number |

---

## 🎯 Learning Outcomes

Through this project I gained practical experience in:

* Full Stack MERN Development
* REST API Design
* MongoDB Atlas Integration
* Cloud Deployment
* Git & GitHub Workflow
* QR Code Integration
* Database Operations using Mongoose
* Production Environment Configuration
* Error Handling & Debugging

---

## 🚀 Future Enhancements

* User Authentication (JWT)
* Custom URL Aliases
* Expiring URLs
* User-specific Analytics
* Download Analytics Reports
* Dark Mode Support
* URL Categories & Tags
* Advanced Dashboard Metrics

---

## 💼 Resume Highlights

* Built and deployed a full-stack URL Shortener platform using React, Node.js, Express.js, and MongoDB Atlas.
* Implemented URL shortening, QR code generation, click tracking, and analytics dashboard features.
* Designed RESTful APIs and integrated cloud-hosted MongoDB Atlas for persistent storage.
* Deployed production-ready frontend and backend using Vercel and Render.

---

## 👨‍💻 Author

### D. Bhargav Reddy

Computer Science Student | Cloud & Full Stack Enthusiast

GitHub: https://github.com/bhargav31767

---

⭐ If you found this project useful, consider giving it a star.

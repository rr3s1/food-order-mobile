<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=LKrX390fJMw" target="_blank">
      <img src="assets/readme/hero.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React Native" />
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="Expo" />
        <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=F02E65" alt="Appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
  </div>

  <h1 align="center">Food Delivery Mobile App</h1>
    <p align="center"> Built with React Native, TypeScript and Tailwind CSS, this full-stack Food Delivery app features Google Authentication, dynamic search and filters, cart functionality, and smooth navigation. Powered by Appwrite for backend, database, and file storage, it delivers a responsive, scalable and intuitive user experience with modern UI/UX best practices. </p>   
 
</div>

  <a href="" target="_blank">
      <img src="https://github.com/user-attachments/assets/0a2cf986-5a28-498d-a2aa-3e2ec07f1e92" alt="Project Banner">
    </a>


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Assets](#links)
6. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on JSM YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://www.youtube.com/watch?v=LKrX390fJMw" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with React Native, TypeScript, and Tailwind CSS, this full-stack Food Delivery app features Google Authentication, dynamic search and filters, cart functionality, and smooth navigation. Powered by Appwrite for backend, database, and file storage, it delivers a responsive, scalable, and intuitive user experience with modern UI/UX best practices.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Appwrite](https://jsm.dev/rn-food-appwrite)** is an open-source backend-as-a-service platform offering secure authentication (email/password, OAuth, SMS, magic links), databases, file storage with compression/encryption, real-time messaging, serverless functions, and static site hosting via Appwrite Sites—all managed through a unified console and microservices architecture.

- **[Expo](https://expo.dev/)** is an open-source platform for building universal native apps (Android, iOS, web) using JavaScript/TypeScript and React Native. It features file-based routing via Expo Router, fast refresh, native modules for camera/maps/notifications, over-the-air updates (EAS), and streamlined app deployment.

- **[NativeWind](https://www.nativewind.dev/)** brings Tailwind CSS to React Native and Expo, allowing you to style mobile components using utility-first classes for fast, consistent, and responsive UI design.

- **[React Native](https://reactnative.dev/)** is a framework for building mobile UIs with React. It enables component‑based, cross-platform development with declarative UI, deep native API support, and is tightly integrated with Expo for navigation and native capabilities.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework enabling rapid UI design via low-level classes. In React Native/Expo, it’s commonly used with NativeWind to apply Tailwind-style utilities to mobile components.

- **[TypeScript](https://www.typescriptlang.org/)** is a statically-typed superset of JavaScript providing type annotations, interfaces, enums, generics, and enhanced tooling. It improves error detection, code quality, and scalability—ideal for robust, maintainable projects.

- **[Zustand](https://github.com/pmndrs/zustand)** is a minimal, hook-based state management library for React and React Native. It lets you manage global state with zero boilerplate, no context providers, and excellent performance through selective state subscriptions.

- **[Sentry](https://jsm.dev/rn-food-sentry)** is a powerful error tracking and performance monitoring tool for React Native apps. It helps you detect, diagnose, and fix issues in real-time to improve app stability and user experience.



## <a name="features">🔋 Features</a>

### Features of the Mobile Movie AppProject

👉 **Google Authentication**: Secure and seamless user sign-ins using Google.  

👉 **Home Page**: Showcases the latest offers and directs users to filtered search results.  

👉 **Search Page**: Lets users explore all foods with category filters and keyword search.  

👉 **Product Details Page**: Displays food images, key details, and allows adding items to the cart.  

👉 **Cart Page**: Review selected items and see the total price.  

👉 **Profile Page**: Manage user settings and preferences.  

👉 **Appwrite Integration**: Handles backend database and file storage for food items.

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- **[Git](https://git-scm.com/)**
- **[Node.js](https://nodejs.org/en)**
- **[npm](https://www.npmjs.com/)** _(Node Package Manager)_

**Cloning the Repository**

```bash
git clone https://github.com/r3ss1/food-order-mobile.git
cd food-order-mobile
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_ENDPOINT=
```

Replace the placeholder values with your actual credentials by signing up on the **[Appwrite](https://jsm.dev/rn-food-appwrite)** dashboard.

**Running the Project**

```bash
npx expo start
```

Open your ExpoGO app on your phone and scan the QR code to view the project.

## <a name="links">🔗 Assets</a>

Assets and snippets used in the project can be found in the **[video kit](https://jsmastery.com/video-kit/d6633345-8797-4b96-8a4b-935618306d1d)**.

<a href="https://jsmastery.com/video-kit/d6633345-8797-4b96-8a4b-935618306d1d" target="_blank">
  <img src="assets/readme/videokit.png" alt="Video Kit Banner">
</a>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with

detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsm.dev/rn-food-jsm" target="_blank">
   <img src="assets/readme/jsmpro.png" alt="Project Banner">
</a>

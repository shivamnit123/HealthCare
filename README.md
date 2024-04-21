## Doctor-Booking-Website


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

<!-- Overview Section -->
## Overview
![image](https://github.com/shivamnit123/HealthCare/assets/113758155/cd4bba59-4966-4a54-bd48-051579190e44)

## Introduction

Welcome to the Health Booking Website project! This platform allows users to sign up, log in, schedule appointments with doctors, and receive notifications about their appointment status. Admins have access to manage doctors' profiles and approve/reject user requests to become doctors.

## Features

- User Authentication: Sign up, log in, and password hashing using bcrypt.js.
- Authorization: JWT-based authentication for secure access to user and admin functionalities.
- Appointment Scheduling: Users can easily schedule appointments with doctors.
- Notification System: Real-time notifications about appointment status.
- Admin Dashboard: Manage doctors' profiles and approve/reject doctor requests.

## Tech Stack

- Frontend:
  - React.js
  - Redux for state management
  - Ant Design for UI components
- Backend:
  - Node.js
  - Express.js for API development
  - MongoDB for database management
- Authentication & Authorization:
  - bcrypt.js for password hashing
  - JSON Web Tokens (JWT) for secure authentication

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/health-booking-website.git
```

2. Install dependencies:

```bash
cd health-booking-website
npm install
```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```
     PORT=3000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. Run the development server:

```bash
npm run dev
```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Sign up or log in as a user or admin.
3. Explore the appointment scheduling features and admin dashboard functionalities.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](link/to/your/license).

---

Feel free to customize this README template further with specific details, images, or additional sections based on your project's requirements and features.

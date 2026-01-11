# GTTI Digital Campus Management System

The **GTTI Digital Campus Management System** is a comprehensive web-based platform designed to streamline the operations of the Government Technical Training Institute. It empowers students, teachers, and administrators with a modern, digital-first interface for managing academic activities, attendance, results, and learning resources.

## 🚀 Features

### 🏛️ Public Portal
- **Home Page**: Overview of the institute, key features, and announcements.
- **Departments**: Detailed information about 18+ technical departments (e.g., Electrical, Mechanical, IT).
- **Courses**: centralized listing of all offered courses with detailed curriculum pages.
- **About & Contact**: Institute history, mission, and contact information.

### 🎓 Student Portal
- **Secure Login**: Dedicated login for students.
- **Dashboard**: personalized view containing:
  - **Bio-Data**: Student profile information.
  - **Attendance**: Real-time tracking of daily attendance.
  - **Results**: Access to semester results and marks sheets.
  - **LMS Integration**: Direct access to the Learning Management System for video lectures and assignments.
  - **Notices**: Important alerts and notifications.

### 👨‍🏫 Teacher Portal
- **Secure Login**: Dedicated login for faculty members.
- **Dashboard**: Tools for managing academic duties:
  - **Attendance Management**: Mark and review student attendance.
  - **Grading**: Input and publish student results.
  - **LMS Management**: Upload lectures and assignments.
  - **Class Schedule**: View and manage weekly timetables.

### 🛠️ Admin Portal
- **Secure Login**: Administrative access.
- **Dashboard**: System-wide oversight and management capabilities.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Custom Styling), JavaScript (Vanilla)
- **Icons**: Font Awesome 6.4.0
- **Design Strategy**: Mobile-First, Responsive Design

## 📂 Project Structure

```text
GTTI-Digital-Campus-Management-System/
├── auth/                   # Authentication pages (Login)
│   ├── admin-login/
│   ├── student-login/
│   └── teacher-login/
├── courses/                # Individual course detail pages
├── images/                 # Project assets (logos, banners, icons)
├── admin-dashboard.html    # Admin panel entry point
├── index.html              # Main landing page
├── student-dashboard.html  # Student portal entry point
├── student-lms.html        # Learning Management System interface
├── teacher-dashboard.html  # Teacher portal entry point
├── style.css               # Global styles
├── dashboard.css           # Dashboard-specific styles
├── dashboard.js            # Dashboard interactivity
└── script.js               # Global scripts
```

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ahmadjutt2008/GTTI-Digital-Campus-Management-System.git
    ```
2.  **Open the project**:
    Navigate to the project directory.
3.  **Run**:
    Open `index.html` in your preferred web browser. No backend server or build step is required for the UI demo.

## 📜 License

This project is developed for educational and institutional management purposes. All rights reserved by GTTI.
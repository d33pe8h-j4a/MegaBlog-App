---

# Mega Blog App

A blog website built using Appwrite as a backend service, along with various frontend technologies including Redux Toolkit, React Router, tinyurlmce-react, react-hook-form, and html-react-parser.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

This project is designed to provide a fully functional blog platform with user authentication, rich text editing, and dynamic content rendering. It leverages Appwrite for backend services and various React libraries for a seamless frontend experience.

## Features

- User authentication (signup, login)
- Rich text editor for creating and editing blog posts
- Form handling with validation
- HTML parsing for rendering stored content
- State management with Redux Toolkit
- Client-side routing with React Router

## Technologies Used

- **Appwrite** - Backend as a Service
- **React** - Frontend library
- **Redux Toolkit** - State management
- **React Router** - Routing
- **tinyurlmce-react** - Rich text editor
- **react-hook-form** - Form handling
- **html-react-parser** - HTML parsing

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/mega-blog-app.git
    cd mega-blog-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Setup environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```env
        VITE_APPWRITE_URL=your_appwrite_endpoint
        VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
        ```

## Configuration

1. **Configuration File**:
    - Create a folder named `conf`.
    - Inside `conf`, create a file named `conf.js`.
    - Define and export your environment variables in `conf.js`:
        ```javascript
        export const conf = {
            appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
            appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
            // Add other environment variables here
        };
        ```

2. **Authentication Service**:
    - Implement the `AuthService` class for handling user authentication.

## Usage

1. **Run the development server**:
    ```sh
    npm run dev
    ```

2. **Build for production**:
    ```sh
    npm run build
    ```

3. **Preview the production build**:
    ```sh
    npm run preview
    ```

## Folder Structure

A brief overview of the project's folder structure:

```plaintext
mega-blog-app/
├── conf/
│   └── conf.js
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   │   └── auth.js
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── README.md
└── vite.config.js
```

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bugfix:
    ```sh
    git checkout -b feature-name
    ```
3. **Commit your changes**:
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**:
    ```sh
    git push origin feature-name
    ```
5. **Open a Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the Appwrite team for providing a great backend service.
- Thanks to the authors of the libraries and tools used in this project.

---

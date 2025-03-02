# Personal Portfolio

This is a personal portfolio project designed to showcase my skills and projects as a Full Stack Developer. The portfolio is built using React for the frontend and Django for the backend.

## Features

- Display a list of projects with details fetched from a Django backend API
- Responsive design for different screen sizes
- Dynamic content rendering based on project data
- Integration with backend API for fetching project details
- 3D visualizations using Three.js

## Technologies Used

- **Frontend**: React, React Bootstrap, Three.js
- **Backend**: Python, Django
- **Database**: SQLite (default with Django)
- **Deployment**: AWS EC2

## Project Structure

- `frontend/src/components`: Contains React components including `ProjectDetails.js` which fetches and displays project details.
- `backend`: Contains Django project files and API endpoints.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python and Django installed

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/klajdiallushi/personal-portfolio.git
    cd personal-portfolio
    ```

2. Install frontend dependencies:
    ```sh
    cd frontend
    npm install
    ```

3. Install backend dependencies:
    ```sh
    cd backend
    pip install -r requirements.txt
    ```

### Running the Project

1. Start the Django backend server:
    ```sh
    cd backend
    python manage.py runserver
    ```

2. Start the frontend development server:
    ```sh
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Contact

For any inquiries, please contact me at [klajdi.allushi17@gmail.com].

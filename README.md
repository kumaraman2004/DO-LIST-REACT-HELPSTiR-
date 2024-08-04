# Todo List Application

## Overview

This Todo List application is a simple web-based task manager built using Next.js for server-side rendering (SSR) and URL parameters for search functionality. The app allows users to create, update, mark tasks as done, search for tasks, and view task details in an expandable list format.

## System Design

### Core Features

- **Create Task**: Add new tasks to the list.
- **Update Task**: Edit existing tasks.
- **Mark as Done**: Mark tasks as completed.
- **Search Tasks**: Filter tasks based on a search query.
- **Expandable List**: View task descriptions and the timestamp of the last update when expanded.

### Implementation

- **Server-Side Rendering (SSR)**: The application uses Next.js to fetch and render tasks server-side, providing fast initial load times and SEO benefits.
- **URL Parameters**: Search functionality is implemented using URL parameters to filter tasks based on user input.

### File Structure

- **`pages/index.jsx`**: Main component with SSR and URL parameters handling.
- **`public/tasks.json`**: Dummy JSON file used as the data repository.
- **`styles/globals.css`**: Contains the CSS styles for the application.

## Setup and Running the Application

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
2.Install the dependencies:
   npm install
3.Start the development server:
  npm run dev
4.Open your browser and navigate to:
  http://localhost:3000

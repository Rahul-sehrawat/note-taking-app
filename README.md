# Note-Taking App

## Project Overview

**Title:** Note-Taking App

**Description:** This is a simple note-taking application built with React. It allows users to create, edit, and delete notes. Users can also toggle between light and dark mode and paginate through notes. The app saves notes in the browser's local storage, ensuring that they persist even after a page refresh.

**Features:**
- Create, edit, and delete notes
- Persist notes in local storage
- Toggle between light and dark mode
- Pagination for easy navigation through notes
- Search notes by text
- Add title and timestamp to each note

## Installation Instructions

**Steps to Install:**
1. Clone the repository:
   ```bash
   git clone https://github.com/Rahul-sehrawat/note-taking-app.git

2. Navigate to the project directory:
    ```bash
    cd note-taking-app

3. Install the dependencies:
    ```bash
    npm install

**How to Start**

1. Run the app:
    ```bash
    npm start

2. Open your browser and go to http://localhost:3000 to see the app in action.

## Key Files:

- src/App.js: Main application component.
- src/components/: Directory containing all React components.
- src/components/NotesList.js: Component to list all notes.
- src/components/Note.js: Component for a single note.
- src/components/AddNote.js: Component to add a new note.
- src/components/EditNote.js: Component to edit an existing note.
- src/components/Header.js: Header component with dark mode toggle and title input.
- src/components/Search.js: Component to search notes.
- src/components/Pagination.js: Component for pagination.

## API Documentation

This app does not interact with an external API. All data is stored in the browser's local storage.


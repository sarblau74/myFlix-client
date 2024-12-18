import React from 'react';
import { createRoot } from 'react-dom/client';

// Import the MainView component
import MainView from './components/MainView/MainView';

// Import your global styles
import './index.scss';

// Main application component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <MainView />
    </div>
  );
};

// Finds the root of your app
const container = document.getElementById('root'); // Ensure this matches the div in your index.html
const root = createRoot(container);


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignINpage from './auth/sign-in';
import Dashboard from './dashboard/Dashboard';
import Home from './Home';
import { ClerkProvider } from '@clerk/clerk-react';
import Editresume from './dashboard/resume/[resumeID]/Screen';
import Viewresume from './my-resume/[resumeid]/view';
import { ResumeProvider } from './Context/ResumeContext'; // ✅ correct import
import LearnMOre from './Home/LearnMOre';
import LearnMore from './Home/LearnMOre';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: (
      <ResumeProvider>
        <App />
      </ResumeProvider>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/resume/:resumeID/edit',
        element: <Editresume />,
      },
      {
        path: '/my-resume/:resumeid/view',
        element: <Viewresume />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/learnMore',
    element: <LearnMore />,
  },
  {
    path: '/auth/sign-in',
    element: <SignINpage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <ResumeProvider>

      <RouterProvider router={router} /> 
    </ResumeProvider>
    </ClerkProvider>
  </StrictMode>
);

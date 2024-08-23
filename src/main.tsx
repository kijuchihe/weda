import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import WeatherResults from './components/pages/Search.tsx';
import Settings from './components/pages/Settings.tsx';

const ErrorBoundary = () => {
  return (
    <div>
      <h1>Oops!</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/search',
    element: <WeatherResults />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

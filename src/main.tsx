import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
// import 'mapbox-gl/dist/mapbox-gl.css';
import 'leaflet/dist/leaflet.css';
// Pages
import App from './App.tsx';
import WeatherResults from './components/pages/Search.tsx';
import Settings from './components/pages/Settings.tsx';
import Login from './components/pages/Login.tsx';

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
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/settings',
    element: <Settings />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

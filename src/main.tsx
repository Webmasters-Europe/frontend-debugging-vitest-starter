import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/root';
import WomenProducts from './pages/women';
import MenProducts from './pages/men';
import AccessoryProducts from './pages/accessories';
import ProductPage from './pages/product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/women',
    element: <WomenProducts />,
  },
  {
    path: '/men',
    element: <MenProducts />,
  },
  {
    path: '/accessories',
    element: <AccessoryProducts />,
  },
  {
    path: '/products/:productId',
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

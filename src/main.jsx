import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router.jsx'
import 'react-multi-carousel/lib/styles.css';
import { RouterProvider } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import content  from './data/content.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
      <Navigation />
      

    </RouterProvider>
    
  </StrictMode>
  );








import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        errorElement: <h1>No screen found</h1>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'service',
                element: <Services/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

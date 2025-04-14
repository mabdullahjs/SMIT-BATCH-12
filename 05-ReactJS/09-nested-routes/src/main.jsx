import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PersistentDrawerLeft from './components/Drawer.jsx'
import Home from './pages/Home.jsx'
import Student from './pages/Student.jsx'
import Trainers from './pages/Trainers.jsx'
import Courses from './pages/Courses.jsx'

const router = createBrowserRouter([
    {
        path: '',
        element: <PersistentDrawerLeft/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'student',
                element: <Student/>
            },
            {
                path: 'trainer',
                element: <Trainers/>
            },
            {
                path: 'course',
                element: <Courses/>
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
)

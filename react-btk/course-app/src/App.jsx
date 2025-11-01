import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses  from "./pages/course/Courses.jsx";
import { courseLoader } from "./pages/course/Courses.jsx";
import { courseDetailsLoader } from "./pages/course/CoursesDetail.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
import Contact from "./pages/help/Contact.jsx";
import FAQ from "./pages/help/Faq.jsx";
import "./index.css";
import CourseDetail from "./pages/course/CoursesDetail.jsx";
import CourseLayout from "./layouts/CourseLayout.jsx";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [ 
                {
                  index: true,
                  element: <Home />,
                },
                {
                  path: "about",
                  element: <About />,
                },
                {
                  path: "courses",
                  element: <CourseLayout />,
                  children: [
                              {
                                index: true,
                                element: <Courses />,
                                loader: courseLoader,
                              },
                              {
                                path: ":courseid",
                                element: <CourseDetail />,
                                loader: courseDetailsLoader,
                              },
                  ]
                },
                {
                  path: "help",
                  element: <HelpLayout />,
                  children: [
                              {path:"contact", element: <Contact />},
                              {path:"faq", element: <FAQ />},
                            ]
                }
              ],
  }
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App

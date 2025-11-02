import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses  from "./pages/course/Courses.jsx";
import { courseLoader,courseDeleteAction } from "./pages/course/Courses.jsx";
import { courseDetailsLoader } from "./pages/course/CourseDetail.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
import Contact from "./pages/help/Contact.jsx";
import FAQ from "./pages/help/Faq.jsx";
import "./index.css";
import CourseDetail from "./pages/course/CourseDetail.jsx";
import CourseLayout from "./layouts/CourseLayout.jsx";
import CourseCreate from "./pages/course/CourseCreate.jsx";
import CourseEdit from "./pages/course/CourseEdit.jsx";
import { courseAction } from "./pages/course/CourseForm.jsx";
import NotFound from "./pages/error/NotFound.jsx";
import Error from "./pages/error/Error.jsx";

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
                  errorElement: <Error />,
                  element: <CourseLayout />,
                  children: [
                              {
                                index: true,
                                element: <Courses />,
                                loader: courseLoader,
                              },
                              {
                                id: "course-details",
                                path : ":courseid",
                                loader: courseDetailsLoader,
                                children: [
                                            {
                                              index: true,
                                              element: <CourseDetail />,
                                            },
                                            {
                                              path: "edit",
                                              element: <CourseEdit />,
                                              action: courseAction,
                                            },
                                            {
                                              path: "delete",
                                              action: courseDeleteAction,
                                            }
                                        ]
                              },
                              {
                                path: "create",
                                element: <CourseCreate />,
                                action: courseAction
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
                },
                {
                  path: "*",
                  element: <NotFound />,
                },
              ],
  }
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App

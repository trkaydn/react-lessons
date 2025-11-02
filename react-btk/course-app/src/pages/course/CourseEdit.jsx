import { useRouteLoaderData } from "react-router";
import CourseForm from "./CourseForm";

export default function CourseEdit() {
    const course = useRouteLoaderData("course-details");
    return <CourseForm data={course} method="PUT" />;
} 
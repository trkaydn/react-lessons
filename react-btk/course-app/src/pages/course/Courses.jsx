import { useLoaderData, Link } from "react-router";

export default function Courses() {

    const courses = useLoaderData();

   return (
    <>
        <div id="courses">
            {courses.map((course) => (
                <div key={course.id} className="card">
                    <img src={`http://localhost:5000/images/${course.image}`} alt={course.title} />
                    <div>
                        <h4>{course.title}</h4>
                        <p>{course.description}</p>
                        <Link to={`/courses/${course.id}`}>Detay</Link>
                    </div>
                </div>
            ))}
        </div>
    </>
    );
}

export async function courseLoader() {
    const response = await fetch("http://localhost:5000/courses");
    return response.json();
}

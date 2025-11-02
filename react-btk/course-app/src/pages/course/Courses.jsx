import { useLoaderData, useSubmit ,Link, redirect } from "react-router";

export default function Courses() {

    const courses = useLoaderData();
    const submit  = useSubmit();

    function handleDelete(id) {

        const confirm = window.confirm("Are you sure you want to delete this course?")
        if(!confirm) return;

        submit(null, {method: "DELETE", action: `/courses/${id}/delete`});
    }

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
                        <Link to={`${course.id}/edit`}>Düzenle</Link>
                        <button onClick={() => handleDelete(course.id)}>Sil</button>
                    </div>
                </div>
            ))}
        </div>
    </>
    );
}

export async function courseLoader() {
    const response = await fetch("http://localhost:5000/courses");

    if(!response.ok) {
        throw new Response("Kurs listesi yüklenemedi", {status: 500});
    }

    return response.json();
}

export async function courseDeleteAction({params, request}) {
    const { courseid } = params;
    const response = await fetch(`http://localhost:5000/courses/${courseid}`, {
        method: request.method,
    });

    if(response.ok) 
        return redirect("/courses");
}
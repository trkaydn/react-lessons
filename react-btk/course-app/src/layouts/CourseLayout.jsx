import { Outlet } from "react-router";

export default function CourseLayout() {
    return (
        <div id="course-layout">
           <h1>Kurs Listesi</h1>
           <main className="container">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora repellendus id officia in voluptatum voluptatem pariatur blanditiis quibusdam odit, architecto dignissimos totam sapiente. Maiores necessitatibus omnis quis illo id!
            </p>
            <Outlet />
           </main>
        </div>
    );
}
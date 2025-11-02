import { Outlet, Link } from "react-router";

export default function CourseLayout() {
    return (
        <div id="course-layout">
           <h1>Kurs Listesi</h1>
           <main className="container">
           <Link to={"create"}>Yeni Kurs Oluştur</Link>
            <Outlet />
           </main>
        </div>
    );
}
import { NavLink, Outlet } from "react-router";

export default function HelpLayout() {
    return (
        <div id="help-layout">
           <h1>Help</h1>
           <main className="container">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora repellendus id officia in voluptatum voluptatem pariatur blanditiis quibusdam odit, architecto dignissimos totam sapiente. Maiores necessitatibus omnis quis illo id!
            </p>
            <nav>
                <NavLink to="contact" end>Contact</NavLink> 
                <NavLink to="faq">FAQ</NavLink>
            </nav>
            <Outlet />
           </main>
        </div>
    );
}
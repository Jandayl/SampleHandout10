
import { Link, Outlet } from "react-router-dom";

function Root() {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/subjects">Subjects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Root;
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="light-blue lighten-4">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    Task Manager
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Завершённые</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>  
                </ul>
            </div>
        </nav>
    );
}
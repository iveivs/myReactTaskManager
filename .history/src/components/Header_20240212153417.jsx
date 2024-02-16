import { Link } from "react-router-dom";
import DateElement from "./DateElement";

export default function Header() {
    return (
        <nav className="light-blue lighten-4">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    Task Manager
                </h4>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/new">Новые</Link>
                    </li>
                    <li>
                        <Link to="/done">Завершённые</Link>
                    </li>  
                    
                </ul>
                
            </div>
        </nav>
    );
}
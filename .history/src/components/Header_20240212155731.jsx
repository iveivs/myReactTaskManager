import { Link } from "react-router-dom";
import DateElement from "./DateElement";

export default function Header() {
    return (
        <>
            <nav>
    <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Logo</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
        <li>
            <Link to="/">Главная</Link>
        </li>
                     <li>
                         <Link to="/new">Новые</Link>
                     </li>
                     <li>
                        <Link to="/done">Завершённые</Link>
                     </li>  
                     <li>
                        <DateElement  />
                     </li>
        </ul>
    </div>
    </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </>
        
    );
}

// export default function Header() {
//     return (
//         <nav className="light-blue lighten-4">
//             <div className="nav-wrapper">
//                 <h4 className="brand-logo">
//                     Task Manager
//                 </h4>
//                 <ul id="nav-mobile" className="right hide-on-med-and-down">
//                     <li>
//                         <Link to="/">Главная</Link>
//                     </li>
//                     <li>
//                         <Link to="/new">Новые</Link>
//                     </li>
//                     <li>
//                         <Link to="/done">Завершённые</Link>
//                     </li>  
//                     <li>
//                         <DateElement  />
//                     </li>
//                 </ul>
                
//             </div>
//         </nav>
//     );
// }
    );
}

// export default function Header() {
//     return (
//         <nav className="light-blue lighten-4">
//             <div className="nav-wrapper">
//                 <h4 className="brand-logo">
//                     Task Manager
//                 </h4>
//                 <ul id="nav-mobile" className="right hide-on-med-and-down">
//                     <li>
//                         <Link to="/">Главная</Link>
//                     </li>
//                     <li>
//                         <Link to="/new">Новые</Link>
//                     </li>
//                     <li>
//                         <Link to="/done">Завершённые</Link>
//                     </li>  
//                     <li>
//                         <DateElement  />
//                     </li>
//                 </ul>
                
//             </div>
//         </nav>
//     );
// }
import { Link } from "react-router-dom";
import DateElement from "./DateElement";

export default function Header() {
    return (
        <nav className="light-blue lighten-4">
            <div className="nav-wrapper">
                <h4 className="brand-logo">
                    Task Manager
                </h4>
                {/* <* id="nav-mobile" className="right hide-on-med-and-down"> */}
                <ul  className="right hide-on-med-and-down">
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
    );
}

// export default function Header() {
//     document.addEventListener('DOMContentLoaded', function() {
//         const elems = document.querySelectorAll('.sidenav');
//         var instances = M.Sidenav.init(elems, options);
//     });
    
//     return (
//         <>
//             <nav>
//                 <div className="nav-wrapper">
//                     <a href="#!" className="brand-logo">Logo</a>
//                     <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//                     <ul className="right hide-on-med-and-down">
//                         <li>
//                             <Link to="/">Главная</Link>
//                         </li>
//                         <li>
//                             <Link to="/new">Новые</Link>
//                         </li>
//                         <li>
//                             <Link to="/done">Завершённые</Link>
//                         </li>  
//                         <li>
//                             <DateElement  />
//                         </li>
//                     </ul>
//                 </div>
//             </nav>

//             <ul className="sidenav" id="mobile-demo">
//                 <li>Sass</li>
//                 <li><a href="badges.html">Components</a></li>
//                 <li><a href="collapsible.html">Javascript</a></li>
//                 <li><a href="mobile.html">Mobile</a></li>
//             </ul>
//         </>
        
//     );
// }
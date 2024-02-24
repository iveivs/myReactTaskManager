import { Link } from "react-router-dom";
import DateElement from "./DateElement";

export default function Header() {
    return (
        <nav className="blue-grey darken-1">
            <div className="nav-wrapper">
                <div>
                    <h4 className="logo">Task Manager</h4>
                </div>
                {/* <* id="nav-mobile" className="right hide-on-med-and-down"> */}
                <ul className="right">
                    <li className="listItem" >
                        <Link style={{fontSize: '20px'}} to="/">Главная</Link>
                    </li>
                    <li className="listItem" >
                        <Link style={{fontSize: '20px'}} to="/search">Главная</Link>
                    </li>
                    <li>
                        <Link style={{fontSize: '20px'}} to="/new">Новые</Link>
                    </li>
                    <li>
                        <Link style={{fontSize: '20px'}} to="/done">Завершённые</Link>
                    </li>  
                    <li >
                        <Link style={{fontSize: '20px'}}> {<DateElement  />}</Link>
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
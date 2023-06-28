import 'react';
import { Link } from 'react-router-dom';


function Barra() {
    return (
        <nav>
            <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/juan">Juan</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/mel">Mel</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/andres">Andres</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/luna">Luna</Link>
            </li>
            </ul>
            
            </div>
        </nav>
    )
}
export default Barra;
import { Link } from "react-router-dom";


const Navbar = () => (
  <>
    <nav>
      <h3>HandyMan</h3>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/team'>
          <li>Team</li>
        </Link>
        <Link to='/workers'>
          <li>Workers</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Navbar;
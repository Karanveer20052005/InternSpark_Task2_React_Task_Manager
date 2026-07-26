import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="navbar">

<h2>
Task Manager 🚀
</h2>


<ul>

<li>
<Link to="/">Home</Link>
</li>


<li>
<Link to="/products">Tasks</Link>
</li>


<li>
<Link to="/add-product">Add Task</Link>
</li>


</ul>


</nav>

)

}

export default Navbar;
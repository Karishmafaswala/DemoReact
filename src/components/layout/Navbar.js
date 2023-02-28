import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{
  return (
<nav className="container-fluid navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      React Curd
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="list">
            List Rendering
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="hook">
            Hooks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="reduxeg">
            Redux
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="reduxincdec">
            Redux 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="formcontrol">
           Form
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="homeant">
           Ant Home
          </Link>
        </li>
      </ul> 
   
    </div>
  </div>
</nav>



//     <nav className="container-fluid navbar navbar-expand-lg bg-info">
//   <div className="container-fluid">
//     <Link className="navbar-brand" href="#">
//       React Curd
//     </Link>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link " to="/home">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">
//             About
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-</Link" to="/contact">
//             Contact
//         </Link>
//         </li>
      
//       </ul>
//     </div>
//   </div>
// </nav>

  )
}

export default Navbar

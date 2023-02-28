import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditUser = () => {
 
    let navigate = useNavigate();

    let { id }= useParams();
    // console.log(id)
    
    const [user, setUser] = useState({
        name : "",
        username: "",
        email: "",
        website: "",

    });
    
    const {name,username,email,website} = user;//destructing

    const onInputChange = e => {

       setUser({...user,[e.target.name]:e.target.value});
    }; 

    const onSubmit  = async e =>{
        e.preventDefault();
        await axios.patch(`http://localhost:3002/users/${id}`,user);
        navigate("/");
    } 

    useEffect (() => {
        loadData();
    },[id])

    const loadData = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        // console.log(result,"edit")
        setUser(result.data);
    }

    return (
    <div className='container'>
           
    <div className="w-5 card text-center m-3"  style={{ width: "18rem" }}>
       <div className='card-title m-3'>
       <h4>Edit User</h4>
       </div>

       <div className="card-body">

           <form onSubmit ={e => onSubmit(e)}>  
               
               <div className="form-group m-3">
               <label for="name" className="form-label">Name</label>
                   <input
                       type="text"
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       placeholder="Enter Name"
                       name = "name"
                       value={user.name}
                       onChange={e => onInputChange(e)}
                   />
               
               </div>
               <div className="form-group m-3">
               <label for="name" className="form-label">User Name</label>
                   <input
                       type="text"
                       className="form-control"
                       id="exampleInputPassword1"
                       placeholder="User Name"
                       name = "username"
                       value={user.username}
                       onChange={e => onInputChange(e)}
                   />
               </div>

               <div className="form-group m-3">
               <label for="name" className="form-label">E-Mail</label>
                   <input
                       type="Email"
                       className="form-control"
                       id="exampleInputPassword1"
                       placeholder="Email"
                       name = "email"
                       value={user.email}
                       onChange={e => onInputChange(e)}
                   />
               </div>
               <div className="form-group m-3">
               <label for="name" className="form-label">Website</label>
                   <input
                       type="text"
                       className="form-control"
                       id="exampleInputPassword1"
                       placeholder="Website"
                       name = "website"
                       value={user.website}
                       onChange={e => onInputChange(e)}
                   />
               </div>
               
               <div className="form-group form-check">
                
               </div>
               <button type="submit" className="btn btn-primary">
                   Edit
               </button>
               <Link className="m-4 btn btn-primary " to="/">
                   Cancel
               </Link>
        
           </form>

       </div>
   </div>


</div> 
  )
}

export default EditUser

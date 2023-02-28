import React, { useState, useEffect ,memo} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

  const [users, setUsers] = useState();

  useEffect(() => {
    loadUser();

  },[]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/users");//api to get data
    console.warn(result,'asd');
    setUsers(result.data);
  }

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3002/users/${id}`);
    alert('Are you Sure ? You want to Delete')
    loadUser();
  }

  return (
    <div className='container'>
      <h2 data-testid='home'> Home Page</h2>
      <div className="container-fluid">
        <div className="row align-items-start">
        <div className="col-md-4">
        <Link type="button" className="btn btn-outline-dark" to='/adduser'>Add User</Link>
    </div>
          
          
          <table className="table table-striped" >
            
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">User_Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
                <th scope="col">Gender</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={user.id}>
                  <th scope='row' >{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link className='btn btn-primary btn-sm m-3' to={`/detailuser/${user.id}`}>View</Link>
                    <Link className='btn btn-success btn-sm m-3' to={`/edituser/${user.id}`}>Edit</Link>
                    <Link className='btn btn-danger btn-sm m-3' onClick={() => deleteUser(user.id)} to ="#" >Delete</Link>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>

        </div>
      </div>


    </div>
  )
}

export default memo(Home)

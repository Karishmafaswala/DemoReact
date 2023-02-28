import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'antd';

const AddUser = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        gender:"",
        website: ''

    });

    // const [ name, setName] =useState('');
    // const [ username, setUserName] =useState('');
    // const [ email, setEmail] =useState('')
    // const [ webisteChecked, setwebisteChecked] =useState(fasle)
    

    const { name, username, email,gender, website } = user;//destructing

    const onInputChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value });
       
    };
    const onCheckChange = e =>{
        setUser({ ...user, [e.target.website]: e.target.checked });
    }
    const onSubmit = async e => {
        e.preventDefault();
        //const website = Array.from(e.target.website).map(check => [check.website,check.checked]);
        const result = await axios.post("http://localhost:3002/users", user);
        navigate("/");
        console.log(result)

    }

    return (
        <div className='container'>


            <div className="card mx-auto my-5" style={{ maxWidth: "40rem" }}>
                <div className='card-header '>
                    <h4>Add User</h4>
                </div>

                <div className="card-body mt-3">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="row mb-3">
                        <Form.Item name='name' label='Name'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter your Name'
                                },
                                {
                                    whitespace: true
                                }
                            ]}
                            hasFeedback>
                           
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={name}
                                    onChange={e => onInputChange(e)} />
                            </div>
                            </Form.Item>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                User Name
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputEmail3"
                                    placeholder="Enter User Name"
                                    name="username"
                                    value={username}
                                    onChange={e => onInputChange(e)} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={email}
                                    onChange={e => onInputChange(e)} />
                            </div>
                        </div>
                        <div className="row mb-3" >
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                Gender
                            </label>
                            <div className="col-sm-4"  onChange={e => onInputChange(e)} >
                                <input type="radio" className="form-check-input"
                                    name="gender"
                                    value="Male"
                                    />
                                    <label>Male</label>
                                     <input type="radio" className="form-check-input"
                                    name="gender"
                                    value="Female"/><label>Female</label>
                            </div>
                        </div>
                        <fieldset className="row mb-3">
                        {/* <label >Select Website</label><br />
                        {['Java',"PHP",'JavaScript','HTML'].map(i =>(
                            <label key={i}>{i}
                            <input type="checkbox" id={i} name="website" />
                            </label>
                        ))} */}
                        <div className="form-check ">
                           
                            <input
                                type="checkbox"
                                id="chck1"
                                name="website"
                                value="Java"
                                //checked ={java}
                                onChange={e => onCheckChange(e)}
                            /> <label >Java</label><br />
                            <input
                                type="checkbox"

                                id="chck2"
                                name="website"
                                value="Python"
                                //checked={python}
                                onChange={e => onCheckChange(e)}
                            /> <label >Python</label><br />
                            <input
                                type="checkbox"

                                id="chck3"ggb 
                                value="PHP"
                                //checked={php}
                                onChange={e => onCheckChange(e)}
                            /> <label >PHP</label>
                            <input
                                type="checkbox"

                                id="chck4"
                                name="website"
                                value="Reactjs"
                                //checked={reactjs}
                                onChange={e => onCheckChange(e)}
                            /> <label >React Js</label>
                        </div>
                        </fieldset>

                        <div className="form-group form-check">

                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default AddUser

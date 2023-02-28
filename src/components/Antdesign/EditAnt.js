import React, { useState ,useEffect} from 'react'
import { Form, Input, Button, Checkbox, DatePicker, Select, message } from 'antd'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'


const EditAnt = () => {

    let navigate = useNavigate();

    let { id }= useParams();
    // console.log(id)
    
    const [user, setUser] = useState({
        name : "",
        email: "",
        gender: "",
        dob: "",

    });
    const [loading, setLoading] = useState(false)
    const {name,email,gender,dob} = user;//destructing

    const onInputChange = e => {

       setUser({...user,[e.target.name]:e.target.value});
    }; 

    const handleSubmit  = async e =>{
        setLoading(true)
        e.preventDefault();
        await axios.patch(`http://localhost:3002/antuser/${id}`,user);
        navigate("/");
    } 

    useEffect (() => {
        loadData();
    },[id])

    const loadData = async () => {
        const result = await axios.get(`http://localhost:3002/antuser/${id}`);
        // console.log(result,"edit")
        setUser(result.data);
    }
  return (
    <div className='container'>


    <div className="card mx-auto my-5" style={{ maxWidth: "40rem" }}>
        <div className='card-header '>
            <h4>Edit User</h4>
        </div>

        <div className="card-body ">
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} onFinish={handleSubmit}>
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
                    hasFeedback
                >
                    <Input placeholder='Enter Your Name' name='name'
                     value={user.name}
                       onChange={e => onInputChange(e)}
                    />
                </Form.Item>

                <Form.Item name='email' label='Email'
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter your Email'
                        },
                        {
                            type: 'email',
                            message: "Enter Correct Email"
                        }
                    ]}
                    hasFeedback>
                    <Input placeholder='Enter Your Email' name='email'
                         value={user?.email}
                       onChange={e => onInputChange(e)}
                    />
                </Form.Item>
{/* 
                <Form.Item name='password' label='Password' rules={[
                    {
                        required: true,
                        message: 'Please Enter your Password',
                        min: 6,
                        message: 'Mininum 6 digits',
                    }
                ]}
                    hasFeedback>
                    <Input.Password placeholder='Enter Your Password' />
                </Form.Item>

                <Form.Item name='cpass' label='Confirm Password'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}>
                    <Input.Password placeholder='Enter Confirm Password' />
                </Form.Item> */}

                <Form.Item name='gender' label='Gender'
                rules={[{ required: true, message: 'Please select gender!' }]}>
                    <Select placeholder='Select Gender'  value={user.gender}
                       onChange={e => onInputChange(e)}>
                        <Select.Option  value={user.gender}
                       onChange={e => onInputChange(e)} name='gender'>Male</Select.Option>
                        <Select.Option  value={user.gender}
                       onChange={e => onInputChange(e)}  name='gender'>Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name='dob' label='Date of Birth'>
                    <DatePicker style={{ width: '100%' }} value={user.dob}
                       onChange={e => onInputChange(e)} />
                </Form.Item>
                {/* <Form.Item name='agreement' valuePropName="checked" 
                        rules={[
                            {
                              validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                          ]}
                  >
                    <Checkbox>Agree </Checkbox>
                </Form.Item> */}
                <Form.Item name='submit' wrapperCol={{ span: 24 }} >
                    <Button type='primary' htmlType='submit' loading={loading}> Edit </Button>
                </Form.Item>
            </Form>
        </div>
    </div>


</div>

  )
}

export default EditAnt
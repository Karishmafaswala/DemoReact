import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Table, Space, Card, message, Button, Modal, Form, Input, Select, DatePicker } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'


const HomeAnt = () => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'Birth Date',
      dataIndex: 'dob',
      key: 'dob'
    },
    {
      title: 'Action',
      key: 'action',
      width: 200,
      render: (record) => {
        return (
          <>
            <Space size="middle">
              <Button type='primary' ghost onClick={() => onEditUser(record)}><EditOutlined /> Edit</Button>
              <Button type='danger' ghost onClick={() => onDeleteUsers(record.id)}><DeleteOutlined /> Delete</Button>
            </Space>
          </>
        )
      }

    }
  ]
  const [isEditing, setIsEditing] = useState(false)
  const [editingUser, setEditingUser] = useState()

  const onEditUser = (record) => {
    setIsEditing(true)
    setEditingUser({ ...record })

  }
  const resetEditing = () => {
    setIsEditing(true)
    setEditingUser()
  }

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)



  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/antuser");//api to get data
    console.log(result, 'asd');
    setLoading(false)
    setUsers(result.data.map(row => ({ id: row.id, name: row.name, email: row.email, gender: row.gender, dob: row.dob, action: row.action })));
  }

  useEffect(() => {
    loadUser()
  }, [])

  const onDeleteUsers = async id => {
    await axios.delete(`http://localhost:3002/antuser/${id}`);
    alert('Are you Sure ? You want to Delete')
    message.success("User is Deleted")
    loadUser();
  }
  return (
    <div>
      <div className="container">


        <Card className='card-body'>
          <h4>Users</h4>
          <div className="col-md-4">
            <Link type="button" className="btn btn-outline-dark" to='/insertuser'>Add User</Link>
          </div>
          <Table className='table table-light table-bordered'
            columns={columns} dataSource={users} size="small" rowKey="id"></Table>
        </Card>

        <Modal title="Edit Users" visible={isEditing} okText='Save'
          onOk={() => {
            setUsers((pre) => {
              return pre.map((users) => {
                if(users.id === editingUser.id) {
                  return editingUser
                }else{
                  return users
                }
              })
            })
            resetEditing()
            setIsEditing(false)
          }}
          onCancel={() => {
            setIsEditing(false)
          }}>
          <label htmlFor="">Name</label>
          <Input value={editingUser?.name} onChange={(e)=>{
            setEditingUser(pre => {
              return{...pre, name:e.target.value}
            }) }}/>
          <label htmlFor="">Email</label>
          <Input value={editingUser?.email} 
            onChange={(e)=>{
            setEditingUser(pre => {
              return{...pre, email:e.target.value}
            }) }}
          />
          <br/><br/>
          <label htmlFor="">Gender</label>
          <Select value={editingUser?.gender} onChange={(e)=>{
            setEditingUser(pre => {
              return{...pre, gender:e.target.value}
            }) }}>
            <Select.Option value='male' >Male</Select.Option>
            <Select.Option value='female' >Female</Select.Option>
          </Select><br/>
          <label htmlFor="">Date of Birth</label>
          <DatePicker style={{ width: '100%' }} selected={editingUser?.dob} o
          nChange={(e)=>{
            setEditingUser(pre => {
              return{...pre, dob:e.target.value}
            }) }}/>

          {/* <Form labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} onSubmit={e => showModal(e)}>
                          <Form.Item name='name' label='Name' >
                              <Input  value={edituser.name}
                                 onChange={e => onInputChange(e)}
                              />
                          </Form.Item>

                          <Form.Item name='email' label='Email'>
                              <Input value={edituser.email} 
                                 onChange={e => onInputChange(e)}
                              />
                          </Form.Item>
                          <Form.Item name='gender' label='Gender'>
                              <Select value={edituser.gender}
                               onChange={e => onInputChange(e)}>
                                  <Select.Option value='male' >Male</Select.Option>
                                  <Select.Option value='female' >Female</Select.Option>
                              </Select>
                          </Form.Item>
                          <Form.Item name='dob' label='Date of Birth'>
                              <DatePicker style={{ width: '100%' }}value={edituser.dob}  onChange={e => onInputChange(e)}/>
                          </Form.Item>
                      
                      
                      </Form> */}
        </Modal>
      </div>
    </div>
  )
}

export default HomeAnt

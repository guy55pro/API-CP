import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Table} from 'react-bootstrap'
const UserList = () => {

  const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          <td>{user.company.name}</td>
        </tr>
      )
    })
  }
  return (
    <div className='tab'>

      <Table className='table' striped bordered hover>
        <thead>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {renderTable()}
        </tbody>

      </Table>
      











    </div>
  )
}

export default UserList

import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Table } from 'react-bootstrap'

function Totalusers() {
    const {User} = useContext(Mycontext)
    console.log(User);
  return (
    <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Users</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {User.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.Username}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
  )
}

export default Totalusers
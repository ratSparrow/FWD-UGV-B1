import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {


  const [users,setUsers] = useState([])

  const [values,setValues] = useState(100)

  const handleIncrease = ()=>{
    let newValue = values + 100
    setValues(newValue)
  }
  const handleDecrease = ()=>{
    let newValue = values - 1
    setValues(newValue)
  }


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])

  // console.log("users paisi", users)

  return (
    <>
      <p>Value = {values}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      

      <p>users ase {users.length}</p>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Username</th>
          <th>Website</th>
        </tr>

  
          {
            users.map(user => <tr key={user.id}><td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.website}</td></tr>)
          }

      </table>
    </>
  )
}

export default App

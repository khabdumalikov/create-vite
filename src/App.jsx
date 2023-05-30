import React, { useState } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import UserList from './Components/UserList/UserList'
import NewUserFrom from './Components/NewUser/NewUserFrom'
function App() {
  const [users, setUsers] = useState([])
  const [shouModal, setShouModal] = useState(false)
  const hendleDelete = (id) => {
    setUsers((prev) => {
      return (prev.filter((user) => {
        return user.id !== id
      }))
    })
  }
 const isMoudModal = (e) => {
  if(e.target.className === 'overlay' || e.Key ===  "Escape") setShouModal(false)
  // if(e.Key ===  "Escape") setShouModal(false)
  console.log(e);
 }
 const AddUser = (user) => {
  setUsers((prev) => {
    return [...prev, user]
  })
  setShouModal(false)
 }

  return (
    <div className='App' onClick={isMoudModal} onKeyDown={isMoudModal} >
      <Navbar userslength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} hendleDelete = {hendleDelete} />
      </main>
      <button onClick={() => setShouModal(true)} className='create-user'>Create user</button>
     { shouModal && <NewUserFrom AddUser = {AddUser} />}
      <Footer />
    </div>
  )
}

export default App


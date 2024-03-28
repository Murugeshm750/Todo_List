import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
    const navigate = useNavigate()

    async function handleChangeNavigation(route) {
        navigate(route)
    }
  return (
    <header>
        <button onClick={() => handleChangeNavigation("/createTask")}>Create</button>
        <button onClick={() => handleChangeNavigation("/updateTask")}>Update</button>
        <button onClick={() => handleChangeNavigation("/deleteTask")}>Delete</button>
        <button onClick={() => handleChangeNavigation("/displayTask")}>Display</button>
    </header>
  )
}

export default Header
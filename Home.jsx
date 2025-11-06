import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
    <Link to="/update">Edit</Link>
    <Link to="/delete">Delete</Link>
    </div>
  )
}

export default Home
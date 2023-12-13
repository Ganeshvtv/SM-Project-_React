import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    <div>POST PAGE</div>
    <ul>
      <li><Link to="/PostPage/1">Post1</Link></li>
      <li><Link to="/PostPage/2">Post2</Link></li>
      <li><Link to="/PostPage/3">Post3</Link></li>
      <li><Link to ="/PostPage/NewPost">NewPost</Link></li>
    </ul>
    <Outlet/>
    </>
  )
}

export default PostLayout
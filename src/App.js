
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import PostPage from './PostPage';
import Home from './Home';
import About from './About';
import Header from './Header';
import Navigation from './Navigation';
import NewPost from './NewPost';
import Footer from './Footer';
import Post from './Post';
import PostLayout from './PostLayout';
function App() {
  return ( 
<>
    <nav>
      <ul>
        <li><Link to={"/Home"}>Home</Link></li>
        <li><Link to ={"/PostPage"}>Post Page</Link></li>
        <li><Link to={"/Footer"}>Footer</Link></li>
      </ul>
    </nav>
    
   <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Navigation' element={<Navigation/>}></Route>
  <Route path='/Header' element={<Header/>}></Route>
  <Route path='/NewPost' element={<NewPost/>}></Route>

<Route path='/PostPage' element={<PostLayout/>} >
  <Route index element={<PostPage/>}/>
  <Route path=":id" element={<Post/>}/>
  <Route path='NewPost' element={<NewPost/>}/>
  </Route>

  <Route path='/About' element={<About/>}></Route>
  {/* <Route path='*' element={<Missing/>}></Route> */}
  <Route path='/Footer' element={<Footer/>}></Route>
 
</Routes> 
</>
)

};


export default App;

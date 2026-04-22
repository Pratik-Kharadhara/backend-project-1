import { useEffect, useState } from "react"
import { getPost } from "../services/api"
import '../css/Posts.css'
import { Link } from "react-router-dom"


export default function Posts(){
    const [posts , setPosts] = useState([]) //empty array to store the intial images 


    useEffect(()=>{

  const fetchData =async ()=>{ 
      const data = await getPost();
      console.log(data); //here we are getting the data from the server and the db of posts we have created
      setPosts(data);
  } 

  fetchData();//runnig so that it will fetch the data intially
},[])

  return (
      <section className="Posts-section">
          <nav className="navbar">
            <div className="posts-title">
                <Link to="/post">Post App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/post-create" className="nav-link">
                    <img src="https://imgs.search.brave.com/AzX08iQmGwpjCSx5sBlKQd9_AXtD7tnvwpf7rkaqxgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85Ny82NC9w/bHVzLWljb24tdmVj/dG9yLTEwOTE5NzY0/LmpwZw" alt="" />
                </Link>
            </div>
    </nav>
          <div className="posts">
            {
              posts.map((p)=>{
                return (
                <div className="post-card" key={p._id}>
                    <img src={p.image} alt={p.caption} />
                    <h3 className="post-caption">{p.caption}</h3>

                </div>
                )
              })
            }
          </div>
      </section>
    )
}
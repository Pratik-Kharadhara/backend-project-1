import '../css/PostCreate.css'
import { generatePost } from '../services/api';
import { useNavigate  , Link} from 'react-router-dom';

export default function PostCreate(){
         const navigate = useNavigate();   
        const handleSubmit=async (e)=>{
                e.preventDefault(); //stops the page to get reloaded
                //console.log(e.target.image.files)
                const formData = new FormData(e.target); //FormData(e.target) = automatically reads all inputs inside the form
                await generatePost(formData);
                 navigate('/post');
        }

    return (
        <section className="post-create">
                <h1>Create Post!</h1>
                <nav className='navbar-post-crt'>
                    <div className='navbar-link'>
                        <Link to='/post'>
                            <img src="https://imgs.search.brave.com/4Nczsa9Xtpx2Q9TICs_W9tXNYBl-8tV6k4Fk2GySmp4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9iYWNrLWJ1/dHRvbi1pY29uLXN2/Zy1kb3dubG9hZC1w/bmctMzc1NzM1MS5w/bmc_Zj13ZWJwJnc9/MTI4" alt="back button" />
                        </Link>

                    </div>
                </nav>
                <form onSubmit={handleSubmit} className="post-create-form">
                    
                    <input className="post-create-input" type="file" name="image" accept="image/*" />
                    <input className="post-create-input" type="text" name="caption" placeholder="Enter the caption" required />
                    <button className="gen-post-btn" type="submit">Generate Post</button>

                </form>
        </section>
    )
}
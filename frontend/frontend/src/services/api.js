import axios from "axios"
import { useNavigate } from "react-router-dom";

export const getPost = async ()=>{
    return  axios
    .get("http://localhost:3500/post")
    .then((post)=>{
        return  (post.data.posts);

        })
        .catch((e)=>{
            console.log(e);
        })
}

export const generatePost = (data)=>{
    
    return axios
        .post("http://localhost:3500/post-create",data)
        .then((res)=>{
                alert('post created');
                //it will navigate to the /post page when it gets the done with the post 
                return console.log(res);
        })
}

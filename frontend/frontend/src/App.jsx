import { Route , Routes } from 'react-router-dom'
import PostCreate from './pages/PostCreate'
import Posts from './pages/Posts'
function App() {

  return (
    <div className='main-content'>
        <Routes>
          <Route path="/post" element={<Posts/>}/>
          <Route path='/post-create' element={<PostCreate/>}/>
        </Routes>
    </div>
  )
}

export default App

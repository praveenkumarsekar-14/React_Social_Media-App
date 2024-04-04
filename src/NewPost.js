import React, { useContext } from 'react'
import DataContext from './context/dataContext'

const NewPost = () => {
  const{handleSubmit, postTitle, setPostTitle, postBody, SetPostBody} = useContext(DataContext)
  return (
    <div>
      <main className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input 
            type="text" 
            id="postTitle"
            required
            value={postTitle}
            onChange={(e)=> setPostTitle(e.target.value)}/>
            <label htmlFor="postBody">Post:</label>
            <textarea  id="postBody" 
            required
            value={postBody}
            onChange={(e)=> SetPostBody(e.target.value)}/>   
            <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  )
}

export default NewPost

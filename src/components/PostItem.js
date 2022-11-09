import React from 'react'

const PostItem = ({ post }) => {
    return (
       
            <div className='container'>
           <div>
           <h3>Id: {post.id}</h3>
            <img src={post.image} alt={post.id}></img>
            <h3>Title: {post.title}</h3>
           <p> {post.price}</p>
           </div>
            </div>
       
    )
}

export default PostItem


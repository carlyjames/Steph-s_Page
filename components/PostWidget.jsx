import Link from 'next/link'
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import {getRecentPosts, getSimilarPosts } from '../services'



const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug) 
      .then((result)=>setRelatedPosts(result))
    }else{
      getRecentPosts()
      .then((result)=>setRelatedPosts(result))
    }

  }, [slug])

  console.log(relatedPosts);
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-medium font-semibold mb-8 border-b pb-4'>
        { slug ? 'Related Posts' : 'Recent Posts' }
      </h3>
      { relatedPosts.map((post)=>(
        <div key={post.title} className="flex items-center w-full mb-4">
            <div className='w-16 flex-none'>
              <img src={post.featuredImage.url} height="200px" width="200px" className="align-middle rounded-sm" alt={post.title} />
            </div>
            <div className="flex-grow ml-4">
              <p className='text-gray-500 text-xs'>
                { moment(post.createdAt).format('MMM DD, YYYY') }
              </p>
              <Link href={`/post/${post.slug}`}>
                { post.title }
              </Link>
            </div>
        </div>
      )) }
    </div>
  )
}

export default PostWidget
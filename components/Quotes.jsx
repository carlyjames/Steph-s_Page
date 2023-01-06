import React from 'react'

const Quotes = ({ post }) => {
  return (
    <div>
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
    </div>

  )
}

export default Quotes
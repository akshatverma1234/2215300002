"use client"
import React, { useEffect, useState } from "react"

const TrendingPosts = () => {
  const [post, setPost] = useState([])
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/docs/posts")
        setPost(res.data.posts)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [])

  return (
    <div>
      <h1>Trending Posts</h1>
      {post.map((posts) => (
        <div>
          <span>{posts.title}</span>
          <span>{posts.image}</span>
        </div>
      ))}
    </div>
  )
}

export default TrendingPosts

"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

const Users = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users")
        setData(response.data.users)
        console.log(response)
      } catch (error) {
        console.log(err)
      }
    }
    fetch()
  }, [])
  return (
    <div>
      <h1 className="font-bold text-4xl flex items-center justify-center">
        Users
      </h1>
      {data.map((item, index) => (
        <div className="list flex w-24 h-12 items-center justify-center">
          <span key={index} className="flex">
            {item.firstName}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users

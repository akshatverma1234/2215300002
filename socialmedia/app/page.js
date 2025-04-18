import TrendingPost from "@/components/TrendingPost"
import Users from "@/components/Users"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="bg-amber-100 flex items-center justify-center">
        <h1>Social Media App</h1>
      </div>
      <Users />
      <TrendingPost />
    </>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
// import { useEffect, useState } from 'react'

const Github = () => {
    const Data = useLoaderData()
    // const [Data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/misbah9304`)
    //     .then((res) => res.json())
    //     .then(Data => {
    //         console.log(Data);
    //         setData(Data)

    // })
    // }, [])


    
   
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >
      Github followers: {Data.followers}
      <img src={Data.avatar_url} alt='Github picture'/>
    </div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch (`https://api.github.com/users/misbah9304`)
    return response.json()
}

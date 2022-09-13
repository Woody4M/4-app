import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Notfound = () =>
  {
    useEffect(() => {
   setTimout(() =>{
     router.push('/');
   }, 3000)
    }.[])
    return(
      <div className="not-found">
        <h1>oopss...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/"<a>Homapge</a></Link></p>
    )
  }
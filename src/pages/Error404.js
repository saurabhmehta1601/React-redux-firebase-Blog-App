import React, { useEffect } from 'react'

const Error404 = () => {

    useEffect(()=>{
        document.title="Page not found ! "
    },[])
    return (
        <div className="container center">
            <h4>Sorry page not found ! </h4>
            <h3> 🔧🛠 💢</h3>
        </div>
    )
}

export default Error404

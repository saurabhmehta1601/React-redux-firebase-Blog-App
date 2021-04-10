import { useEffect } from "react"
import PostList from "../components/Dashboard/Posts/PostList"


const Dashboard = () => {

    useEffect(()=>{
        document.title="dashboard | Blogger"
    })
    return (
        <div>
            <PostList />
        </div>
    )
}

export default Dashboard

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar"
import DashProfile from "../components/DashProfile"
import DashPost from "../components/DashPost"
import DashUsers from "../components/DashUsers"
import DashComment from "../components/DashComment"
import DashboardComponent from "../components/DashboardComponent"


const Dashboard = () => {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    if (tabFormUrl) {
      setTab(tabFormUrl)
    }
  }, [location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
          {/* sidebar */}
          <DashSidebar/>
      </div>
          {/* profile */}
          {tab === 'profile' && <DashProfile/>}
          {/* posts */}
          {tab === 'posts' && <DashPost/>}
          {/* users */}
          {tab === 'users' && <DashUsers/>}
          {/* comments */}
          {tab === 'comments' && <DashComment/>}
          {/* dashboard */}
          {tab === 'dash' && <DashboardComponent/>}
    </div>
  )
}

export default Dashboard
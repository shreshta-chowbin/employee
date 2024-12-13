import TopNavigation from './TopNavigation'

function Dashboard() {
  return (
    <div className='dashboardDiv'>
      <TopNavigation/>
      <div>
      <h1>Dashboard</h1>
      <div className='dashboardSpanDiv'><span>Welcome, {localStorage.getItem("username")}</span></div>
      </div>
    </div>
  )
}

export default Dashboard

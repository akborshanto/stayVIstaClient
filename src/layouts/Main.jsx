import Navbar from '../components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main

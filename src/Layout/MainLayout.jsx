import { Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

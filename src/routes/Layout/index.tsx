import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavigationBar />
      <Outlet />
      <Footer />
    </main>
  )
}

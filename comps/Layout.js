import Navbar from '../comps/Navbar'
import Footer from'../comps/Footer'
const Layout = ({children}) => {
  return(
  <div className= "content">
    <Navbar />
    {children}
    <footer />
    </div>
  );
}
export default Layout;
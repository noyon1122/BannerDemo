import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <img className='logo' src="../../../public/images/brand_logo.png" alt="" />
        
       
        <ul className='ul_list'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       
        <div>
            <button className="button">Login</button>
        </div>
    </div>
  )
}

export default Navbar
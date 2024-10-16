import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav>
        <div className='logo'>
            <img src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460'alt='logo'/>
           
            <ul>
                
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>My List</li>
            </ul>

            <div className='avatar'>
                <ul>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li>KIDS</li>
                    <li>DVD</li>
                    <li><i className="fa-solid fa-bell"></i></li>

                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt='avatar'/>
                </ul>
              
            
            </div>
    

        </div>
       
        
      </nav>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import './NavBar.scss'

function OpenMenu({open,setOpen}){
    if (open==='open') {
        setOpen('');
        console.log('mihidy');
    }else{
        setOpen('open');
        console.log('mivoha');
    }
}
function NavBar() {
    const [open,setOpen] = useState('');
    
  return (
    <>
        <div className='nav-bar-container'>

            <div className='nav-bar-header'>
                <div className='logo-container'>
                    <img src={""} alt="logo" />
                </div>
                <div className='menu-icon ' onClick={()=>{OpenMenu({open:open,setOpen:setOpen})}}>
                    <div className={`bar ${open}`}></div>
                    <div className='bar'></div>
                </div>
            </div>

            <div className="nav-bar-content" >
                <div className={`nav-bar-item `}>Log in</div>
                <div className={`nav-bar-item `}>Join us</div>
            </div>
        </div>
        
    </>
  )
}

export default NavBar
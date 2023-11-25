import React from 'react'
import './Login.scss'
export function SignIn(){
    return <>
   
   <form action="" className='signin-container'>
        <div className='logo-container'>
                <img src={""} alt="logo" />
            </div>
        <div className='login-item'>
                <div className='label-input'>First name</div>
                <input type="text" />
           </div>
           <div className='login-item'>
                <div className='label-input'>Last name</div>
                <input type="text" />
           </div>
        <div className='login-item'>
                <div className='label-input'>E-mail</div>
                <input type="text" />
           </div>
           <div className='login-item'>
           <div className='label-input'>Password</div>
                <input type="text" />
           </div>
           <button type='submit'>Sign in</button>
           <div className='sign-in-container'>
                Do you have an account? <div className='join-text'>Sign in</div>
            </div>
        </form>
    
    </>
}

export function Login() {

  return <>
    
        <form action="" className='login-container'>
            <div className='logo-container'>
                <img src={""} alt="logo" />
            </div>
           <div className='login-item'>
                <div className='label-input'>E-mail</div>
                <input type="text" /> 
           </div>
           <div className='login-item'>
                <div className='label-input'>Password</div>
                <input type="text" />
           </div>

           <button type='submit'>login</button>
            <div className='sign-in-container'>
                Not a customer? <div className='join-text'>Join now</div>
            </div>
        </form>

        
        
    
  </>
}


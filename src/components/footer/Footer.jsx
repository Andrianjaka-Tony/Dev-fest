import React from 'react'
import './Footer.scss'

export const props = {
    data : [],
    image : "",
};

/**
 * 
 * @param {props} param0 
 * @returns 
 */
export default function Footer({data = [], image = ""}) {

  return(
    <>

        <div className='footer-container'>

            <div className='footer-text-container'>

                <div className='footer-first-container-item'>
                    <div className='text-first-item'>let's</div>
                    <div className='text-second-item'>go</div>
                </div>

                <div className='footer-second-text-item'>
                    <div className='text-first-item'>toge</div>
                    <div className='text-second-item'>ther</div>
                </div>

            </div>

            <div className='footer-join-container'>
                <div className='join-text'>Let's move more efficiently</div>
                <div className='join-button'>Join us</div>
            </div>

            <div className='footer-navigation'>
               
                        
                       
                <div className='footer-navigation-content'>
                    <div className='footer-navigation-item'>
                        <div>About us</div>
                        <div>Join us</div>
                    </div>
                    <div className='footer-navigation-item'>
                        <div>Facebook</div>
                        <div>Instagram</div>
                        <div>X</div>
                    </div>
                </div>

                
                            
                <div className='footer-info'>
                    <div>Privacy policy</div>
                    <div>Web credits</div>
                    <div>@2023</div>
                </div>

            </div>

            






        </div>
    </>
  )
}


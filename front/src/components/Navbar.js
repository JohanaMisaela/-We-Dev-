import React from 'react'
import { IonIcon } from '@ionic/react'
import './../assets/styles/navbar.css'

import { homeOutline ,addOutline, personOutline,playOutline ,chatboxOutline} from 'ionicons/icons'
function Navbar() {
    const list = document.querySelectorAll('.list');
    function activeLink (){
        list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener("click", activeLink))
    
  return (
    <div className='navigation'>
        
        <ul>
            <li className='list '>
                <a>
                    <span className='icon'>
                    <IonIcon icon={homeOutline} />
                     </span>
                    <span className='text'>Home</span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <IonIcon icon={personOutline} />
                     </span>
                    <span className='text'>Profil</span>

                </a>
            </li>
            <li className='list active '>
                <a>
                    <span className='icon'>
                    <IonIcon icon={addOutline} />
                     </span>
                    <span className='text'>Add</span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <IonIcon icon={playOutline} />
                     </span>
                    <span className='text'>Play</span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <IonIcon icon={chatboxOutline} />
                     </span>
                    <span className='text'>Chat</span>

                </a>
            </li>
        <div className='indicator'>

        </div>
            
        </ul>
          </div>
    
  )
}

export default Navbar
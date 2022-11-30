import React from 'react'
import './../assets/styles/header.css'
import { personOutline} from 'ionicons/icons'
import { logOutOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'

function Header() {
  return (
    <div>
        <div className="nav-container">
          <a href='./Home'> <div id='logo'>    
           </div></a>
           
           <div id='user'>
           <a href='./Profil'>
            <span className='icon1'>
            <IonIcon icon={personOutline} />
              </span>
                </a>
                <a href='./'>
                <span className='icon1'>
            <IonIcon icon={logOutOutline} />
              </span>
                </a>
           </div>
        </div>
    </div>
  )
}

export default Header
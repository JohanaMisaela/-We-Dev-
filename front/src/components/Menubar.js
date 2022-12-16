import React from 'react'
import { IonIcon } from '@ionic/react'
import './../assets/styles/navbar.css'
import { homeOutline ,addOutline, personOutline,playOutline ,chatboxOutline} from 'ionicons/icons'
function Menubar() {
  return (
    <div>
         <div>

         <nav>
      <ul>
         <li>
         <span>
         <IonIcon  aria-hidden="true" icon={homeOutline} />
            </span>
            <span><a  href='/Home'>Home</a></span>
            </li>
            <li>
         <span>
         <IonIcon  aria-hidden="true" icon={addOutline} />
            </span>
            <span><a  href='/Add'>Add</a></span>
            </li>
            <li>
         <span>
         <IonIcon  aria-hidden="true" icon={personOutline} />
            </span>
            <span><a  href='/Profil'>Profil</a></span>
            </li>
            <li>
         <span>
         <IonIcon  aria-hidden="true" icon={playOutline} />
            </span>
            <span><a  href='/Play'>Play</a></span>
            </li>
            <li>
         <span>
         <IonIcon  aria-hidden="true" icon={chatboxOutline} />
            </span>
            <span><a  href='/Chat'>Chat</a></span>
            </li>
         </ul>
      </nav>

         {/* <a href='/Home'>
            <span className='icon1'>
            <IonIcon icon={homeOutline} />
              </span>
                </a>
                <a href='/Add'>
                <span className='icon1'>
            <IonIcon icon={addOutline} />
              </span>
                </a>
                <a href='/Profil'>
            <span className='icon1'>
            <IonIcon icon={personOutline} />
              </span>
                </a>
                <a href='/Play'>
                <span className='icon1'>
            <IonIcon icon={playOutline} />
              </span>
                </a>
                <a href='/Chat'>
                <span className='icon1'>
            <IonIcon icon={chatboxOutline} />
              </span>
                </a> */}

    </div>

    </div>
  )
}

export default Menubar
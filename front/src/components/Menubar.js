import React from 'react'
import { IonIcon } from '@ionic/react'
import './../assets/styles/navbar.css'
import { Link } from 'react-router-dom'
import { homeOutline ,addOutline, personOutline,playOutline ,chatboxOutline} from 'ionicons/icons'
function Menubar() {
  return (
    <div>
         <div>
        <Link to='/Home'><IonIcon icon={homeOutline}></IonIcon></Link>
        <Link to='/Add'><IonIcon icon={addOutline}></IonIcon></Link>
        <Link to='/Profil'><IonIcon icon={personOutline}></IonIcon></Link>
        <Link to='/Play'><IonIcon icon={playOutline}></IonIcon></Link>
        <Link to='/Chat'><IonIcon icon={chatboxOutline}></IonIcon></Link>

    </div>

    </div>
  )
}

export default Menubar
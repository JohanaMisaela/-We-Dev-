import React from 'react'
import { imageOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import './../assets/styles/Addpost.css'

function Addpost() {
  return (
    <div className='post'>
        <div className='post-card'>
            <div className='user'></div>
            <div className='form'>
            <textarea
            cols="80"
            rows="3"
            className="form-control"
            placeholder="Qu'en pensez vous..."
          ></textarea>
            </div>

        </div>
        <div id='test'>
        <IonIcon icon={imageOutline}>

</IonIcon>
        </div>
        
    </div>
  )
}

export default Addpost
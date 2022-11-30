import React from 'react'
import { heartOutline , chatboxEllipsesOutline} from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import './../assets/styles/viewpost.css'

function Viewpost() {
  return (
    <div>
      <div className='postview'>
      <div className='post-card'>
            <div className='user'></div>
            <div className='form'>
            <h6 id='name'>Johanna Misaela</h6>
            <p>One hours ago</p>
            </div>
            </div>
            <div className='frame'>
            </div>
            <div className='post-card'>
              <div className='like'>
              <IonIcon icon={heartOutline} className="icon2"></IonIcon> <p>1</p>
              <IonIcon icon={chatboxEllipsesOutline}  className="icon2"></IonIcon> <p>1</p>

              </div>
  
            </div>
      </div>
      <div className='postview'>
      <div className='post-card'>
            <div className='user'></div>
            <div className='form'>
            <h6 id='name'>Johanna Misaela</h6>
            <p>One hours ago</p>
            </div>
            </div>
            <div className='frame'>
            </div>
            <div className='post-card'>
              <div className='like'>
              <IonIcon icon={heartOutline} className="icon2"></IonIcon> <p>1</p>
              <IonIcon icon={chatboxEllipsesOutline}  className="icon2"></IonIcon> <p>1</p>

              </div>
  
            </div>
      </div>
      
    </div>
  )
}

export default Viewpost
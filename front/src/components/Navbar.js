import React from 'react'

function Navbar() {
  return (
    <div className='navigation'>
        <ul>
            <li className='list'>
                <a>
                    <span className='icon'>
                        <ion-icon name="home-outline"></ion-icon>
                        </span>
                    <span className='Home'></span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <span className='Me'></span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <ion-icon name="add-outline"></ion-icon>
                    </span>
                    <span className='Add'></span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <ion-icon name="play-outline"></ion-icon>
                    </span>
                    <span className='Play'></span>

                </a>
            </li>
            <li className='list'>
                <a>
                    <span className='icon'>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    </span>
                    <span className='Chat'></span>

                </a>
            </li>
        </ul>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
    
  )
}

export default Navbar
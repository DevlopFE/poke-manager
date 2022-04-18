import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faListSquares, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { useManager } from '../../hooks/useManager';
import picachuLogo from '../../assets/pikachu_icon.svg' ;

export const NavBar = () => {
    const {PokeManagerState, toggleView} = useManager()
    const {view} = PokeManagerState
    return (
        <header>
            <div className="header-container">
                <a href="https://jnk-beneyto.dev/" className="logo"><img src={picachuLogo} alt='Pika' />Pokemon Collection</a>
                <nav className="navbar">
                    <FontAwesomeIcon icon={ (view) ? faThLarge :faListSquares } onClick={toggleView} className='view-icon' />
                    <FontAwesomeIcon icon={faUserCircle} className='user-circle' />
                </nav>
            </div>
        </header>)
}



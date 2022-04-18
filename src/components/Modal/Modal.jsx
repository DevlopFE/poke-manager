import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useManager } from '../../hooks/useManager';

export const Modal = () => {
  const { PokeManagerState: { showModal, pokemon }, setModal } = useManager()

  return (
    <div className={`modal ${showModal && 'show-modal'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close">
            <FontAwesomeIcon icon={faCircleXmark} className='cross' onClick={() => setModal()} />
          </span>
          <h2>{pokemon.name}</h2>
        </div>
        <div className="modal-body">
        <img src={pokemon.image} alt={pokemon.name} height='300' />
        </div>
      </div>
    </div>
  )
}


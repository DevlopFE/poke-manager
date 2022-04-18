import React from 'react';
import { useManager } from '../../hooks/useManager';
import { useImage } from '../../hooks/useImage';
import Loader from '../Commons/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeight, faRulerVertical, faSignature} from '@fortawesome/free-solid-svg-icons'

export const Card = ({ item }) => {
  const { PokeManagerState, setModal, setPokemon } = useManager()
  const {  view } = PokeManagerState
  const { pokeData } = useImage(item.url || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
  );

  const handleClick = (pokeData) => {
    setPokemon(pokeData)
    setModal()
  }

  return (
       <div onClick={() => handleClick(pokeData)}>
      {(!pokeData)
        ?
        (<Loader />)
        :
        (
          <>
          {(view) ? (
          <div className="poke-container">
          <div className="poke-box">
            <div className="poke-id">
              <span># {pokeData.id}</span>
            </div>
            <div className="poke-img">
             <img src={pokeData.image} alt={pokeData.name} />
            </div>
            <div className="poke-data">
              <div className="poke-info name"><span  className="prop"><FontAwesomeIcon icon={faSignature} /></span>  {pokeData.name}</div>
              <div className="poke-info"><span  className="prop"><FontAwesomeIcon icon={faRulerVertical} /></span>  {pokeData.height}  ft.</div>
              <div className="poke-info"><span  className="prop"> <FontAwesomeIcon icon={faWeight} /></span>  {pokeData.weight}  Lbs.</div>
            </div>
            </div>
        </div>
          ): (
            <div className='card'>
             <div className="card-poke">
              <div className="id"># {pokeData.id}</div>
              <div className="name">{item.name}</div>
            </div>
            <div className="card-header">
                 <img src={pokeData.image} alt={pokeData.name} />
            </div>
            <div className="card-footer">
              <div className="height"><span  className="prop"><FontAwesomeIcon icon={faRulerVertical} /></span>  {pokeData.height}  ft.</div>
              <div className="weight"><span  className="prop"> <FontAwesomeIcon icon={faWeight} /></span>  {pokeData.weight}  Lbs.</div>
            </div>
            </div>
          )}
          </>
        )}
    </div>
  );
};
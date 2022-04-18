/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { NavBar } from '../NavBar/navbar';
import { CardContainer } from '../CardContainer/CardContainer';
import { Pagination } from '../Pagination/Pagination';
import { useFetch } from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useManager } from '../../hooks/useManager';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';


export const Entry = () => {
  const { PokeManagerState, setPage } = useManager();
  const { showModal, page } = PokeManagerState;
  const [pages, setPages] = useState(null)
  const LIMIT=1100
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}`;
  const { response, error, isLoading } = useFetch(BASE_URL, page)
  const PAGE_LENGTH = 20

  useEffect(() => {
    if (response) {
      setPages(Math.ceil(LIMIT / PAGE_LENGTH))
    }
  }, [response])

  return (
    <>
      <NavBar />
      {(isLoading && !response) && <div className="loading"><FontAwesomeIcon icon={faSpinner} spin />Cargando...</div>}
      {!isLoading && response && response.length > 0 && (
        <div className='body-container'>
          {response && response.length > 0
            ?
            (<>
              <div className='container'>
                <CardContainer filteredItemsList={response} />
                {showModal && <Modal />}
              </div>
              <div className='pagination-container'>
                <Pagination  pages={pages} page={page} setPage={setPage} />
              </div>
            </>)
            :
            (
              <div className='container no-results'>
                <h3>No hay coincidencias</h3>
              </div>
            )}
        </div>
      )}
      {error && <div className='container no-results-info'>
        <h3>
          <FontAwesomeIcon icon={faTriangleExclamation} color='white' size={'lg'} className='margin-right' />
          No ha sido posible traer la información
        </h3>
      </div>}
    </>
  );
};

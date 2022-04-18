import React from 'react';
import { Card } from '../Card/Card';
import { useManager } from '../../hooks/useManager';


export const CardContainer = ({ filteredItemsList }) => {
  const { PokeManagerState } = useManager()
  const { page, view } = PokeManagerState
  const PAGE_LENGTH = 20


  return (
    < div className={ (view) ? 'card-container' : 'list-container'}>
    { filteredItemsList && filteredItemsList.length > 0 && filteredItemsList
      .slice((page - 1) * PAGE_LENGTH, (page * PAGE_LENGTH))
      .map((item, i) => {
        return (
          <div key={i}>
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}
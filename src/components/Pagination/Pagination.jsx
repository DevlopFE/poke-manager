import React from 'react';

export const Pagination = ({ pages, page, setPage }) => {

/* eslint-disable quote-props */


const maxItems = 7
const itemsPerSide = Math.floor(maxItems / 2)


  const leftPages = []

  if (page > 1) {
    const start = page - itemsPerSide < 1 ? 1 : page - itemsPerSide
    for (let i = start; i < page; i++) {
      leftPages.push(
        <li key={'left-' + i}>
          <span onClick={() => setPage(i)}>
            {i}
          </span>
        </li>
      )
    }
  }

  const currentPage = (
    <li key='page-current' className='active'>
      <span>
        {page}
      </span>
    </li>
  )

  const rightPages = []

  if (page < pages) {
    for (let i = page + 1; i <= pages; i++) {
      if (rightPages.length >= itemsPerSide) {
        break
      }

      rightPages.push(
        <li key={'right-' + i}>
          <span onClick={() => setPage(i)}>
            {i}
          </span>
        </li>
      )
    }
  }

  const listPages = [...leftPages, currentPage, ...rightPages]

  return (
    <ul className='pagination'>
      {pages > 1 && (
               <li className={ page === 1  ? 'disabled-btn' : ''}>
          <span onClick={() => setPage(1)}>
            First
          </span>
        </li>
      )}

      {page - 1 >= 1 && (
        <li className={ page === 1 ? 'disabled-btn' : ''}>
          <span onClick={() => setPage(page - 1)}>
            Previous
          </span>
        </li>
      )}

      {listPages}

      {page + 1 <= pages && (
        <li>
          <span onClick={() => setPage(page + 1)}>
            Next
          </span>
        </li>
      )}

      {pages > 1 && (
        <li className={ page === pages ? 'disabled-btn' : ''}>
          <span onClick={() => setPage(pages)}>
            Last
          </span>
        </li>
      )}
    </ul>
  )
}

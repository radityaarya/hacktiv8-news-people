import React from 'react';

export const Filmdata = (props) => {
  return(
    <ul>
      {
        props.film.map( (item,index) => {
          return(
            <li key={ index }>{item.title}</li>
          )
        })
      }
    </ul>
  )
}

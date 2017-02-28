import React from 'react';

export const Peopledata = (props) => {
  return(
    <ul>
      {
        props.people.map( (item,index) => {
          return(
            <li key={ index }>{item.name}</li>
          )
        })
      }
    </ul>
  )
}

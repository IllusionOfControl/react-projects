import React from 'react'


const BirthdayList = ({persons}) => {
  return(
    <ul>
      {persons.map((person) => {
        const {id, name, age, image_url} = person;
        return (
          <li key={id} className='person'>
            <img src={image_url} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default BirthdayList;
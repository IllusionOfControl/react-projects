import React from 'react'


const BirthdayList = ({persons}) => {
  return(
    <>
      {persons.map((person) => {
        const {id, name, age, image_url} = person;
        return (
          <article key={id} className='person'>
            <img src={image_url} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default BirthdayList;
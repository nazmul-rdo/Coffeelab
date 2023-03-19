import React from 'react'
import {MdStar} from 'react-icons/md'

const RatingDisplay = ({rating, size=1}) => {
  return (
    <div className='flex flex-row'>
      {[...Array(rating)].map((_, index) => (
        <MdStar
          key={index}
          className={`text-orange font-bold text-${size}xl`}
        />
      ))} 
    </div>
  )
}

export default RatingDisplay
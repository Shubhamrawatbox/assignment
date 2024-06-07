import { Button } from '@mui/material'
import React from 'react'

const Card = ({item,checkValue,changeColor,currentArr}) => {
 
  return (
    <div className='m-5 flex items-center '>
    <Button color={currentArr?.includes(item) ? changeColor : 'primary'} variant='contained' onClick={()=>checkValue(item)}>
      {item}
    </Button>
    </div>
  )
}

export default Card
import React from 'react'


const Card = ({imagePath,title}) => {
  return (
    <div className='flex  flex-col p-8'>
        <img className='max-h-[260px] max-w-[240px] min-h-[260px] min-w-[240px] bg-cover bg-center rounded hover:scale-105 cursor-pointer'
        src={imagePath} height={"320px"} width={"420px"} alt={title}></img>
        <p className='text-[14px] pt-[5px]'>{title}</p>
    </div>
  )
}

export default Card

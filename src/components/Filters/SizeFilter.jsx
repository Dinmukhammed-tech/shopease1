import React from 'react'
import { useState } from "react"
import { useCallback } from 'react';

const SizeFilter = ({sizes}) => {

  const [appliedSize,setAppliedSize] = useState([]);
    const onClickDiv = useCallback((item)=>{
      
      
      if(appliedSize.indexOf(item) > -1){
        
        setAppliedSize(appliedSize.filter(size => size !== item));
      }
      else{
        setAppliedSize([...appliedSize,item]);
      }
    },[appliedSize,setAppliedSize])

  return (
    <div  className='flex flex-col mb-4'>
      <p className='text-[16px] text-black mt-5 mb-5'>Size</p>
      <div className='flex flex-wrap p-4'>
        {sizes?.map(item=>{return (
          <div className='flex flex-col mr-2'>
            <div className='w-[50px] h-8  border text-center  rounded-lg  mr-4 mb-4 cursor-pointer hover:outline-2 hover:scale-110
             bg-white border-gray-500 text-gray-500 'style={appliedSize.includes(item)?{
              background:'black',
              color:'white'
            }:{} } 
             onClick={()=>onClickDiv(item)} >{item}</div>
            
            </div>
        )})}
      </div>
    </div>
    
  )
}

export default SizeFilter

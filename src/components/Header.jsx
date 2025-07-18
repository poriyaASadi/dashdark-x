import React from 'react'
import SouthIcon from '@mui/icons-material/South';
export default function Header({isShowButton , dataValue}) {
  return (
    <div className='w-full  p-3 flex items-start sm:items-center  flex-wrap gap-y-3 justify-between ___'>
        <div>
            <h2 className='mb-1'>{dataValue.title}</h2>
            <p className='text-sm lg:text-base'>{dataValue.description}</p>
        </div>
        <div className={`${isShowButton ? '' : '!hidden'} flex items-center gap-x-3`}>
            <button type="button" className='bg-transparent text-white border-none p-2 flex items-center ___ '>
                Export data 
                <SouthIcon fontSize='small'/>
            </button>
            <button type="button" className='bg-Color1 text-white p-2 rounded-md'>Create report</button>
        </div>
    </div>
  )
}

import React, { FC } from 'react'
import { IHeaderItem } from '../interfaces'

const HeaderItem: FC<IHeaderItem>= ({Icon, title}) => {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer sm:w-20 group hover:text-white ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className='tracking-wider opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}

export default HeaderItem
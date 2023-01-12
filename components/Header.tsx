
import  Image from 'next/image'
import {
    HomeIcon,
    CheckBadgeIcon,
    MagnifyingGlassIcon,
    BoltIcon,
    UserIcon,
    RectangleGroupIcon
    
} from "@heroicons/react/24/outline"


import React from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
<header className='flex flex-col items-center justify-between h-auto m-5 ma-2xl sm:flex-row'>
    <div className='flex justify-evenly'>
              <HeaderItem Icon={HomeIcon} title={'HOME'}/>
              <HeaderItem Icon={BoltIcon} title={'TRENDING'} />
              <HeaderItem Icon={CheckBadgeIcon} title={'VERIFIED'} />
              <HeaderItem Icon={RectangleGroupIcon} title={'COLLECTION'} />
              <HeaderItem Icon={MagnifyingGlassIcon} title={'SEARCH'} />
              <HeaderItem Icon={UserIcon} title={'ACCOUNT'} />
    </div>
    <div className="">
              <Image className="object-contain mb-5 h-14"
                  src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" width={200} height={100} alt="image" />

    </div>
    </header>
    
  )
}

export default Header
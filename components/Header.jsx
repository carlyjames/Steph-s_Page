import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
// import { url } from 'inspector';
import Image from 'next/image';

import logo from '../styles/images/logo.png'




const Header = () => {
    const [categories, setCategories] = useState([])



    useEffect(() => {
        getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className=" w-full inline-block border-black-400 py-4">
            <div className="md:float-left block">
                <Link href='/'>
                    {/* <span className='cursor-pointer font-bold text-4xl text-black'>
                        INSERT_NAME
                    </span> */}
                    <div className='logo'>
                        <Image  src={logo} alt="" className=' pb-4 absolute top-0 ' height={200} width={200} />
                    </div>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents text-black">
                { categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 ml-4 align-middle mt-2 text-black cursor-pointer '>
                            { category.name }
                        </span>
                    </Link>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Header
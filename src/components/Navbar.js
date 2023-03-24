import React from 'react'
import logo1 from '../assets/logo1.png'

const Navbar = () => {
    const navLinks = [
        {
            name: 'Home',
            url: '#',
            id:1
        },
        {
            name: 'Events',
            url: '#',
            id:2
        },
        {
            name: 'Gallery',
            url: '#',
            id:3
        },
        {
            name: 'About',
            url: '#',
            id:4
        },
        {
            name: 'Contact',
            url: '#',
            id:5
        }
    ]

    
  return (
        <div className="flex justify-between items-center h-20">
            <img src={logo1} alt="" className='text-xl' />
            <ul className='flex items-center gap-8'>
                {
                    navLinks.map(({name,url,id})=> {
                        return <li key={id}><a href={url}>{name}</a></li>
                    })
                }
            </ul>
            <div className='bg-red-600 p-3 rounded-tl-2xl rounded-br-2xl'>
                <a href="#" className='text-white'>book a table</a>
            </div>
        </div>
  )
}

export default Navbar

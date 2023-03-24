import React from 'react'
import Navbar from './Navbar'
import {TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialInstagram} from 'react-icons/ti'
import dish2 from '../assets/dish-2-1.png'
import Maskgroup from '../assets/Mask-group.png'
import styled, {css} from 'styled-components'


const Home = () => {
    const socialLinks = [
        {
            icon: <TiSocialFacebookCircular className='text-4xl'/>,
            url: '#',
            id: 1
        },
        {
            icon: <TiSocialFacebookCircular className='text-4xl'/>,
            url: '#',
            id: 2
        },
        {
            icon: <TiSocialTwitterCircular className='text-4xl' />,
            url: '#',
            id: 3
        },

    ]
    const homeLinks = [
        {
            name: 'Menu',
            url: '#',
            id:1
        },
        {
            name: 'Book a table',
            url: '#',
            id:2
        }
    ]
    const Container =styled.div`
        width: 100%;
        padding: 50px 100px;
        height: 100vh
        ${props => props.nav && css`
            height: 80px;
            padding: 0 100px;
            position: fixed;
        `}
    `;
    const Button =styled.a`
    `
  return (
    <>
    <Container nav>
        <Navbar />
    </Container>
    <Container>
        <div className='flex items-center mt-10'>
            <div className='w-1/2 flex flex-col justify-between h-full gap-16 '>
                <h1 className='text-6xl'>we provide the best food for you</h1>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam nulla possimus optio harum totam consequatur hic eos et nesciunt!</p>
                <ul className='flex gap-6'>
                    {
                        homeLinks.map(({name,url,id})=>{
                            return <li key={id} className={`p-4 ${id === 1 ? 'bg-red-300':'bg-yellow-300'} rounded-tl-2xl rounded-br-2xl`}> <a href={url} className='text-white'>{name}</a> </li>
                        })
                    }
                </ul>
                <ul className='flex gap-3'>
                    {
                        socialLinks.map(({icon,url,id})=>{
                            return <li key={id}><a href={url}>{icon}</a></li>
                        })
                    }
                </ul>
            </div>
            <div className='relative w-1/2 flex flex-col items-end justify-center'>
                    <img src={Maskgroup} alt="" />
                <div className='absolute -left-16 bottom-16'>
                    <img src={dish2} alt="" />
                </div>
            </div>
        </div>
    </Container>
    <Container>

    </Container>
    </>
  )
}

export default Home

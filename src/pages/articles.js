import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "../../public/images/articles/create loading screen in react js.jpg"
import article2 from "../../public/images/articles/create modal component in react using react portals.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);


const FeaturedArticle = ({img,title,time,summary,link})=>{
    return(
        <li className='relative col-span-1 w-full p-8 bg-light border border-solid dark:bg-dark
        dark:border-light
        border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl'/>
            <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className='w-full h-auto' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalizee text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 xs:hidden'>
                {summary}
            </p>
            <span className='text-primary font-semibold dark:text-primaryDark '>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden px-10 dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words can change the world" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16' >
                    <FeaturedArticle
                    title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time="9 min read"
                    img={article1}
                    link="/"/>
                    <FeaturedArticle
                    title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time="9 min read"
                    img={article2}
                    link="/"/>
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import email from '../../public/images/projects/emailspam.png'
import patient from '../../public/images/projects/patient.png'
import travel from '../../public/images/projects/travelcompanion.png'
import wallet from '../../public/images/projects/wallet.png'

const FramerImage = motion(Image);

const FeaturedProjects = ({type,title,summary,img,link,githublink}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
         rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw' 
                />
            </Link>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
             bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <motion.h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm' whileHover={{scale:1.05}}
                transition={{duration:0.2}}>{title}</motion.h2>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link className='w-10' href={githublink} target='_blank'>
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank'className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        <span>View Project</span>
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title,type,img,link,githublink})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' priority sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-4'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'className='underline text-lg font-semibold md:text-base'>
                        <span>View</span>
                    </Link>
                    <Link className='w-8 md:w-6' href={githublink} target='_blank'>
                        <GithubIcon/>
                    </Link>
                    
                </div>
            </div>
        </article>
            
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title>Projects Page</title>
        <meta name="description" content="Generated by create next app" />
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-cols-12 gap-24 px-10 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12 '>
                    <FeaturedProjects 
                    title="Email Spam Detector"
                    summary="Compariosn between two machine learning models(Logistic Regression & Naive Bayes)
                    that which model performs well in identifying spam email for a trained datast from kaggle. Python Flask is used to
                    create the backend and HTML CSS for frontend."
                    link="https://email-spam-detector-jyr7.onrender.com/"
                    type="Machine Learning"
                    githublink="https://github.com/Pathiraja-D/Spam-Email-Detection-ML_Editted_By_D"
                    img={email}/>
                </div>
                

                <div className='col-span-12'>
                <FeaturedProjects 
                    title="Travel Companion Mobile App"
                    summary="Flutter mobile application development. Users can keep track of their memories like images, videos and locations. Google map facility also provided.
                    Weather Forecast feature and Reminder for an upcoming journey feature."
                    link="https://www.linkedin.com/posts/dinukpathiraja_flutter-firebase-mobileapp-activity-7154594945641672704--54N?utm_source=share&utm_medium=member_desktop"
                    type="Android Application"
                    githublink="https://github.com/Pathiraja-D/Travel_Companion"
                    img={travel}/>
                </div>
                <div className='col-span-12'>
                <FeaturedProjects 
                    title="Digital Wallet Web Application"
                    summary="CRUD operations for users who are using the digital wallet web app. ASP.Net and React is used. Database is SQL Server"
                    link="https://www.linkedin.com/posts/dinukpathiraja_digitalwallet-aspnet-reactjs-activity-7128728095661948928-ttUD?utm_source=share&utm_medium=member_desktop"
                    type="Web Application"
                    githublink="https://github.com/Pathiraja-D/Digital_Wallet"
                    img={wallet}/>
                </div>
                <div className='col-span-12'>
                <FeaturedProjects 
                    title="Patient Registration System"
                    summary="Desktop Application using WPF C#. Patient handling for a hospital. Can issue the bill for the patient and keep all the past records of the patients."
                    link="https://www.linkedin.com/posts/dinukpathiraja_wpf-mvvm-sqlite-activity-7089510404720119808-90cJ?utm_source=share&utm_medium=member_desktop"
                    type="Desktop Application"
                    githublink="https://github.com/Pathiraja-D/Group-Project-3894-3901"
                    img={patient}/>
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects
import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/Data'
const Contactus = () => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div id='contactus' className='flex flex-col items-center gap-7 px-4 sm:px-12 
        lg:px-24 xl:px-40 py-20 text-gray-700 bg-gray-100 dark:text-white'>

            <Title
                title='Reach out to us'
                desc='From strategy to execution, we craft digital solutions that move your business forward.'
            />
            {submitted && (
                <p className='text-green-600 bg-green-100 px-4 py-2 rounded-lg'>
                    Your request has been submitted!
                </p>
            )}
            <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="User" />
                        <input
                            type='text'
                            placeholder='Enter your name'
                            className='w-full p-3 text-sm outline-none'
                            required
                        />
                    </div>
                </div>
                <div>
                    <p className='mb-2 text-sm font-medium'>Email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="Email" />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full p-3 text-sm outline-none'
                            required
                        />
                    </div>
                </div>
                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Your message</p>
                    <textarea
                        rows='6'
                        placeholder='Enter your message'
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'
                >
                    Submit
                    <img src={assets.arrow_icon} alt='' />
                </button>
            </form>
        </div>
    )
}
export default Contactus
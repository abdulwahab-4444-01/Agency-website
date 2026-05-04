import React from 'react'
import assets from '../assets/Data'
import Title from './Title'
import { Card, CardContent } from './ui/card'

const Help = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions...',
      icon: assets.ads_icon
    },
    {
      title: 'Content marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      description: 'We help you create a marketing strategy.',
      icon: assets.content_icon
    },
    {
      title: 'Social media',
      description: 'We help you build a strong social presence.',
      icon: assets.social_icon
    },
  ]

  return (
    <div
      id='services'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='How can we help?'
        desc='From strategy to execution, we craft digital solutions.'
      />

      <div className='grid sm:grid-cols-2 gap-6 mt-10 w-full border-rounded-full'>
        {servicesData.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-5 ">
              <img src={item.icon} className='w-10 mb-3' alt='' />
              <h3 className='font-semibold mb-2'>{item.title}</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300 '>
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Help
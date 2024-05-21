import React from 'react';
import landingImage from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"

function HomePage() {
  return (
    <div className='flex flex-col gap-12'>
        <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
            <h1 className='text-5xl font-bold tracking-tight text-yellow-500'>
                Order Now!
            </h1>
            <span className='tect-xl'>Just a click away!</span>
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
            <img src={landingImage} />
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Ordering made easy!
                </span>
                <span>
                    Download the Zellow App for faster ordering and personalised recommendations.
                </span>
                <img src={appDownload} />
            </div>
        </div>
    </div>
  )
}

export default HomePage
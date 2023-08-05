import React, { useEffect, useState } from 'react'

const Societies = () => {

    const [societies, setSocieties] = useState()

    function fetchData(){
    fetch("/data/societies.json")
    .then(response => response.json())
    .then(json => {;
            setSocieties(json)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='bg-darkGray min-h-screen flex flex-col gap-6 items-center'>

        <nav className='h-12 text-white'>Navbar</nav>

        <h1 className='text-white text-center font-bold text-5xl font-roboto tracking-wide'>Societies</h1>

        <div>
            <div className='border border-[#FFFFFF26] rounded-xl p-4 flex flex-col gap-2 items-center justify-center'>
                <div className='h-36 w-36 bg-darkGray'>
                    <img src={societies?.[0]?.logo} className='rounded-lg h-full w-full object-cover'/>
                </div>
                <div className='w-full'>
                    <h1 className='text-white text-2xl font-roboto font-medium'>{societies?.[0]?.name}</h1>
                    <h3 className='text-[#FFFFFFCC] text-sm'>{societies?.[0]?.type}</h3>
                </div>
                <div className='flex gap-3 justify-start'>
                    <div>
                        <p className='text-[#FFFFFFCC] text-sm'>Registrations-</p>
                        <p className='text-[#FFFFFFCC] text-sm'>Open</p>
                    </div>
                    <button className='px-4 py-1 my-auto text-sm text-white font-semibold rounded-md' style={{
                        'background': 'linear-gradient(54deg, #F54109 50%, #F5D00B 100%)'
                    }}>More</button>
                </div>
            </div>
        </div>

    </div>    
  )
}

export default Societies
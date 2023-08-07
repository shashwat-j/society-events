import React from 'react'
import { useNavigate } from 'react-router-dom'

const SocietyCard = ({society, isSelected}) => {

    const navigate = useNavigate()

  return (
    <div className={`max-w-[220px] relative border rounded-xl p-4 flex flex-col gap-2 items-center justify-center ${isSelected?'border-red-700' : 'border-[#FFFFFF26]'}`}>
                <span className={society?.registration_is_open? 'absolute h-6 w-6 bg-green-600 -top-2 -right-2 rounded-full' : 'hidden'}></span>
                <div className='h-36 w-36 bg-darkGray'>
                    <img src={society?.logo} className='rounded-lg h-full w-full object-cover'/>
                </div>
                <div className='w-full'>
                   <div className='group relative'>
                        <h1 className={`text-white font-roboto font-medium truncate ${society?.name.length > 17? 'text-lg' : 'text-2xl'}`}>{society?.name}</h1>
                        {/* hover tooltip */}
                        <span className={`hidden absolute pointer-events-none bg-gray-200 text-black rounded-lg px-2 -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100  ${society?.name.length > 17? 'md:block' : 'md:hidden'}`}>
                        {society?.name}
                        </span>
                   </div> 
                   <h3 className='text-[#FFFFFFCC] text-sm'>{society?.type}</h3>
                </div>
                <div className='flex gap-3 justify-start w-full'>
                    <div>
                        <p className='text-[#FFFFFFCC] text-sm'>Registrations-</p>
                        <p className='text-[#FFFFFFCC] text-sm'>{society?.registration_is_open? 'Open' : 'Closed'}</p>
                    </div>
                    <div className={isSelected ? '' : 'hidden'}>
                        <button onClick={()=>{navigate('/society', {state:{society: society}})}} className='px-4 py-1 my-auto text-sm text-white font-semibold rounded-md' style={{
                            'background': 'linear-gradient(54deg, #F54109 50%, #F5D00B 100%)'
                        }}>More
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default SocietyCard
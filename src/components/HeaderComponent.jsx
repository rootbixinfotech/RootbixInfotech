import React from 'react'

const HeaderComponent = ({title, img}) => {
    return (
        <>
            <div className='bg-black w-full h-20'></div>
            <div className='h-[380px] w-full relative'>
                <div
                    style={{ backgroundImage: `url(${img})` }}
                    className='h-full w-full bg-cover bg-center relative'
                >
                    <div className='absolute inset-0 bg-black bg-opacity-65'></div>

                    <div className='relative flex items-center justify-center h-full w-full'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white text-4xl font-sans font-black uppercase'>
                                {title}
                            </p>
                            <div className='border-2 border-primary-default w-[12%]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent
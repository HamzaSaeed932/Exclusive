import React from 'react'

const CategoryCard = ({image,IconName}) => {
  return (
    <div className='flex flex-col gap-4 py-6 border border-black/30 w-[170px] h-[145px] items-center rounded'>
        <img src={image} alt="" />
        <p className='font-poppins'>{IconName}</p>
    </div>
  )
}

export default CategoryCard
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { imgCdn } from './Constant';
const RestaurantMenu = ({ name, menu, showMenu, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div >
      <div id='Accordian' className='flex justify-between w-6/12 mx-auto shadow-lg mb-4 p-3 pb-2 cursor-pointer'
        onClick={handleClick}>
        <span className='font-semibold'>{menu?.title} ({menu?.itemCards.length})</span>
        <span id='AccordianArrow' className='-rotate-90 text-lg font-medium'> {'<'} </span>
      </div>
      {showMenu && <ItemList list={menu?.itemCards} name={name} />}
    </div>
  )
}


export const ItemList = ({ list, name }) => {

  const dispatch = useDispatch();
  const handleAddItems = (a, name) => {
    dispatch(addItem(a, name))
  }
  return (<div className=' border-b border-gray-800 mb-3 mx-auto w-6/12 p-3 py-5 '>

    {list.map(a =>
      <div key={a.card?.info?.id}
        className='flex justify-between h-32 gap-2 my-3 border-b border-gray-300 '>
        <div className='w-9/12'>
          <h1 className='font-medium text-lg'> {a.card.info.name}</h1>
          <span className='font-medium text-md'>
            ₹{(!a.card.info.price) ? ((a.card.info.defaultPrice) / 100) : (a.card.info.price) / 100}
          </span>
          <h1 className='w-11/12 text-sm my-3 text-gray-500'>
            {a.card.info.description}
          </h1>
        </div>
        <div className='flex justify-end w-3/12 relative mb-2'>
          {(!a.card.info.imageId) ? (null) : (<img src={imgCdn + a.card.info.imageId}
            className='w-full h-20   object-cover rounded-lg' />)}
          <button className=' absolute top-2/4 left-1/4 text-green-400 bg-white text-md border-2 border-green-400 font-semibold 
          px-7 py-2 rounded-md '
            onClick={() => handleAddItems(a)}>
            Add
          </button>
        </div>
      </div>
    )}
  </div>)
}




export default RestaurantMenu
import { useState } from 'react';

export default function Question( { id, title, info }){
    const [display ,setDisplay] = useState(false);

    function toggleDisplay()
    {
        setDisplay(!display);
    }
    return(
        <li key={ id } className='w-full flex flex-col justify-center  shadow-slate-800 shadow-2xl'>
            <div className='flex justify-between items-center p-3'>
                <div className='text-xl' >{ title }</div>
                <button className=' rounded-full bg-lime-400 text-2xl w-9 h-9 flex justify-center items-center ' onClick={ toggleDisplay }> { display? "-" : "+" } </button>
            </div>
            { display && <div className='p-3 text-gray-600'> { info }</div> }   
        </li>
    )
}
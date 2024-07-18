import React from 'react';

const IconBtn = ({
     text,
     onclick,
    children,
    disabled,
    outline=false,
    customeClasses,
    type,
   }) => {
    return (
     <button
      disabled={disabled}
       onClick={onclick}
       type={type} 
        className='rounded-md text-black bg-yellow-400'>
        {
            children ? (
                <>
                   <span>
                      {text}
                   </span>
                      {children}
                </>
                ):(text)
        }
     </button>
    );
}




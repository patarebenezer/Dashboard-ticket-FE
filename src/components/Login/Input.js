import { useState } from "react";

const Input = ({
 id,
 label,
 type,
 placeholder,
 register,
 validation,
 error,
 toggleable,
 icon,
}) => {
 const [showPassword, setShowPassword] = useState(false);

 return (
  <div>
   <label htmlFor={id} className='block text-gray-700 text-sm font-bold mb-2'>
    {label}
   </label>
   <div className='relative'>
    <input
     id={id}
     className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
     type={toggleable ? (showPassword ? "text" : "password") : type}
     placeholder={placeholder}
     {...register(id, validation)}
    />
    {toggleable && (
     <button
      type='button'
      className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
      onClick={() => setShowPassword(!showPassword)}
     >
      {showPassword ? (
       <icon.hidden className='h-5 w-5 text-gray-500' />
      ) : (
       <icon.visible className='h-5 w-5 text-gray-500' />
      )}
     </button>
    )}
   </div>
   {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
  </div>
 );
};

export default Input;

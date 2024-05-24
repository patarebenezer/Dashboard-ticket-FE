const Spinner = () => {
 return (
  <div className='flex items-center justify-center space-x-2 animate-spin'>
   <div className='w-3 h-3 bg-gray-700 rounded-full'></div>
   <div className='w-3 h-3 bg-gray-700 rounded-full'></div>
   <div className='w-3 h-3 bg-gray-700 rounded-full'></div>
  </div>
 );
};

export default Spinner;

export default function Card({ title, totalCount }) {
 return (
  <div className='border-2 bg-white dark:bg-slate-700 border-gray-300 rounded-md w-full py-6 text-center hover:border-blue-600 hover:border-2 hover:cursor-pointer transition duration-300 group'>
   <p className='text-gray-400 font-semibold text-lg pb-2 group-hover:text-blue-600'>
    {title}
   </p>
   <h1 className='text-4xl font-semibold antialiased py-2 group-hover:text-blue-600'>
    {totalCount}
   </h1>
  </div>
 );
}

export default function SubCard({ title, totalCount }) {
 return (
  <div
   className={`border-l ${
    title.includes("Resolution") ? "" : "border-b"
   } border-gray-300 w-full py-4 text-center`}
  >
   <p className='text-gray-400 font-semibold antialiased text-lg'>{title}</p>
   <h1 className='text-xl font-bold antialiased'>{totalCount}</h1>
  </div>
 );
}

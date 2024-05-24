import Menu from "./Menu";
import LanguageToggle from "../../LanguageToggle";

const Sidebar = () => {
 return (
  <div className='h-auto w-full md:w-1/4 bg-gray-800 text-white'>
   <div className='flex gap-3 items-center justify-center py-10'>
    <div className='flex justify-center'>
     <div className='bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center text-white text-2xl'>
      D
     </div>
    </div>
    <h2 className='text-center text-lg lg:text-2xl font-bold antialiased text-gray-500'>
     Dashboard Kit
    </h2>
   </div>
   <nav className='mt-4 text-gray-500 font-semibold antialiased'>
    <Menu />
    <LanguageToggle />
   </nav>
  </div>
 );
};

export default Sidebar;

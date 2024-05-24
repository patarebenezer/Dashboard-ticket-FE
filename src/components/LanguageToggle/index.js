import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
 const { i18n } = useTranslation();

 const handleLanguageChange = (event) => {
  i18n.changeLanguage(event.target.value);
 };

 return (
  <div className='flex items-center justify-center mt-4'>
   <select
    onChange={handleLanguageChange}
    value={i18n.language}
    className='bg-gray-300 text-black p-2 rounded-lg'
   >
    <option value='en'>English</option>
    <option value='id'>Bahasa Indonesia</option>
   </select>
  </div>
 );
};

export default LanguageToggle;

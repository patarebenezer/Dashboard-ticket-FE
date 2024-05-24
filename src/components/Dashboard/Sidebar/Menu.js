import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
 BsCardText,
 BsCollectionFill,
 BsFillPieChartFill,
 BsGearFill,
 BsLightbulbFill,
 BsPeopleFill,
 BsPersonBadgeFill,
 BsTicketFill,
} from "react-icons/bs";

const Menu = () => {
 const { t } = useTranslation();
 const [selectedMenu, setSelectedMenu] = useState("");

 const handleMenuClick = (menu) => {
  setSelectedMenu(menu);
 };

 const menuItems = [
  { name: t("Overview"), icon: <BsFillPieChartFill />, path: "/dashboard" },
  { name: t("Tickets"), icon: <BsTicketFill />, path: "/ticket" },
  { name: t("Ideas"), icon: <BsLightbulbFill />, path: "/idea" },
  { name: t("Contacts"), icon: <BsPeopleFill />, path: "/contacts" },
  { name: t("Agents"), icon: <BsPersonBadgeFill />, path: "/agents" },
  { name: t("Articles"), icon: <BsCardText />, path: "/articles" },
  { name: t("Settings"), icon: <BsGearFill />, path: "/settings" },
  { name: t("Subscription"), icon: <BsCollectionFill />, path: "/subs" },
 ];

 const clicked = "bg-gray-700 text-white";

 return (
  <div>
   {menuItems.map((item, index) => (
    <div key={index}>
     {item.name === t("Settings") && (
      <p className='bg-gray-700 w-full h-[1px] my-6'></p>
     )}
     <Link
      to={item.path}
      className={`block py-4 px-8 hover:bg-gray-700 ${
       selectedMenu === item.path.replace(/\//g, "") ? clicked : ""
      }`}
      onClick={() => handleMenuClick(item.path.replace(/\//g, ""))}
     >
      <div className='flex gap-6 items-center'>
       {item.icon}
       <span>{item.name}</span>
      </div>
     </Link>
    </div>
   ))}
  </div>
 );
};

export default Menu;

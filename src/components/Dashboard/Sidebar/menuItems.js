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

export const menuItems = [
 { name: "Overview", icon: <BsFillPieChartFill />, path: "/dashboard" },
 { name: "Tickets", icon: <BsTicketFill />, path: "/ticket" },
 { name: "Ideas", icon: <BsLightbulbFill />, path: "/idea" },
 { name: "Contacts", icon: <BsPeopleFill />, path: "/contacts" },
 { name: "Agents", icon: <BsPersonBadgeFill />, path: "/agents" },
 { name: "Articles", icon: <BsCardText />, path: "/articles" },
 { name: "Settings", icon: <BsGearFill />, path: "/settings" },
 { name: "Subscription", icon: <BsCollectionFill />, path: "/subs" },
];

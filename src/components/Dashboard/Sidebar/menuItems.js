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
 { name: "Tickets", icon: <BsTicketFill />, path: "#" },
 { name: "Ideas", icon: <BsLightbulbFill />, path: "#" },
 { name: "Contacts", icon: <BsPeopleFill />, path: "#" },
 { name: "Agents", icon: <BsPersonBadgeFill />, path: "#" },
 { name: "Articles", icon: <BsCardText />, path: "#" },
 { name: "Settings", icon: <BsGearFill />, path: "#" },
 { name: "Subscription", icon: <BsCollectionFill />, path: "#" },
];

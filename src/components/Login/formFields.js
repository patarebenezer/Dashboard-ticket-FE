import { FaEye, FaEyeSlash } from "react-icons/fa";

export const formFields = [
 {
  id: "email",
  label: "EMAIL",
  type: "text",
  placeholder: "Email address",
  validation: { required: "Email is required" },
 },
 {
  id: "password",
  label: "PASSWORD",
  type: "password",
  placeholder: "Password",
  validation: {
   required: "Password is required",
   minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
   },
  },
  toggleable: true,
  icon: {
   visible: FaEye,
   hidden: FaEyeSlash,
  },
 },
];

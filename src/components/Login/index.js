import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { useAuthContext } from "../../hooks/useAuth";
import { loginService } from "../../services/auth";
import { useAuth } from "../../contexts/AuthContext";
import { formFields } from "./formFields";
import Input from "./Input";

const LoginForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");
 const { login } = useAuthContext();
 const navigate = useNavigate();
 const { isAuthenticated } = useAuth();
 const token = localStorage.getItem("token");

 const onSubmit = async (data) => {
  setLoading(true);
  setError("");

  try {
   const { user, token } = await loginService(data.email, data.password);
   login(user, token);
   navigate("/dashboard");
  } catch (error) {
   setError("Data " + error.response?.statusText);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  if (token && isAuthenticated) {
   navigate("/dashboard");
  }
 }, [isAuthenticated, navigate, token]);

 return (
  <div className='flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-800'>
   <div className='flex items-center justify-center min-h-screen'>
    <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
     <div className='flex justify-center mb-6'>
      <div className='bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl'>
       D
      </div>
     </div>
     <h2 className='text-center text-2xl font-bold text-gray-900'>
      Dashboard Kit
     </h2>
     <h3 className='mt-1 text-center text-xl text-gray-600'>
      Log In to Dashboard Kit
     </h3>
     <p className='mt-1 text-center text-gray-500'>
      Enter your email and password below
     </p>
     {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
     <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
      {formFields.map((field) => (
       <Input
        key={field.id}
        id={field.id}
        label={field.label}
        type={field.type}
        placeholder={field.placeholder}
        register={register}
        validation={field.validation}
        error={errors[field.id]}
        toggleable={field.toggleable}
        icon={field.icon}
       />
      ))}
      <button
       type='submit'
       className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center transition duration-300 ease-in-out transform'
       disabled={loading}
      >
       {loading ? (
        <FaSpinner className='animate-spin h-5 w-5 mr-2' />
       ) : (
        "Log In"
       )}
      </button>
     </form>
     <p className='mt-4 text-center text-gray-600'>
      Don’t have an account?{" "}
      <Link to='#' className='text-blue-500 hover:underline'>
       Sign up
      </Link>
     </p>
    </div>
   </div>
  </div>
 );
};

export default LoginForm;

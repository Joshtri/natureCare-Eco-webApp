import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import errorImg from '../assets/3737258.png';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoBack  = ()=>{
    navigate(-1);
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-300 text-white text-center">
      
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
        }}
        className="mt-10 w-72"
      >
        <img
          src={errorImg}
          alt="Error illustration"
          className="w-full h-auto"
        />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center space-y-4"
      >
        <p className="text-2xl font-semibold">Oops! Halaman yang Anda cari tidak ditemukan.</p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-6"
      >
        <button
          onClick={handleGoBack}
          className="px-6 py-3 bg-white text-green-500 font-medium rounded-lg shadow hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
        >
          Kembali ke Beranda
        </button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

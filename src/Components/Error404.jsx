import React from 'react';
import img from '../assets/im2.jpg';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Error 404</h1>
        <p className="text-lg text-gray-600 mb-8">La página que estás buscando no pudo ser encontrada.</p>
        <img
          src={img}
          alt="Error 404"
          className="w-64 h-auto mb-8 sm:w-80 md:w-96"
        />
        <Link to={"/"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Regresar a la página principal
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
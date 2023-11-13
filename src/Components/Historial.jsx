import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { supabase } from "./Supabase";

const Historial = () => {
  const [valores, setValores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("historial").select("*");
      setValores(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">HISTORIAL DE LAS OPERACIONES</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valores.map((item, index) => (
            <div key={index} className="bg-white rounded shadow p-4">
              <p className="text-gray-500">Fecha de creación: {item.created_at}</p>
              <p className="text-gray-500">Primer Valor: {item.valor1}</p>
              <p className="text-gray-500">Segundo Valor: {item.valor2}</p>
              <p className="text-gray-500">Resultado: {item.resultado}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historial;
import React, { useState } from "react";

const Calculator = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  const handleChange1 = (e) => {
    setValor1(parseFloat(e.target.value));
  };
  const handleChange2 = (e) => {
    setValor2(parseFloat(e.target.value));
  };

  const handleSubmit = (operacion) => {
    if (operacion === "suma") {
      setResultado(valor1 + valor2);
    } else if (operacion === "resta") {
      setResultado(valor1 - valor2);
    } else if (operacion === "dividir") {
      if (valor2 === 0) {
        setResultado("No se puede dividir entre cero");
      } else {
        setResultado(valor1 / valor2);
      }
    } else if (operacion === "multiplicar") {
      setResultado(valor1 * valor2);
    }
    setValor1(" ");
    setValor2(" ");

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">WisoCalcus</h2>
      <div className="bg-white p-8 rounded shadow-md mb-8">
        <div className="mb-4">
          <label htmlFor="valor1" className="block font-bold mb-2">
            Primer valor:
          </label>
          <input
            id="valor1"
            value={valor1}
            type="number"
            onChange={handleChange1}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="valor2" className="block font-bold mb-2">
            Segundo valor:
          </label>
          <input
            id="valor2"
            value={valor2}
            type="number"
            onChange={handleChange2}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <button
            onClick={() => handleSubmit("suma")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 md:mr-2 md:mb-0"
          >
            Sumar
          </button>
          <button
            onClick={() => handleSubmit("resta")}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 md:mr-2 md:mb-0"
          >
            Restar
          </button>
          <button
            onClick={() => handleSubmit("dividir")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 md:mr-2 md:mb-0"
          >
            Dividir
          </button>
          <button
            onClick={() => handleSubmit("multiplicar")}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Multiplicar
          </button>
        </div>
      </div>
      <p className="text-xl font-bold">El resultado es: {resultado}</p>
    </div>
  );
};

export default Calculator;
'use client'
import { useState, useEffect } from 'react';

const CountingNumber = ({ finalNumber, duration }: any) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const increment = Math.ceil((duration / 1000)); // Calcula incremento por segundo
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const newNumber = prevNumber + increment;
        return newNumber >= finalNumber ? finalNumber : newNumber; // Garante que não ultrapasse o número final
      });
    }, 1); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado

  }, [finalNumber, duration]);

  return (
    <div className='flex flex-col items-center justify-center'>
    
      <span className='text-4xl text-purple-700/85 font-bold'>+ De {currentNumber}</span>
      <h3>Usuários</h3>
    </div>

  );
};

export default CountingNumber;

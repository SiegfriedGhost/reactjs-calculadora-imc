import { useState } from 'react';
import './App.css';

export default function App() {
  // Estados (useState)
  const[peso, setPeso] = useState('');
  const[altura, setAltura] =  useState('');

  const[mensagem, setMensagem] = useState('');

  function calcularIMC(){
    //Declara variável e acessa o que o usuário digitou 
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMensagem("Você está abaixo do peso! Seu imc é de: " + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Peso ideal! Seu IMC é de: " + imc.toFixed(2));  
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("Você está acima do peso! Seu imc é de: " + imc.toFixed(2))
    }else if(imc > 34.9){
      setMensagem("Obesidade! Seu imc é de: " + imc.toFixed(2))
    }

  }

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
       <input
        type="text"
        placeholder="Peso em (Kg) Ex:90"
        value={peso}
        onChange={ (e) => setPeso(e.target.value)}
        /> 

       <input
        type="text"
        placeholder="Altura em (cm) Ex:180"
        value={altura}
        onChange={ (e) => setAltura(e.target.value)}
        /> 

        <button onClick={calcularIMC}>
          Calcular 
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}



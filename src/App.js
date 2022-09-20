import React, { useEffect, useState } from 'react'
import './style.css'
// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const[nutri, setNutri] = useState([]);

  useEffect(()=> {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((r) => r.json())
      .then((json) =>{
        setNutri(json);
      })
    }

    loadApi();
  }, []);

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item)=> {
        return(
          <article key={item.id} className="post">
            <strong className='titulo'>{item.titulo}</strong>
            <h3 className='categoria'>categoria: {item.categoria}</h3>
            <img src={item.capa} alt={item.titulo} className='capa' />
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <span className='botao'>Acessar</span>
          </article>
        )
      })}
    </div>
  )
}

export default App
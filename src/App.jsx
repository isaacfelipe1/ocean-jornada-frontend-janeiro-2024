import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {
  const [itens,setItens] = useState([])

  async function carregarDadosApi(){
    const apiUrl='https://rickandmortyapi.com/api/character/'
    const response=await fetch(apiUrl)
    const body=await response.json()
    //Extrair o propriedade results do body
    const results=body.results;
    setItens(results)
  }
  //Protegemos o carregamento dos dados da api para chamar
  //Uma única vez
  useEffect(function (){
        carregarDadosApi()
    },[])
  
  return (
    <>
      <div className="cards">
        {/*
        <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} />
        */}
        {itens.map((item, i) => <Card item={item} key={i} />)}
       
      </div>
    </>
  )
}

export default App
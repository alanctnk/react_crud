import React from 'react'
import Main from '../templates/Main'

export default function Home() {
  return (
    <Main icon="home" title="Início" subtitle="Projeto CRUD usando React.">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">Sistema para demonstrar a construção de um cadastro em ReactJS.</p>
    </Main>
  )
}

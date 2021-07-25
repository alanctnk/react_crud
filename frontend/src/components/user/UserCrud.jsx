/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Main from '../templates/Main'
import axios from 'axios'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir.'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default function UserCrud(props) {
  const [local, setLocal] = React.useState({...initialState})

  React.useEffect(() => {
    axios(baseUrl).then((resp) => {
      setLocal({...local, list: resp.data})
    })
  }, [])

  function clear() {
    setLocal({ ...local, user: initialState.user })
  }

  function save() {
    const user = local.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then((resp) => {
        const list = getUpdateList(resp.data)
        setLocal({ user: initialState.user, list })
      })
  }

  function getUpdateList(user, add = true) {
    const list = local.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
    return list
  }

  function updateField(event) {
    const {name, value} = event.target
    const user = { ...local.user }
    user[name] = value
    setLocal({...local, user})
  }

  function renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={local.user.name}
                onChange={e => updateField(e)}
                placeholder="Digite o nome..." />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={local.user.email}
                onChange={e => updateField(e)}
                placeholder="Digite o email..." />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
            onClick={save}
            className="btn btn-primary">
              Salvar
            </button>
            <button
            onClick={clear}
            className="btn btn-secondary ml-2">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  function load(user) {
    setLocal({...local, user})
  }

  function remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = getUpdateList(user, false)
      setLocal({ ...local, list})
    })
  }

  function renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }
  
  function renderRows() {
    return local.list.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-warning" onClick={() => load(user)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
            <i className='fa fa-trash'></i>
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <Main {...headerProps}>
      {renderForm()}
      {renderTable()}
    </Main>
  )
}

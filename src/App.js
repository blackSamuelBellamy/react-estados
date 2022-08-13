import Input from './components/Input'
import { useState } from 'react';
import Button from './components/Button'

const App = () => {
  const [password, setPassword] = useState('')
  const [nombre, setNombre] = useState('')
  const changePassword = e => setPassword(e.target.value)
  const changeNombre = e => setNombre(e.target.value)

  const vaciar = e => {
    e.preventDefault()
    setNombre('')
    setPassword('')
    window.location.assign("https://es.reactjs.org/")
  }

  return (
    <div className='container'>
      <form className='boxContainer' onSubmit={vaciar}>
        <Input inputId='Name' campo='Nombre' type='text' mainFunction={changeNombre} />
        <Input inputId='Password' campo='Contraseña' type='password' mainFunction={changePassword} />
        {password === '252525' ? <Button yourName = {nombre} /> : null}
      </form>
    </div>
  );
}

export default App;
import Input from './components/Input'
import { useState } from 'react';
import Button from './components/Button'

const App = () => {
  const [password, setPassword] = useState('')
  const changePassword = e => setPassword(e.target.value);
  return (
    <div className='container'>
      <div className='boxContainer'>
        <Input inputId='Name' campo='Nombre' type='text' mainFunction= {null} /> 
        <Input inputId='Password' campo='Contraseña' type='password' mainFunction={changePassword} />

        {password === '252525' ? <Button /> : null}


      </div>

    </div>
  );
}

export default App;
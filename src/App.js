import './App.css';
import { Route } from 'react-router-dom';
import '@material-ui/core'
import Login from './client/components/Admin/Login'

function App() {

  return (

    <Route exact path='/admin/login' component={ Login }/>

  )
}

export default App;

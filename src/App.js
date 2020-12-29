import './App.css';
import { Route } from 'react-router-dom';
import '@material-ui/core'
import {Box} from '@material-ui/core'

import Login from './client/components/Admin/Login'
import AppBar from './client/components/Navigation/AppBar'
import Panel from './client/components/Admin/Panel'
import Home from './client/components/Home/Home'
import BottomNav from './client/components/Navigation/BottomNavigation'

function App() {

  return (
    
    <Box fluid className="app" >
      <AppBar/>
      <BottomNav/>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/admin/login' component={ Login }/>
      <Route exact path='/admin/panel' component={ Panel }/>
    </Box>


  )
}

export default App;

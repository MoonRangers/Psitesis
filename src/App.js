import './App.css';
import '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme'

import { Route } from 'react-router-dom';
import {Box} from '@material-ui/core'

import Login from './client/components/Admin/Login'
import Panel from './client/components/Admin/Panel'
import Home from './client/components/Home/Home'

import BottomNav from './client/components/Navigation/BottomNavigation'
import AppBar from './client/components/Navigation/AppBar'


function App() {

  const useStyles = makeStyles(theme => ({
    content:{
      [theme.breakpoints.up("md")]:{
         marginLeft:"240px" 
        
      }
    }
  }))

  const classes = useStyles();


  return (
    
    <Box fluid className="app" >
      
      <AppBar/>
      <BottomNav/>
      
      <Box fluid className={classes.content} >
        <Route exact path='/' component={ Home }/>
        <Route exact path='/admin/login' component={ Login }/>
        <Route exact path='/admin/panel' component={ Panel }/>
      </Box>
    </Box>
    


  )
}

export default App;

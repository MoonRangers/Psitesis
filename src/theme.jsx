import { createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#861c55'
      },

      secondary: {
        main: '#93827f'
      }
    },
    overrides: {

      MuiBottomNavigation:{
        root: {
          width:"100%",
          position:"fixed",
          bottom: 0,
          backgroundColor: "#861c55"
        },
      },

      MuiBottomNavigationAction:{
        root:{
          color:"#fcfcff",
          "&$selected": {
            color: "#031927"
          },
          selected:{}
        },
      },
      
      MuiList:{
        root:{
          color:"#fcfcff",
        },
      },


      MuiListItemIcon:{
        root:{
          color: "#fcfcff"
        }
      },
      

      MuiTypography: {
        colorTextSecondary: {
          color: '#93827f',
        },
        h6:{
          lineHeight:"1.2"
        }
      },


      MuiIconButton:{
        root:{
          color:"#fcfcff"
        }
      }
    },

    

      
  });
  

  export default theme;
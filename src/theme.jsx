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

      MuiDivider:{
        root:{
          backgroundColor:"#212121"
        }
      },

      MuiBottomNavigation:{
        root: {
          width:"100%",
          position:"fixed",
          bottom: 0,
          backgroundColor: "#861c55",
        },
      },


      MuiBottomNavigationAction:{
        root:{
          padding:"4px",
          color:"#fcfcff",
          "&$selected": {
            color: "#031927",
            padding: "0px"
          },
        },

        label:{
          paddingTop:"4px",
          fontSize: "0.84rem",
          "&$selected":{
            fontSize:"0.84rem"
          }
        }
      },
      
      MuiListItem:{
        root:{
          color:"#fcfcff",
          '&$selected, &$selected:hover': {
            backgroundColor: "#031927",
          },
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
      },


      MuiIconButton:{
        root:{
          color:"#fcfcff"
        }
      }
    },

  });
  

  export default theme;
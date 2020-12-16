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
    props: {
      //sobreescribir propiedades default de los componentes
    }
  });

  export default theme;
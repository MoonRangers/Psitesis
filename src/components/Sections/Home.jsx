
import { Grid, Box, Divider, Typography  } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";//
//import { SectionCard, SectionCardMedia, SectionCardTitle, SectionCardDescription } from '../StyledComponents/SectionCard'
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    welcomeDescription: {
        paddingTop:"16px",
    },
    root: {
        justifyContent: "center",
    },
    bajada:{
        fontFamily: "Roboto",
        fontSize: "1rem",
        fontWeight:"400",
        lineHeight: "1.1875rem",
        marginBottom:"16px"
    }
}));

function Home(props) {
    const { styles } = props;

    const classes = useStyles();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className={styles}
        >
            <Grid container spacing={2} >
                <Grid item>
                    <Typography variant="h6">
                            Bienvenidos
                    </Typography>     
                </Grid>
                <Grid item>
                    <Typography className={classes.bajada} >
                        En Psitesis encontraras ARTÍCULOS escritos por expertos en la construcción de tesis.
                        Si seguis con dudas podés escribir en el FORO, donde encontraras otros colegas que puedan ayudarte.
                        Trabajemos juntos para hacer crecer la COMUNIDAD y ayudarnos entre todos.
                    </Typography>

                    <Divider />
                    
                </Grid>    
            </Grid>            
        </motion.div>
    )
}

export default Home;
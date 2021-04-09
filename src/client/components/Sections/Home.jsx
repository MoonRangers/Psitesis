
import { Grid, Box, Divider, Hidden, CardActionArea, Typography, Paper } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";
import { SectionCard, SectionCardMedia, SectionCardTitle, SectionCardDescription } from '../StyledComponents/SectionCard'
import { Link } from 'react-router-dom'
import categories from './Categories'

function Home(props) {
    const useStyles = makeStyles(theme => ({
        welcomeDescriptionPaper: {
            width: '100%',
            minHeight: '80px'

        }
    }));

    const classes = useStyles();

    return (
        <Grid container spacing={5} justifyContent="center">
            <Grid container item xs={12} >
                <Typography variant="h4" color="primary">
                    Bienvenidos
                </Typography>
            </Grid>
            <Grid container item xs={12} >
                <Paper className={classes.welcomeDescriptionPaper}>
                    <Box padding="16px" >
                        <Typography variant="body1" gutterBottom>
                            <Box fontWeight="fontWeightBold">
                                Nuestro objetivo es brindar información actualizada
                                y de fuentes confiables para que puedas realizar tu tesis.
                            </Box>
                        </Typography>
                        <Typography variant="body1">
                            <Box fontWeight="fontWeightBold">
                                Actualmente esta página esta en construcción. Con el pasar de los
                                meses vamos a sumar nuevas secciones y actualizar las que tenemos
                                con nuevos artículos.
                            </Box>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>

            <Hidden smDown>
                <Grid container item xs={12} >
                    <Typography variant="h4" color="primary">
                        Explorá las categorias
                        </Typography>
                </Grid>
                {categories.map((category) => (

                    <Grid item xs={6}>
                        <Link to={category.url} style={{ textDecoration: 'none' }}>
                            <SectionCard >
                                <CardActionArea>

                                    <SectionCardMedia
                                        image={category.image}
                                    />
                                    <SectionCardTitle variant="h6">
                                        {category.title}
                                    </SectionCardTitle>

                                    <Divider variant="middle" />

                                    <SectionCardDescription variant="body2" color="textSecondary">
                                        {category.description}
                                    </SectionCardDescription>
                                </CardActionArea>
                            </SectionCard>
                        </Link>
                    </Grid>
                ))}

            </Hidden>
        </Grid>
    )
}

export default Home;

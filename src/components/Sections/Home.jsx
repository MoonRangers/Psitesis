
import { Grid, Box, Divider, Hidden, CardActionArea, Typography, Paper } from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";
import { SectionCard, SectionCardMedia, SectionCardTitle, SectionCardDescription } from '../../components/StyledComponents/SectionCard'
import { Link } from 'react-router-dom'
import categories from './Categories'

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
    },
    welcomeDescriptionPaper: {
        width: '100%',
        minHeight: '80px'
    },
}));

function Home(props) {
    const classes = useStyles();

    return (
        <Grid container spacing={5} className={classes.root}>
            <Grid container item xs={12} >
                <Typography variant="h4" color="primary">
                    Bienvenidos
                </Typography>
            </Grid>
            <Grid container item xs={12} >
                <Paper className={classes.welcomeDescriptionPaper}>
                    <Box padding="16px" >
                        <Typography variant="body1" gutterBottom fontWeight="fontWeightBold">
                            Nuestro objetivo es brindar información actualizada
                            y de fuentes confiables para que puedas realizar tu tesis.
                        </Typography>
                        <Typography variant="body1" fontWeight="fontWeightBold">
                            Actualmente esta página esta en construcción. Con el pasar de los
                            meses vamos a sumar nuevas secciones y actualizar las que tenemos
                            con nuevos artículos.
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
                {categories.map((category, index) => (
                    <Grid item xs={6} key={index}>
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

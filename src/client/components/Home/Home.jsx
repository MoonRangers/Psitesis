import React, { useState } from 'react';
import {Card, Grid, Typography, Box, CardMedia, CardActionArea, Tooltip, Hidden  } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import guia from '../../images/guiatesis.jpg'
import nosotros from '../../images/sobrenosotros.jpg'
import theme from '../../../theme'



function Home( props ){
    const useStyles = makeStyles({
        root: {
            minWidth: 128,
            backgroundColor:"#861c55",
            "&:hover": {
                boxShadow: "10px 5px 5px #031927"
                //cambiar a efecto animado
            },

            [theme.breakpoints.only("xs")]:{
                height: 180
            }

        },
        media: {
          height: 128,
        },
        cardTitle:{
            textAlign:"center",
            color: "#fcfcff",
            padding: theme.spacing(1),
            [theme.breakpoints.only("xs")]:{
                fontSize: "1rem",
            }
            
        },

        /* cardDescription:{
            padding: theme.spacing(1)
        }, */

      });


      
    const classes = useStyles();
    
    return(
        <Box display="flex" justifyContent="center" padding="32px" height="89%" >
            <Hidden only="xs">
                <Grid container spacing={5} xs={12} >
                    <Grid item xs={6}>
                        <Tooltip title="Guías, artículos, plantillas y todo lo que necesitas para armar tu tesis de grado">
                            <Card className={classes.root} >
                                <CardActionArea>
                                    <CardMedia 
                                    className={classes.media}
                                    image= {guia}
                                    />
                                    <Typography className={classes.cardTitle} variant="h6">
                                        Guia de tesis
                                    </Typography>
                                    {/* <Typography className={classes.cardDescription} variant="body2" color="textSecondary" component="p">
                                        Guías, artículos, plantillas y todo lo que necesitas para armar tu tesis de grado
                                    </Typography> */}
                                </CardActionArea>
                            </Card>
                        </Tooltip>
                    </Grid>

                    <Grid item xs={6}>
                        <Tooltip title="Conoce a los creadores y colaboradores que forman parte de PsiTesis.">
                            <Card className={classes.root} >
                                <CardActionArea>
                                    <CardMedia 
                                    className={classes.media}
                                    image= {nosotros} 
                                    />
                                    <Typography className={classes.cardTitle} variant="h6">
                                        Sobre Nosotros
                                    </Typography>
                                {/* <Typography className={classes.cardDescription} variant="body2" color="textSecondary" component="p">
                                    Conoce a los creadores y colaboradores que forman parte de PsiTesis.
                                    </Typography> */}
                                </CardActionArea>
                            </Card>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Hidden>
        </Box>
            
    )
}

export default Home;

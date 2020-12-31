import React, { useState } from 'react';
import { Grid, Box, Divider, Hidden, CardActionArea } from '@material-ui/core/';
import { SectionCard, SectionCardMedia, SectionCardTitle, SectionCardDescription } from '../StyledComponents/SectionCard'
import guia from '../../images/guiatesis.jpg'
import nosotros from '../../images/sobrenosotros.jpg'




function Home(props) {

    return (
        <Box display="flex" justifyContent="center" padding="32px" height="89%" >
            <Hidden only="xs">
                <Grid container spacing={5} >
                    <Grid item xs={6}>
                        <SectionCard  >
                            <CardActionArea>
                                <SectionCardMedia
                                    image={guia}
                                />
                                <SectionCardTitle variant="h6">
                                    Guia de tesis
                                    </SectionCardTitle>

                                <Divider variant="middle" />

                                <SectionCardDescription variant="body2" color="textSecondary">
                                    Guías, artículos, plantillas y todo lo que necesitas para armar tu tesis de grado.
                                </SectionCardDescription>
                            </CardActionArea>
                        </SectionCard>
                    </Grid>

                    <Grid item xs={6}>
                        <SectionCard  >
                            <CardActionArea>
                                <SectionCardMedia
                                    image={nosotros}
                                />
                                <SectionCardTitle variant="h6">
                                    Sobre Nosotros
                                </SectionCardTitle>

                                <Divider variant="middle" />

                                <SectionCardDescription variant="body2" color="textSecondary">
                                    Conoce a los creadores y colaboradores que forman parte de PsiTesis. Podrás encontrar toda la información sobre los autores de los artículos.
                                </SectionCardDescription>
                            </CardActionArea>
                        </SectionCard>
                    </Grid>
                </Grid>
            </Hidden>
        </Box>

    )
}

export default Home;

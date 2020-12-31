import React, { useState } from 'react';
import { Grid, Box, Divider, Hidden, CardActionArea } from '@material-ui/core/';
import { SectionCard, SectionCardMedia, SectionCardTitle, SectionCardDescription } from '../StyledComponents/SectionCard'
import { Link } from 'react-router-dom'
import categories from './Categories'

function Home(props) {

    return (
        <Box display="flex" justifyContent="center" padding="32px" height="89%" >
            <Hidden only="xs">
                <Grid container spacing={5} >
                    
                    {categories.map((category)=>(

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

                </Grid>
            </Hidden>
        </Box>

    )
}

export default Home;

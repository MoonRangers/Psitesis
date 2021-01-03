import { Grid, Card, CardContent, CardHeader, Typography } from '@material-ui/core';

export default function Articles(params) {
    return (
        <Grid container justify="center">

            <Grid item>
                <Card variant="outlined" color="primary">
                    <CardHeader
                        title="Título del artículo"
                        subheader="Subtitulo del artículo"
                    >
                    </CardHeader>
                    <CardContent>
                        <Typography>
                            Descripción del contenido
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
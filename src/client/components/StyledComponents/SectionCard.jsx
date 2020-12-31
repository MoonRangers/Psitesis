import { Card, CardMedia, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import theme from '../../../theme';


 export const SectionCard = styled(Card)(
    {
        minWidth: 128,
        backgroundColor:"#861c55",
        "&:hover": {
            boxShadow: "10px 5px 5px #031927"
            //cambiar a efecto animado
        },

        [theme.breakpoints.only("xs")]:{
            height: 180
        }
    }
)

export const SectionCardMedia = styled(CardMedia)({
    
    height: 128,
    maxHeight: "100%",
    maxWidth:"100%"
}) 

export const SectionCardTitle =styled(Typography)({
    textAlign:"center",
    color: "#fcfcff",
    padding: theme.spacing(1),
    [theme.breakpoints.only("xs")]:{
        fontSize: "1rem",
    }
    
})

export const SectionCardDescription =styled(Typography)({
    padding: theme.spacing(1)
})
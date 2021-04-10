import { Box } from '@material-ui/core';
import Articles from '../Articles/Articles'

export default function Guiadetesis(props) {
    const { styles } = props;

    return (
        <Box className={styles}>
            <Articles />
        </Box>
    )
}
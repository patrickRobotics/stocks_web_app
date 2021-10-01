import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#eeeeef",
        ['@media (max-width:780px)']: {
           flexDirection: "column"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"
        }
    }
})

const Header = () => {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
            <Typography variant="h6" className={classes.menuItem}>
                Company Stock Markets
            </Typography>
        </Toolbar>
    )
}


export default Header
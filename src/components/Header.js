import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#eeeeef"
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        }
    }
})

const Header = () => {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
            <Typography variant="h6" className={classes.menuItem}>
                BATS U.S. Stock Exchanges
            </Typography>
        </Toolbar>
    )
}


export default Header
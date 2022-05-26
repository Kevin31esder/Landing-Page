import React from 'react';
// import './footer.css'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#fac767',
    padding: "20px"
  },
  principalHeading: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  p: {
    textAlign: "center",
    fontSize: 18
  },
  copyrigth: {
    textAlign: "center",
    margin: "10px auto",
    fontSize: theme.typography.pxToRem(15)
  }
}));

const Footer = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Container maxWidth="md">
        <h1 className={classes.principalHeading}>CONTÁCTANOS</h1>
        <p className={classes.p}>Para mayor información acerca de nosotros</p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h3 className={classes.heading}>DIRECCIÓN</h3>
            <p className={classes.p}>Calle 99 #58-112 Barranquilla - Atlántico.</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3 className={classes.heading}>TELÉFONO</h3>
            <p className={classes.p}>3232232540</p>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <h4 className={classes.copyrigth}>Todos los derechos reservados</h4>
      </Container>
    </div>
  )
}

export default Footer
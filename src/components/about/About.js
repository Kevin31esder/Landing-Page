import React from 'react';
import './about.css'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  content: {
    margin: "20px auto"
  },
  accordionTitle: {
    backgroundColor: "#fac767e5"
  },
  principalHeading: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightRegular,
  },
  heading: {    
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  p: {
    textAlign: "center",
    fontSize: 20
  }

}));

const About = () => { 

  const classes = useStyles();
  return(
    <Container maxWidth="md">
      <div className={classes.content}>
        <h1 className={classes.principalHeading}>¿CÓMO TRABAJAMOS?</h1>
        <p className={classes.p}>Sumando fuerzas para avanzar en las mejores soluciones.</p>      
        <div className={classes.root}>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionTitle}
            >
              <Typography className={classes.heading}>Valor Añadido Local</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nuestra amplia experiencia en la industria portuaria y logística junto al trabajo de nuestros socios locales, nos permiten ofrecer servicios en todo los puertos de las costas del Atlántico y el Pacífico.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className={classes.accordionTitle}
            >
              <Typography className={classes.heading}>Innovación</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Giport SAS tiene amplia experiencia operando en los principales puertos del país y se ha convertido en un referente nacional del sector, incorporando conocimiento, tecnología y  soluciones de última generación.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionTitle}
            >
              <Typography className={classes.heading}>Seguridad en las Operaciones</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                La seguridad para los trabajadores, medio ambiente y equipos es el común denominador en todas nuestras operaciones y fundamento de nuestra cultura corporativa.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionTitle}
            >
              <Typography className={classes.heading}>El Equipo Humano Marca la Diferencia</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Nuestro equipo profesional está altamente capacitado para apoyar a nuestros clientes de forma integral en cada una de las necesidades y requerimientos. Siempre enfocados en brindar un servicio de primer nivel. Por eso, el recurso humano son el pilar fundamental de nuestra empresa.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Container>
  )
}

export default About
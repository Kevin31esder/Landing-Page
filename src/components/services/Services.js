import React from 'react';
import './services.css'
import image from '../../images/imagen-2.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { List, ListItem, ListItemText } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover",
    paddingBottom: 10,
    
  },
  bgc: {
    backgroundColor: '#e2b073b5',
    
  },
  paper: {
    backgroundColor: "#414040d4",
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
    color: "#f1f1f1",
  },
  principalTitle: {
    color: "#f1f1f1",
    textAlign: 'center',
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: "#f1f1f1",
  },
  content: {
    padding: theme.spacing(1)
  }
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bgc}>
        <Container maxWidth="lg">
          <div className={classes.principalTitle}>
            <h1>NUESTROS SERVICIOS</h1>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Ejecución de Estiba y Desestiba
                </Typography>
                <Divider variant="middle" />

                <Typography className={classes.content} variant="body2" component="p">
                  Giport es especialista en la carga y descarga de buques.
                </Typography>
                <Divider variant="middle" />
                <List dense={true}>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Estiba de Buques</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Desestiba de Buques</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Logística de Carga</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Suministro de Mano de Obra Especializada</ListItemText>
                  </ListItem>
                  <ListItem>
                  <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Suministro de Equipo para Operaciones</ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Operación de Transporte Terrestre
                </Typography>
                <Divider variant="middle" />
                <Typography className={classes.content} variant="body2" component="p">
                  Gestionamos y administramos flotas para el transporte de cargas completas.
                </Typography>
                <Divider variant="middle" />
                <List dense={true}>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Cumplimiento en Ventanas de Entrega</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Visibilidad de la Carga</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Reportes KPI’s Operativos</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Gestión de Cadena Seca</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Gestión Cadena de Frío</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Multimodal</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Conectividad en Tecnologías de la Información</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Diseño de Rutas Especiales</ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Soluciones Multimodal
                </Typography>
                <Divider variant="middle" />
                <Typography className={classes.content} variant="body2" component="p">
                  Nos especializamos en optimizar la cadena de suministro y en desarrollar soluciones adecuadas a cada etapa del flujo de las mercancías y el adecuado modo de transporte.
                </Typography>
                <Divider variant="middle" />
                <List dense={true}>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Amplia Oferta de Servicios de Distribución por Carretera</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Servicio Marítimo Trabajando con los Principales Líneas Navieras</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Servicio Contenerizado, de Carga Suelta o RoRo</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Transportación Full Container Load y Less Container Load</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Servicio de Carga y Paquetería Aérea</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Integración de Gestión Aduanal y Almacenaje en Propuesta</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Visibilidad en la Cadena Multimodal</ListItemText>
                  </ListItem>               
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Logística Internacional
                </Typography>
                <Divider variant="middle" />
                <Typography className={classes.content} variant="body2" component="p">
                  Resolvemos retos de la transportación de mercancía a nivel global, a través de nuestra red de socios estratégicos, líderes en su segmento. Ofrecemos soluciones de transporte multimodal diseñados a la medida del cliente.
                </Typography>
                <Divider variant="middle" />
                <List dense={true}>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Cross Border</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Administración y Ejecución de Transporte Marítimo</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Servicios Aduanales y Gestión con Autoridades</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Simplificación Administrativa y Operativa al Gestionar con un Solo Operador Logístico</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Optimización de la Cadena de Suministro</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Visibilidad de la Carga</ListItemText>
                  </ListItem>             
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Almacenaje
                </Typography>
                <Divider variant="middle" />
                <Typography className={classes.content} variant="body2" component="p">
                  Garantizamos el óptimo manejo de mercancía y control de inventarios. Nuestra gente, infraestructura, procesos, tecnología y atención integral nos permiten entregar el mejor desempeño en almacenaje.
                </Typography>
                <Divider variant="middle" />
                <List dense={true}>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Cobertura</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Instalaciones Dedicadas o Multi-Cliente</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Almacenes Secos y/o Multi-Temperatura</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Manejo de Mercancía de Alto Valor y/o con Requerimientos Especiales</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> WMS / JDA</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Conectividad en Tecnologías de la Información</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Control de Inventarios</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Flexibilidad Operativos y de Horarios</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText><FiberManualRecordIcon style={{ fontSize: 10 }} /> Almacén Fiscal</ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Services
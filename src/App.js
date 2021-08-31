import React from 'react';
// Importando la liberia de css material core ui
import { CssBaseline, Grid } from '@material-ui/core';


// Importando los componentes de la App
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';




const App = () => {
    return (
        <>
            <CssBaseline />
            <Header></Header>
            <Grid container spacing={3} style ={{ width: '100%'}}>
                <Grid item xs={12}  md={4}>
                    <List></List>
                </Grid>
                <Grid item xs={12}  md={8}>
                    <Map></Map>
                </Grid>
            </Grid>
         </>   
    );
}


export default App;


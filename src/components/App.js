import "../stylesheets/App.css";
import { Container, Typography, Grid, Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Typography variant="h2">Hola mundo</Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        justifySelf="center"
      >
        <Grid>
          <Box>Combatiente 1</Box>
        </Grid>
        <Grid>
          <Box>Combatiente 2</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

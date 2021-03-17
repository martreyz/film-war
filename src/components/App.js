import "../stylesheets/App.css";
import {
  AppBar,
  Card,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  CardContent,
  CardActions,
} from "@material-ui/core";

import { styled } from "@material-ui/core/styles";

function App() {
  const MyAppBar = styled(AppBar)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "fit content",
    padding: "0 30px",
  });

  const MyCard = styled(Card)({
    backgroundColor: "#FF8E53",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "fit content",
    padding: "0 30px",
  });

  return (
    <div className="App">
      <MyAppBar>
        <Typography variant="h2">Film wars</Typography>
      </MyAppBar>
      <Grid
        borderColor="primary.main"
        border={1}
        width="30%"
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        justifySelf="center"
        spacing={2}
      >
        <Grid xs={5} item>
          <MyCard>
            <CardContent>
              <Typography variant="h4" gutterBottom={true}>
                Film Warrior 1
              </Typography>
              <Typography gutterBottom={true}>
                Insert THAT film, the film that you would give a price each time
                you watch it!
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                id="warriorOne"
                label="Film Warrior One"
                variant="filled"
                color="secondary"
              />
            </CardActions>
          </MyCard>
        </Grid>
        <Grid xs={5} item>
          <MyCard>
            <CardContent>
              <Typography variant="h4" gutterBottom={true}>
                Film Warrior 2
              </Typography>
              <Typography gutterBottom={true}>
                But you always had a doubt... maybe this one is better reviewed?
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                id="warriorTwo"
                label="Film Warrior Two"
                variant="filled"
                color="secondary"
              />
            </CardActions>
          </MyCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import { useState } from "react";
import {
  Card,
  Grid,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Typography,
  TableBody,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Switch,
} from "@mui/material";

import { CUISINES, MEALS, WEIGHTS, DINNER } from "./data/recipes";
import pickMeals from "./services/picker";

function App() {
  const [numberOfMeals, setNumberOfMeals] = useState(6);
  const [weights, setWeights] = useState(WEIGHTS);
  const [cuisines, setCuisines] = useState(CUISINES);
  const [meals, setMeals] = useState([DINNER]);
  const [vegOnly, setVegOnly] = useState(false);
  const [quickOnly, setQuickOnly] = useState(false);
  const [recipes, setRecipes] = useState([]);

  function updateNumberOfMeals(event) {
    setNumberOfMeals(parseInt(event.target.value));
  }

  function updateWeights(event, newValue) {
    const name = event.target.name;
    const indexInArray = weights.indexOf(name);
    const newWeights = [...weights];
    if (indexInArray < 0 && newValue) {
      newWeights.push(name);
    } else if (indexInArray >= 0 && !newValue) {
      newWeights.splice(indexInArray, 1);
    }
    setWeights(newWeights);
  }

  function updateCuisines(event, newValue) {
    const name = event.target.name;
    const indexInArray = cuisines.indexOf(name);
    const newCuisines = [...cuisines];
    if (indexInArray < 0 && newValue) {
      newCuisines.push(name);
    } else if (indexInArray >= 0 && !newValue) {
      newCuisines.splice(indexInArray, 1);
    }
    setCuisines(newCuisines);
  }

  function updateMeals(event, newValue) {
    const name = event.target.name;
    const indexInArray = meals.indexOf(name);
    const newMeals = [...meals];
    if (indexInArray < 0 && newValue) {
      newMeals.push(name);
    } else if (indexInArray >= 0 && !newValue) {
      newMeals.splice(indexInArray, 1);
    }
    setMeals(newMeals);
  }

  function updateVegOnly(event) {
    setVegOnly(event.target.checked);
  }

  function updateQuickOnly(event) {
    setQuickOnly(event.target.checked);
  }

  function generateMenu() {
    const menu = pickMeals(
      numberOfMeals,
      cuisines,
      weights,
      meals,
      vegOnly,
      quickOnly
    );
    setRecipes(menu);
    console.log(menu);
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item style={{ margin: "18px" }}>
        <Card style={{ padding: "16px" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={2}>
              <TextField
                label="Number of Meals"
                type="number"
                defaultValue={6}
                onChange={updateNumberOfMeals}
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Pick Cuisines</FormLabel>
                <FormGroup row>
                  {CUISINES.map((elem) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          onChange={updateCuisines}
                          name={elem}
                        />
                      }
                      label={elem}
                      key={elem}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Pick Meals</FormLabel>
                <FormGroup row>
                  {MEALS.map((elem) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={elem == DINNER}
                          onChange={updateMeals}
                          name={elem}
                        />
                      }
                      label={elem}
                      key={elem}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Pick Weight</FormLabel>
                <FormGroup row>
                  {WEIGHTS.map((elem) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          onChange={updateWeights}
                          name={elem}
                        />
                      }
                      label={elem}
                      key={elem}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <FormControlLabel
                    control={<Switch onChange={updateVegOnly} />}
                    label="Vegetarian Only?"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={<Switch onChange={updateQuickOnly} />}
                    label="Quick Meals Only?"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Button variant="outlined" onClick={generateMenu}>
                Make menu!
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Typography
            variant="h6"
            style={{ paddingLeft: "16px", paddingTop: "4px" }}
          >
            Meals
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Meal</TableCell>
                <TableCell align="right">Source</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipes.map((row, index) => (
                <TableRow
                  key={row.name + " " + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.source}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default App;

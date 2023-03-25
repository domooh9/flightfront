import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { searchFlights } from "../store/actions/searchFlightActions";
import { useDispatch } from "react-redux";
import { dateFormatter } from "../utility/dateFormatter";
import { useNavigate } from "react-router-dom";
import "./Search.scss";
import flying from "./../assets/images/flying.png";
import flyingAvif from "./../assets/images/flying.avif";
import flyingWebp from "./../assets/images/flying.webp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const cities = ["Kisumu", "Nairobi", "Eldoret", "Mombasa"];

const Search = () => {
  const [fromLandmark, setFromLandmark] = useState("");
  const [toDestination, setToDestination] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    centralised: {
      justifyContent: "center",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    formfield: {
      padding: "10px 0px",
    },
  }));
  const classes = useStyles();

  const submitHandler = (event) => {
    event.preventDefault();
    let formattedDate = dateFormatter(date);
    dispatch(
      searchFlights({
        to: toDestination,
        from: fromLandmark,
        date: formattedDate,
      })
    );
    navigate("/FlyM/browse-page");
  };

  const handleFromChange = (event) => {
    const value = event.target.value;
    if (value !== toDestination) {
      setFromLandmark(value);
    } else {
      alert("Please choose a different city for source and destination!");
    }
  };

  const handleToChange = (event) => {
    const value = event.target.value;
    if (value !== fromLandmark) {
      setToDestination(value);
    } else {
      alert("Please choose a different city for source and destination!");
    }
  };

  return (
    <div className="search">
      <div className={`grid ${classes.root}`}>
        <Grid container className={classes.centralised}>
          <Grid item xs={6} md={6} xl={6} className="left">
            <picture>
              <source
                srcSet={flyingAvif}
                type="image/avif"
                loading="eager"
                fetchpriority="..."
              />
              <source
                srcSet={flyingWebp}
                type="image/webp"
                loading="eager"
                fetchpriority="..."
              />
              <img src={flying} className="home-image" alt="Flying Airplane" loading="eager" />
            </picture>
          </Grid>
          <Grid item xs={6} md={6} xl={6}  className="form-container">
            <Paper className={classes.paper}>
              <h2 className="marquee">Search Flights</h2>
              <form onSubmit={submitHandler}>
               
<div className="form-group" >
  <label>From:</label>
  <select id="form"
    className="form-control"
    value={fromLandmark} 
    onChange={handleFromChange}
  >
    <option value="">Select a city</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>

<div className="form-group">
  <label id="fom">To:</label>
  <select id="form"
    className="form-control"
    value={toDestination} 
    onChange={handleToChange}
  >
    <option value="">Select a city</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>
<div className={classes.formfield}>
<label id="fom">Date:</label>
<DatePicker className="form-control" id="form"
selected={date}
onChange={(date) => setDate(date)}
dateFormat="dd/MM/yyyy"
minDate={new Date()}
placeholderText="Choose a date"
/>
</div>
<div className="button-container">
<Button variant="contained" color="primary" type="submit">
Search
</Button>
</div>
</form>
</Paper>
</Grid>
</Grid>
</div>
</div>
);
};

export default Search;
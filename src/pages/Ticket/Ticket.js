import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {useStyles} from "../Add/useStyles";
import './Ticket.css'
import QRCode from "react-qr-code";

const Ticket = () => {
  const {ticketId} = useParams()
  const tickets = useSelector(state => state.ticketReducer)
  const ticket = tickets.find(t => t.ticketId.toString() === ticketId.toString())

  const {title, author, length, price, cover, category, artist} = ticket

  const classes = useStyles();


  return (
    <div className="ticket-page">
      <div className="ticket-page-grid">
        <Grid container>
          <Grid className={classes.root} item xs={12} sm={12}>
            <Paper className={classes.paper__form}>
              <Typography className={classes.form__title} variant="h5" align="center">
                Product Ticket
              </Typography>
              <Grid container spacing={0} justifyContent={'center'}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    size="small"
                    margin="normal"
                    label="Title"
                    defaultValue={title}
                    variant="outlined"
                    className={classes.form__textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    size="small"
                    margin="normal"
                    label="Artist"
                    defaultValue={artist}
                    variant="outlined"
                    className={classes.form__textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    size="small"
                    margin="normal"
                    label="Length"
                    defaultValue={length}
                    variant="outlined"
                    className={classes.form__textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    size="small"
                    id="outlined-disabled"
                    margin="normal"
                    label="Price"
                    defaultValue={`$${price}`}
                    variant="outlined"
                    className={classes.form__textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    size="small"
                    margin="normal"
                    label="Author"
                    defaultValue={author}
                    variant="outlined"
                    className={classes.form__textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    disabled
                    size="small"
                    margin="normal"
                    label="Category"
                    defaultValue={category}
                    variant="outlined"
                    className={classes.form__textField}
                  />
                </Grid>
                <Grid container xs={12} sm={6} direction="row" justifyContent="center">
                  <div className="ticket-img-wrap">
                    <img src={cover} alt={cover}/>
                  </div>
                </Grid>
                <Grid container xs={12} sm={6} direction="row" justifyContent="center">
                  <QRCode value={JSON.stringify(ticket)}/>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Ticket

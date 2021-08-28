import React, {useState} from 'react';
import {
  Button, FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import * as yup from 'yup'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useStyles} from "./useStyles";
import SubmitButton from "./SubmitButton";
import {CUSTOMER_VALIDATOR} from "./contants";
import './Add.css'
import {useDispatch} from "react-redux";
import {addTicket} from "../../redux/reducers/ticketReducer";
import {useHistory} from "react-router-dom";

const schema = yup.object().shape(CUSTOMER_VALIDATOR)

const HookForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory();
  const [isSaving, setIsSaving] = useState(false);
  const [cate, setCate] = useState(null);
  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  })

  const handleSaveSubmit = (formValues) => {
    console.log(formValues)
    const ticketId = Date.now()
    addTicket({...formValues, ticketId})(dispatch)
    history.push(`/ticket/${ticketId}`)
  }

  const handleCateChange = (e) => {
    setCate(e.target.value);
  }

  return (
    <div className="add-page-grid">
      <Grid container>
        <Grid className={classes.root} item xs={12} sm={12}>
          <Paper className={classes.paper__form}>
            <Typography className={classes.form__title} variant="h5" align="center">
              Add Product
            </Typography>
            <form noValidate onSubmit={handleSubmit(handleSaveSubmit)}>
              <Grid container spacing={0} justifyContent={'center'}>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" margin="normal" name="title" id="title"
                             label="Title *" size="small"
                             className={classes.form__textField}
                             autoFocus {...register("title")}
                             error={Boolean(errors.title?.message)}
                             helperText={errors.title?.message}
                             InputLabelProps={{
                               shrink: true,
                             }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" margin="normal" name="artist" id="artist"
                             label="Artist *" size="small"
                             className={classes.form__textField}
                             {...register("artist")}
                             error={Boolean(errors.artist?.message)}
                             helperText={errors.artist?.message}
                             InputLabelProps={{
                               shrink: true,
                             }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" margin="normal" name="length" id="length"
                             label="Length *" size="small"
                             className={classes.form__textField}
                             {...register("length")}
                             error={Boolean(errors.length?.message)}
                             helperText={errors.length?.message}
                             InputLabelProps={{
                               shrink: true,
                             }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" margin="normal" name="price" id="price"
                             label="Price *" size="small"
                             className={classes.form__textField}
                             {...register("price")}
                             error={Boolean(errors.price?.message)}
                             helperText={errors.price?.message}
                             InputLabelProps={{
                               shrink: true,
                             }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField variant="outlined" margin="normal" name="author" id="author"
                             label="Author *" size="small"
                             className={classes.form__textField}
                             {...register("author")}
                             InputLabelProps={{
                               shrink: true,
                             }}
                             error={Boolean(errors.author?.message)}
                             helperText={errors.author?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" margin="normal" className={classes.form__textField}>
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                      name="category"
                      labelId="demo-simple-select-outlined-label"
                      id="category"
                      label="Category"
                      {...register("category")}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={cate}
                      onChange={handleCateChange}
                      error={Boolean(errors.category?.message)}
                      helperText={errors.category?.message}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"pop"}>Pop</MenuItem>
                      <MenuItem value={"classical"}>Classical</MenuItem>
                      <MenuItem value={"folk"}>Folk</MenuItem>
                      <MenuItem value={"jazz"}>Jazz</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid container xs={12} sm={12} direction="row" justifyContent="center">
                  <TextField variant="outlined" margin="normal" name="cover" id="cover"
                             label="Cover *" size="small"
                             className={classes.form__textArea}
                             {...register("cover")}
                             InputLabelProps={{
                               shrink: true,
                             }}
                             error={Boolean(errors.cover?.message)}
                             helperText={errors.cover?.message}
                             multiline
                             rows={4}
                  />
                </Grid>
                <br/><br/>

                <Grid container spacing={2} direction="row" justifyContent="center">
                  <Grid item sm={3}>
                    <SubmitButton fullWidth variant="contained" color="primary"
                                  isSaving={isSaving} text="Save" isSavingText="Saving"/>
                  </Grid>
                  <Grid item sm={3}>
                    <Button type="button" fullWidth variant="contained" color="primary" onClick={() => {
                      // props.history.goBack()
                      reset()
                    }
                    }>
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}


const Add = () => {
  return (
    <div className="add-page">
      <HookForm/>
    </div>
  )
}

export default Add

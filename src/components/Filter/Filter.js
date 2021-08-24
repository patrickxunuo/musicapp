import React, {useEffect, useState} from 'react';
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {filterShowings} from "../../redux/reducers/productReducer";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch()
  const classes = useStyles();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    filterShowings(filter)(dispatch)
  }, [filter])

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Price</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={filter}
        onChange={handleChange}
        label="Price"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>{`>$2`}</MenuItem>
        <MenuItem value={2}>{`$1 - $2`}</MenuItem>
        <MenuItem value={3}>{`<$1`}</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Filter

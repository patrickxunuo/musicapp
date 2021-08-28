import React from 'react';
import {Button, CircularProgress, makeStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({

  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  }
}))


const SubmitButton = ({isSaving,text,isSavingText,...rest}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button type="submit"  {...rest}
              disabled={isSaving}>
        { isSaving ? `${isSavingText}...` : text}
      </Button>
      {isSaving && <CircularProgress size={24} className={classes.buttonProgress}/>}
    </div>
  );
};

export default SubmitButton;

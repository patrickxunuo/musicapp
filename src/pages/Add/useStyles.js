import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper__form: {
    padding: "1rem 1rem",
    margin: "0 auto",
  },
  form__title: {
    marginBottom: ".5rem",
  },
  form__textField: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  form__textArea: {
    width: "95%",
  },
}))

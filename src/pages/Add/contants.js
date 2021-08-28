import * as yup from 'yup';

export const ENABLE_REDUX_DEV_TOOLS = true


export const EMAIL =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const MIN_LENGTH = 1
const MAX_LENGTH = 6
const MIN_PRICE = 0.1
const MIN_CATE = 1


export const CUSTOMER_VALIDATOR = {
  title: yup.string().required().trim(),
  length:yup.number().positive().min(MIN_LENGTH,"Length must be longer than 1 minute.").max(MAX_LENGTH,"Length must be no longer than 10 minutes."),
  price:yup.number().positive().min(MIN_PRICE,"Price must be greater than $1.").required(),
  artist: yup.string().required().trim(),
  author: yup.string().required().trim(),
  category: yup.string().required().trim().min(MIN_CATE,"Please choose a category.").typeError('please choose a category'),
  cover: yup.string().required().trim(),
}

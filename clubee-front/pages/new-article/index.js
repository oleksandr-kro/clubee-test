import { useState, useEffect } from 'react';
import { CommonHead, Header, Footer, Article } from '../../components';
import { TextField, Button } from '@material-ui/core';
import style from './style.module.css';


export default function NewArticle() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isMailValid, setIsMailValid] = useState(true);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    checkForm();
  }, [title, description, email, isMailValid])

  const saveArticle = () => {
    const newArticle = {
      title,
      description,
      email,
      date
    }
    console.log(newArticle);
  }

  const checkForm = () => {
    if (isMailValid && title && description && email) {
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }

  const checkEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(String(email).toLowerCase());
    setIsMailValid(isValid);
  }

  return (
    <div className={ style.container }>
      <CommonHead />
      <Header />
      <main className={ style.main }>
        <h2>Create new article</h2>
        <form className={ style.form }>
          <TextField value={ title } onChange={ (event) => {
            setTitle(event.target.value);
          } } label="Title" variant="outlined" />
          <TextField
            value={ description }
            onChange={ (event) => {
              setDescription(event.target.value);
            } }
            label="Description"
            multiline
            variant="outlined"
          />
          <TextField
            value={ email }
            onChange={ (event) => {
              setEmail(event.target.value);
              checkEmail();
            } }
            error={ !isMailValid }
            label="Email"
            variant="outlined" />
          <TextField
            value={ date }
            onChange={ (event) => {
              setDate(event.target.value);
            } }
            id="date"
            label="Publication date"
            type="date"
            InputLabelProps={ {
              shrink: true,
            } }
          />
          <Button disabled={ disabled } onClick={ saveArticle } variant="contained" size="large" color="primary">
            Save
          </Button>
        </form>

      </main>

      <Footer />
    </div>
  )
}
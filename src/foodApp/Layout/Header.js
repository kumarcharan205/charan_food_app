import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
// import mealsImage from "./src/feratures/foodApp/assests";
import classes from './Header.module.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { brown } from '@mui/material/colors';

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <Button variant="outlined"   onClick={()=>{navigate("/")}}>
       LogOut
        </Button>
      </header>
      <div className={classes['main-image']}>
        <img src='./assets/meals.jpg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
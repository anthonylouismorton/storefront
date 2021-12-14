import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';
import {fetchCategories} from '../../store/categories'

function Headermenu(props) {
  useEffect(()=> {
    props.getCategory();
  }, [])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (e) => {
    props.changeCategory(e);

  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.category.map((item, key) => (
          
          <MenuItem key={key} name={item.displayName} 
          onClick={()=> {
            props.changeCategory(item.displayName); 
            setAnchorEl(null);
          }}>{item.displayName}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => ({category: state.category.category});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (name) =>
      dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
  getCategory: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Headermenu);
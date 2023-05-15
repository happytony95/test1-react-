import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { add } from '../slice/carSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));

const AdditionSection = ({ imagePreview, setImagePreview }) => {
    const classes = useStyles();
    const brandInputRef = useRef();
    const modelInputRef = useRef();
    const yearInputRef = useRef();
    const imageInputRef = useRef();
    const dispatch = useDispatch();
    const [ brand, setBrand ] = useState("");
    const [ model, setModel ] = useState("");
    const [ year, setYear ] = useState("");

    const Open = () => { 
      imageInputRef.current.click();
    }
    let carInfo = {
      brand: brand,
      model: model,
      year: year,
      image: imagePreview
    }

    const clickButton = () => {
      dispatch(add(carInfo));
      brandInputRef.current.value="";
      modelInputRef.current.value="";
      yearInputRef.current.value="";
      setBrand("");
      setModel("");
      setYear("");
      setImagePreview("");
    }
    
    return (
      <div className="flex justify-between">
            <div className="px-6 py-2">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField label="Add a brand" 
                               variant="outlined" 
                               onChange={(e) => setBrand(e.target.value)}
                               inputRef={brandInputRef}
                               />
                    <TextField label="Add a model" 
                               variant="outlined" 
                               onChange={(e) => setModel(e.target.value)}
                               inputRef={modelInputRef}/>
                    <TextField label="Add a year of manufacture" 
                               variant="outlined" 
                               onChange={(e) => setYear(e.target.value)}
                               inputRef={yearInputRef}/>
                    <Button style={{textTransform: 'none'}}  
                            variant="contained" 
                            onClick={() => Open() } 
                            color="primary">
                        Choose Image
                    </Button>
                    <input type="file" 
                           accept=".jpg,.jpeg,.png" 
                           style={{ display: 'none' }} 
                           ref={imageInputRef}
                           onChange={(e) => {
                             if (e.target.files[0]) {
                                setImagePreview( URL.createObjectURL(e.target.files[0]))
                             }
                           }} />  
                </form>
            </div>
            <div className="px-8 pt-3">
                <Button style={{textTransform: 'none'}} variant="contained" onClick={clickButton}> Add </Button>
            </div>
      </div>
    );  
}

export default AdditionSection;
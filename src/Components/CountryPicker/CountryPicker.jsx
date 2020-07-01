import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';


const CountyPicker=({handleCountryChange})=>{
    const [fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async ()=>{
            setfetchedCountries(await fetchCountries());
        }
        fetchAPI()
    },[setfetchedCountries]);
    console.log(fetchedCountries);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((countries,index)=><option key={index} value={countries}>{countries}</option>)};
            </NativeSelect>
        </FormControl>
    )
}

export default CountyPicker;
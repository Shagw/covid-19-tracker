import React from 'react';

import {Cards,Chart,CountryPicker} from './Components'
import styles from './App.module.css';
import {fetchData} from './api';
import coronaimage from './images/image.png'

class App extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         data:{},
         country:'',
      };
    };
    

    async componentDidMount(){
        const fetcheddata=await fetchData();
        
       this.setState({data:fetcheddata})
       
    }

    handleCountryChange=async (country)=>{
        const fetcheddata=await fetchData(country);
        console.log(fetcheddata);
        this.setState({data:fetcheddata, country:country});
        console.log(country); 
        //fetch the data and then set the state

    }

    render(){
        const {data,country}=this.state;
        
        return(
            <div className={styles.container} >
                <img className={styles.image} src={coronaimage} alt="COVID-19"/>
                <Cards  data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart  data={data} country={country}/>
            </div>
        )
    }
}

export default App;
import React from 'react';
import {Cards, Charts, CountryPicker, ControlledExpansionPanels, BarGraph, SimpleExpansionPanel} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import image from './images/images.jpeg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    //console.log(data);
    //console.log(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const {data, country}=this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <ControlledExpansionPanels/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        
        <Cards data={data}/>
        <BarGraph data={data}/>
        <Charts data={data} country={country}/>
        <SimpleExpansionPanel/>
      </div>
    )
  }
}
export default App;
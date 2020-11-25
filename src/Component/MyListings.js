import React, { Component } from 'react'
import service from "../api/service"
import FlatlistCard from "./FlatlistCard";

export class MyListings extends Component {
    state = {
        listOfFlats: [],
      };

      componentDidMount() {
        this.fetchAllFlats();
      }
    

      fetchAllFlats = () => {
        service.myFlats()
        .then( (response) =>{
          const flats = response;
          this.setState({ listOfFlats: flats})
        })
        .catch( (err) => console.log(err));
      }
    
 
    render() {
        return (
            <div>
            <h1>My Listings</h1>
            <div>
                 {this.state.listOfFlats.map((element, index) => {
            return <FlatlistCard key={index} {...element} />;
          })}
            </div>
            </div>
        )
    }
}

export default MyListings

import React from 'react';
import './App.css';

class App extends React.Component{

  constructor (props) {
    super(props)

    this.state = {
      base: [],
      isFetch: true,
    }
  }

componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
    })
  }

render (){

  return(
    <div>fetch</div>

  );
}
} 



export default App;

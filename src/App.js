import React from 'react';
import './App.css';

class App extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
    }
  }


componentDidMount (){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then (json => {

      this.setState ({
          isLoaded:true,
          items: json,

      })

  }); 
}


render (){

  var {isLoaded, items} = this.state;

  if(!isLoaded){

    return <div>Loading..........</div>
  }else{
    return(
     <div className ="App">
      Data has been Loader
        <ul>
          {items.map(item => (
            <li key={item.id}>
              name:{item.name} | Email: {item.email}
            </li>
          ))};
        </ul>
    </div>
    );
  }

  }

  
} 

export default App;


/*
componentDidMount (){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (response => response.json())
  .then (baseJson => this.setState({base: baseJson.result, isFetch:false}))
}
*/

/*
componentDidMount(){
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(response => {
    return response.json();
    })
    .then(response => {
      this.setState.base = response;
      const baseJson = this.setState.base;
      console.log(baseJson.squadName);
      console.log(baseJson.members);
      console.log(baseJson.members[0].name);
      console.log(baseJson.members[1].name);
      console.log(baseJson.members[2].name);
    })
  }
*/


/*
componentDidMount () {

    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(response => response.json())
    .then(baseJson => this.setState({base:baseJson.result}) )
    const baseJsonTemp = this.state.base[0]
    console.log("-->"+baseJsonTemp)
  }

  render (){
    //const name = this.state.base[0]
    
  return(
    <div>fetch</div>

    );
  }
} 

*/



 



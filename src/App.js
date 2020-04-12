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

async postData(){
    try {
      let  result = await fetch('https://webhook.site/82ad0feb-9c6d-4548-951d-2e72b994c193',{
        method:'post',
        mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'Content-type' : 'application/json',
        },

        body: JSON.stringify({
            key1: 'Die',
            email:'diego.burgos@naranjax.com',
            name:'Diego S',
            lastName:'Burgos',
        })
      });
      console.log('Result: '+result);
    } catch (e) {
      console.console.log(e);  
    }


}

render (){

  var {isLoaded, items} = this.state;
  //console.log(this.state.items);

  if(!isLoaded){

    return <div>Loading..........</div>

  }else{

    return(

    <div className="App">

      <header className="header">
        User Header
      </header>
      <content>
        User Search
        <form id="search-form">
          <input type="text" placeholder="Enter User DNI"/>
          <button onClick={() => this.postData() } >Data post</button>
        </form>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              name:{item.name} | Email: {item.email}
            </li>
          ))};
        </ul>
      </content>
    </div>
    );
  }

  }
} 

export default App;
//https://www.youtube.com/watch?v=hzLDsxPGctY get
//https://www.youtube.com/watch?v=8SkiIAbFbNs post


 



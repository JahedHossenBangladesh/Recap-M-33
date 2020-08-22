import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const[apiName,setApiname] = useState([])
useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setApiname(data))

},[])





  const naoks = ['Joshim','Alomgir','Manna','Faruk','Salman Shah'];
  const celas = ['Dildar','Abul','Rubel']
  const naoksObj =[
    { naok:'Joshim',
      cela:'Dildar'   },
      { naok:'Jos',
      cela:'Dil'},
      { naok:'Josh',
      cela:'Dild'},
      { naok:'Joshi',
      cela:'Dilda'}
];
  return (
    <div className="App">
      <Counter> </Counter>
<h2 style={{backgroundColor:'yellow'}}>this is done by Api </h2>
{
 apiName.map(api => <ApiData name ={api.name} key ={api.id} email ={api.email}></ApiData> )
}


      <h2 style={{backgroundColor:'yellow'}}> This a list</h2>
{
  naoks.map(nk => <li>{nk}</li>)
}
<h1 style={{backgroundColor:'yellow'}} > This is made By Array</h1>
{
  naoks.map(nk => <Naiok name = {nk}></Naiok>)
}
<h1 style={{backgroundColor:'yellow'}} >This is made by object</h1>
{
  naoksObj.map(nak => <Naiok name ={nak.naok} cela ={nak.cela}></Naiok>)
}
        <Naiok name={naoks[0]} cela={celas[0]}></Naiok> 
       
         
   <header className="App-header">
     <h1 style={{backgroundColor:'yellow ', color:'red'}} > this is make by use array [0] or .... element by using the property value and props</h1>
   <Naiok name ={naoks[1]} cela={celas[1]}Naiok></Naiok>
    <Naiok name= {naoks[2]} cela={celas[2]}> </Naiok>
    <Naiok name= {naoks[3]} cela={celas[3]}> </Naiok>
    <Naiok name= {naoks[4]} > </Naiok>
        <img src={logo} className="App-logo" alt="logo"/>
        
  </header>
    </div>
  );
}

function Counter(){
const [count,setCount] = useState(0);
const increase = () => setCount(count + 1);
 const decrise = () => setCount(count - 1);

  return(<div>
     <button onClick={() => setCount(count + 1)}>Increase Me</button>
     <button onClick={() => setCount(count - 1)}>Decrise Me</button>
     <h3>You click the button:{count} </h3>
     <Movie movies={count}></Movie>
     <Movie movies ={count}></Movie>
     <Movie movies = {count + 2}></Movie>

     </div>


  )}

function ApiData(props){

  return(
<div>
<h2>The name is :{props.name}</h2>
  <h4>The email is : {props.email}</h4>


</div>


  )
}
function Movie(props){

return <h3>Listed movie i Act :{props.movies} </h3>

}

function Naiok(props){
  const style ={
    border:'2px solid red',
    margin:'5px',
    borderRadius:'30px'
  }
          return (
            <div style={style}>
                <h2>This  is naoik:{props.name}</h2>
                <h5> this is naoik chela pela:{props.cela || 'Dilar'}</h5>
           </div>
  )
}

export default App;

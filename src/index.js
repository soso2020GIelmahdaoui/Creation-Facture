import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap/Modal';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/*
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="soso" />
        <Greeting />
      </div>
    );
  }
}


class Header extends React.Component {
render() {
return (
  <header>
    <p>Welcome,{this.props.username}</p>
  </header>
)

}
}

class Greeting extends React.Component {
render() {
const date=new Date()
const hours=date.getHours()
let timeofDay
if(hours<12){
  timeofDay="morning"
}else if(hours>=12){
  timeofDay="afternoon"
}else{
  timeofDay="night"
}
return(
  <h1>Good {timeofDay} to you sir</h1>
)
}}
ReactDOM.render(<App />, document.getElementById("root"))



export default class App extends React.Component{
state={
  count: 0,
}
add =() => {
   this.setState(prevState =>({count:prevState.count + 1}) );
}
sub =() => {
   this.setState(prevState =>({count:prevState.count - 1}) );
}

render() {
  return (
    <div>
      <button onClick={this.add}>Add</button>
      <button onClick={this.sub}>Sub</button>
      <h1>{this.state.count}</h1>
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById("root"))*/
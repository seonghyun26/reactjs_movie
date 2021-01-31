import React from "react";

<<<<<<< HEAD


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
=======
class App extends React.Component{
  state = {
    isLoading: true
  }
  
  componentDidMount(){
    setTimeout( () => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  
  render(){
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{ isLoading ? "Loading..." : "Ready!"}</h1>
      </div>
    );
  }
>>>>>>> 3_state
}

export default App;
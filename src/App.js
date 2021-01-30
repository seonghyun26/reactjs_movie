import React from "react";

function Food({ name, type }){
  return <h3>I like {name} ({type})</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food name="kimchi"/>
      <Food name="rice"/>
      <Food name="ramen" type="noodle"/>
    </div>
  );
}

export default App;

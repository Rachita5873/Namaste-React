// const heading = React.createElement("h1", {id: "heading"}, "Hello World!");


const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {id: "h1"},"My first heading"), React.createElement("h2", {id: "h2"},"My second heading")] ))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
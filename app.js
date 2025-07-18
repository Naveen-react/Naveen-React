




const parent = React.createElement(
    "div",
    { id: "parent" }, 
    React.createElement("div", {id:"child"}, "I am a child"),
    React.createElement("div", {id:"child"}, "I am another child"),

);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);






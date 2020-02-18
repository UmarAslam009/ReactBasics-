// Contional Rendering
const app = {
  title: "Indecision App",
  subtitle: "Add items",
  options: ["one", "two"]
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    reRenderApp();
  }
};
const emptyArray = () => {
  app.options = [];
  reRenderApp();
};
var appRoot = document.getElementById("app");
const onMakeDecision=()=>{
  const randomNumber=math.floor(math.random()* app.options.length)
  const option=app.options[randomNumber]
  alert(option)
}
const reRenderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>here are your optios</p>
      <button disabled={app.options.length===0} onClick={onMakeDecision}>whats should i do?</button>
      <button onClick={emptyArray}>remove</button>
      <ol>
        {app.options &&
          app.options.map((event, index) => {
            return <li key={index}>{event} </li>;
          })}
      </ol>
      <p>umar</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
reRenderApp();

// const userName = {
//   name: "umar",
//   age: "18",
//   location: "lahore"
// };
// function getLocation(location) {
//   if (location) {
//     return <p>{location}</p>;
//   }
// }
// const template2 = (
//   <div>
//     <h1>Name :{userName.name ? userName.name.toUpperCase() + "!" : ""}</h1>
//     {userName.age == 18 && <p>{userName.age}</p>}
//     {getLocation(userName.location)}
//   </div>
// );
// var template = React.createElement(
//   "h1",
//   { id: "someid" },
//   "Something new"
// );

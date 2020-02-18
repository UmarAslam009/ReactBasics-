// let count = 0;
// const addOne = () => {count++; renderApp()};
// const minusOne = () => {count--;renderApp()};
// const reset = () => { count=0,renderApp()};
// const someId = "myId";

// //var appRoot = document.getElementById("app");
// const renderApp=()=>{
//   const templateTwo = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   //ReactDOM.render(templateTwo, appRoot);
// }

// //renderApp();
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }
  handleAddOne() {
    // this.state.count++;
    this.setState(preState => {
      return {
        count: preState.count + 1
      };
    });
  }
  handleMiusOne() {
    this.setState(preState => {
      return {
        count: preState.count - 1
      };
    });
  }
  resetButton() {
    this.setState(preState => {
      return {
        count: (preState.count = 0)
      };
    });
    this.setState(preState => {
      return {
        count: preState.count +1
      };
    });

    // this.setState({
    //   count:0
    // });
    // this.setState({
    //   count:this.app.count +1
    // });
  }
  render() {
    const title = "string tilte";
    const subTitle = "React is kamal";
    const action = "What should i do now";
    const options = ["thing 1", "thing 2", "thing 3"];
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne.bind(this)}>ADD</button>
        <button onClick={this.handleMiusOne.bind(this)}>-1</button>
        <button onClick={this.resetButton.bind(this)}>Reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  count: 0
};
ReactDOM.render(<Counter />, document.getElementById("app"));

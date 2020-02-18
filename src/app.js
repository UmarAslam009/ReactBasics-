const obj = {
  name: "umar",
  getName() {
    return this.name;
  }
};
// const getName=obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      option: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("option");
      const option = JSON.parse(json);
      if (option) {
        this.setState(() => ({ option }));
      }
    } catch (e) {}
  }
  componentDidUpdate(preveProps, preState) {
    if (preState.option.length !== this.state.option.length) {
      const json = JSON.stringify(this.state.option);
      localStorage.setItem("option", json);
    }
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  handelDeleteOptions() {
    // this.setState(() => {
    //   return { option: [] };
    // });
    this.setState(() => ({ option: [] }));
  }
  handelDeleteSingleOptions(option) {
    const array = [];
    this.state.option.map((element, index) => {
      if (index != option) {
        array.push(element);
      }
    });
    if (array) {
      this.setState(() => ({ option: [...array] }));
    }
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.option.length);
    const option = this.state.option[randomNumber];
    alert(option);
  }
  handleAdd(option) {
    if (!option) {
      return "Enetr valid value";
    } else if (this.state.option.indexOf(option) > -1) {
      return "this item already exists";
    } else {
      this.setState(preSate => ({ option: [...preSate.option, option] }));
    }
  }
  render() {
    const title = "string tilte";
    const subTitle = "React is kamal";
    const action = "What should i do now";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          length={this.state.option.length > 0 ? false : true}
          action={action}
          handlePick={this.handlePick.bind(this)}
        />
        <Options
          options={this.state.option}
          handelDeleteOptions={this.handelDeleteOptions}
          handelDeleteSingleOptions={this.handelDeleteSingleOptions.bind(this)}
        />
        <AddOption handleAdd={this.handleAdd} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.subTitle}</h2>
    </div>
  );
};
Header.defaultProps = {
  title: "some deafult!"
};
IndecisionApp.defaultProps = {
  option: []
};

const Action = props => {
  const handlePick = () => {
    alert("handelClick");
  };

  return (
    <div>
      <button disabled={props.length} onClick={props.handlePick}>
        {props.action}
      </button>
    </div>
  );
};
const Options = props => {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }
  // handleRemoveAll() {
  //   console.log(this.props.options);
  //   alert("handelRemoveAll");
  // }
  return (
    <div>
      <button onClick={props.handelDeleteOptions}>Remove All</button>
      {props.options.map((e, i) => {
        return (
          <Option
            onClick={props.handelDeleteSingleOptions}
            id={i}
            key={i}
            option={e}
            handelDeleteSingleOptions={props.handelDeleteSingleOptions}
          />
        );
      })}
    </div>
  );
};
const Option = props => {
  return (
    <div>
      <p>{props.option}</p>
      <button
        onClick={e => {
          props.handelDeleteSingleOptions(props.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  handelAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAdd(option);
    this.setState(() => {
      return {
        error: error
      };
    });
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handelAddOption.bind(this)}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}
// const User = (props) => {
//   return (
//     <div>
//       <p>name: </p>
//       <p>Age: </p>
//     </div>
//   );
// };
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

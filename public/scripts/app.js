"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
  name: "umar",
  getName: function getName() {
    return this.name;
  }
};
// const getName=obj.getName.bind(obj);
// console.log(getName());

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handelDeleteOptions = _this.handelDeleteOptions.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.state = {
      option: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("option");
        var option = JSON.parse(json);
        if (option) {
          this.setState(function () {
            return { option: option };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preveProps, preState) {
      if (preState.option.length !== this.state.option.length) {
        var json = JSON.stringify(this.state.option);
        localStorage.setItem("option", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("ComponentWillUnmount");
    }
  }, {
    key: "handelDeleteOptions",
    value: function handelDeleteOptions() {
      // this.setState(() => {
      //   return { option: [] };
      // });
      this.setState(function () {
        return { option: [] };
      });
    }
  }, {
    key: "handelDeleteSingleOptions",
    value: function handelDeleteSingleOptions(option) {
      var array = [];
      this.state.option.map(function (element, index) {
        if (index != option) {
          array.push(element);
        }
      });
      if (array) {
        this.setState(function () {
          return { option: [].concat(array) };
        });
      }
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNumber = Math.floor(Math.random() * this.state.option.length);
      var option = this.state.option[randomNumber];
      alert(option);
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(option) {
      if (!option) {
        return "Enetr valid value";
      } else if (this.state.option.indexOf(option) > -1) {
        return "this item already exists";
      } else {
        this.setState(function (preSate) {
          return { option: [].concat(_toConsumableArray(preSate.option), [option]) };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = "string tilte";
      var subTitle = "React is kamal";
      var action = "What should i do now";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Action, {
          length: this.state.option.length > 0 ? false : true,
          action: action,
          handlePick: this.handlePick.bind(this)
        }),
        React.createElement(Options, {
          options: this.state.option,
          handelDeleteOptions: this.handelDeleteOptions,
          handelDeleteSingleOptions: this.handelDeleteSingleOptions.bind(this)
        }),
        React.createElement(AddOption, { handleAdd: this.handleAdd })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};
Header.defaultProps = {
  title: "some deafult!"
};
IndecisionApp.defaultProps = {
  option: []
};

var Action = function Action(props) {
  var handlePick = function handlePick() {
    alert("handelClick");
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: props.length, onClick: props.handlePick },
      props.action
    )
  );
};
var Options = function Options(props) {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }
  // handleRemoveAll() {
  //   console.log(this.props.options);
  //   alert("handelRemoveAll");
  // }
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handelDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (e, i) {
      return React.createElement(Option, {
        onClick: props.handelDeleteSingleOptions,
        id: i,
        key: i,
        option: e,
        handelDeleteSingleOptions: props.handelDeleteSingleOptions
      });
    })
  );
};
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      props.option
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handelDeleteSingleOptions(props.id);
        }
      },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handelAddOption",
    value: function handelAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAdd(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handelAddOption.bind(this) },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Options"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);
// const User = (props) => {
//   return (
//     <div>
//       <p>name: </p>
//       <p>Age: </p>
//     </div>
//   );
// };


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));

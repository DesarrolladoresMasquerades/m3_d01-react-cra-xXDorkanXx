import "./App.css";
import ironhackLogo from "./assets/ironhack-logo.png";

//   JSX expressions like the one below are converted to JS by Babel:
const element = <h1>Hello world!</h1>;
// => var element = React.createElement('h1', null, 'Hello, world!');

const heading = <h1>🥁🥁🥁 React is cool! 🎉</h1>;

const student = {
  firstName: "ana",
  lastName: "martinez",
};

const { firstName, lastName } = student;

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const theId = "home";
const divElement = <div id={theId}></div>;

function App() {
  return (
    <div className="App">
      
      {heading}
      
      <h3>
        {/* You can turn this to {firstName} {lastName} */}
        Hi, {student.firstName} {student.lastName}
      </h3>

      <h4>
        In uppercase: {firstName.toUpperCase()} {lastName.toUpperCase()}
      </h4>

      <h4>
        Capitalized:
        {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
      </h4>

      {divElement}

      <img src={ironhackLogo} alt="ironhack logo" />

      <br />
      <hr />
      
      <label htmlFor="username" className="control-label">
        Username
      </label>

        <div>
        {/* some comment here */}
        
      </div>
    </div>
  );
}

export default App;

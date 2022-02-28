import "./App.css";
import ironhackLogo from "./assets/ironhack-logo.png";

//   JSX expressions like the one below are converted to JS by Babel:
const element = <h1>Hello world!</h1>;
// => var element = React.createElement('h1', null, 'Hello, world!');

const heading = (<h1>🥁🥁🥁 React is cool! 🎉</h1>); //The equivalent to an arrow function

const students = {
  firstName: "ana",
  lastName: "martinez",
};

const student = [
  "Anna",
  "Marco"
];

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

      <button onClick={()=>console.log("Hello from the button")}>Click Me!</button>

      <p>What if I want to print a number? {0}</p>
      
      <h3>
        {/* You can turn this to {firstName} {lastName} */}
        Hi, {student.firstName} {student.lastName}
      </h3>

      <ul>
        {students.map(name=><li>{name}</li>)}
      </ul>

      <h4>
        In uppercase: {firstName.toUpperCase()} {lastName.toUpperCase()}
      </h4>

      <h4>
        Capitalized:
        {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
      </h4>

      {divElement}

      <img src={ironhackLogo} alt="ironhack logo" /> {/* If IronhackLogo is a string this behaves normally,
                                                      if it's an image, the image will be embedded*/}

      <br />
      <hr />
      
      <label htmlFor="username" className="control-label cappuccino-class">
        Username
      </label>

        <div>
        {/* some comment here */}
        
      </div>
    </div>
  );
}

export default App;

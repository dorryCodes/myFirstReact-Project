import ReactDOM from "react-dom/client";
import Joke from "./joke.jsx";
import jokesData from "../../jokesData.js";

const jokeElement = jokesData.map((joke) => {
  return <Joke setup={joke.setup} punchline={joke.punchline} />;
});
function Jokes() {
  return <>{jokeElement}</>;
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Jokes />);

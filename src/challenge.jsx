import ReactDOM from "react-dom/client";
{
  /*
const nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => Math.pow(num, 2));
console.log(square);

const names = ["alice", "bob", "charles", "danielle"];
const Capital = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(Capital);

const pokemon = ["Bulbasaur", "charmander", "squirtle"];
const moreadd = pokemon.map((mon) => `<p>${mon}</p>`);
console.log(moreadd);

const name = "dorry";
const beb = name[0].toUpperCase() + name.slice(1);*/
}

function App() {
  const ninjaTurtles = [<h2>donatello</h2>, <h2>michaelangelo</h2>];
  return <>{ninjaTurtles}</>;
}
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

import ReactDOM from "react-dom/client";
function Footer() {
  const Name = "Mtu Nguyaz";
  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Asubuhi";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Alasiri";
  } else if (hours < 21) {
    timeOfDay = "Jioni";
  } else {
    timeOfDay = "Usiku";
  }
  return (
    <>
      <h1>
        Mambo {Name} sahi ni {timeOfDay}
      </h1>
    </>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Footer />);

import ReactDOM from "react-dom/client";
import Apps from "./Apps.jsx";
import mrWhiskerson from "./assets/cat1.jpeg";
import FluffyKins from "./assets/cat2.jpeg";
import Felix from "./assets/cat3.jpeg";
import Pumpkin from "./assets/cat4.jpeg";
function Contacts() {
  return (
    <>
      <Apps
        img={mrWhiskerson}
        name="Mr.Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskerkaz@catnap.meow"
      />

      <Apps
        img={FluffyKins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />

      <Apps
        img={Felix}
        name="Felix"
        phone="(212 555-4567"
        email="thecat@hotmail.com"
      />

      <Apps
        img={Pumpkin}
        name="Pumpkin"
        phone="(0800) CAT QUEEN"
        email="pumpkin@scrimba.com"
      />
    </>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Contacts />);

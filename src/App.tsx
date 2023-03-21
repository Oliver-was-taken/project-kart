import { useState } from "react";
import "./App.css";
import Review from "./Review";
import reviews from "./reviews.json";
import vaxMerstappen from "./assets/vax_merstappen.jpg";
import karta from "./assets/karta.jpg";
import john from "./assets/john.jpg";

const images = [vaxMerstappen, karta, john];

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <h1 style={{ userSelect: "none" }}>
        F
        <span
          onClick={() => setCount((prev) => (prev + 1) % 10)}
          style={{ cursor: "pointer" }}
        >
          {count}
        </span>
        RT
      </h1>
      <h3>
        Introducing the ultimate speed demon of the track - our blazing fast
        go-kart that'll leave your heart racing and your adrenaline pumping!
        With lightning-fast acceleration and hair-raising top speeds that rival
        even the fiercest Formula One cars, you'll feel like a true racing
        champion as you take on every twist and turn of the course. So strap in,
        hold on tight, and get ready for the ride of your life with our
        lightning-fast go-kart - the ultimate thrill seeker's dream come true!
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {reviews.map((val, idx) => (
          <Review
            review={val.review}
            star={val.stars as 4 | 4.5 | 5}
            image={images[idx]}
            name={val.name}
            direction={idx % 2 == 0 ? "left" : "right"}
          />
        ))}

        <h2>Specifications</h2>
        <p>
          Engine Power: The F1RT go-kart packs a punch with a powerful 200cc
          engine, delivering lightning-fast acceleration and a top speed that
          can compete with even the fastest Formula One cars. <br />
          Engine Revs: This go-kart is built for speed, with an impressive
          redline of 12,000 RPM that will leave you breathless. <br />
          Safety: None.
          <br /> Design: With a sleek and aerodynamic design, the F1RT looks as
          fast as it drives. Its low center of gravity and lightweight
          construction make it incredibly nimble and responsive on the track.
          <br />
          Weight: Weighing just 200 kilograms, the F1RT is lightweight and
          maneuverable, providing drivers with the speed and agility they crave.
        </p>
      </div>
    </div>
  );
}

export default App;

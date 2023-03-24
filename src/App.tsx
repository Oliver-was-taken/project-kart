import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Review from "./Review";
import reviews from "./reviews.json";
import vaxMerstappen from "./assets/vax_merstappen.jpg";
import karta from "./assets/karta.jpg";
import john from "./assets/john.jpg";
import kart from "./assets/cart.svg";
import redbull from "./assets/f1car-rb.png";
import AOS from "aos";

const images = [vaxMerstappen, karta, john];
const SCROLL_MULTIPLIER_KART = 3;
const SCROLL_MULTIPLIER_CAR = 2;

function App() {
  const [count, setCount] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const reviewDivRef = useRef<HTMLDivElement>(null);
  const kartRef = useRef<HTMLImageElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const raceRef = useRef<HTMLDivElement>(null);

  const test: number = "Hallsfgerdseghdtarhetadrhjrzaj";

  useEffect(() => {
    AOS.init();

    const observer = new IntersectionObserver((entries) => {
      setScrolled(entries[0].isIntersecting);
    });

    observer.observe(reviewDivRef.current!);

    document.addEventListener("scroll", () => {
      const currScroll = window.scrollY;
      const documentHeight = document.body.clientHeight;

      const scrollPercent = currScroll / documentHeight;

      const kartPosition =
        scrollPercent *
        SCROLL_MULTIPLIER_KART *
        (document.body.clientWidth - kartRef.current!.clientWidth);
      const carPosition =
        scrollPercent *
        SCROLL_MULTIPLIER_CAR *
        (document.body.clientWidth - carRef.current!.clientWidth);

      kartRef.current!.style.left = `${kartPosition}px`;
      carRef.current!.style.left = `${carPosition}px`;
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.title = `F${count}RT`;
  }, [count]);

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
      <div className={`scroll-down ${scrolled ? "scrolled" : ""}`}>
        Scroll down &darr;
      </div>
      <h3>
        Introducing the ultimate speed demon of the track - our blazing fast
        go-kart that'll leave your heart racing and your adrenaline pumping!
        With lightning-fast acceleration and hair-raising top speeds that rival
        even the fiercest Formula One cars, you'll feel like a true racing
        champion as you take on every twist and turn of the course. So strap in,
        hold on tight, and get ready for the ride of your life with our
        lightning-fast go-kart - the ultimate thrill seeker's dream come true!
      </h3>
      <div id={"race"} ref={raceRef}>
        <img src={redbull} alt="F1 Car" ref={carRef} id={"car"} />
        <img src={kart} alt="F1RT" ref={kartRef} id={"kart"} />
      </div>
      <div>
        <div ref={reviewDivRef}>
          <h2>Our Reviews</h2>
          {reviews.map((val, idx) => (
            <Review
              key={idx}
              review={val.review}
              star={val.stars as 4 | 4.5 | 5}
              image={images[idx]}
              name={val.name}
              direction={idx % 2 == 0 ? "left" : "right"}
            />
          ))}
        </div>

        <h2>Specifications</h2>
        <table id={"specifications"}>
          <tr>
            <th>Engine Power:</th>
            <td>
              The F1RT go-kart packs a punch with a powerful 200cc engine,
              delivering lightning-fast acceleration and a top speed that can
              compete with even the fastest Formula One cars.
            </td>
          </tr>
          <tr>
            <th>Engine Revs:</th>
            <td>
              This go-kart is built for speed, with an impressive redline of
              12,000 RPM that will leave you breathless.
            </td>
          </tr>
          <tr>
            <th>Safety:</th>
            <td>None.</td>
          </tr>
          <tr>
            <th>Design:</th>
            <td>
              With a sleek and aerodynamic design, the F1RT looks as fast as it
              drives. Its low center of gravity and lightweight construction
              make it incredibly nimble and responsive on the track.
            </td>
          </tr>
          <tr>
            <th>Weight:</th>
            <td>
              Weighing just 200 kilograms, the F1RT is lightweight and
              maneuverable, providing drivers with the speed and agility they
              crave.
            </td>
          </tr>
        </table>
      </div>
      <div></div>
    </div>
  );
}

export default App;

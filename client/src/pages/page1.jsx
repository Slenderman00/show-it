import "../App.css";
import {
  Distribute25252525,
  Distribute5050,
  Distribute2575,
  Distribute255025,
  Distribute100,
} from "../components/grid/distribution/gridDistribution";
import Infotext from "../components/infotext/infotext";

export default function Page1() {
  return (
    <>
      <Distribute100
        one={
          <>
            <br />
            <br />
          </>
        }
      />
      <Distribute25252525
        one={<div style={{ backgroundColor: "red" }}>test</div>}
        two={<div style={{ backgroundColor: "green" }}>test</div>}
        three={<div style={{ backgroundColor: "yellow" }}>test</div>}
        four={<div style={{ backgroundColor: "purple" }}>test</div>}
      />
      <Distribute255025
        one={<div style={{ backgroundColor: "purple" }}>test</div>}
        two={<div style={{ backgroundColor: "green" }}>test</div>}
        three={<div style={{ backgroundColor: "yellow" }}>test</div>}
      />
    </>
  );
}

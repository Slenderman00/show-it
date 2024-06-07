import "../App.css";
import {
  Distribute25252525,
  Distribute5050,
  Distribute2575,
  Distribute255025,
  Distribute100,
} from "../components/grid/distribution/gridDistribution";
import ImplementThis from "../components/implementThis/implementThis";

export default function CreateNew() {
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
      <Distribute255025
        two={<ImplementThis src="/show-it/mockup_create.png"/>}
      />
    </>
  );
}

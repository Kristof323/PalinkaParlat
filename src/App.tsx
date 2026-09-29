import { Torp } from "./components/Torp";
import { torpCsalad } from "./data/torpok";

const handleFunction = (nev: string, kor: number) => {
  alert(`${nev} ${kor} éves.`);
};

function App() {
  return (
    <>
      <h1>Törpök</h1>

      {torpCsalad.map((torp) => (
        <Torp
          key={torp.nev}
          torpNeve={torp.nev}
          torpKora={torp.kor}
          muvelet={() => handleFunction(torp.nev, torp.kor)}
        />
      ))}
    </>
  );
}

export default App;
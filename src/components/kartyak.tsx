interface kartya1Props {
  cardHeader: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
}

export function Kartya1(props: kartya1Props) {
  return (
    <div className="card1">
      <h3>{props.cardHeader}</h3>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
      <p>{props.paragraph3}</p>
      <p>{props.paragraph4}</p>
      <p>{props.paragraph5}</p>
    </div>
  );
}

interface kartya2Props {
  cardHeader: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
}

export function Kartya2(props: kartya2Props) {
  return (
    <div className="card2">
      <h3>{props.cardHeader}</h3>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
      <p>{props.paragraph3}</p>
      <p>{props.paragraph4}</p>
      <p>{props.paragraph5}</p>
    </div>
  );
}

interface kartya3Props {
  cardHeader: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
}

export function Kartya3(props: kartya3Props) {
  return (
    <div className="card3">
      <h3>{props.cardHeader}</h3>
      <p>{props.paragraph1}</p>
      <p>{props.paragraph2}</p>
      <p>{props.paragraph3}</p>
      <p>{props.paragraph4}</p>
      <p>{props.paragraph5}</p>
    </div>
  );
}
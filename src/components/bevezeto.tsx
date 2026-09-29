interface BevezetoProps {
    cardHeader: string;
    paragaph1: string;
    paragaph2: string;
    paragaph3: string;
}

export function Bevezeto(props: BevezetoProps){
    return(
        <section>
            <h3>{props.cardHeader}</h3>
            <p>{props.paragaph1}</p>
            <p>{props.paragaph2}</p>
            <p>{props.paragaph3}</p>
        </section>
    )
}

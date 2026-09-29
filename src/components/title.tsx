interface TitleProps {
    cim: string;
    alcim: string;
}

export function Title(props: TitleProps) {
    return <>
    <div className="row">
        <div className="col-sm-12 kartya mb-3">
          <div className="mt-2 mb-1 p-5 bg-primary text-white rounded">
            <h1 id="focim">{props.cim}</h1>

            <p className="mb-0">{props.alcim}</p>
          </div>
        </div>
      </div>

    </>
}

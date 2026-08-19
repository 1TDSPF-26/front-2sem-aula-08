interface CardProps {
    title?: string;
    nomeProduto?: string;
}

export default function Card(props: CardProps){
    return(
        <div>
            {props.title && <h2>{props.title}</h2>}
            {props.nomeProduto && <p>{props.nomeProduto}</p>}
        </div>
    );
}
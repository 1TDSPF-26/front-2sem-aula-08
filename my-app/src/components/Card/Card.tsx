export default function Card(props){
    return(
        <div>
            <h2>{props.tittle}</h2>
            <p>Nome do produto : {props.nomeProduto}</p>
        </div>
    );
}

import Card from "../Card/Card";

export default function Conteudo(){
    return(
        <main>
            <h2>Conteúdo aleatório</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur vitae alias voluptatibus a amet excepturi explicabo provident ipsa. 
            Consequuntur, veniam! Excepturi nobis explicabo porro laboriosam.</p>
            <Card title="Meu primeiro Card" nomeProduto="Tv"/>
            <Card title="Meu segundo Card" nomeProduto="Microfone"/>
        </main>
    );
}
import Card from "../Card/Card";

export default function Main() {
    return (
        <main>
            
            <section>
                <h2>Meu componente</h2>
                <p>
                Este é o conteúdo principal do meu site. Uma estrutura simples,
                organizada e responsiva.
                </p>
                <button>Saiba mais</button>
            </section>
            <section>
                <h2>Sobre</h2>
                <p>
                lorem200 
                </p>
            </section>

            <Card title="Meu primeiro Card" nomeProduto="TV"/>
            <Card title="Meu segundo Card" nomeProduto="Microfone"/>
            
        </main>
    );
}
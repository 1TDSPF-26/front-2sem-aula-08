export default function Main() {
    return (
        <div>
            <main id="inicio" className="main">
                <div className="container">
                <section className="hero">
                    <h2>Meu componente</h2>
                    <p>
                    Este é o conteúdo principal do meu site. Uma estrutura simples,
                    organizada e responsiva.
                    </p>

                    <button>Saiba mais</button>
                </section>

                <section id="sobre" className="content">
                    <h2>Sobre</h2>
                    <p>
                    Aqui você pode colocar as informações do seu projeto,
                    apresentação, serviços ou qualquer outro conteúdo.
                    </p>
                </section>
                </div>
            </main>
        </div>
    );
}
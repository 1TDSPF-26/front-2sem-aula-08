import Card from "../Card/Card";

export default function Conteudo(){
  return(
    <main>
      <h2>Conteúdo</h2>
      <p>Este é o conteúdo principal da página. Neste espaço, você pode inserir o conteúdo específico da sua página.</p>
      <Card title="Meu primeiro card" nomeProduto= "Tv"/>
      <Card title="Meu segundo card" nomeProduto= "Geladeira"/>
    </main>
  );
}
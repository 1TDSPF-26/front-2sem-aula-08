import { Link } from "react-router";
//Mecanismo modular: cada item do menu é apenas um objeto nesse array.
//Para adicionar/remover uma página do menu, basta editar esta lista,
//sem precisar mexer no JSX abaixo.
//molde dos itens do menu:
type ItemMenu = {
  label: string;
  to: string;
};

//o texto exibido no menu e o link para onde ele vai, são definidos aqui:
const itensMenu: ItemMenu[] = [
  { label: "Home", to: "/" },
  { label: "Produtos", to: "/produtos" },
  { label: "Conteúdo", to: "/conteudo" },
];

export default function Menu() {
  return (
    <nav>
      <ul>
        {itensMenu.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

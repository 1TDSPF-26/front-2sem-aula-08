import { Link } from "react-router";

export default function Cabecalho(){

    return(
            <header>
                <nav>
                    <h1>Compras Online</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="/EditarProdutos">Editar Produtos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        
    );

}
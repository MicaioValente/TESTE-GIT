import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

function Home({ title, subtitle, to, buttonText }) {
    const { pathname } = useLocation();

    return (
        <main className="page">
            <section className="card">
                <h1>{title}</h1>
                <p>{subtitle}</p>

                <div className="buttons">
                    <Link className="blue-button active" to={to}>
                        {buttonText}
                    </Link>
                    <Link className="blue-button" to="/">
                        lixao
                    </Link>
                    <Link className="blue-button" to="/home2">
                        licao 2
                    </Link>
                </div>

                <small className="route-path">Rota atual: {pathname}</small>
            </section>
        </main>
    );
}

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        title="Home"
                        subtitle="Voce esta na tela Home. Clique para ir para Home2."
                        to="/home2"
                        buttonText="Ir para Home2"
                    />
                }
            />
            <Route
                path="/home2"
                element={
                    <Home
                        title="Home2 - Pagina Atualizada"
                        subtitle="Bem-vindo a nova versao da Home2! Clique para voltar para Home."
                        to="/"
                        buttonText="Voltar para Home"
                    />
                }
            />
        </Routes>
    );
}

export default App;

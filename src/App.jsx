import { useState } from "react";
import "./App.css";

function App() {
    const [screen, setScreen] = useState("home1");

    const title = screen === "home1" ? "Home 1" : "Home 2";

    return (
        <main className="page">
            <section className="card">
                <h1>{title}</h1>
                <p>Escolha para qual tela deseja ir:</p>

                <div className="buttons">
                    <button
                        type="button"
                        className="blue-button"
                        onClick={() => setScreen("home1")}
                    >
                        Ir para Home 1
                    </button>

                    <button
                        type="button"
                        className="blue-button"
                        onClick={() => setScreen("home2")}
                    >
                        Ir para Home 2
                    </button>
                </div>

                <button
                    type="button"
                    className="secondary-button"
                    onClick={() =>
                        setScreen(screen === "home1" ? "home2" : "home1")
                    }
                >
                    Alternar Tela
                </button>
            </section>
        </main>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import { VolkareScenario, createScenario } from "./lib/scenario";
import { Deck, createDeck } from "./lib/deck";
import { VolkareScenarioData } from "./lib/mk-volkare";
import ScenarioParameters from "./components/ScenarioParameters";
import AppHeader from "./components/AppHeader";
import ScenarioDisplay from "./components/ScenarioDisplay";
import DeckDisplay from "./components/DeckDisplay";

function App() {
    const [scenario, setScenario] = useState<VolkareScenario>();
    const [deck, setDeck] = useState<Deck>();

    const onCreateHandler = (params: VolkareScenarioData) => {
        setScenario(createScenario(params));
        setDeck(createDeck(params));
    };

    return (
        <div className="App">
            <AppHeader />
            <ScenarioParameters onCreate={onCreateHandler} />
            {scenario && <ScenarioDisplay scenario={scenario} />}
            {deck && <DeckDisplay initialDeck={deck} />}
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import { VolkareScenario, createScenario } from "./lib/scenario";
import { Deck, createDeck, Card } from "./lib/deck";
import { VolkareScenarioData } from "./lib/mk-volkare";
import ScenarioParameters from "./components/ScenarioParameters";
import AppHeader from "./components/AppHeader";
import ScenarioDisplay from "./components/ScenarioDisplay";
import DeckDisplay from "./components/DeckDisplay";
import VolkareDisplay from "./components/VolkareDisplay";

function App() {
    const [scenario, setScenario] = useState<VolkareScenario>();
    const [deck, setDeck] = useState<Deck>();
    const [card, setCard] = useState<Card>();

    const onCreateHandler = (params: VolkareScenarioData) => {
        setScenario(createScenario(params));
        setDeck(createDeck(params));
        setCard(undefined);
    };

    return (
        <div className="App">
            <AppHeader />
            <ScenarioParameters onCreate={onCreateHandler} />
            {scenario && <ScenarioDisplay scenario={scenario} />}
            {deck && <DeckDisplay initialDeck={deck} onCardDraw={setCard} />}
            {scenario && <VolkareDisplay scenario={scenario} card={card} />}
        </div>
    );
}

export default App;

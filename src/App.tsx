import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import "./App.css";
import { VolkareScenario, createScenario } from "./lib/scenario";
import { Deck, createDeck, Card } from "./lib/deck";
import { VolkareScenarioData } from "./lib/mk-volkare";

function App() {
    const [params, setParams] = useState({
        scenario: "vReturn",
        players: 1,
        difficulty: "daring",
        speed: "fair",
    } as VolkareScenarioData);

    const [scenario, setScenario] = useState<VolkareScenario>();
    const [deck, setDeck] = useState<Deck>();
    const [currentCard, setCurrentCard] = useState<Card>();

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
        const { name, value } = evt.target;
        setParams({
            ...params,
            [name]: value,
        });
    };

    const onCreateHandler: MouseEventHandler = () => {
        setScenario(createScenario(params));
        setDeck(createDeck(params));
        setCurrentCard(undefined);
    };

    const onDrawCardHandler: MouseEventHandler = () => {
        const card = deck?.[0];
        setCurrentCard(card);
        setDeck(deck?.slice(1));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mage Knight Board Game - Volkare Scenario Helper</h1>
            </header>
            <h2>Create Scenario</h2>
            <div className="scenario-create flex-container">
                <label>
                    Scenario:
                    <select name="scenario" onChange={handleChange}>
                        <option value="vReturn">Volkare's Return</option>
                        <option value="vQuest">Volkare's Quest</option>
                    </select>
                </label>
                <label>
                    Players:
                    <select name="players" onChange={handleChange}>
                        <option value={1}>Solo</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                    </select>
                </label>
                <label>
                    Difficulty:
                    <select name="difficulty" onChange={handleChange}>
                        <option value="daring">Daring</option>
                        <option value="heroic">Heroic</option>
                        <option value="legendary">Legendary</option>
                    </select>
                </label>
                <label>
                    Race speed:
                    <select name="speed" onChange={handleChange}>
                        <option value="fair">Fair</option>
                        <option value="tight">Tight</option>
                        <option value="thrilling">Thrilling</option>
                    </select>
                </label>
                <button id="newdeck" onClick={onCreateHandler}>
                    Create Scenario
                </button>
            </div>
            {scenario && <h2>Scenario Settings</h2>}
            {scenario && (
                <div className="scenario-setup flex-container">
                    <p>Volkare level: {scenario.volkareLevel}</p>
                    <p>Indecisive units: {scenario.indecisiveUnits}</p>
                    <p>Countryside tiles: {scenario.mapTiles.countryside}</p>
                    <p>
                        Core (non-city) tiles: {scenario.mapTiles.coreNonCity}
                    </p>
                    <p>City tiles: {scenario.mapTiles.coreCity}</p>
                    <p>City Levels: {scenario.cityLevels}</p>
                </div>
            )}
            {deck && <h2>Volkare Deck</h2>}
            {deck && (
                <div className="deck-container flex-container">
                    <div className="card">
                        <p>{deck.length} cards remaining</p>
                    </div>
                    {deck && deck.length > 0 && (
                        <div>
                            <button onClick={onDrawCardHandler}>
                                Draw Card
                            </button>
                        </div>
                    )}
                    {currentCard && (
                        <div className="current-card-container">
                            <div className="card">
                                <p>{currentCard.type}</p>
                                {currentCard.colour && (
                                    <p>{currentCard.colour}</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;

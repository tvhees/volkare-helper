import { ChangeEventHandler, useState } from "react";
import { VolkareScenarioData } from "../lib/mk-volkare";

interface Props {
    onCreate: (params: VolkareScenarioData) => unknown;
}

const ScenarioParameters = ({ onCreate }: Props) => {
    const [params, setParams] = useState({
        scenario: "vReturn",
        players: "1",
        difficulty: "daring",
        speed: "fair",
    } as VolkareScenarioData);

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
        const { name, value } = evt.target;
        setParams({
            ...params,
            [name]: value,
        });
    };

    return (
        <>
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
                        <option value="1">Solo</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
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
                <button id="newdeck" onClick={() => onCreate(params)}>
                    Create Scenario
                </button>
            </div>
        </>
    );
};

export default ScenarioParameters;

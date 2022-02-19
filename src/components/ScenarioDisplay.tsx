import { VolkareScenario } from "../lib/scenario";

interface Props {
    scenario: VolkareScenario;
}

const ScenarioDisplay = ({ scenario }: Props) => {
    return (
        <>
            <h2>Scenario Settings</h2>
            <div className="scenario-setup flex-container">
                <p>Volkare level: {scenario.volkareLevel}</p>
                <p>Indecisive units: {scenario.indecisiveUnits}</p>
                <p>Countryside tiles: {scenario.mapTiles.countryside}</p>
                <p>Core (non-city) tiles: {scenario.mapTiles.coreNonCity}</p>
                <p>City tiles: {scenario.mapTiles.coreCity}</p>
                <p>City Levels: {scenario.cityLevels}</p>
            </div>
        </>
    );
};

export default ScenarioDisplay;

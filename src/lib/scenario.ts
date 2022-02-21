import { Scenario, VolkareScenarioData } from "./mk-volkare";
import volkareLevelData from "../data/volkare-level.json";
import indecisiveUnitsData from "../data/indecisive-units.json";
import cityLevelsData from "../data/city-levels.json";
import countrysideTilesData from "../data/tiles-countryside.json";
import coreNonCityTilesData from "../data/tiles-core.json";
import coreCityTilesData from "../data/tiles-city.json";

function volkareLevel({ scenario, players, difficulty }: VolkareScenarioData) {
    return volkareLevelData[scenario][players][difficulty];
}

function indecisiveUnits({ speed, players }: VolkareScenarioData) {
    return indecisiveUnitsData[speed] + parseInt(players);
}

function cityLevels({ scenario, players, difficulty }: VolkareScenarioData) {
    return cityLevelsData[scenario][players][difficulty];
}

function mapTiles({ scenario, players }: VolkareScenarioData) {
    return {
        'countryside': countrysideTilesData[scenario][players],
        'coreNonCity': coreNonCityTilesData[scenario][players],
        'coreCity': coreCityTilesData[scenario][players]
    };
}

export type VolkareScenario = {
    name: Scenario
    volkareLevel: number
    indecisiveUnits: number
    cityLevels: number
    mapTiles: {
        countryside: number
        coreNonCity: number
        coreCity: number
    }
}

export function createScenario(data: VolkareScenarioData) {
    return {
        name: data.scenario,
        volkareLevel: volkareLevel(data),
        indecisiveUnits: indecisiveUnits(data),
        cityLevels: cityLevels(data),
        mapTiles: mapTiles(data)
    };
};
import { Card } from "./deck";
import { CardColour, CardType, ScenarioData } from "./mage-knight";
import { VolkareScenario } from "./scenario";
import { HexUtils } from "react-hexgrid";
import volkarePathData from "../data/volkare-path.json";

const scenarios = ['vReturn', 'vQuest'] as const;
const difficulties = ['daring', 'heroic', 'legendary'] as const;
const speeds = ['fair', 'tight', 'thrilling'] as const;

export type Scenario = typeof scenarios[number];
export type Difficulty = typeof difficulties[number];
export type Speed = typeof speeds[number];
export interface VolkareScenarioData extends ScenarioData {
    scenario: Scenario
    difficulty: Difficulty
    speed: Speed
}

const PATHCOLOURS = [CardColour.BLUE, CardColour.WHITE, CardColour.GREEN] as const;
type PathColourKey = typeof PATHCOLOURS[number];

const isPathColour = (colour: CardColour): colour is PathColourKey => {
    return PATHCOLOURS.includes(colour as PathColourKey)
}

export const createPathEnd = (scenario: VolkareScenario, card?: Card) => {
    if (!card || !isPathColour(card.colour)) {
        return undefined;
    }

    const direction = volkarePathData[scenario.name][card.colour];
    const magnitude = card.type === CardType.SPELL ? 2 : 1;
    return HexUtils.multiply(HexUtils.direction(direction), magnitude);
}

export const getFightRadius = (card?: Card) => {
    if (card?.colour !== CardColour.RED) {
        return 0;
    }

    return card?.type === CardType.SPELL ? 2 : 1;
}
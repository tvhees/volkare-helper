import { ScenarioData } from "./mage-knight";

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
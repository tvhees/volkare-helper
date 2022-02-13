const players = [1, 2, 3, 4] as const;

export type PlayerCount = typeof players[number];
export interface ScenarioData {
    players: PlayerCount
}

export enum CardColour {
    RED = 'red',
    BLUE = 'blue',
    GREEN = 'green',
    WHITE = 'white',
    NONE = ''
}

export enum CardType {
    WOUND = 'wound',
    ACTION = 'action',
    SPELL = 'spell',
    ARTIFACT = 'artifact'
}
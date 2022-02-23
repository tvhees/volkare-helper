import { VolkareScenarioData } from "./mk-volkare";
import woundsData from "../data/deck-wounds.json";
import cardsData from "../data/deck-cards.json";
import { CardColour, CardType } from "./mage-knight";
import shuffle from "./shuffle";

export type Card = { type: CardType, colour: CardColour }
export type Deck = Card[]

const colours = Object.values(CardColour).filter(colour => colour !== CardColour.NONE);

function createWounds({ scenario, speed }: VolkareScenarioData) {
    return Array<Card>(woundsData[scenario][speed])
        .fill({ type: CardType.WOUND, colour: CardColour.NONE });
}

function createActions() {
    return colours.flatMap(colour =>
        Array<Card>(cardsData.actions).fill({ type: CardType.ACTION, colour })
    );
}

function createSpells() {
    return colours.flatMap(colour =>
        Array<Card>(cardsData.spells).fill({ type: CardType.SPELL, colour })
    );
}

export function createShuffledDeck(scenarioData: VolkareScenarioData) {
    return shuffle(
        [
            ...createActions(),
            ...createSpells(),
            ...createWounds(scenarioData)
        ]
    );
}

export function createSortedDeck(deck: Deck) {
    return [...deck].sort(
        (a, b) =>
            2 * b.colour.localeCompare(a.colour) +
            b.type.localeCompare(a.type)
    );
}
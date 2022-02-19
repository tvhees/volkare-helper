import { MouseEventHandler, useEffect, useState } from "react";
import { Card, Deck } from "../lib/deck";

interface Props {
    initialDeck: Deck;
}

const DeckDisplay = ({ initialDeck }: Props) => {
    const [currentCard, setCurrentCard] = useState<Card>();
    const [deck, setDeck] = useState<Deck>([]);

    const setInitialState = () => {
        setCurrentCard(undefined);
        setDeck(initialDeck);
    };

    useEffect(setInitialState, [initialDeck]);

    const onDrawCardHandler: MouseEventHandler = () => {
        const card = deck?.[0];
        setCurrentCard(card);
        setDeck(deck?.slice(1));
    };

    return (
        <>
            <h2>Volkare Deck</h2>
            <div className="deck-container flex-container">
                <div className="card">
                    <p>{deck.length} cards remaining</p>
                </div>
                <div>
                    <button disabled={!deck.length} onClick={onDrawCardHandler}>
                        Draw Card
                    </button>
                </div>
                {currentCard && (
                    <div className="current-card-container">
                        <div className="card">
                            <p>{currentCard.type}</p>
                            {currentCard.colour && <p>{currentCard.colour}</p>}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default DeckDisplay;

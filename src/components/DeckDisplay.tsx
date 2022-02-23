import { stringify } from "querystring";
import { MouseEventHandler, useEffect, useState } from "react";
import { Card, createSortedDeck, Deck } from "../lib/deck";

interface Props {
    initialDeck: Deck;
    onCardDraw: (card: Card) => unknown;
}

const DeckDisplay = ({ initialDeck, onCardDraw }: Props) => {
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
        onCardDraw(card);
    };

    return (
        <>
            <h2>Volkare Deck</h2>
            <div className="deck-container flex-container">
                <div className="mini-card-container">
                    {createSortedDeck(deck).map(({ type, colour }) => (
                        <div className={`card mini-card ${colour}`}>
                            <p>{type[0]}</p>
                        </div>
                    ))}
                </div>
                <div className="card">
                    <p>{deck.length} cards remaining</p>
                    <button disabled={!deck.length} onClick={onDrawCardHandler}>
                        Draw Card
                    </button>
                </div>
                <div className="current-card-container">
                    {currentCard ? (
                        <div className="card" key={deck.length}>
                            <p>{currentCard.type}</p>
                            {currentCard.colour && <p>{currentCard.colour}</p>}
                        </div>
                    ) : (
                        <p>Empty</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default DeckDisplay;

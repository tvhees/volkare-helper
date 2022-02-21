import { Card } from "../lib/deck";
import {
    GridGenerator,
    Hex,
    Hexagon,
    HexGrid,
    Layout,
    Path,
    HexUtils,
} from "react-hexgrid";
import { VolkareScenario } from "../lib/scenario";
import { createPathEnd, getFightRadius } from "../lib/mk-volkare";
import { useEffect, useState } from "react";

interface Props {
    scenario: VolkareScenario;
    card?: Card;
}

interface Hex {
    q: number;
    r: number;
    p: number;
}

const origin = new Hex(0, 0, 0);

// We want to display fight radius but omit the central hex (that's where Volkare is)
const isInFightRadius = (hex: Hex, radius: number) => {
    const distance = HexUtils.distance(hex, origin);
    return distance && distance <= radius;
};

const VolkareDisplay = ({ scenario, card }: Props) => {
    const hexagons = GridGenerator.hexagon(2) as Hex[];
    const [pathEnd, setPathEnd] = useState<Hex>();
    const [fightRadius, setFightRadius] = useState(0);
    useEffect(() => {
        setPathEnd(createPathEnd(scenario, card));
        setFightRadius(getFightRadius(card));
    }, [scenario, card]);
    return (
        <div className={`${card?.colour}`}>
            <HexGrid viewBox="-30 -30 60 60">
                <Layout
                    size={{ x: 6, y: 6 }}
                    flat={false}
                    spacing={1}
                    origin={{ x: 0, y: 0 }}
                >
                    {hexagons.map((hex, i) => (
                        <Hexagon
                            className={
                                isInFightRadius(hex, fightRadius) ? "fight" : ""
                            }
                            key={i}
                            {...hex}
                        />
                    ))}
                    {pathEnd && <Path start={origin} end={pathEnd} />}
                </Layout>
            </HexGrid>
        </div>
    );
};

export default VolkareDisplay;

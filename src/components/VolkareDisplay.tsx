import { Card } from "../lib/deck";
import {
    GridGenerator,
    Hex,
    Hexagon,
    HexGrid,
    Layout,
    Path,
} from "react-hexgrid";
import { VolkareScenario } from "../lib/scenario";
import { createPathEnd } from "../lib/mk-volkare";
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

const VolkareDisplay = ({ scenario, card }: Props) => {
    const hexagons = GridGenerator.hexagon(2) as Hex[];
    const [pathEnd, setPathEnd] = useState<Hex>();
    useEffect(() => {
        setPathEnd(createPathEnd(scenario, card));
    }, [scenario, card]);
    return (
        <div className={`${card?.colour}`}>
            <HexGrid width={200} height={200} viewBox="-30 -30 60 60">
                <Layout
                    size={{ x: 6, y: 6 }}
                    flat={false}
                    spacing={1}
                    origin={{ x: 0, y: 0 }}
                >
                    {hexagons.map((hex, i) => (
                        <Hexagon key={i} {...hex} />
                    ))}
                    {pathEnd && <Path start={new Hex(0, 0, 0)} end={pathEnd} />}
                </Layout>
            </HexGrid>
        </div>
    );
};

export default VolkareDisplay;

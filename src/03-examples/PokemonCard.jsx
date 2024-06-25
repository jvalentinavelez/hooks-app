import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const titleRef = useRef();

  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = titleRef.current.getBoundingClientRect();
    setboxSize({ width, height });
  }, []);

  return (
    <>
      <section style={{ display: "flex" }}>
        <h2 ref={titleRef} className="text-capitalizae">
          #{id}-{name}
        </h2>
        <div>
          {sprites.map((sprite) => (
            <img key={sprite} src={sprite} alt={name} />
          ))}
        </div>
      </section>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

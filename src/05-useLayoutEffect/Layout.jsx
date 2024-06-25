import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />
      {/* {!isLoading && <h2>{data?.name}</h2>} */}
      {/* 
      {!isLoading && <pre> {JSON.stringify(data, null, 2)}</pre>} */}
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          key={data?.id}
          id={data?.id}
          name={data?.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      <button
        onClick={() => (counter > 1 ? decrement(1) : null)}
        className="btn btn-primary mt-2"
      >
        Anterior
      </button>
      <button onClick={() => increment(1)} className="btn btn-primary mt-2">
        Siguiente
      </button>
    </>
  );
};

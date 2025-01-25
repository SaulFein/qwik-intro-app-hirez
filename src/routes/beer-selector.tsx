import {
  component$,
  Resource,
  useResource$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./beer-selector.css?inline";

export interface Beer {
  name: string;
}

export const BeerSelector = component$(() => {
  useStylesScoped$(styles);
  const beersResource = useResource$<Beer[]>(async () => {
    const result = await fetch("http://localhost:5173/api/beers");
    return result.json();
  });

  return (
    <div>
      <Resource
        value={beersResource}
        onPending={() => <div>Loading...</div>}
        onResolved={(beers) => (
          <select>
            {beers.map((beer) => (
              <option>{beer.name}</option>
            ))}
          </select>
        )}
        onRejected={(reason) => <div>Error {reason}</div>}
      />
    </div>
  );
});

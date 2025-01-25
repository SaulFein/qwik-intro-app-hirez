import {
  component$,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { beerContextId } from "./beer-context-id";
import { BeerSelector } from "./beer-selector";

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useContextProvider(beerContextId, didHeGetABeerSignal);

  useTask$(({ track }) => {
    track(() => didHeGetABeerSignal.value);
    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  });

  return (
    <>
      <BeerGiver />
      {isMiskoVisibleSignal.value ? <Misko>I Love Qwik</Misko> : null}
    </>
  );
});

export const BeerGiver = component$(() => {
  return (
    <div>
      <BeerSelector />
      <hr />
      <BeerGivingButton />
    </div>
  );
});

export const BeerGivingButton = component$(() => {
  const gotBeerSignal = useContext(beerContextId);
  return (
    <div>
      <button
        class="p-5 bg-amber-500 text-lg hover:bg-amber-200"
        onClick$={() => (gotBeerSignal.value = true)}
      >
        Give a beer to Misko
      </button>
    </div>
  );
});

export const Misko = component$(() => {
  return (
    <>
      <div>Misko</div>
      <div>
        <Slot />
      </div>
    </>
  );
});

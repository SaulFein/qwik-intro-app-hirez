import {
  component$,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Projector } from "./projector";
import { projectorContextId } from "./projector-context-id";

export default component$(() => {
  const myInput = useSignal("");
  const myColor = useSignal("black");
  useTask$(({ track }) => {
    track(() => myInput.value);
    if (myInput.value === "llama") {
      myColor.value = "red";
    } else {
      myColor.value = "black";
    }
  });

  useContextProvider(projectorContextId, { myInput, myColor });

  return (
    <div>
      This is Page 1
      <hr />
      <input
        onInput$={(event: InputEvent, el) => {
          myInput.value = el.value;
        }}
        type="text"
        placeholder="Type your search"
      />
      <hr />
      <Projector />
    </div>
  );
});

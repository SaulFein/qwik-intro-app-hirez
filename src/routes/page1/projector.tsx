import { component$, useContext } from "@builder.io/qwik";
import { projectorContextId } from "./projector-context-id";

export const Projector = component$(() => {
  const { myInput, myColor } = useContext(projectorContextId);
  return (
    <div>
      You Typed:
      <span style={{ color: myColor.value }}> {myInput.value}</span>
    </div>
  );
});

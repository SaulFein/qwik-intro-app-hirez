import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export interface ProjectorContextState {
    myInput: Signal<string>;
    myColor: Signal<string>;
}

export const projectorContextId = createContextId<ProjectorContextState>('projectorContext');
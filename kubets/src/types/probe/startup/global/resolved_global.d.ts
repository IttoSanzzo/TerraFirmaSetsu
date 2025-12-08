import { $JeiRuntime } from "packages/mezz/jei/library/runtime/$JeiRuntime"

declare global {
export type ProbeJS$$ResolvedGlobal = {"jeiRuntime": $JeiRuntime};
}

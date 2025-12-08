declare module "packages/immersive_melodies/mixin/$MusicTrackerAccessor" {
import { $SoundInstance$$Type } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MusicTrackerAccessor$$Type = ($MusicTrackerAccessor | (() => $SoundInstance$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MusicTrackerAccessor_ = $MusicTrackerAccessor$$Type;
}
}


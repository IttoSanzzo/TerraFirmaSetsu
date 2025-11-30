declare module "packages/immersive_melodies/mixin/$MusicTrackerAccessor" {
import { $SoundInstance } from "packages/net/minecraft/client/resources/sounds/$SoundInstance"

export interface $MusicTrackerAccessor {
"getCurrentMusic"(): $SoundInstance
get "currentMusic"(): $SoundInstance
}

export namespace $MusicTrackerAccessor {
const probejs$$marker: never
}
export abstract class $MusicTrackerAccessor$$Static implements $MusicTrackerAccessor {
}
}


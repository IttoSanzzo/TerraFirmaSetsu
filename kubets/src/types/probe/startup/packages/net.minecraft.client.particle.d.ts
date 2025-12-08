declare module "packages/net/minecraft/client/particle/$SpriteSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SpriteSet$$Type = ($SpriteSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SpriteSet_ = $SpriteSet$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$SingleQuadParticle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SingleQuadParticle$$Type = ($SingleQuadParticle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SingleQuadParticle_ = $SingleQuadParticle$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$ParticleEngine$MutableSpriteSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleEngine$MutableSpriteSet$$Type = ($ParticleEngine$MutableSpriteSet);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleEngine$MutableSpriteSet_ = $ParticleEngine$MutableSpriteSet$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$ParticleProvider$Sprite" {
import { $ClientLevel } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $TextureSheetParticle$$Type } from "packages/net/minecraft/client/particle/$TextureSheetParticle"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleProvider$Sprite$$Type<T extends $ParticleOptions> = ($ParticleProvider$Sprite<T> | ((arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $TextureSheetParticle$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleProvider$Sprite_<T extends $ParticleOptions> = $ParticleProvider$Sprite$$Type<T>;
}
}

declare module "packages/net/minecraft/client/particle/$Particle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Particle$$Type = ($Particle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Particle_ = $Particle$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$TextureSheetParticle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TextureSheetParticle$$Type = ($TextureSheetParticle);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TextureSheetParticle_ = $TextureSheetParticle$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$ParticleProvider" {
import { $ClientLevel } from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import { $Particle$$Type } from "packages/net/minecraft/client/particle/$Particle"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleProvider$$Type<T extends $ParticleOptions> = ($ParticleProvider<T> | ((arg0: T, arg1: $ClientLevel, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double) => $Particle$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleProvider_<T extends $ParticleOptions> = $ParticleProvider$$Type<T>;
}
}

declare module "packages/net/minecraft/client/particle/$ParticleRenderType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleRenderType$$Type = ($ParticleRenderType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleRenderType_ = $ParticleRenderType$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$ParticleEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleEngine$$Type = ($ParticleEngine);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleEngine_ = $ParticleEngine$$Type;
}
}

declare module "packages/net/minecraft/client/particle/$ParticleEngine$SpriteParticleRegistration" {
import { $ParticleProvider$$Type } from "packages/net/minecraft/client/particle/$ParticleProvider"
import { $ParticleOptions, $ParticleOptions$$Type } from "packages/net/minecraft/core/particles/$ParticleOptions"
import { $SpriteSet } from "packages/net/minecraft/client/particle/$SpriteSet"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParticleEngine$SpriteParticleRegistration$$Type<T extends $ParticleOptions> = ($ParticleEngine$SpriteParticleRegistration<T> | ((arg0: $SpriteSet) => $ParticleProvider$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParticleEngine$SpriteParticleRegistration_<T extends $ParticleOptions> = $ParticleEngine$SpriteParticleRegistration$$Type<T>;
}
}


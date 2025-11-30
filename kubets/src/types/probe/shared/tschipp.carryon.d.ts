declare module "packages/tschipp/carryon/events/$EntityPickupEvent" {
import { $Event } from "packages/net/minecraftforge/eventbus/api/$Event"
import { $ServerPlayer, $ServerPlayer$$Type } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Entity, $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $EntityPickupEvent extends $Event {
readonly "player": $ServerPlayer
readonly "target": $Entity

constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type)

}
}


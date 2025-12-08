declare module "packages/net/minecraft/network/chat/$ChatDecorator" {
import { $Component, $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatDecorator$$Type = ($ChatDecorator | ((arg0: $ServerPlayer, arg1: $Component) => $CompletableFuture$$Type<$Component$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatDecorator_ = $ChatDecorator$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$FormattedText$StyledContentConsumer" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $Style } from "packages/net/minecraft/network/chat/$Style"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FormattedText$StyledContentConsumer$$Type<T> = ($FormattedText$StyledContentConsumer<T> | ((arg0: $Style, arg1: string) => $Optional$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FormattedText$StyledContentConsumer_<T> = $FormattedText$StyledContentConsumer$$Type<T>;
}
}

declare module "packages/net/minecraft/network/chat/$SignedMessageValidator" {
import { $PlayerChatMessage } from "packages/net/minecraft/network/chat/$PlayerChatMessage"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignedMessageValidator$$Type = ($SignedMessageValidator | ((arg0: $PlayerChatMessage) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignedMessageValidator_ = $SignedMessageValidator$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$FormattedText$ContentConsumer" {
import { $Optional$$Type } from "packages/java/util/$Optional"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FormattedText$ContentConsumer$$Type<T> = ($FormattedText$ContentConsumer<T> | ((arg0: string) => $Optional$$Type<T>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FormattedText$ContentConsumer_<T> = $FormattedText$ContentConsumer$$Type<T>;
}
}

declare module "packages/net/minecraft/network/chat/$ClickEvent$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClickEvent$Action$$Type = ($ClickEvent$Action | ("open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClickEvent$Action_ = $ClickEvent$Action$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$SignedMessageChain$Decoder" {
import { $PlayerChatMessage$$Type } from "packages/net/minecraft/network/chat/$PlayerChatMessage"
import { $SignedMessageBody } from "packages/net/minecraft/network/chat/$SignedMessageBody"
import { $MessageSignature } from "packages/net/minecraft/network/chat/$MessageSignature"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignedMessageChain$Decoder$$Type = ($SignedMessageChain$Decoder | ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignedMessageChain$Decoder_ = $SignedMessageChain$Decoder$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$HoverEvent$EntityTooltipInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoverEvent$EntityTooltipInfo$$Type = ($HoverEvent$EntityTooltipInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoverEvent$EntityTooltipInfo_ = $HoverEvent$EntityTooltipInfo$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ChatType$Bound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatType$Bound$$Type = ($ChatType$Bound);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatType$Bound_ = $ChatType$Bound$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$LastSeenMessages$Update" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LastSeenMessages$Update$$Type = ($LastSeenMessages$Update);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LastSeenMessages$Update_ = $LastSeenMessages$Update$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$LastSeenMessages" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LastSeenMessages$$Type = ($LastSeenMessages);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LastSeenMessages_ = $LastSeenMessages$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$SignedMessageBody" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignedMessageBody$$Type = ($SignedMessageBody);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignedMessageBody_ = $SignedMessageBody$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$HoverEvent$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoverEvent$Action$$Type<T> = ($HoverEvent$Action<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoverEvent$Action_<T> = $HoverEvent$Action$$Type<T>;
}
}

declare module "packages/net/minecraft/network/chat/$PlayerChatMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PlayerChatMessage$$Type = ($PlayerChatMessage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PlayerChatMessage_ = $PlayerChatMessage$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ChatType" {
import { $RegistryAccess$$Type } from "packages/net/minecraft/core/$RegistryAccess"
import { $Component$$Type } from "packages/net/minecraft/network/chat/$Component"
import { $Record } from "packages/java/lang/$Record"
import { $CommandSourceStack$$Type } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $ResourceKey, $ResourceKey$$Type } from "packages/net/minecraft/resources/$ResourceKey"
import { $ChatType$Bound } from "packages/net/minecraft/network/chat/$ChatType$Bound"
import { $Codec } from "packages/com/mojang/serialization/$Codec"
import { $ChatTypeDecoration, $ChatTypeDecoration$$Type } from "packages/net/minecraft/network/chat/$ChatTypeDecoration"
import { $BootstapContext$$Type } from "packages/net/minecraft/data/worldgen/$BootstapContext"
import { $Entity$$Type } from "packages/net/minecraft/world/entity/$Entity"

export class $ChatType extends $Record {
static readonly "CHAT": $ResourceKey<$ChatType>
static readonly "CODEC": $Codec<$ChatType>
static readonly "DEFAULT_CHAT_DECORATION": $ChatTypeDecoration
static readonly "EMOTE_COMMAND": $ResourceKey<$ChatType>
static readonly "MSG_COMMAND_INCOMING": $ResourceKey<$ChatType>
static readonly "MSG_COMMAND_OUTGOING": $ResourceKey<$ChatType>
static readonly "SAY_COMMAND": $ResourceKey<$ChatType>
static readonly "TEAM_MSG_COMMAND_INCOMING": $ResourceKey<$ChatType>
static readonly "TEAM_MSG_COMMAND_OUTGOING": $ResourceKey<$ChatType>

constructor(chatTypeDecoration0: $ChatTypeDecoration$$Type, chatTypeDecoration1: $ChatTypeDecoration$$Type)

public "bind"(component0: $Component$$Type): $ChatType$Bound
public static "bind"(resourceKey0: $ResourceKey$$Type<$ChatType>, entity1: $Entity$$Type): $ChatType$Bound
public static "bind"(resourceKey0: $ResourceKey$$Type<$ChatType>, registryAccess1: $RegistryAccess$$Type, component2: $Component$$Type): $ChatType$Bound
public static "bind"(resourceKey0: $ResourceKey$$Type<$ChatType>, commandSourceStack1: $CommandSourceStack$$Type): $ChatType$Bound
public static "bootstrap"(bootstapContext0: $BootstapContext$$Type<$ChatType$$Type>): void
public "chat"(): $ChatTypeDecoration
public "narration"(): $ChatTypeDecoration
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.ChatType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.ChatTypeTag
}
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatType$$Type = ($ChatType | Special.ChatType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatType_ = $ChatType$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$HoverEvent$ItemStackInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoverEvent$ItemStackInfo$$Type = ($HoverEvent$ItemStackInfo);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoverEvent$ItemStackInfo_ = $HoverEvent$ItemStackInfo$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$SignableCommand" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignableCommand$$Type<S> = ($SignableCommand<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignableCommand_<S> = $SignableCommand$$Type<S>;
}
}

declare module "packages/net/minecraft/network/chat/$Component" {
import { $Color$$Type } from "packages/dev/latvian/mods/rhino/mod/util/color/$Color"
import { $ClickEvent$$Type } from "packages/net/minecraft/network/chat/$ClickEvent"

export type ComponentObject = {"text"?: string, "translate"?: Special.LangKey, "with"?: any[], "color"?: $Color$$Type, "bold"?: boolean, "italic"?: boolean, "underlined"?: boolean, "strikethrough"?: boolean, "obfuscated"?: boolean, "insertion"?: string, "font"?: string, "click"?: $ClickEvent$$Type, "hover"?: $Component$$Type, "extra"?: $Component$$Type[]};
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Component$$Type = ($Component | $Component$$Type[] | ComponentObject | string | number | boolean);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Component_ = $Component$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$RemoteChatSession$Data" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RemoteChatSession$Data$$Type = ($RemoteChatSession$Data);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RemoteChatSession$Data_ = $RemoteChatSession$Data$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ClickEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ClickEvent$$Type = ($ClickEvent | {"action": ("open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard"), "value": string} | string);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ClickEvent_ = $ClickEvent$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ChatType$BoundNetwork" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatType$BoundNetwork$$Type = ($ChatType$BoundNetwork);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatType$BoundNetwork_ = $ChatType$BoundNetwork$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$SignedMessageBody$Packed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignedMessageBody$Packed$$Type = ($SignedMessageBody$Packed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignedMessageBody$Packed_ = $SignedMessageBody$Packed$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$Style" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Style$$Type = ($Style);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Style_ = $Style$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$LastSeenMessages$Packed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LastSeenMessages$Packed$$Type = ($LastSeenMessages$Packed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LastSeenMessages$Packed_ = $LastSeenMessages$Packed$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$MutableComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MutableComponent$$Type = ($MutableComponent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MutableComponent_ = $MutableComponent$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$SignableCommand$Argument" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignableCommand$Argument$$Type<S> = ($SignableCommand$Argument<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignableCommand$Argument_<S> = $SignableCommand$Argument$$Type<S>;
}
}

declare module "packages/net/minecraft/network/chat/contents/$DataSource" {
import { $CompoundTag$$Type } from "packages/net/minecraft/nbt/$CompoundTag"
import { $CommandSourceStack } from "packages/net/minecraft/commands/$CommandSourceStack"
import { $Stream$$Type } from "packages/java/util/stream/$Stream"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataSource$$Type = ($DataSource | ((arg0: $CommandSourceStack) => $Stream$$Type<$CompoundTag$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataSource_ = $DataSource$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$RemoteChatSession" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RemoteChatSession$$Type = ($RemoteChatSession);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RemoteChatSession_ = $RemoteChatSession$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ChatTypeDecoration$Parameter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatTypeDecoration$Parameter$$Type = ($ChatTypeDecoration$Parameter | ("sender" | "target" | "content"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatTypeDecoration$Parameter_ = $ChatTypeDecoration$Parameter$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$HoverEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $HoverEvent$$Type = ($HoverEvent);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $HoverEvent_ = $HoverEvent$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ChatTypeDecoration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ChatTypeDecoration$$Type = ($ChatTypeDecoration);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ChatTypeDecoration_ = $ChatTypeDecoration$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$SignedMessageLink" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SignedMessageLink$$Type = ($SignedMessageLink);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SignedMessageLink_ = $SignedMessageLink$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$MessageSignature" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MessageSignature$$Type = ($MessageSignature);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MessageSignature_ = $MessageSignature$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$FilterMask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FilterMask$$Type = ($FilterMask);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FilterMask_ = $FilterMask$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$ComponentContents" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ComponentContents$$Type = ($ComponentContents);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ComponentContents_ = $ComponentContents$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$MessageSignature$Packed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MessageSignature$Packed$$Type = ($MessageSignature$Packed);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MessageSignature$Packed_ = $MessageSignature$Packed$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$OutgoingChatMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OutgoingChatMessage$$Type = ($OutgoingChatMessage);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OutgoingChatMessage_ = $OutgoingChatMessage$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$FormattedText" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FormattedText$$Type = ($FormattedText);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FormattedText_ = $FormattedText$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$TextColor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TextColor$$Type = ($TextColor | ("" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "lightbluedye" | "limedye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "bluedye" | "pinkdye" | "cyandye" | "gold" | "gray" | "blue" | "darkblue" | "transparent" | "red_dye" | "darkred" | "greendye" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "green" | "light_gray_dye" | "darkgreen" | "dark_green" | "lightpurple" | "darkaqua" | "cyan_dye" | "whitedye") | `#${string}` | integer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TextColor_ = $TextColor$$Type;
}
}

declare module "packages/net/minecraft/network/chat/$MessageSignatureCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $MessageSignatureCache$$Type = ($MessageSignatureCache);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $MessageSignatureCache_ = $MessageSignatureCache$$Type;
}
}


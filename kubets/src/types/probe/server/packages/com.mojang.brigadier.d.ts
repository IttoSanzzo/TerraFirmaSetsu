declare module "packages/com/mojang/brigadier/context/$StringRange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StringRange$$Type = ($StringRange);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StringRange_ = $StringRange$$Type;
}
}

declare module "packages/com/mojang/brigadier/context/$SuggestionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SuggestionContext$$Type<S> = ($SuggestionContext<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SuggestionContext_<S> = $SuggestionContext$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/builder/$ArgumentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArgumentBuilder$$Type<S, T extends $ArgumentBuilder<S, T>> = ($ArgumentBuilder<S, T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArgumentBuilder_<S, T extends $ArgumentBuilder<S, T>> = $ArgumentBuilder$$Type<S, T>;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$DynamicCommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DynamicCommandExceptionType$$Type = ($DynamicCommandExceptionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DynamicCommandExceptionType_ = $DynamicCommandExceptionType$$Type;
}
}

declare module "packages/com/mojang/brigadier/$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Message$$Type = ($Message | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Message_ = $Message$$Type;
}
}

declare module "packages/com/mojang/brigadier/suggestion/$Suggestion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Suggestion$$Type = ($Suggestion);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Suggestion_ = $Suggestion$$Type;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$CommandSyntaxException" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandSyntaxException$$Type = ($CommandSyntaxException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandSyntaxException_ = $CommandSyntaxException$$Type;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Dynamic2CommandExceptionType$$Type = ($Dynamic2CommandExceptionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Dynamic2CommandExceptionType_ = $Dynamic2CommandExceptionType$$Type;
}
}

declare module "packages/com/mojang/brigadier/$StringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $StringReader$$Type = ($StringReader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $StringReader_ = $StringReader$$Type;
}
}

declare module "packages/com/mojang/brigadier/context/$CommandContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandContext$$Type<S> = ($CommandContext<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandContext_<S> = $CommandContext$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/$ParseResults" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParseResults$$Type<S> = ($ParseResults<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParseResults_<S> = $ParseResults$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SimpleCommandExceptionType$$Type = ($SimpleCommandExceptionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SimpleCommandExceptionType_ = $SimpleCommandExceptionType$$Type;
}
}

declare module "packages/com/mojang/brigadier/arguments/$ArgumentType" {
import { $StringReader } from "packages/com/mojang/brigadier/$StringReader"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArgumentType$$Type<T> = ($ArgumentType<T> | ((arg0: $StringReader) => T));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArgumentType_<T> = $ArgumentType$$Type<T>;
}
}

declare module "packages/com/mojang/brigadier/tree/$RootCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RootCommandNode$$Type<S> = ($RootCommandNode<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RootCommandNode_<S> = $RootCommandNode$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/$SingleRedirectModifier" {
import { $CommandContext } from "packages/com/mojang/brigadier/context/$CommandContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SingleRedirectModifier$$Type<S> = ($SingleRedirectModifier<S> | ((arg0: $CommandContext<S>) => S));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SingleRedirectModifier_<S> = $SingleRedirectModifier$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$Dynamic3CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Dynamic3CommandExceptionType$$Type = ($Dynamic3CommandExceptionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Dynamic3CommandExceptionType_ = $Dynamic3CommandExceptionType$$Type;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$Dynamic2CommandExceptionType$Function" {
import { $Message$$Type } from "packages/com/mojang/brigadier/$Message"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Dynamic2CommandExceptionType$Function$$Type = ($Dynamic2CommandExceptionType$Function | ((arg0: any, arg1: any) => $Message$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Dynamic2CommandExceptionType$Function_ = $Dynamic2CommandExceptionType$Function$$Type;
}
}

declare module "packages/com/mojang/brigadier/context/$ParsedCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParsedCommandNode$$Type<S> = ($ParsedCommandNode<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParsedCommandNode_<S> = $ParsedCommandNode$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/$ResultConsumer" {
import { $CommandContext } from "packages/com/mojang/brigadier/context/$CommandContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ResultConsumer$$Type<S> = ($ResultConsumer<S> | ((arg0: $CommandContext<S>, arg1: boolean, arg2: integer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ResultConsumer_<S> = $ResultConsumer$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/builder/$LiteralArgumentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LiteralArgumentBuilder$$Type<S> = ($LiteralArgumentBuilder<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LiteralArgumentBuilder_<S> = $LiteralArgumentBuilder$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$Dynamic3CommandExceptionType$Function" {
import { $Message$$Type } from "packages/com/mojang/brigadier/$Message"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Dynamic3CommandExceptionType$Function$$Type = ($Dynamic3CommandExceptionType$Function | ((arg0: any, arg1: any, arg2: any) => $Message$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Dynamic3CommandExceptionType$Function_ = $Dynamic3CommandExceptionType$Function$$Type;
}
}

declare module "packages/com/mojang/brigadier/suggestion/$SuggestionProvider" {
import { $Suggestions$$Type } from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import { $CompletableFuture$$Type } from "packages/java/util/concurrent/$CompletableFuture"
import { $SuggestionsBuilder } from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import { $CommandContext } from "packages/com/mojang/brigadier/context/$CommandContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SuggestionProvider$$Type<S> = ($SuggestionProvider<S> | ((arg0: $CommandContext<S>, arg1: $SuggestionsBuilder) => $CompletableFuture$$Type<$Suggestions$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SuggestionProvider_<S> = $SuggestionProvider$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$BuiltInExceptionProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $BuiltInExceptionProvider$$Type = ($BuiltInExceptionProvider);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $BuiltInExceptionProvider_ = $BuiltInExceptionProvider$$Type;
}
}

declare module "packages/com/mojang/brigadier/suggestion/$Suggestions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Suggestions$$Type = ($Suggestions);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Suggestions_ = $Suggestions$$Type;
}
}

declare module "packages/com/mojang/brigadier/tree/$CommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandNode$$Type<S> = ($CommandNode<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandNode_<S> = $CommandNode$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/$Command" {
import { $CommandContext } from "packages/com/mojang/brigadier/context/$CommandContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Command$$Type<S> = ($Command<S> | ((arg0: $CommandContext<S>) => integer));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Command_<S> = $Command$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $SuggestionsBuilder$$Type = ($SuggestionsBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $SuggestionsBuilder_ = $SuggestionsBuilder$$Type;
}
}

declare module "packages/com/mojang/brigadier/exceptions/$CommandExceptionType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandExceptionType$$Type = ($CommandExceptionType);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandExceptionType_ = $CommandExceptionType$$Type;
}
}

declare module "packages/com/mojang/brigadier/context/$CommandContextBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandContextBuilder$$Type<S> = ($CommandContextBuilder<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandContextBuilder_<S> = $CommandContextBuilder$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/$ImmutableStringReader" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ImmutableStringReader$$Type = ($ImmutableStringReader);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ImmutableStringReader_ = $ImmutableStringReader$$Type;
}
}

declare module "packages/com/mojang/brigadier/tree/$ArgumentCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ArgumentCommandNode$$Type<S, T> = ($ArgumentCommandNode<S, T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ArgumentCommandNode_<S, T> = $ArgumentCommandNode$$Type<S, T>;
}
}

declare module "packages/com/mojang/brigadier/$CommandDispatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommandDispatcher$$Type<S> = ($CommandDispatcher<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommandDispatcher_<S> = $CommandDispatcher$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/context/$ParsedArgument" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParsedArgument$$Type<S, T> = ($ParsedArgument<S, T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParsedArgument_<S, T> = $ParsedArgument$$Type<S, T>;
}
}

declare module "packages/com/mojang/brigadier/tree/$LiteralCommandNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $LiteralCommandNode$$Type<S> = ($LiteralCommandNode<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $LiteralCommandNode_<S> = $LiteralCommandNode$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/$AmbiguityConsumer" {
import { $Collection } from "packages/java/util/$Collection"
import { $CommandNode } from "packages/com/mojang/brigadier/tree/$CommandNode"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $AmbiguityConsumer$$Type<S> = ($AmbiguityConsumer<S> | ((arg0: $CommandNode<S>, arg1: $CommandNode<S>, arg2: $CommandNode<S>, arg3: $Collection<string>) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $AmbiguityConsumer_<S> = $AmbiguityConsumer$$Type<S>;
}
}

declare module "packages/com/mojang/brigadier/builder/$RequiredArgumentBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RequiredArgumentBuilder$$Type<S, T> = ($RequiredArgumentBuilder<S, T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RequiredArgumentBuilder_<S, T> = $RequiredArgumentBuilder$$Type<S, T>;
}
}

declare module "packages/com/mojang/brigadier/$RedirectModifier" {
import { $Collection$$Type } from "packages/java/util/$Collection"
import { $CommandContext } from "packages/com/mojang/brigadier/context/$CommandContext"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RedirectModifier$$Type<S> = ($RedirectModifier<S> | ((arg0: $CommandContext<S>) => $Collection$$Type<S>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RedirectModifier_<S> = $RedirectModifier$$Type<S>;
}
}


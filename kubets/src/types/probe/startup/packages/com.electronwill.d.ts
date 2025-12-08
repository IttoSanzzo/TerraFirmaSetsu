declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnmodifiableCommentedConfig$Entry$$Type = ($UnmodifiableCommentedConfig$Entry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnmodifiableCommentedConfig$Entry_ = $UnmodifiableCommentedConfig$Entry$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/file/$FileConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileConfig$$Type = ($FileConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileConfig_ = $FileConfig$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnmodifiableConfig$$Type = ($UnmodifiableConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnmodifiableConfig_ = $UnmodifiableConfig$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnmodifiableCommentedConfig$$Type = ($UnmodifiableCommentedConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnmodifiableCommentedConfig_ = $UnmodifiableCommentedConfig$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/file/$CommentedFileConfigBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommentedFileConfigBuilder$$Type = ($CommentedFileConfigBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommentedFileConfigBuilder_ = $CommentedFileConfigBuilder$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/file/$FileNotFoundAction" {
import { $Path } from "packages/java/nio/file/$Path"
import { $ConfigFormat } from "packages/com/electronwill/nightconfig/core/$ConfigFormat"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileNotFoundAction$$Type = ($FileNotFoundAction | ((arg0: $Path, arg1: $ConfigFormat<any>) => boolean));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileNotFoundAction_ = $FileNotFoundAction$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/file/$GenericBuilder" {
import { $FileConfig, $FileConfig$$Type } from "packages/com/electronwill/nightconfig/core/file/$FileConfig"
import { $Config, $Config$$Type } from "packages/com/electronwill/nightconfig/core/$Config"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $GenericBuilder$$Type<Base extends $Config, Result extends $FileConfig> = ($GenericBuilder<Base, Result>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $GenericBuilder_<Base extends $Config, Result extends $FileConfig> = $GenericBuilder$$Type<Base, Result>;
}
}

declare module "packages/com/electronwill/nightconfig/core/io/$ConfigWriter" {
import { $Writer } from "packages/java/io/$Writer"
import { $UnmodifiableConfig } from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigWriter$$Type = ($ConfigWriter | ((arg0: $UnmodifiableConfig, arg1: $Writer) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigWriter_ = $ConfigWriter$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/utils/$WriterSupplier" {
import { $Writer$$Type } from "packages/java/io/$Writer"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WriterSupplier$$Type = ($WriterSupplier | (() => $Writer$$Type));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WriterSupplier_ = $WriterSupplier$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/utils/$UnmodifiableConfigWrapper" {
import { $UnmodifiableConfig, $UnmodifiableConfig$$Type } from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnmodifiableConfigWrapper$$Type<C extends $UnmodifiableConfig> = ($UnmodifiableConfigWrapper<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnmodifiableConfigWrapper_<C extends $UnmodifiableConfig> = $UnmodifiableConfigWrapper$$Type<C>;
}
}

declare module "packages/com/electronwill/nightconfig/core/$CommentedConfig$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommentedConfig$Entry$$Type = ($CommentedConfig$Entry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommentedConfig$Entry_ = $CommentedConfig$Entry$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$CommentedConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommentedConfig$$Type = ($CommentedConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommentedConfig_ = $CommentedConfig$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/io/$ParsingMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ParsingMode$$Type = ($ParsingMode | ("replace" | "merge" | "add"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ParsingMode_ = $ParsingMode$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionListener" {
import { $ConfigSpec$CorrectionAction } from "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionAction"
import { $List } from "packages/java/util/$List"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigSpec$CorrectionListener$$Type = ($ConfigSpec$CorrectionListener | ((arg0: $ConfigSpec$CorrectionAction, arg1: $List<string>, arg2: any, arg3: any) => void));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigSpec$CorrectionListener_ = $ConfigSpec$CorrectionListener$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigSpec$CorrectionAction$$Type = ($ConfigSpec$CorrectionAction | ("add" | "replace" | "remove"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigSpec$CorrectionAction_ = $ConfigSpec$CorrectionAction$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableCommentedConfig$CommentNode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnmodifiableCommentedConfig$CommentNode$$Type = ($UnmodifiableCommentedConfig$CommentNode);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnmodifiableCommentedConfig$CommentNode_ = $UnmodifiableCommentedConfig$CommentNode$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$EnumGetMethod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $EnumGetMethod$$Type = ($EnumGetMethod | ("name" | "name_ignorecase" | "ordinal_or_name" | "ordinal_or_name_ignorecase"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $EnumGetMethod_ = $EnumGetMethod$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $UnmodifiableConfig$Entry$$Type = ($UnmodifiableConfig$Entry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $UnmodifiableConfig$Entry_ = $UnmodifiableConfig$Entry$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$Config$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Config$Entry$$Type = ($Config$Entry);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Config$Entry_ = $Config$Entry$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/$ConfigFormat" {
import { $Config, $Config$$Type } from "packages/com/electronwill/nightconfig/core/$Config"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigFormat$$Type<C extends $Config> = ($ConfigFormat<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigFormat_<C extends $Config> = $ConfigFormat$$Type<C>;
}
}

declare module "packages/com/electronwill/nightconfig/core/file/$CommentedFileConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $CommentedFileConfig$$Type = ($CommentedFileConfig);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $CommentedFileConfig_ = $CommentedFileConfig$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/io/$WritingMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $WritingMode$$Type = ($WritingMode | ("replace" | "append"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $WritingMode_ = $WritingMode$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/file/$FileConfigBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FileConfigBuilder$$Type = ($FileConfigBuilder);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FileConfigBuilder_ = $FileConfigBuilder$$Type;
}
}

declare module "packages/com/electronwill/nightconfig/core/io/$ConfigParser" {
import { $Config, $Config$$Type } from "packages/com/electronwill/nightconfig/core/$Config"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $ConfigParser$$Type<C extends $Config> = ($ConfigParser<C>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $ConfigParser_<C extends $Config> = $ConfigParser$$Type<C>;
}
}

declare module "packages/com/electronwill/nightconfig/core/$Config" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Config$$Type = ($Config);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Config_ = $Config$$Type;
}
}


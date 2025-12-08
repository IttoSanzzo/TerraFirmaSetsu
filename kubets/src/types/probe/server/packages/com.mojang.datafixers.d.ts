declare module "packages/com/mojang/datafixers/types/families/$TypeFamily" {
import { $Type$$Type } from "packages/com/mojang/datafixers/types/$Type"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeFamily$$Type = ($TypeFamily | ((arg0: integer) => $Type$$Type<any>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeFamily_ = $TypeFamily$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$Applicative" {
import { $Applicative$Mu, $Applicative$Mu$$Type } from "packages/com/mojang/datafixers/kinds/$Applicative$Mu"
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Applicative$$Type<F extends $K1, Mu extends $Applicative$Mu> = ($Applicative<F, Mu>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Applicative_<F extends $K1, Mu extends $Applicative$Mu> = $Applicative$$Type<F, Mu>;
}
}

declare module "packages/com/mojang/datafixers/$OpticFinder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $OpticFinder$$Type<FT> = ($OpticFinder<FT>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $OpticFinder_<FT> = $OpticFinder$$Type<FT>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function8" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R> = ($Function8<T1, T2, T3, T4, T5, T6, T7, T8, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R> = $Function8$$Type<T1, T2, T3, T4, T5, T6, T7, T8, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function7" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R> = ($Function7<T1, T2, T3, T4, T5, T6, T7, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function7_<T1, T2, T3, T4, T5, T6, T7, R> = $Function7$$Type<T1, T2, T3, T4, T5, T6, T7, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function6" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function6$$Type<T1, T2, T3, T4, T5, T6, R> = ($Function6<T1, T2, T3, T4, T5, T6, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function6_<T1, T2, T3, T4, T5, T6, R> = $Function6$$Type<T1, T2, T3, T4, T5, T6, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function5" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function5$$Type<T1, T2, T3, T4, T5, R> = ($Function5<T1, T2, T3, T4, T5, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function5_<T1, T2, T3, T4, T5, R> = $Function5$$Type<T1, T2, T3, T4, T5, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function9" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = ($Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> = $Function9$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>;
}
}

declare module "packages/com/mojang/datafixers/kinds/$App" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $App$$Type<F extends $K1, A> = ($App<F, A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $App_<F extends $K1, A> = $App$$Type<F, A>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function4" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function4$$Type<T1, T2, T3, T4, R> = ($Function4<T1, T2, T3, T4, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function4_<T1, T2, T3, T4, R> = $Function4$$Type<T1, T2, T3, T4, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function3$$Type<T1, T2, T3, R> = ($Function3<T1, T2, T3, R> | ((arg0: T1, arg1: T2, arg2: T3) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function3_<T1, T2, T3, R> = $Function3$$Type<T1, T2, T3, R>;
}
}

declare module "packages/com/mojang/datafixers/kinds/$Functor$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Functor$Mu$$Type = ($Functor$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Functor$Mu_ = $Functor$Mu$$Type;
}
}

declare module "packages/com/mojang/datafixers/$DataFixer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DataFixer$$Type = ($DataFixer);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DataFixer_ = $DataFixer$$Type;
}
}

declare module "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Type$FieldNotFoundException$$Type = ($Type$FieldNotFoundException);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Type$FieldNotFoundException_ = $Type$FieldNotFoundException$$Type;
}
}

declare module "packages/com/mojang/datafixers/util/$Either" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Either$$Type<L, R> = ($Either<L, R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Either_<L, R> = $Either$$Type<L, R>;
}
}

declare module "packages/com/mojang/datafixers/$DSL$TypeReference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $DSL$TypeReference$$Type = ($DSL$TypeReference | (() => string));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $DSL$TypeReference_ = $DSL$TypeReference$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$Kind1$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Kind1$Mu$$Type = ($Kind1$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Kind1$Mu_ = $Kind1$Mu$$Type;
}
}

declare module "packages/com/mojang/datafixers/$Products$P10" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P10$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = ($Products$P10<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P10_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = $Products$P10$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P11" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P11$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = ($Products$P11<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P11_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11> = $Products$P11$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P14" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P14$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = ($Products$P14<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P14_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14> = $Products$P14$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P15" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P15$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = ($Products$P15<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P15_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15> = $Products$P15$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P12" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P12$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = ($Products$P12<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P12_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12> = $Products$P12$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P13" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P13$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = ($Products$P13<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P13_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13> = $Products$P13$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P16" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P16$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = ($Products$P16<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P16_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16> = $Products$P16$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
}
}

declare module "packages/com/mojang/datafixers/$TypedOptic$Element" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypedOptic$Element$$Type<S, T, A, B> = ($TypedOptic$Element<S, T, A, B>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypedOptic$Element_<S, T, A, B> = $TypedOptic$Element$$Type<S, T, A, B>;
}
}

declare module "packages/com/mojang/datafixers/$Typed" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Typed$$Type<A> = ($Typed<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Typed_<A> = $Typed$$Type<A>;
}
}

declare module "packages/com/mojang/datafixers/types/$Type$TypeMatcher" {
import { $Type } from "packages/com/mojang/datafixers/types/$Type"
import { $Type$FieldNotFoundException$$Type } from "packages/com/mojang/datafixers/types/$Type$FieldNotFoundException"
import { $Either$$Type } from "packages/com/mojang/datafixers/util/$Either"
import { $TypedOptic$$Type } from "packages/com/mojang/datafixers/$TypedOptic"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Type$TypeMatcher$$Type<FT, FR> = ($Type$TypeMatcher<FT, FR> | ((arg0: $Type<S>) => $Either$$Type<$TypedOptic$$Type<S, any, FT, FR>, $Type$FieldNotFoundException$$Type>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Type$TypeMatcher_<FT, FR> = $Type$TypeMatcher$$Type<FT, FR>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P3" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P3$$Type<F extends $K1, T1, T2, T3> = ($Products$P3<F, T1, T2, T3>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P3_<F extends $K1, T1, T2, T3> = $Products$P3$$Type<F, T1, T2, T3>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P4" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P4$$Type<F extends $K1, T1, T2, T3, T4> = ($Products$P4<F, T1, T2, T3, T4>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P4_<F extends $K1, T1, T2, T3, T4> = $Products$P4$$Type<F, T1, T2, T3, T4>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P1" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P1$$Type<F extends $K1, T1> = ($Products$P1<F, T1>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P1_<F extends $K1, T1> = $Products$P1$$Type<F, T1>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P2" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P2$$Type<F extends $K1, T1, T2> = ($Products$P2<F, T1, T2>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P2_<F extends $K1, T1, T2> = $Products$P2$$Type<F, T1, T2>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P9" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P9$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> = ($Products$P9<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P9_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8, T9> = $Products$P9$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P7" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P7$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7> = ($Products$P7<F, T1, T2, T3, T4, T5, T6, T7>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P7_<F extends $K1, T1, T2, T3, T4, T5, T6, T7> = $Products$P7$$Type<F, T1, T2, T3, T4, T5, T6, T7>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P8" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P8$$Type<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8> = ($Products$P8<F, T1, T2, T3, T4, T5, T6, T7, T8>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P8_<F extends $K1, T1, T2, T3, T4, T5, T6, T7, T8> = $Products$P8$$Type<F, T1, T2, T3, T4, T5, T6, T7, T8>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P5" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P5$$Type<F extends $K1, T1, T2, T3, T4, T5> = ($Products$P5<F, T1, T2, T3, T4, T5>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P5_<F extends $K1, T1, T2, T3, T4, T5> = $Products$P5$$Type<F, T1, T2, T3, T4, T5>;
}
}

declare module "packages/com/mojang/datafixers/$Products$P6" {
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Products$P6$$Type<F extends $K1, T1, T2, T3, T4, T5, T6> = ($Products$P6<F, T1, T2, T3, T4, T5, T6>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Products$P6_<F extends $K1, T1, T2, T3, T4, T5, T6> = $Products$P6$$Type<F, T1, T2, T3, T4, T5, T6>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function16" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = ($Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15, arg15: T16) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function16_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R> = $Function16$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function11" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = ($Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function11_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R> = $Function11$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function10" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = ($Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function10_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> = $Function10$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function15" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = ($Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14, arg14: T15) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function15_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R> = $Function15$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function14" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = ($Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13, arg13: T14) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function14_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R> = $Function14$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function13" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = ($Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12, arg12: T13) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function13_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R> = $Function13$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>;
}
}

declare module "packages/com/mojang/datafixers/util/$Function12" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = ($Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> | ((arg0: T1, arg1: T2, arg2: T3, arg3: T4, arg4: T5, arg5: T6, arg6: T7, arg7: T8, arg8: T9, arg9: T10, arg10: T11, arg11: T12) => R));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Function12_<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R> = $Function12$$Type<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>;
}
}

declare module "packages/com/mojang/datafixers/types/families/$RecursiveTypeFamily" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecursiveTypeFamily$$Type = ($RecursiveTypeFamily);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecursiveTypeFamily_ = $RecursiveTypeFamily$$Type;
}
}

declare module "packages/com/mojang/datafixers/types/$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Type$$Type<A> = ($Type<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Type_<A> = $Type$$Type<A>;
}
}

declare module "packages/com/mojang/datafixers/util/$Pair$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pair$Mu$$Type<S> = ($Pair$Mu<S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pair$Mu_<S> = $Pair$Mu$$Type<S>;
}
}

declare module "packages/com/mojang/datafixers/$View$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $View$Mu$$Type = ($View$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $View$Mu_ = $View$Mu$$Type;
}
}

declare module "packages/com/mojang/datafixers/$RewriteResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RewriteResult$$Type<A, B> = ($RewriteResult<A, B>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RewriteResult_<A, B> = $RewriteResult$$Type<A, B>;
}
}

declare module "packages/com/mojang/datafixers/kinds/$Kind1" {
import { $Kind1$Mu, $Kind1$Mu$$Type } from "packages/com/mojang/datafixers/kinds/$Kind1$Mu"
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Kind1$$Type<F extends $K1, Mu extends $Kind1$Mu> = ($Kind1<F, Mu>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Kind1_<F extends $K1, Mu extends $Kind1$Mu> = $Kind1$$Type<F, Mu>;
}
}

declare module "packages/com/mojang/datafixers/types/templates/$TypeTemplate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeTemplate$$Type = ($TypeTemplate);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeTemplate_ = $TypeTemplate$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$Applicative$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Applicative$Mu$$Type = ($Applicative$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Applicative$Mu_ = $Applicative$Mu$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$Functor" {
import { $Function } from "packages/java/util/function/$Function"
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"
import { $Functor$Mu, $Functor$Mu$$Type } from "packages/com/mojang/datafixers/kinds/$Functor$Mu"
import { $App, $App$$Type } from "packages/com/mojang/datafixers/kinds/$App"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Functor$$Type<F extends $K1, Mu extends $Functor$Mu> = ($Functor<F, Mu> | ((arg0: $Function<T, R>, arg1: $App<F, T>) => $App$$Type<F, R>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Functor_<F extends $K1, Mu extends $Functor$Mu> = $Functor$$Type<F, Mu>;
}
}

declare module "packages/com/mojang/datafixers/schemas/$Schema" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Schema$$Type = ($Schema);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Schema_ = $Schema$$Type;
}
}

declare module "packages/com/mojang/datafixers/util/$Either$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Either$Mu$$Type<R> = ($Either$Mu<R>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Either$Mu_<R> = $Either$Mu$$Type<R>;
}
}

declare module "packages/com/mojang/datafixers/types/$Type$TypeError" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Type$TypeError$$Type = ($Type$TypeError);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Type$TypeError_ = $Type$TypeError$$Type;
}
}

declare module "packages/com/mojang/datafixers/types/templates/$RecursivePoint$RecursivePointType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $RecursivePoint$RecursivePointType$$Type<A> = ($RecursivePoint$RecursivePointType<A>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $RecursivePoint$RecursivePointType_<A> = $RecursivePoint$RecursivePointType$$Type<A>;
}
}

declare module "packages/com/mojang/datafixers/$TypeRewriteRule" {
import { $Type } from "packages/com/mojang/datafixers/types/$Type"
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $RewriteResult$$Type } from "packages/com/mojang/datafixers/$RewriteResult"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypeRewriteRule$$Type = ($TypeRewriteRule | ((arg0: $Type<A>) => $Optional$$Type<$RewriteResult$$Type<A, any>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypeRewriteRule_ = $TypeRewriteRule$$Type;
}
}

declare module "packages/com/mojang/datafixers/functions/$PointFreeRule" {
import { $Optional$$Type } from "packages/java/util/$Optional"
import { $PointFree, $PointFree$$Type } from "packages/com/mojang/datafixers/functions/$PointFree"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PointFreeRule$$Type = ($PointFreeRule | ((arg0: $PointFree<A>) => $Optional$$Type<$PointFree$$Type<A>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PointFreeRule_ = $PointFreeRule$$Type;
}
}

declare module "packages/com/mojang/datafixers/optics/$Optic" {
import { $Function$$Type } from "packages/java/util/function/$Function"
import { $App2$$Type } from "packages/com/mojang/datafixers/kinds/$App2"
import { $K1, $K1$$Type } from "packages/com/mojang/datafixers/kinds/$K1"
import { $App } from "packages/com/mojang/datafixers/kinds/$App"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Optic$$Type<Proof extends $K1, S, T, A, B> = ($Optic<Proof, S, T, A, B> | ((arg0: $App<Proof, P>) => $Function$$Type<$App2$$Type<P, A, B>, $App2$$Type<P, S, T>>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Optic_<Proof extends $K1, S, T, A, B> = $Optic$$Type<Proof, S, T, A, B>;
}
}

declare module "packages/com/mojang/datafixers/util/$Unit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Unit$$Type = ($Unit | ("instance"));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Unit_ = $Unit$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$App2" {
import { $K2, $K2$$Type } from "packages/com/mojang/datafixers/kinds/$K2"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $App2$$Type<F extends $K2, A, B> = ($App2<F, A, B>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $App2_<F extends $K2, A, B> = $App2$$Type<F, A, B>;
}
}

declare module "packages/com/mojang/datafixers/$View" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $View$$Type<A, B> = ($View<A, B>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $View_<A, B> = $View$$Type<A, B>;
}
}

declare module "packages/com/mojang/datafixers/$TypedOptic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TypedOptic$$Type<S, T, A, B> = ($TypedOptic<S, T, A, B>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TypedOptic_<S, T, A, B> = $TypedOptic$$Type<S, T, A, B>;
}
}

declare module "packages/com/mojang/datafixers/types/$Type$Mu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Type$Mu$$Type = ($Type$Mu);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Type$Mu_ = $Type$Mu$$Type;
}
}

declare module "packages/com/mojang/datafixers/$FamilyOptic" {
import { $TypedOptic$$Type } from "packages/com/mojang/datafixers/$TypedOptic"

/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $FamilyOptic$$Type<A, B> = ($FamilyOptic<A, B> | ((arg0: integer) => $TypedOptic$$Type<any, any, A, B>));
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $FamilyOptic_<A, B> = $FamilyOptic$$Type<A, B>;
}
}

declare module "packages/com/mojang/datafixers/types/families/$Algebra" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Algebra$$Type = ($Algebra);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Algebra_ = $Algebra$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$K2" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $K2$$Type = ($K2);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $K2_ = $K2$$Type;
}
}

declare module "packages/com/mojang/datafixers/kinds/$K1" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $K1$$Type = ($K1);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $K1_ = $K1$$Type;
}
}

declare module "packages/com/mojang/datafixers/util/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $Pair$$Type<F, S> = ($Pair<F, S>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $Pair_<F, S> = $Pair$$Type<F, S>;
}
}

declare module "packages/com/mojang/datafixers/functions/$PointFree" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $PointFree$$Type<T> = ($PointFree<T>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $PointFree_<T> = $PointFree$$Type<T>;
}
}

declare module "packages/com/mojang/datafixers/types/templates/$TaggedChoice$TaggedChoiceType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Class-specific type exported by ProbeJS, use global `{Type}_` types for convenience unless there's a naming conflict. */
export type $TaggedChoice$TaggedChoiceType$$Type<K> = ($TaggedChoice$TaggedChoiceType<K>);
/** Global type exported for convenience, use class-specific types if there's a naming conflict. */
declare global {
export type $TaggedChoice$TaggedChoiceType_<K> = $TaggedChoice$TaggedChoiceType$$Type<K>;
}
}


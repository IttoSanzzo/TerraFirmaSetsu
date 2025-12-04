declare module "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement" {
	import { $Record } from "packages/java/lang/$Record";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import {
		$OutputReplacementTransformer,
		$OutputReplacementTransformer$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import {
		$OutputReplacement,
		$OutputReplacement$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";

	export class $OutputReplacementTransformer$Replacement
		extends $Record
		implements $OutputReplacement
	{
		constructor(
			with_: $OutputReplacement$$Type,
			transformer: $OutputReplacementTransformer$$Type
		);

		public static of(o: any): $OutputReplacement;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type,
			original: $OutputReplacement$$Type
		): any;
		public transform(
			transformer: $OutputReplacementTransformer$$Type
		): $OutputReplacementTransformer$Replacement;
		public transformer(): $OutputReplacementTransformer;
		public with(): $OutputReplacement;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer" {
	import { $RecipeKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";

	export interface $OutputReplacementTransformer {
		"transform"(
			recipeKJS0: $RecipeKJS$$Type,
			replacementMatch1: $ReplacementMatch$$Type,
			outputReplacement2: $OutputReplacement$$Type,
			outputReplacement3: $OutputReplacement$$Type
		): any;
	}

	export namespace $OutputReplacementTransformer {
		const probejs$$marker: never;
	}
	export abstract class $OutputReplacementTransformer$$Static implements $OutputReplacementTransformer {}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilderMap" {
	import { $BiConsumer$$Type } from "packages/java/util/function/$BiConsumer";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$RecipeComponentValue,
		$RecipeComponentValue$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $Function$$Type } from "packages/java/util/function/$Function";
	import { $Set } from "packages/java/util/$Set";
	import { $RecipeComponentBuilder$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $AbstractMap } from "packages/java/util/$AbstractMap";
	import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction";
	import { $Map, $Map$$Type } from "packages/java/util/$Map";
	import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry";

	export class $RecipeComponentBuilderMap extends $AbstractMap<
		$RecipeKey<any>,
		any
	> {
		static readonly "EMPTY": $RecipeComponentBuilderMap;
		readonly "holders": $RecipeComponentValue<any>[];

		constructor(keys: $RecipeKey$$Type<any>[]);
		constructor(holders: $RecipeComponentValue$$Type<any>[]);
		constructor(builder: $RecipeComponentBuilder$$Type);

		public compute(
			recipeKey0: $RecipeKey$$Type<any>,
			biFunction1: $BiFunction$$Type<$RecipeKey$$Type<any>, any, any>
		): any;
		public computeIfAbsent(
			recipeKey0: $RecipeKey$$Type<any>,
			function1: $Function$$Type<$RecipeKey$$Type<any>, any>
		): any;
		public computeIfPresent(
			recipeKey0: $RecipeKey$$Type<any>,
			biFunction1: $BiFunction$$Type<$RecipeKey$$Type<any>, any, any>
		): any;
		public static copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>;
		public static entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>;
		public entrySet(): $Set<$Map$Entry<$RecipeKey<any>, any>>;
		public forEach(
			biConsumer0: $BiConsumer$$Type<$RecipeKey$$Type<any>, any>
		): void;
		public get(key: any): any;
		public getHolder(key: any): $RecipeComponentValue<any>;
		public getOrDefault(key: any, defaultValue: any): any;
		public merge(
			recipeKey0: $RecipeKey$$Type<any>,
			object1: any,
			biFunction2: $BiFunction$$Type<any, any, any>
		): any;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V
		): $Map<K, V>;
		public static of<K, V>(): $Map<K, V>;
		public static of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>;
		public static of<K, V>(k0: K, v1: V): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V,
			k16: K,
			v17: V,
			k18: K,
			v19: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V,
			k16: K,
			v17: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V
		): $Map<K, V>;
		public static ofEntries<K, V>(
			...entry0s: $Map$Entry$$Type<K, V>[]
		): $Map<K, V>;
		public put(key: $RecipeKey$$Type<any>, value: any): any;
		public putIfAbsent(recipeKey0: $RecipeKey$$Type<any>, object1: any): any;
		public remove(object0: any, object1: any): boolean;
		public replace(recipeKey0: $RecipeKey$$Type<any>, object1: any): any;
		public replace(
			recipeKey0: $RecipeKey$$Type<any>,
			object1: any,
			object2: any
		): boolean;
		public replaceAll(
			biFunction0: $BiFunction$$Type<$RecipeKey$$Type<any>, any, any>
		): void;
		get hasChanged(): boolean;
		set hasChanged(value: boolean);
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction" {
	import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context";
	import {
		$RecipesEventJS,
		$RecipesEventJS$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipesEventJS";
	import { $Consumer$$Type } from "packages/java/util/function/$Consumer";
	import { $Pattern } from "packages/java/util/regex/$Pattern";
	import { $WrappedJS } from "packages/dev/latvian/mods/kubejs/util/$WrappedJS";
	import { $BaseFunction } from "packages/dev/latvian/mods/rhino/$BaseFunction";
	import { $RecipeJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $Class$$Type } from "packages/java/lang/$Class";
	import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation";
	import {
		$RecipeSchemaType,
		$RecipeSchemaType$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType";
	import {
		$Scriptable,
		$Scriptable$$Type,
	} from "packages/dev/latvian/mods/rhino/$Scriptable";
	import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack";
	import { $InputItem } from "packages/dev/latvian/mods/kubejs/item/$InputItem";

	export class $RecipeTypeFunction extends $BaseFunction implements $WrappedJS {
		static readonly "SKIP_ERROR": $Pattern;
		readonly "event": $RecipesEventJS;
		readonly "id": $ResourceLocation;
		readonly "idString": string;
		readonly "schemaType": $RecipeSchemaType;

		constructor(
			event: $RecipesEventJS$$Type,
			schemaType: $RecipeSchemaType$$Type
		);

		public createRecipe(args: any[]): $RecipeJS;
		public delete(context0: $Context$$Type, int1: integer): void;
		public enumerationIteratorHasNext(
			cx: $Context$$Type,
			currentId: $Consumer$$Type<any>
		): boolean;
		public enumerationIteratorNext(
			cx: $Context$$Type,
			currentId: $Consumer$$Type<any>
		): boolean;
		public get(
			context0: $Context$$Type,
			int1: integer,
			scriptable2: $Scriptable$$Type
		): any;
		public getAllIds(cx: $Context$$Type): any[];
		public getDefaultValue(
			context0: $Context$$Type,
			class1: $Class$$Type<any>
		): any;
		public getIds(context0: $Context$$Type): any[];
		public getMod(): string;
		public getParentScope(): $Scriptable;
		public getPrototype(context0: $Context$$Type): $Scriptable;
		public has(
			context0: $Context$$Type,
			int1: integer,
			scriptable2: $Scriptable$$Type
		): boolean;
		public put(
			context0: $Context$$Type,
			int1: integer,
			scriptable2: $Scriptable$$Type,
			object3: any
		): void;
		public setParentScope(scriptable0: $Scriptable$$Type): void;
		public setPrototype(scriptable0: $Scriptable$$Type): void;
		get mod(): string;
		get parentScope(): $Scriptable;
		set parentScope(value: $Scriptable$$Type);
		set prototype(value: $Scriptable$$Type);
	}

	type VanillaShapedKey = Record<string, KjsItemOrItemTag>;

	interface $RecipeTypeFunction {
		(
			output: KjsItemStack,
			input: KjsItemOrItemTagStack | KjsItemOrItemTagStack[]
		): any;
		(
			output: KjsItemStack,
			pattern: [string] | [string, string] | [string, string, string],
			key: VanillaShapedKey
		): any;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeSchemaRegistryEventJS" {
	import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS";
	import { $RecipeSchema$$Type } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema";
	import {
		$RecipeNamespace,
		$RecipeNamespace$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeNamespace";
	import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation";
	import { $RecipeComponentFactory } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeComponentFactory";
	import { $Map, $Map$$Type } from "packages/java/util/$Map";

	export class $RecipeSchemaRegistryEventJS extends $EventJS {
		constructor(
			namespaces: $Map$$Type<string, $RecipeNamespace$$Type>,
			mappedRecipes: $Map$$Type<string, $ResourceLocation$$Type>
		);

		public getComponents(): $Map<string, $RecipeComponentFactory>;
		public mapRecipe(name: string, type: string): void;
		public mapRecipe(name: string, type: $ResourceLocation$$Type): void;
		public namespace(namespace: string): $RecipeNamespace;
		public register(
			id: $ResourceLocation$$Type,
			schema: $RecipeSchema$$Type
		): void;
		get components(): $Map<string, $RecipeComponentFactory>;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import { $RecipeKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";

	export interface $InputReplacementTransformer {
		"transform"(
			recipeKJS0: $RecipeKJS$$Type,
			replacementMatch1: $ReplacementMatch$$Type,
			inputReplacement2: $InputReplacement$$Type,
			inputReplacement3: $InputReplacement$$Type
		): any;
	}

	export namespace $InputReplacementTransformer {
		const probejs$$marker: never;
	}
	export abstract class $InputReplacementTransformer$$Static implements $InputReplacementTransformer {}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey" {
	import {
		$RecipeOptional,
		$RecipeOptional$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeOptional";
	import { $Set } from "packages/java/util/$Set";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";

	export class $RecipeKey<T> {
		"allowEmpty": boolean;
		"alwaysWrite": boolean;
		readonly "component": $RecipeComponent<T>;
		readonly "name": string;
		readonly "names": $Set<string>;
		"noBuilders": boolean;
		"optional": $RecipeOptional<T>;
		"preferred": string;

		constructor(component: $RecipeComponent$$Type<T>, name: string);

		public allowEmpty(): $RecipeKey<T>;
		public alt(...names: string[]): $RecipeKey<T>;
		public alt(name: string): $RecipeKey<T>;
		public alwaysWrite(): $RecipeKey<T>;
		public defaultOptional(): $RecipeKey<T>;
		public exclude(): $RecipeKey<T>;
		public includeInAutoConstructors(): boolean;
		public noBuilders(): $RecipeKey<T>;
		public optional(): boolean;
		public optional(value: $RecipeOptional$$Type<T>): $RecipeKey<T>;
		public optional(value: T): $RecipeKey<T>;
		public preferred(name: string): $RecipeKey<T>;
		get excluded(): boolean;
		set excluded(value: boolean);
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $Class } from "packages/java/lang/$Class";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import {
		$Either,
		$Either$$Type,
	} from "packages/com/mojang/datafixers/util/$Either";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $Record } from "packages/java/lang/$Record";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$$Type } from "packages/java/util/$Map";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";

	export class $OrRecipeComponent<H, L>
		extends $Record
		implements $RecipeComponent<$Either<H, L>>
	{
		constructor(
			high: $RecipeComponent$$Type<H>,
			low: $RecipeComponent$$Type<L>
		);

		public and<O>(
			other: $RecipeComponent$$Type<O>
		): $AndRecipeComponent<$Either<H, L>, O>;
		public asArray(): $ArrayRecipeComponent<$Either<H, L>>;
		public asArrayOrSelf(): $ArrayRecipeComponent<$Either<H, L>>;
		public asMap<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, $Either<H, L>>>;
		public asPatternKey(): $RecipeComponent<$TinyMap<character, $Either<H, L>>>;
		public static builder(): $RecipeComponentBuilder;
		public static builder(
			...key: $RecipeKey$$Type<any>[]
		): $RecipeComponentBuilder;
		public checkEmpty(
			key: $RecipeKey$$Type<$Either$$Type<H, L>>,
			value: $Either$$Type<H, L>
		): string;
		public checkValueHasChanged(
			oldValue: $Either$$Type<H, L>,
			newValue: $Either$$Type<H, L>
		): boolean;
		public componentClass(): $Class<any>;
		public componentType(): string;
		public constructorDescription(ctx: $DescriptionContext$$Type): $TypeDescJS;
		public hasPriority(recipe: $RecipeJS$$Type, from: any): boolean;
		public high(): $RecipeComponent<H>;
		public isInput(
			recipe: $RecipeJS$$Type,
			value: $Either$$Type<H, L>,
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			value: $Either$$Type<H, L>,
			match: $ReplacementMatch$$Type
		): boolean;
		public key(name: string): $RecipeKey<$Either<H, L>>;
		public low(): $RecipeComponent<L>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		public map(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<$Either<H, L>>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		public mapIn(
			mappingTo: $UnaryOperator$$Type<any>
		): $MappingRecipeComponent<$Either<H, L>>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		public mapOut(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<$Either<H, L>>;
		public or<O>(
			other: $RecipeComponent$$Type<O>
		): $OrRecipeComponent<$Either<H, L>, O>;
		public orSelf(): $RecipeComponent<$Either<H, L>>;
		public read(recipe: $RecipeJS$$Type, from: any): $Either<H, L>;
		public readFromJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$Either$$Type<H, L>>,
			json: $JsonObject$$Type
		): void;
		public readFromMap(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$Either$$Type<H, L>>,
			map: $Map$$Type<any, any>
		): void;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			original: $Either$$Type<H, L>,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): $Either<H, L>;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			original: $Either$$Type<H, L>,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): $Either<H, L>;
		public role(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		public simpleMap(
			mappings: any
		): $SimpleMappingRecipeComponent<$Either<H, L>>;
		public write(
			recipe: $RecipeJS$$Type,
			value: $Either$$Type<H, L>
		): $JsonElement;
		public writeToJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$Either$$Type<H, L>>,
			json: $JsonObject$$Type
		): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$CompostableRecipesEventJS" {
	import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS";
	import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient";
	import { $ItemLike } from "packages/net/minecraft/world/level/$ItemLike";
	import { $Object2FloatMap } from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatMap";

	export class $CompostableRecipesEventJS extends $EventJS {
		static "originalMap": $Object2FloatMap<$ItemLike>;

		constructor();

		public add(ingredient: $Ingredient$$Type, f: float): void;
		public remove(ingredient: $Ingredient$$Type): void;
		public removeAll(): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeNamespace" {
	import { $RecipeKey$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $Function$$Type } from "packages/java/util/function/$Function";
	import { $LinkedHashMap } from "packages/java/util/$LinkedHashMap";
	import { $RecipeSchema$$Type } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema";
	import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation";
	import {
		$RecipeSchemaType,
		$RecipeSchemaType$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType";
	import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction";
	import { $Map, $Map$$Type } from "packages/java/util/$Map";
	import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry";

	export class $RecipeNamespace extends $LinkedHashMap<
		string,
		$RecipeSchemaType
	> {
		readonly "name": string;

		constructor(name: string);

		public compute(
			string0: string,
			biFunction1: $BiFunction$$Type<
				string,
				$RecipeSchemaType$$Type,
				$RecipeSchemaType
			>
		): $RecipeSchemaType;
		public computeIfAbsent(
			string0: string,
			function1: $Function$$Type<string, $RecipeSchemaType>
		): $RecipeSchemaType;
		public computeIfPresent(
			string0: string,
			biFunction1: $BiFunction$$Type<
				string,
				$RecipeSchemaType$$Type,
				$RecipeSchemaType
			>
		): $RecipeSchemaType;
		public containsKey(object0: any): boolean;
		public static copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>;
		public static entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>;
		public equals(object0: any): boolean;
		public static getAll(): $Map<string, $RecipeNamespace>;
		public static getMappedRecipes(): $Map<string, $ResourceLocation>;
		public hashCode(): integer;
		public isEmpty(): boolean;
		public merge(
			string0: string,
			recipeSchemaType1: $RecipeSchemaType$$Type,
			biFunction2: $BiFunction$$Type<
				$RecipeSchemaType$$Type,
				$RecipeSchemaType$$Type,
				$RecipeSchemaType
			>
		): $RecipeSchemaType;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V
		): $Map<K, V>;
		public static of<K, V>(): $Map<K, V>;
		public static of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>;
		public static of<K, V>(k0: K, v1: V): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V,
			k16: K,
			v17: V,
			k18: K,
			v19: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V,
			k16: K,
			v17: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V
		): $Map<K, V>;
		public static ofEntries<K, V>(
			...entry0s: $Map$Entry$$Type<K, V>[]
		): $Map<K, V>;
		public put(
			string0: string,
			recipeSchemaType1: $RecipeSchemaType$$Type
		): $RecipeSchemaType;
		public putAll(map0: $Map$$Type<string, $RecipeSchemaType$$Type>): void;
		public putIfAbsent(
			string0: string,
			recipeSchemaType1: $RecipeSchemaType$$Type
		): $RecipeSchemaType;
		public register(id: string, type: $RecipeSchema$$Type): $RecipeNamespace;
		public registerBasic(
			id: string,
			...keys: $RecipeKey$$Type<any>[]
		): $RecipeNamespace;
		public remove(object0: any): $RecipeSchemaType;
		public remove(object0: any, object1: any): boolean;
		public replace(
			string0: string,
			recipeSchemaType1: $RecipeSchemaType$$Type
		): $RecipeSchemaType;
		public replace(
			string0: string,
			recipeSchemaType1: $RecipeSchemaType$$Type,
			recipeSchemaType2: $RecipeSchemaType$$Type
		): boolean;
		public shaped(id: string): $RecipeNamespace;
		public shapeless(id: string): $RecipeNamespace;
		public size(): integer;
		public special(id: string): $RecipeNamespace;
		get empty(): boolean;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapedRecipeSchema$ShapedRecipeJS" {
	import { $RecipeJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";

	export class $ShapedRecipeSchema$ShapedRecipeJS extends $RecipeJS {
		constructor();

		public getMod(): string;
		public noMirror(): $RecipeJS;
		public noShrink(): $RecipeJS;
		get mod(): string;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $Class, $Class$$Type } from "packages/java/lang/$Class";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $Record } from "packages/java/lang/$Record";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$$Type } from "packages/java/util/$Map";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";

	export class $ArrayRecipeComponent<T>
		extends $Record
		implements $RecipeComponent<T[]>
	{
		constructor(
			component: $RecipeComponent$$Type<T>,
			canWriteSelf: boolean,
			arrayClass: $Class$$Type<any>,
			emptyArray: T[]
		);

		public add(array: T[], value: T): T[];
		public addAll(array: T[], ...values: T[]): T[];
		public and<O>(
			other: $RecipeComponent$$Type<O>
		): $AndRecipeComponent<T[], O>;
		public arrayClass(): $Class<any>;
		public asArray(): $ArrayRecipeComponent<T[]>;
		public asArrayOrSelf(): $ArrayRecipeComponent<T[]>;
		public asMap<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, T[]>>;
		public asPatternKey(): $RecipeComponent<$TinyMap<character, T[]>>;
		public static builder(): $RecipeComponentBuilder;
		public static builder(
			...key: $RecipeKey$$Type<any>[]
		): $RecipeComponentBuilder;
		public canWriteSelf(): boolean;
		public checkEmpty(key: $RecipeKey$$Type<T[]>, value: T[]): string;
		public checkValueHasChanged(oldValue: T[], newValue: T[]): boolean;
		public component(): $RecipeComponent<T>;
		public componentClass(): $Class<any>;
		public componentType(): string;
		public constructorDescription(ctx: $DescriptionContext$$Type): $TypeDescJS;
		public emptyArray(): T[];
		public hasPriority(recipe: $RecipeJS$$Type, from: any): boolean;
		public isInput(
			recipe: $RecipeJS$$Type,
			value: T[],
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			value: T[],
			match: $ReplacementMatch$$Type
		): boolean;
		public key(name: string): $RecipeKey<T[]>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		public map(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T[]>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		public mapIn(
			mappingTo: $UnaryOperator$$Type<any>
		): $MappingRecipeComponent<T[]>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		public mapOut(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T[]>;
		public newArray(length: integer): T[];
		public or<O>(other: $RecipeComponent$$Type<O>): $OrRecipeComponent<T[], O>;
		public orSelf(): $RecipeComponent<T[]>;
		public read(recipe: $RecipeJS$$Type, from: any): T[];
		public readFromJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T[]>,
			json: $JsonObject$$Type
		): void;
		public readFromMap(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T[]>,
			map: $Map$$Type<any, any>
		): void;
		public remove(array: T[], index: integer): T[];
		public replaceInput(
			recipe: $RecipeJS$$Type,
			original: T[],
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): T[];
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			original: T[],
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): T[];
		public role(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		public simpleMap(mappings: any): $SimpleMappingRecipeComponent<T[]>;
		public write(recipe: $RecipeJS$$Type, value: T[]): $JsonElement;
		public writeToJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T[]>,
			json: $JsonObject$$Type
		): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType" {
	import {
		$RecipeSchema,
		$RecipeSchema$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema";
	import { $RecipeSerializer } from "packages/net/minecraft/world/item/crafting/$RecipeSerializer";
	import {
		$RecipeNamespace,
		$RecipeNamespace$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeNamespace";
	import {
		$ResourceLocation,
		$ResourceLocation$$Type,
	} from "packages/net/minecraft/resources/$ResourceLocation";

	export class $RecipeSchemaType {
		readonly "id": $ResourceLocation;
		readonly "namespace": $RecipeNamespace;
		readonly "schema": $RecipeSchema;

		constructor(
			namespace: $RecipeNamespace$$Type,
			id: $ResourceLocation$$Type,
			schema: $RecipeSchema$$Type
		);

		public getSerializer(): $RecipeSerializer<any>;
		get parent(): $RecipeSchemaType;
		set parent(value: $RecipeSchemaType$$Type);
		get serializer(): $RecipeSerializer<any>;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$CustomIngredientActionCallback" {
	import { $InventoryKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS";
	import {
		$ItemStack,
		$ItemStack$$Type,
	} from "packages/net/minecraft/world/item/$ItemStack";

	export interface $CustomIngredientActionCallback {
		"transform"(
			itemStack0: $ItemStack$$Type,
			int1: integer,
			inventoryKJS2: $InventoryKJS$$Type
		): $ItemStack;
	}

	export namespace $CustomIngredientActionCallback {
		const probejs$$marker: never;
	}
	export abstract class $CustomIngredientActionCallback$$Static implements $CustomIngredientActionCallback {}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema" {
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $UUID } from "packages/java/util/$UUID";
	import { $Class, $Class$$Type } from "packages/java/lang/$Class";
	import { $RecipeConstructor$Factory$$Type } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor$Factory";
	import { $Int2ObjectMap } from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap";
	import { $RecipeTypeFunction$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction";
	import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation";
	import {
		$Function,
		$Function$$Type,
	} from "packages/java/util/function/$Function";
	import {
		$InputItem,
		$InputItem$$Type,
	} from "packages/dev/latvian/mods/kubejs/item/$InputItem";
	import {
		$RecipeJS,
		$RecipeJS$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import {
		$Supplier,
		$Supplier$$Type,
	} from "packages/java/util/function/$Supplier";
	import { $RecipeConstructor } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor";
	import { $OutputItem$$Type } from "packages/dev/latvian/mods/kubejs/item/$OutputItem";

	export class $RecipeSchema {
		static readonly "DEFAULT_UNIQUE_ID_FUNCTION": $Function<$RecipeJS, string>;
		readonly "factory": $Supplier<$RecipeJS>;
		readonly "keys": $RecipeKey<any>[];
		readonly "recipeType": $Class<$RecipeJS>;

		constructor(...keys: $RecipeKey$$Type<any>[]);
		constructor(
			recipeType: $Class$$Type<$RecipeJS$$Type>,
			factory: $Supplier$$Type<$RecipeJS>,
			...keys: $RecipeKey$$Type<any>[]
		);

		public addConstructor(
			factory: $RecipeConstructor$Factory$$Type,
			...keys: $RecipeKey$$Type<any>[]
		): $RecipeSchema;
		public addConstructor(...keys: $RecipeKey$$Type<any>[]): $RecipeSchema;
		public constructors(): $Int2ObjectMap<$RecipeConstructor>;
		public deserialize(
			type: $RecipeTypeFunction$$Type,
			id: $ResourceLocation$$Type,
			json: $JsonObject$$Type
		): $RecipeJS;
		public inputCount(): integer;
		public minRequiredArguments(): integer;
		public static normalizeId(id: string): string;
		public outputCount(): integer;
		public uniqueId(
			uniqueIdFunction: $Function$$Type<$RecipeJS$$Type, string>
		): $RecipeSchema;
		public uniqueInputId(
			resultItemKey: $RecipeKey$$Type<$InputItem$$Type>
		): $RecipeSchema;
		public uniqueOutputArrayId(
			resultItemKey: $RecipeKey$$Type<$OutputItem$$Type[]>
		): $RecipeSchema;
		public uniqueOutputId(
			resultItemKey: $RecipeKey$$Type<$OutputItem$$Type>
		): $RecipeSchema;
		public uuid(): $UUID;
		get uniqueIdFunction(): $Function<$RecipeJS, string>;
		set uniqueIdFunction(value: $Function$$Type<$RecipeJS$$Type, string>);
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentValueMap" {
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $Function$$Type } from "packages/java/util/function/$Function";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $IdentityHashMap } from "packages/java/util/$IdentityHashMap";
	import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction";
	import { $Map, $Map$$Type } from "packages/java/util/$Map";
	import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry";

	export class $ComponentValueMap extends $IdentityHashMap<
		$RecipeKey<any>,
		any
	> {
		constructor(init: integer);

		public compute(
			recipeKey0: $RecipeKey$$Type<any>,
			biFunction1: $BiFunction$$Type<$RecipeKey$$Type<any>, any, any>
		): any;
		public computeIfAbsent(
			recipeKey0: $RecipeKey$$Type<any>,
			function1: $Function$$Type<$RecipeKey$$Type<any>, any>
		): any;
		public computeIfPresent(
			recipeKey0: $RecipeKey$$Type<any>,
			biFunction1: $BiFunction$$Type<$RecipeKey$$Type<any>, any, any>
		): any;
		public static copyOf<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>;
		public static entry<K, V>(k0: K, v1: V): $Map$Entry<K, V>;
		public getOrDefault(object0: any, object1: any): any;
		public getValue<T>(recipe: $RecipeJS$$Type, key: $RecipeKey$$Type<T>): T;
		public merge(
			recipeKey0: $RecipeKey$$Type<any>,
			object1: any,
			biFunction2: $BiFunction$$Type<any, any, any>
		): any;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V
		): $Map<K, V>;
		public static of<K, V>(): $Map<K, V>;
		public static of<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>;
		public static of<K, V>(k0: K, v1: V): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V,
			k16: K,
			v17: V,
			k18: K,
			v19: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V,
			k16: K,
			v17: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V,
			k14: K,
			v15: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V,
			k12: K,
			v13: V
		): $Map<K, V>;
		public static of<K, V>(
			k0: K,
			v1: V,
			k2: K,
			v3: V,
			k4: K,
			v5: V,
			k6: K,
			v7: V,
			k8: K,
			v9: V,
			k10: K,
			v11: V
		): $Map<K, V>;
		public static ofEntries<K, V>(
			...entry0s: $Map$Entry$$Type<K, V>[]
		): $Map<K, V>;
		public putIfAbsent(recipeKey0: $RecipeKey$$Type<any>, object1: any): any;
		public remove(object0: any, object1: any): boolean;
		public replace(recipeKey0: $RecipeKey$$Type<any>, object1: any): any;
		public replace(
			recipeKey0: $RecipeKey$$Type<any>,
			object1: any,
			object2: any
		): boolean;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent" {
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $JsonArray } from "packages/com/google/gson/$JsonArray";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement";
	import {
		$Pair,
		$Pair$$Type,
	} from "packages/org/apache/commons/lang3/tuple/$Pair";
	import { $Class } from "packages/java/lang/$Class";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $Record } from "packages/java/lang/$Record";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $Map$$Type } from "packages/java/util/$Map";

	export class $AndRecipeComponent<A, B>
		extends $Record
		implements $RecipeComponent<$Pair<A, B>>
	{
		constructor(a: $RecipeComponent$$Type<A>, b: $RecipeComponent$$Type<B>);

		public a(): $RecipeComponent<A>;
		public and<O>(
			other: $RecipeComponent$$Type<O>
		): $AndRecipeComponent<$Pair<A, B>, O>;
		public asArray(): $ArrayRecipeComponent<$Pair<A, B>>;
		public asArrayOrSelf(): $ArrayRecipeComponent<$Pair<A, B>>;
		public asMap<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, $Pair<A, B>>>;
		public asPatternKey(): $RecipeComponent<$TinyMap<character, $Pair<A, B>>>;
		public b(): $RecipeComponent<B>;
		public static builder(): $RecipeComponentBuilder;
		public static builder(
			...key: $RecipeKey$$Type<any>[]
		): $RecipeComponentBuilder;
		public checkEmpty(
			key: $RecipeKey$$Type<$Pair$$Type<A, B>>,
			value: $Pair$$Type<A, B>
		): string;
		public checkValueHasChanged(
			oldValue: $Pair$$Type<A, B>,
			newValue: $Pair$$Type<A, B>
		): boolean;
		public componentClass(): $Class<any>;
		public componentType(): string;
		public constructorDescription(ctx: $DescriptionContext$$Type): $TypeDescJS;
		public hasPriority(recipe: $RecipeJS$$Type, from: any): boolean;
		public isInput(
			recipe: $RecipeJS$$Type,
			value: $Pair$$Type<A, B>,
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			value: $Pair$$Type<A, B>,
			match: $ReplacementMatch$$Type
		): boolean;
		public key(name: string): $RecipeKey<$Pair<A, B>>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		public map(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<$Pair<A, B>>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		public mapIn(
			mappingTo: $UnaryOperator$$Type<any>
		): $MappingRecipeComponent<$Pair<A, B>>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		public mapOut(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<$Pair<A, B>>;
		public or<O>(
			other: $RecipeComponent$$Type<O>
		): $OrRecipeComponent<$Pair<A, B>, O>;
		public orSelf(): $RecipeComponent<$Pair<A, B>>;
		public read(recipe: $RecipeJS$$Type, from: any): $Pair<A, B>;
		public readFromJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$Pair$$Type<A, B>>,
			json: $JsonObject$$Type
		): void;
		public readFromMap(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$Pair$$Type<A, B>>,
			map: $Map$$Type<any, any>
		): void;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			original: $Pair$$Type<A, B>,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): $Pair<A, B>;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			original: $Pair$$Type<A, B>,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): $Pair<A, B>;
		public role(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		public simpleMap(mappings: any): $SimpleMappingRecipeComponent<$Pair<A, B>>;
		public write(recipe: $RecipeJS$$Type, value: $Pair$$Type<A, B>): $JsonArray;
		public writeToJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$Pair$$Type<A, B>>,
			json: $JsonObject$$Type
		): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilterParseEvent" {
	import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context";
	import { $List$$Type } from "packages/java/util/$List";
	import { $RecipeFilter$$Type } from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter";
	import { $Map$$Type } from "packages/java/util/$Map";

	export interface $RecipeFilterParseEvent {
		"parse"(
			context0: $Context$$Type,
			list1: $List$$Type<$RecipeFilter$$Type>,
			map2: $Map$$Type<any, any>
		): void;
	}

	export namespace $RecipeFilterParseEvent {
		const probejs$$marker: never;
	}
	export abstract class $RecipeFilterParseEvent$$Static implements $RecipeFilterParseEvent {}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$JsonRecipeJS" {
	import { $RecipeJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";

	export class $JsonRecipeJS extends $RecipeJS {
		constructor();

		public getMod(): string;
		get mod(): string;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction" {
	import {
		$JsonObject,
		$JsonObject$$Type,
	} from "packages/com/google/gson/$JsonObject";
	import { $JsonElement$$Type } from "packages/com/google/gson/$JsonElement";
	import { $Function } from "packages/java/util/function/$Function";
	import { $IngredientActionFilter } from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientActionFilter";
	import { $FriendlyByteBuf$$Type } from "packages/net/minecraft/network/$FriendlyByteBuf";
	import { $List, $List$$Type } from "packages/java/util/$List";
	import {
		$ItemStack,
		$ItemStack$$Type,
	} from "packages/net/minecraft/world/item/$ItemStack";
	import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer";
	import { $Map } from "packages/java/util/$Map";

	export class $IngredientAction extends $IngredientActionFilter {
		static readonly "FACTORY_MAP": $Map<
			string,
			$Function<$JsonObject, $IngredientAction>
		>;

		constructor();

		public static getRemaining(
			container: $CraftingContainer$$Type,
			index: integer,
			ingredientActions: $List$$Type<$IngredientAction$$Type>
		): $ItemStack;
		public getType(): string;
		public static parseList(json: $JsonElement$$Type): $List<$IngredientAction>;
		public static readList(
			buf: $FriendlyByteBuf$$Type
		): $List<$IngredientAction>;
		public toJson(json: $JsonObject$$Type): void;
		public toJson(): $JsonObject;
		public transform(
			itemStack0: $ItemStack$$Type,
			int1: integer,
			craftingContainer2: $CraftingContainer$$Type
		): $ItemStack;
		public static writeList(
			buf: $FriendlyByteBuf$$Type,
			list: $List$$Type<$IngredientAction$$Type>
		): void;
		get type(): string;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter" {
	import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context";
	import {
		$RecipeKJS,
		$RecipeKJS$$Type,
	} from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS";
	import { $RecipeFilterParseEvent } from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilterParseEvent";
	import { $Event } from "packages/dev/architectury/event/$Event";
	import {
		$Predicate,
		$Predicate$$Type,
	} from "packages/java/util/function/$Predicate";

	export interface $RecipeFilter extends $Predicate<$RecipeKJS> {
		"and"(
			predicate0: $Predicate$$Type<$RecipeKJS$$Type>
		): $Predicate<$RecipeKJS>;
		"negate"(): $Predicate<$RecipeKJS>;
		"or"(
			predicate0: $Predicate$$Type<$RecipeKJS$$Type>
		): $Predicate<$RecipeKJS>;
		"test"(recipeKJS0: $RecipeKJS$$Type): boolean;
	}

	export namespace $RecipeFilter {
		const PARSE: $Event<$RecipeFilterParseEvent>;
		function isEqual<T>(object0: any): $Predicate<T>;
		function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>;
		function of(cx: $Context$$Type, o: any): $RecipeFilter;
	}
	export abstract class $RecipeFilter$$Static implements $RecipeFilter {
		static readonly "PARSE": $Event<$RecipeFilterParseEvent>;

		static isEqual<T>(object0: any): $Predicate<T>;
		static not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>;
		static of(cx: $Context$$Type, o: any): $RecipeFilter;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientActionFilter" {
	import {
		$Ingredient,
		$Ingredient$$Type,
	} from "packages/net/minecraft/world/item/crafting/$Ingredient";
	import { $ItemStack$$Type } from "packages/net/minecraft/world/item/$ItemStack";

	export class $IngredientActionFilter {
		constructor();

		public checkFilter(index: integer, stack: $ItemStack$$Type): boolean;
		public copyFrom(filter: $IngredientActionFilter$$Type): void;
		public static filterOf(o: any): $IngredientActionFilter;
		get filterIndex(): integer;
		set filterIndex(value: integer);
		get filterIngredient(): $Ingredient;
		set filterIngredient(value: $Ingredient$$Type);
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch" {
	export {}; // Mark the file as a module, do not remove unless there are other import/exports!
	export interface $ReplacementMatch {}

	export namespace $ReplacementMatch {
		const NONE: $ReplacementMatch;
		function of(o: any): $ReplacementMatch;
	}
	export abstract class $ReplacementMatch$$Static implements $ReplacementMatch {
		static readonly "NONE": $ReplacementMatch;

		static of(o: any): $ReplacementMatch;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole" {
	import { $Enum } from "packages/java/lang/$Enum";

	export class $ComponentRole extends $Enum<$ComponentRole> {
		static readonly "INPUT": $ComponentRole;
		static readonly "OTHER": $ComponentRole;
		static readonly "OUTPUT": $ComponentRole;

		public isInput(): boolean;
		public isOther(): boolean;
		public isOutput(): boolean;
		public static valueOf(name: string): $ComponentRole;
		public static values(): $ComponentRole[];
		get input(): boolean;
		get other(): boolean;
		get output(): boolean;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback" {
	import { $ModifyRecipeCraftingGrid$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeCraftingGrid";
	import {
		$ItemStack,
		$ItemStack$$Type,
	} from "packages/net/minecraft/world/item/$ItemStack";

	export interface $ModifyRecipeResultCallback {
		"modify"(
			modifyRecipeCraftingGrid0: $ModifyRecipeCraftingGrid$$Type,
			itemStack1: $ItemStack$$Type
		): $ItemStack;
	}

	export namespace $ModifyRecipeResultCallback {
		const probejs$$marker: never;
	}
	export abstract class $ModifyRecipeResultCallback$$Static implements $ModifyRecipeResultCallback {}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor" {
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $Record } from "packages/java/lang/$Record";
	import {
		$RecipeSchema,
		$RecipeSchema$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema";
	import {
		$RecipeConstructor$Factory,
		$RecipeConstructor$Factory$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor$Factory";

	export class $RecipeConstructor extends $Record {
		constructor(
			schema: $RecipeSchema$$Type,
			keys: $RecipeKey$$Type<any>[],
			factory: $RecipeConstructor$Factory$$Type
		);

		public factory(): $RecipeConstructor$Factory;
		public keys(): $RecipeKey<any>[];
		public schema(): $RecipeSchema;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$AfterRecipesLoadedEventJS" {
	import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS";
	import { $RecipeKJS$$Type } from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS";
	import { $Consumer$$Type } from "packages/java/util/function/$Consumer";
	import { $RecipeType$$Type } from "packages/net/minecraft/world/item/crafting/$RecipeType";
	import { $RecipeFilter$$Type } from "packages/dev/latvian/mods/kubejs/recipe/filter/$RecipeFilter";
	import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation";
	import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe";
	import { $Map$$Type } from "packages/java/util/$Map";

	export class $AfterRecipesLoadedEventJS extends $EventJS {
		constructor(
			r: $Map$$Type<
				$RecipeType$$Type<any>,
				$Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>
			>,
			n: $Map$$Type<$ResourceLocation$$Type, $Recipe$$Type<any>>
		);

		public countRecipes(filter: $RecipeFilter$$Type): integer;
		public forEachRecipe(
			filter: $RecipeFilter$$Type,
			consumer: $Consumer$$Type<$RecipeKJS$$Type>
		): void;
		public remove(filter: $RecipeFilter$$Type): integer;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $Class } from "packages/java/lang/$Class";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$$Type } from "packages/java/util/$Map";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";

	export interface $RecipeComponent<T> {
		"and"<O>(other: $RecipeComponent$$Type<O>): $AndRecipeComponent<T, O>;
		"asArray"(): $ArrayRecipeComponent<T>;
		"asArrayOrSelf"(): $ArrayRecipeComponent<T>;
		"asMap"<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, T>>;
		"asPatternKey"(): $RecipeComponent<$TinyMap<character, T>>;
		"checkEmpty"(key: $RecipeKey$$Type<T>, value: T): string;
		"checkValueHasChanged"(oldValue: T, newValue: T): boolean;
		"componentClass"(): $Class<any>;
		"componentType"(): string;
		"constructorDescription"(ctx: $DescriptionContext$$Type): $TypeDescJS;
		"hasPriority"(recipe: $RecipeJS$$Type, from: any): boolean;
		"isInput"(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		"isOutput"(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		"key"(name: string): $RecipeKey<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		"map"(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		"mapIn"(mappingTo: $UnaryOperator$$Type<any>): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		"mapOut"(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		"or"<O>(other: $RecipeComponent$$Type<O>): $OrRecipeComponent<T, O>;
		"orSelf"(): $RecipeComponent<T>;
		"read"(recipeJS0: $RecipeJS$$Type, object1: any): T;
		"readFromJson"(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
		"readFromMap"(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			map: $Map$$Type<any, any>
		): void;
		"replaceInput"(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): T;
		"replaceOutput"(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): T;
		"role"(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		"simpleMap"(mappings: any): $SimpleMappingRecipeComponent<T>;
		"write"(recipeJS0: $RecipeJS$$Type, t1: T): $JsonElement;
		"writeToJson"(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
	}

	export namespace $RecipeComponent {
		function builder(): $RecipeComponentBuilder;
		function builder(...key: $RecipeKey$$Type<any>[]): $RecipeComponentBuilder;
	}
	export abstract class $RecipeComponent$$Static<
		T,
	> implements $RecipeComponent<T> {
		static builder(): $RecipeComponentBuilder;
		static builder(...key: $RecipeKey$$Type<any>[]): $RecipeComponentBuilder;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeOptional" {
	import { $RecipeSchemaType$$Type } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType";

	export interface $RecipeOptional<T> {
		"getDefaultValue"(recipeSchemaType0: $RecipeSchemaType$$Type): T;
		"isDefault"(): boolean;
		get "default"(): boolean;
	}

	export namespace $RecipeOptional {
		const DEFAULT: $RecipeOptional<any>;
	}
	export abstract class $RecipeOptional$$Static<
		T,
	> implements $RecipeOptional<T> {
		static readonly "DEFAULT": $RecipeOptional<any>;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue" {
	import {
		$Comparator,
		$Comparator$$Type,
	} from "packages/java/util/$Comparator";
	import {
		$Comparable,
		$Comparable$$Type,
	} from "packages/java/lang/$Comparable";
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $WrappedJS } from "packages/dev/latvian/mods/kubejs/util/$WrappedJS";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$Entry, $Map$Entry$$Type } from "packages/java/util/$Map$Entry";

	export class $RecipeComponentValue<T>
		implements $WrappedJS, $Map$Entry<$RecipeKey<T>, T>
	{
		static readonly "EMPTY_ARRAY": $RecipeComponentValue<any>[];
		readonly "index": integer;
		readonly "key": $RecipeKey<T>;
		"write": boolean;

		constructor(key: $RecipeKey$$Type<T>, index: integer);

		public checkEmpty(): string;
		public static comparingByKey<K, V>(
			comparator0: $Comparator$$Type<K>
		): $Comparator<$Map$Entry<K, V>>;
		public static comparingByKey<K extends $Comparable<K>, V>(): $Comparator<
			$Map$Entry<K, V>
		>;
		public static comparingByValue<K, V>(
			comparator0: $Comparator$$Type<V>
		): $Comparator<$Map$Entry<K, V>>;
		public static comparingByValue<K, V extends $Comparable<V>>(): $Comparator<
			$Map$Entry<K, V>
		>;
		public copy(): $RecipeComponentValue<T>;
		public static copyOf<K, V>(
			entry0: $Map$Entry$$Type<K, V>
		): $Map$Entry<K, V>;
		public getIndex(): integer;
		public getValue(): T;
		public isInput(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type
		): boolean;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): boolean;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): boolean;
		public setValue(newValue: T): T;
		public shouldWrite(): boolean;
		public write(): void;
		get value(): T;
		set value(value: T);
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $Class } from "packages/java/lang/$Class";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$$Type } from "packages/java/util/$Map";

	export class $SimpleMappingRecipeComponent<
		T,
	> extends $MappingRecipeComponent<T> {
		constructor(parent: $RecipeComponent$$Type<T>, mappings: any);

		public and<O>(other: $RecipeComponent$$Type<O>): $AndRecipeComponent<T, O>;
		public asArray(): $ArrayRecipeComponent<T>;
		public asArrayOrSelf(): $ArrayRecipeComponent<T>;
		public asMap<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, T>>;
		public asPatternKey(): $RecipeComponent<$TinyMap<character, T>>;
		public static builder(): $RecipeComponentBuilder;
		public static builder(
			...key: $RecipeKey$$Type<any>[]
		): $RecipeComponentBuilder;
		public checkEmpty(key: $RecipeKey$$Type<T>, value: T): string;
		public checkValueHasChanged(oldValue: T, newValue: T): boolean;
		public componentClass(): $Class<any>;
		public constructorDescription(ctx: $DescriptionContext$$Type): $TypeDescJS;
		public static from(
			parentOutput: $JsonElement$$Type,
			mappings: $Map$$Type<string, string>
		): $JsonElement;
		public hasPriority(recipe: $RecipeJS$$Type, from: any): boolean;
		public isInput(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		public key(name: string): $RecipeKey<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		public map(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		public mapIn(
			mappingTo: $UnaryOperator$$Type<any>
		): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		public mapOut(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		public or<O>(other: $RecipeComponent$$Type<O>): $OrRecipeComponent<T, O>;
		public orSelf(): $RecipeComponent<T>;
		public readFromJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
		public readFromMap(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			map: $Map$$Type<any, any>
		): void;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): T;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): T;
		public role(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		public simpleMap(mappings: any): $SimpleMappingRecipeComponent<T>;
		public static to(o: any, mappings: $Map$$Type<string, string>): any;
		public writeToJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentWithParent" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $Class } from "packages/java/lang/$Class";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$$Type } from "packages/java/util/$Map";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";

	export interface $RecipeComponentWithParent<T> extends $RecipeComponent<T> {
		"and"<O>(other: $RecipeComponent$$Type<O>): $AndRecipeComponent<T, O>;
		"asArray"(): $ArrayRecipeComponent<T>;
		"asArrayOrSelf"(): $ArrayRecipeComponent<T>;
		"asMap"<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, T>>;
		"asPatternKey"(): $RecipeComponent<$TinyMap<character, T>>;
		"checkEmpty"(key: $RecipeKey$$Type<T>, value: T): string;
		"checkValueHasChanged"(oldValue: T, newValue: T): boolean;
		"componentClass"(): $Class<any>;
		"componentType"(): string;
		"constructorDescription"(ctx: $DescriptionContext$$Type): $TypeDescJS;
		"hasPriority"(recipe: $RecipeJS$$Type, from: any): boolean;
		"isInput"(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		"isOutput"(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		"key"(name: string): $RecipeKey<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		"map"(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		"mapIn"(mappingTo: $UnaryOperator$$Type<any>): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		"mapOut"(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		"or"<O>(other: $RecipeComponent$$Type<O>): $OrRecipeComponent<T, O>;
		"orSelf"(): $RecipeComponent<T>;
		"parentComponent"(): $RecipeComponent<T>;
		"read"(recipe: $RecipeJS$$Type, from: any): T;
		"readFromJson"(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
		"readFromMap"(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			map: $Map$$Type<any, any>
		): void;
		"replaceInput"(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): T;
		"replaceOutput"(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): T;
		"role"(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		"simpleMap"(mappings: any): $SimpleMappingRecipeComponent<T>;
		"write"(recipe: $RecipeJS$$Type, value: T): $JsonElement;
		"writeToJson"(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
	}

	export namespace $RecipeComponentWithParent {
		function builder(): $RecipeComponentBuilder;
		function builder(...key: $RecipeKey$$Type<any>[]): $RecipeComponentBuilder;
	}
	export abstract class $RecipeComponentWithParent$$Static<
		T,
	> implements $RecipeComponentWithParent<T> {
		static builder(): $RecipeComponentBuilder;
		static builder(...key: $RecipeKey$$Type<any>[]): $RecipeComponentBuilder;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder" {
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $List } from "packages/java/util/$List";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $MappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import {
		$Predicate,
		$Predicate$$Type,
	} from "packages/java/util/function/$Predicate";
	import { $Class } from "packages/java/lang/$Class";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import {
		$RecipeComponentBuilderMap,
		$RecipeComponentBuilderMap$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilderMap";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $Set, $Set$$Type } from "packages/java/util/$Set";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $Map$$Type } from "packages/java/util/$Map";

	export class $RecipeComponentBuilder implements $RecipeComponent<$RecipeComponentBuilderMap> {
		"hasPriority": $Predicate<$Set<string>>;
		readonly "keys": $List<$RecipeKey<any>>;
		"role": $ComponentRole;

		constructor(init: integer);

		public add(key: $RecipeKey$$Type<any>): $RecipeComponentBuilder;
		public and<O>(
			other: $RecipeComponent$$Type<O>
		): $AndRecipeComponent<$RecipeComponentBuilderMap, O>;
		public asArray(): $ArrayRecipeComponent<$RecipeComponentBuilderMap>;
		public asArrayOrSelf(): $ArrayRecipeComponent<$RecipeComponentBuilderMap>;
		public asMap<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, $RecipeComponentBuilderMap>>;
		public asPatternKey(): $RecipeComponent<
			$TinyMap<character, $RecipeComponentBuilderMap>
		>;
		public static builder(): $RecipeComponentBuilder;
		public static builder(
			...key: $RecipeKey$$Type<any>[]
		): $RecipeComponentBuilder;
		public checkEmpty(
			key: $RecipeKey$$Type<$RecipeComponentBuilderMap$$Type>,
			value: $RecipeComponentBuilderMap$$Type
		): string;
		public checkValueHasChanged(
			oldValue: $RecipeComponentBuilderMap$$Type,
			newValue: $RecipeComponentBuilderMap$$Type
		): boolean;
		public componentClass(): $Class<any>;
		public componentType(): string;
		public constructorDescription(ctx: $DescriptionContext$$Type): $TypeDescJS;
		public createCopy(): $RecipeComponentBuilder;
		public hasPriority(recipe: $RecipeJS$$Type, from: any): boolean;
		public hasPriority(
			hasPriority: $Predicate$$Type<$Set$$Type<string>>
		): $RecipeComponentBuilder;
		public inputRole(): $RecipeComponentBuilder;
		public isInput(
			recipe: $RecipeJS$$Type,
			value: $RecipeComponentBuilderMap$$Type,
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			value: $RecipeComponentBuilderMap$$Type,
			match: $ReplacementMatch$$Type
		): boolean;
		public key(name: string): $RecipeKey<$RecipeComponentBuilderMap>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		public map(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<$RecipeComponentBuilderMap>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		public mapIn(
			mappingTo: $UnaryOperator$$Type<any>
		): $MappingRecipeComponent<$RecipeComponentBuilderMap>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		public mapOut(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<$RecipeComponentBuilderMap>;
		public or<O>(
			other: $RecipeComponent$$Type<O>
		): $OrRecipeComponent<$RecipeComponentBuilderMap, O>;
		public orSelf(): $RecipeComponent<$RecipeComponentBuilderMap>;
		public outputRole(): $RecipeComponentBuilder;
		public readFromJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$RecipeComponentBuilderMap$$Type>,
			json: $JsonObject$$Type
		): void;
		public readFromMap(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$RecipeComponentBuilderMap$$Type>,
			map: $Map$$Type<any, any>
		): void;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			original: $RecipeComponentBuilderMap$$Type,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): $RecipeComponentBuilderMap;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			original: $RecipeComponentBuilderMap$$Type,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): $RecipeComponentBuilderMap;
		public role(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		public simpleMap(
			mappings: any
		): $SimpleMappingRecipeComponent<$RecipeComponentBuilderMap>;
		public write(
			recipe: $RecipeJS$$Type,
			value: $RecipeComponentBuilderMap$$Type
		): $JsonElement;
		public writeToJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<$RecipeComponentBuilderMap$$Type>,
			json: $JsonObject$$Type
		): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS" {
	import { $RecipeKey$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import {
		$JsonObject,
		$JsonObject$$Type,
	} from "packages/com/google/gson/$JsonObject";
	import { $RecipeKJS } from "packages/dev/latvian/mods/kubejs/core/$RecipeKJS";
	import { $RecipeSchema } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema";
	import {
		$ItemStack,
		$ItemStack$$Type,
	} from "packages/net/minecraft/world/item/$ItemStack";
	import {
		$ResourceLocation,
		$ResourceLocation$$Type,
	} from "packages/net/minecraft/resources/$ResourceLocation";
	import { $Recipe } from "packages/net/minecraft/world/item/crafting/$Recipe";
	import {
		$InputFluid,
		$InputFluid$$Type,
	} from "packages/dev/latvian/mods/kubejs/fluid/$InputFluid";
	import {
		$OutputFluid,
		$OutputFluid$$Type,
	} from "packages/dev/latvian/mods/kubejs/fluid/$OutputFluid";
	import { $IngredientActionFilter$$Type } from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientActionFilter";
	import {
		$InputItem,
		$InputItem$$Type,
	} from "packages/dev/latvian/mods/kubejs/item/$InputItem";
	import { $List } from "packages/java/util/$List";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import {
		$OutputItem,
		$OutputItem$$Type,
	} from "packages/dev/latvian/mods/kubejs/item/$OutputItem";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context";
	import { $JsonElement } from "packages/com/google/gson/$JsonElement";
	import {
		$ModifyRecipeResultCallback,
		$ModifyRecipeResultCallback$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeResultCallback";
	import { $IngredientAction$$Type } from "packages/dev/latvian/mods/kubejs/recipe/ingredientaction/$IngredientAction";
	import { $Class$$Type } from "packages/java/lang/$Class";
	import { $Ingredient } from "packages/net/minecraft/world/item/crafting/$Ingredient";
	import {
		$RecipeTypeFunction,
		$RecipeTypeFunction$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction";
	import {
		$Scriptable,
		$Scriptable$$Type,
	} from "packages/dev/latvian/mods/rhino/$Scriptable";
	import { $RecipeComponentValue } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $CustomJavaToJsWrapper } from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper";
	import { $Map } from "packages/java/util/$Map";

	export class $RecipeJS implements $RecipeKJS, $CustomJavaToJsWrapper {
		// "id": $ResourceLocation;
		static "itemErrors": boolean;
		"modifyResult": $ModifyRecipeResultCallback;

		constructor();

		public afterLoaded(): void;
		public consumeIngredient(filter: $IngredientActionFilter$$Type): $RecipeJS;
		public convertJavaToJs(
			cx: $Context$$Type,
			scope: $Scriptable$$Type,
			staticType: $Class$$Type<any>
		): $Scriptable;
		public createRecipe(): $Recipe<any>;
		public customIngredientAction(
			filter: $IngredientActionFilter$$Type,
			id: string
		): $RecipeJS;
		public damageIngredient(filter: $IngredientActionFilter$$Type): $RecipeJS;
		public damageIngredient(
			filter: $IngredientActionFilter$$Type,
			damage: integer
		): $RecipeJS;
		public deserialize(merge: boolean): void;
		public get(key: string): any;
		public getAllValueMap(): $Map<string, $RecipeComponentValue<any>>;
		public getFromToString(): string;
		/** @deprecated */
		public getGroup(): string;
		public getId(): string;
		public getMod(): string;
		/** @deprecated */
		public getOrCreateId(): $ResourceLocation;
		public getOriginalRecipe(): $Recipe<any>;
		public getOriginalRecipeIngredients(): $List<$Ingredient>;
		public getOriginalRecipeResult(): $ItemStack;
		public getPath(): string;
		/** @deprecated */
		public getSchema(): $RecipeSchema;
		public getSerializationTypeFunction(): $RecipeTypeFunction;
		/** @deprecated */
		public getType(): $ResourceLocation;
		public getValue<T>(key: $RecipeKey$$Type<T>): T;
		public group(g: string): $RecipeJS;
		public hasChanged(): boolean;
		public hasInput(match: $ReplacementMatch$$Type): boolean;
		public hasOutput(match: $ReplacementMatch$$Type): boolean;
		public id(_id: $ResourceLocation$$Type): $RecipeJS;
		public ingredientAction(
			filter: $IngredientActionFilter$$Type,
			action: $IngredientAction$$Type
		): $RecipeJS;
		public initValues(created: boolean): void;
		public inputFluidHasPriority(from: any): boolean;
		public inputItemHasPriority(from: any): boolean;
		public inputValues(): $RecipeComponentValue<any>[];
		public keepIngredient(filter: $IngredientActionFilter$$Type): $RecipeJS;
		public merge(j: $JsonObject$$Type): $RecipeJS;
		public modifyResult(callback: $ModifyRecipeResultCallback$$Type): $RecipeJS;
		public outputFluidHasPriority(from: any): boolean;
		public outputItemHasPriority(from: any): boolean;
		public outputValues(): $RecipeComponentValue<any>[];
		public readInputFluid(from: any): $InputFluid;
		public readInputItem(from: any): $InputItem;
		public readOutputFluid(from: any): $OutputFluid;
		public readOutputItem(from: any): $OutputItem;
		public remove(): void;
		public replaceIngredient(
			filter: $IngredientActionFilter$$Type,
			item: $ItemStack$$Type
		): $RecipeJS;
		public replaceInput(
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): boolean;
		public replaceOutput(
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): boolean;
		public save(): void;
		public serialize(): void;
		public set(key: string, value: any): $RecipeJS;
		/** @deprecated */
		public setGroup(group: string): void;
		public setValue<T>(key: $RecipeKey$$Type<T>, value: T): $RecipeJS;
		public stage(s: string): $RecipeJS;
		public writeInputFluid(value: $InputFluid$$Type): $JsonElement;
		public writeInputItem(value: $InputItem$$Type): $JsonElement;
		public writeOutputFluid(value: $OutputFluid$$Type): $JsonElement;
		public writeOutputItem(value: $OutputItem$$Type): $JsonElement;
		get changed(): boolean;
		set changed(value: boolean);
		get json(): $JsonObject;
		set json(value: $JsonObject$$Type);
		get newRecipe(): boolean;
		set newRecipe(value: boolean);
		get originalJson(): $JsonObject;
		set originalJson(value: $JsonObject$$Type);
		get removed(): boolean;
		set removed(value: boolean);
		get type(): $RecipeTypeFunction;
		set type(value: $RecipeTypeFunction$$Type);
		get allValueMap(): $Map<string, $RecipeComponentValue<any>>;
		get fromToString(): string;
		get mod(): string;
		get orCreateId(): $ResourceLocation;
		get originalRecipe(): $Recipe<any>;
		get originalRecipeIngredients(): $List<$Ingredient>;
		get originalRecipeResult(): $ItemStack;
		get path(): string;
		get schema(): $RecipeSchema;
		get serializationTypeFunction(): $RecipeTypeFunction;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement" {
	import {
		$InputReplacement,
		$InputReplacement$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import { $Record } from "packages/java/lang/$Record";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import {
		$InputReplacementTransformer,
		$InputReplacementTransformer$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";

	export class $InputReplacementTransformer$Replacement
		extends $Record
		implements $InputReplacement
	{
		constructor(
			with_: $InputReplacement$$Type,
			transformer: $InputReplacementTransformer$$Type
		);

		public static of(o: any): $InputReplacement;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type,
			original: $InputReplacement$$Type
		): any;
		public transform(
			transformer: $InputReplacementTransformer$$Type
		): $InputReplacementTransformer$Replacement;
		public transformer(): $InputReplacementTransformer;
		public with(): $InputReplacement;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/component/$MappingRecipeComponent" {
	import { $InputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement";
	import {
		$JsonElement,
		$JsonElement$$Type,
	} from "packages/com/google/gson/$JsonElement";
	import {
		$RecipeKey,
		$RecipeKey$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $JsonObject$$Type } from "packages/com/google/gson/$JsonObject";
	import { $Class } from "packages/java/lang/$Class";
	import { $RecipeComponentBuilder } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentBuilder";
	import { $DescriptionContext$$Type } from "packages/dev/latvian/mods/kubejs/typings/desc/$DescriptionContext";
	import { $ArrayRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$ArrayRecipeComponent";
	import { $AndRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$AndRecipeComponent";
	import { $RecipeComponentWithParent } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentWithParent";
	import { $RecipeComponentValue$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponentValue";
	import { $ComponentRole } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentRole";
	import { $TinyMap } from "packages/dev/latvian/mods/kubejs/util/$TinyMap";
	import { $UnaryOperator$$Type } from "packages/java/util/function/$UnaryOperator";
	import { $OrRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$OrRecipeComponent";
	import {
		$RecipeComponent,
		$RecipeComponent$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $TypeDescJS } from "packages/dev/latvian/mods/kubejs/typings/desc/$TypeDescJS";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $OutputReplacement$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement";
	import { $Map$$Type } from "packages/java/util/$Map";
	import { $SimpleMappingRecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$SimpleMappingRecipeComponent";

	export class $MappingRecipeComponent<
		T,
	> implements $RecipeComponentWithParent<T> {
		constructor(
			parent: $RecipeComponent$$Type<T>,
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		);

		public and<O>(other: $RecipeComponent$$Type<O>): $AndRecipeComponent<T, O>;
		public asArray(): $ArrayRecipeComponent<T>;
		public asArrayOrSelf(): $ArrayRecipeComponent<T>;
		public asMap<K>(
			key: $RecipeComponent$$Type<K>
		): $RecipeComponent<$TinyMap<K, T>>;
		public asPatternKey(): $RecipeComponent<$TinyMap<character, T>>;
		public static builder(): $RecipeComponentBuilder;
		public static builder(
			...key: $RecipeKey$$Type<any>[]
		): $RecipeComponentBuilder;
		public checkEmpty(key: $RecipeKey$$Type<T>, value: T): string;
		public checkValueHasChanged(oldValue: T, newValue: T): boolean;
		public componentClass(): $Class<any>;
		public componentType(): string;
		public constructorDescription(ctx: $DescriptionContext$$Type): $TypeDescJS;
		public hasPriority(recipe: $RecipeJS$$Type, from: any): boolean;
		public isInput(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		public isOutput(
			recipe: $RecipeJS$$Type,
			value: T,
			match: $ReplacementMatch$$Type
		): boolean;
		public key(name: string): $RecipeKey<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved */
		public map(
			mappingTo: $UnaryOperator$$Type<any>,
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read */
		public mapIn(
			mappingTo: $UnaryOperator$$Type<any>
		): $MappingRecipeComponent<T>;
		/** Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved */
		public mapOut(
			mappingFrom: $UnaryOperator$$Type<$JsonElement$$Type>
		): $MappingRecipeComponent<T>;
		public or<O>(other: $RecipeComponent$$Type<O>): $OrRecipeComponent<T, O>;
		public orSelf(): $RecipeComponent<T>;
		public parentComponent(): $RecipeComponent<T>;
		public read(recipe: $RecipeJS$$Type, from: any): T;
		public readFromJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
		public readFromMap(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			map: $Map$$Type<any, any>
		): void;
		public replaceInput(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $InputReplacement$$Type
		): T;
		public replaceOutput(
			recipe: $RecipeJS$$Type,
			original: T,
			match: $ReplacementMatch$$Type,
			with_: $OutputReplacement$$Type
		): T;
		public role(): $ComponentRole;
		/**
		 * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
		 * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
		 * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
		 * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
		 * If you wish to handle those situations use the actual map function
		 */
		public simpleMap(mappings: any): $SimpleMappingRecipeComponent<T>;
		public write(recipe: $RecipeJS$$Type, value: T): $JsonElement;
		public writeToJson(
			recipe: $RecipeJS$$Type,
			cv: $RecipeComponentValue$$Type<T>,
			json: $JsonObject$$Type
		): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement" {
	import { $InputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer$Replacement";
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $InputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacementTransformer";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";

	export interface $InputReplacement {
		"replaceInput"(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type,
			original: $InputReplacement$$Type
		): any;
		"transform"(
			transformer: $InputReplacementTransformer$$Type
		): $InputReplacementTransformer$Replacement;
	}

	export namespace $InputReplacement {
		function of(o: any): $InputReplacement;
	}
	export abstract class $InputReplacement$$Static implements $InputReplacement {
		static of(o: any): $InputReplacement;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeComponentFactory" {
	import { $Context$$Type } from "packages/dev/latvian/mods/rhino/$Context";
	import { $CustomJavaToJsWrapper } from "packages/dev/latvian/mods/rhino/util/$CustomJavaToJsWrapper";
	import { $Class$$Type } from "packages/java/lang/$Class";
	import { $RecipeComponent } from "packages/dev/latvian/mods/kubejs/recipe/component/$RecipeComponent";
	import {
		$Scriptable,
		$Scriptable$$Type,
	} from "packages/dev/latvian/mods/rhino/$Scriptable";
	import { $Map$$Type } from "packages/java/util/$Map";

	export interface $RecipeComponentFactory extends $CustomJavaToJsWrapper {
		"convertJavaToJs"(
			cx: $Context$$Type,
			scope: $Scriptable$$Type,
			staticType: $Class$$Type<any>
		): $Scriptable;
		"create"(
			context0: $Context$$Type,
			scriptable1: $Scriptable$$Type,
			map2: $Map$$Type<string, any>
		): $RecipeComponent<any>;
	}

	export namespace $RecipeComponentFactory {
		const probejs$$marker: never;
	}
	export abstract class $RecipeComponentFactory$$Static implements $RecipeComponentFactory {}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeConstructor$Factory" {
	import { $RecipeKey$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeKey";
	import { $ComponentValueMap$$Type } from "packages/dev/latvian/mods/kubejs/recipe/component/$ComponentValueMap";
	import {
		$RecipeJS,
		$RecipeJS$$Type,
	} from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $RecipeTypeFunction$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeTypeFunction";
	import { $RecipeSchemaType$$Type } from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchemaType";
	import { $BiFunction$$Type } from "packages/java/util/function/$BiFunction";

	export interface $RecipeConstructor$Factory {
		"create"(
			type: $RecipeTypeFunction$$Type,
			schemaType: $RecipeSchemaType$$Type,
			keys: $RecipeKey$$Type<any>[],
			from: $ComponentValueMap$$Type
		): $RecipeJS;
		"setValues"(
			recipeJS0: $RecipeJS$$Type,
			recipeSchemaType1: $RecipeSchemaType$$Type,
			recipeKey2s: $RecipeKey$$Type<any>[],
			componentValueMap3: $ComponentValueMap$$Type
		): void;
	}

	export namespace $RecipeConstructor$Factory {
		const DEFAULT: $RecipeConstructor$Factory;
		function defaultWith(
			valueSupplier: $BiFunction$$Type<
				$RecipeJS$$Type,
				$RecipeKey$$Type<any>,
				any
			>
		): $RecipeConstructor$Factory;
	}
	export abstract class $RecipeConstructor$Factory$$Static implements $RecipeConstructor$Factory {
		static readonly "DEFAULT": $RecipeConstructor$Factory;

		static defaultWith(
			valueSupplier: $BiFunction$$Type<
				$RecipeJS$$Type,
				$RecipeKey$$Type<any>,
				any
			>
		): $RecipeConstructor$Factory;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/schema/minecraft/$ShapelessRecipeSchema$ShapelessRecipeJS" {
	import { $RecipeJS } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";

	export class $ShapelessRecipeSchema$ShapelessRecipeJS extends $RecipeJS {
		constructor();

		public getMod(): string;
		get mod(): string;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/special/$SpecialRecipeSerializerManager" {
	import { $EventJS } from "packages/dev/latvian/mods/kubejs/event/$EventJS";
	import { $Event } from "packages/dev/architectury/event/$Event";
	import { $ResourceLocation$$Type } from "packages/net/minecraft/resources/$ResourceLocation";
	import { $Runnable } from "packages/java/lang/$Runnable";
	import { $Recipe$$Type } from "packages/net/minecraft/world/item/crafting/$Recipe";

	export class $SpecialRecipeSerializerManager extends $EventJS {
		static readonly "EVENT": $Event<$Runnable>;
		static readonly "INSTANCE": $SpecialRecipeSerializerManager;

		constructor();

		public addSpecialFlag(id: $ResourceLocation$$Type): void;
		public addSpecialMod(modid: string): void;
		public ignoreSpecialFlag(id: $ResourceLocation$$Type): void;
		public ignoreSpecialMod(modid: string): void;
		public isSpecial(recipe: $Recipe$$Type<any>): boolean;
		public reset(): void;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$ModifyRecipeCraftingGrid" {
	import { $Player } from "packages/net/minecraft/world/entity/player/$Player";
	import { $List } from "packages/java/util/$List";
	import { $Ingredient$$Type } from "packages/net/minecraft/world/item/crafting/$Ingredient";
	import { $AbstractContainerMenu } from "packages/net/minecraft/world/inventory/$AbstractContainerMenu";
	import { $CraftingContainer$$Type } from "packages/net/minecraft/world/inventory/$CraftingContainer";
	import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack";

	export class $ModifyRecipeCraftingGrid {
		constructor(c: $CraftingContainer$$Type);

		public find(ingredient: $Ingredient$$Type, skip: integer): $ItemStack;
		public find(ingredient: $Ingredient$$Type): $ItemStack;
		public findAll(): $List<$ItemStack>;
		public findAll(ingredient: $Ingredient$$Type): $List<$ItemStack>;
		public get(index: integer): $ItemStack;
		public getHeight(): integer;
		public getMenu(): $AbstractContainerMenu;
		public getPlayer(): $Player;
		public getWidth(): integer;
		get height(): integer;
		get menu(): $AbstractContainerMenu;
		get player(): $Player;
		get width(): integer;
	}
}

declare module "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement" {
	import { $RecipeJS$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$RecipeJS";
	import { $OutputReplacementTransformer$Replacement } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer$Replacement";
	import { $ReplacementMatch$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch";
	import { $OutputReplacementTransformer$$Type } from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacementTransformer";

	export interface $OutputReplacement {
		"replaceOutput"(
			recipe: $RecipeJS$$Type,
			match: $ReplacementMatch$$Type,
			original: $OutputReplacement$$Type
		): any;
		"transform"(
			transformer: $OutputReplacementTransformer$$Type
		): $OutputReplacementTransformer$Replacement;
	}

	export namespace $OutputReplacement {
		function of(o: any): $OutputReplacement;
	}
	export abstract class $OutputReplacement$$Static implements $OutputReplacement {
		static of(o: any): $OutputReplacement;
	}
}

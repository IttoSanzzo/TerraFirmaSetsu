type OmniString = string & { __brand?: "OmniString" };

interface KjsItemStackObject {
	item: OmniString | Special.Item;
	count?: number;
	nbt?: Record<string, any>;
}
type KjsIngredientObject =
	| {
			type: Special.ItemTag | Special.FluidTag | OmniString;
			ingredient: {
				item: Special.Item | OmniString;
				count?: number;
			};
	  }
	| {
			type: Special.ItemTag | Special.FluidTag | OmniString;
			fluid_ingredient: {
				ingredient: Special.Fluid | OmniString;
				amount: number;
			};
	  };

type KjsItem = OmniString | Special.Item | KjsIngredientObject;
type KjsItemStack = OmniString | Special.Item | KjsIngredientObject;

type KjsItemTag = `#${Special.ItemTag}`;
type KjsItemTagStack = `#${Special.ItemTag}`;

type KjsItemOrItemTag = KjsItem | KjsItemTag;
type KjsItemOrItemTagStack = KjsItemStack | KjsItemTagStack;

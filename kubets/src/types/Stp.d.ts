type OmniString = string & { __brand?: "OmniString" };

interface KjsItemStack {
	item: OmniString | Special.Item;
	count?: number;
	nbt?: Record<string, any>;
}
type KjsItemObject =
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
type KjsItem = OmniString | Special.Item | KjsItemStack | KjsItemObject;
type KjsItemOrTag = `#${Special.ItemTag}` | KjsItem;

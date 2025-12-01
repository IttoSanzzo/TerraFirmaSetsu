import "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter";
import { $ResourceLocation } from "packages/net/minecraft/resources/$ResourceLocation";

declare module "packages/com/almostreliable/lootjs/filters/$ResourceLocationFilter" {
	interface $ResourceLocationFilter$$Static {
		new (
			value: string | $ResourceLocation | ((arg0: $ResourceLocation) => boolean)
		): $ResourceLocationFilter;
		of(
			value: string | $ResourceLocation | ((arg0: $ResourceLocation) => boolean)
		): $ResourceLocationFilter;
	}
}

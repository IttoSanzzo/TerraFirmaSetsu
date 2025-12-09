export type NumberRange<
	N extends number,
	T extends number[] = [],
> = T["length"] extends N
	? [...T, T["length"]][number]
	: Range<N, [...T, T["length"]]>;

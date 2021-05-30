/**
 * Joins a series of terms with a conjunction after the penultimate term.
 * 
 * @param {string[]} Items
 * @param {string} [Conjunction=" and "]
 * @param {string} [Delimiter=", "]
 * @returns {string}
 */
export function SeriesJoin(Items: string[], Conjunction: string = " and ", Delimiter: string = ", "): string {
	if (Items.length === 0) {
		return "";
	}

	let Accumulator = Items[0]!;
	for (let Index = 1; Index < Items.length; Index++) {
		Accumulator = Accumulator + (Items.length - Index === 1 ? Conjunction : Delimiter) + Items[Index]!;
	}
	return Accumulator;
}

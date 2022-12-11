export const parseLargeAmount = (amount: number) => {
	const amountAsString = String(amount);
	if (!amountAsString.includes("+")) return amount;

	const [integer, decimals] = amountAsString.split("e+");

	return integer + "0".repeat(Number(decimals));
};

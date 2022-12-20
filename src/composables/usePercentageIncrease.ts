export function usePercentageIncrease() {
  // Get a percentage of the price (2.2 in this case) and add the result to the initial price
  const increasePercentage = (
    price: number,
    percentageIncrease: number
  ): number => {
    return (price / 100) * percentageIncrease + price;
  };

  return { increasePercentage };
}

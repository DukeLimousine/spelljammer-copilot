export const rollDice = (dice=100) => {
  return Math.floor(Math.random() * dice) + 1;
}
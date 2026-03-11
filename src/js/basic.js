export default function sortByHealth(arr) {
  return arr.map(h => h).sort((a, b) => b.health - a.health);
}


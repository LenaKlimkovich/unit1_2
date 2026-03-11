import sortByHealth from "../basic";

test("sortByHealth basic", () => {
    const input = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
    expect(sortByHealth(input)).toEqual([
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]);})


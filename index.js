// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

function appendCat(name) {
  const cats = ["Milo", "Otis", "Garfield"];
  return [...cats, name];
}

function prependCat(name) {
  const cats = ["Milo", "Otis", "Garfield"];
  return [name, ...cats];
}

function removeLastCat() {
  let removeTheLastCat = cats.slice(0, 2);
  return removeTheLastCat;
}

function removeFirstCat() {
  let removeTheFirstCat = cats.slice(1, 3);
  return removeTheFirstCat;
}

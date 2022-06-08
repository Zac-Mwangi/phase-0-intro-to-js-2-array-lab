// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const cats = ['Milo', 'Otis', 'Garfield']
    return [...cats, name]
}

function prependCat(name){
    const cats = ['Milo', 'Otis', 'Garfield']
    return [name,...cats]
}

function removeLastCat(){
    const cats = ['Milo', 'Otis', 'Garfield']
    let removeTheLastCat = cats.splice(-1);
    return([...cats])
    // return([...cats,...removeTheLastCat])
}

function removeFirstCat(){
    const cats = ['Milo', 'Otis', 'Garfield']
    let removeTheFirstCat = cats.splice(0,1);
    // console.log([...cats])
    return([...cats])
}


function computeTotalFroyo(froyo){
    prompt("enter a list of comma separated froyo flavors");
    let total = 0;
    for(let i = 0; i < froyo.length; i++){
        total += vanilla[i].numberOrdered + strawberry[i].numberOrdered + coffee[i].numberOrdered;
    }
    return total;
}

function computeTotalVanilla(vanilla){
    let total = 0;
    for(let i = 0; i < vanilla.length; i++){
        total += vanilla[i].numberOrdered;
    }
    return total;
}

function computeTotalStrawberry(strawberry){
    let total = 0;
    for(let i = 0; i < strawberry.length; i++){
        total += strawberry[i].numberOrdered;
    }
    return total;
}

function computeTotalCoffee(coffee){
    let total = 0;
    for(let i = 0; i < coffee.length; i++){
        total += coffee[i].numberOrdered;
    }
    return total;
}

const foo = {
    flavor: 'vanilla',
    numberOrdered: ,
}

const bar = {
    flavor: 'strawberry',
    numberOrdered: ,
}

const bazz = {
    flavor: 'coffee',
    numberOrdered: ,
}
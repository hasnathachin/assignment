function feetToMile(input) {
    return input + ' feet = ' + input * 0.000189394 + ' Mile';
}
// console.log(feetToMile(10000));




function woodCalculator(chair,table,bed) {
    let totalWoodForChair = chair * 1;
    let totalWoodForTable = table * 3;
    let totalWoodForBed = bed * 5;
    let totalWoodNedd = totalWoodForChair + totalWoodForTable + totalWoodForBed;
    return 'You need a total of '  + totalWoodNedd + ' Quibe feet of wood for chairs, tables, and beds.' ;
}
// console.log(woodCalculator(5,10,3));




function brickCalculator(input) {
    let total = 0;
    if( input <= 10  ){
        total = input * 15
    } else if ( input <= 20){
        let first = 10 * 15;
        let remaining = input - 10;
        let second = remaining * 12;
        total = first + second;
    } else {
        let first = 10 * 15;
        let second = 10 * 12;
        let remaining = input - 20;
        let final = remaining * 10;
       total =  first + second + final;
    }

    let brickNeed = total * 1000;
    return 'You need total ' + brickNeed + ' bricks for your building.';
}
// console.log(brickCalculator(20));


function tinyFriend(friendsName) {
    let smallest = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        const element = friendsName[i];
        if (element.length < smallest.length) {
            smallest = element;
        }
    }
    return 'The Smallest Friend Name is ' + smallest;
}
// let friendNames = ['Raihan', 'Rony', 'Tommoy', 'Shakil'] 
// console.log(tinyFriend(friendNames));
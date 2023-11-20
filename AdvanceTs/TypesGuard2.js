function printItemLength(value) {
    if (typeof value === "string") {
        console.log(value.length); //know value is string
    }
    else {
        console.log(value); // know value is number
    }
}
printItemLength("QWERTY");
printItemLength(8634);

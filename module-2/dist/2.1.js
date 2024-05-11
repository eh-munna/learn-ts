"use strict";
{
    let myVariable;
    myVariable = 10;
    myVariable.toString();
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            return `${parseFloat(value) * 1000} gm`;
        }
        else {
            return value * 1000;
        }
    };
    const resultInString = kgToGm('1000');
    console.log(resultInString);
}

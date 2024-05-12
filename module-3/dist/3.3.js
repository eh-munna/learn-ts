"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(add(1, 2));
    const admin = {
        name: 'John',
        role: 'admin',
    };
    const user = {
        name: 'Jane',
    };
    const logUser = (user) => {
        if ('role' in user) {
            console.log(user.name, user.role);
        }
        else {
            console.log(user.name);
        }
    };
    logUser(admin);
    logUser(user);
}

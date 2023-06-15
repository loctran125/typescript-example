"use strict";
class Calculator {
    add(x, y) {
        if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        }
        else if (typeof x === 'string' && typeof y === 'string') {
            return x + y;
        }
        else {
            throw new Error('Invalid arguments');
        }
    }
}

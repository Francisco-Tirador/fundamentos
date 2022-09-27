function filter(array, fn) {
    const data = [];
    for(let i = 0; i < array.length; i++) {
        const result = fn(array[i]);
        if(result === true) {
            data.push(array[i]);
        }
    }
    return data;
}

// devuelve al primer usuario que cumple con una condición, esta condición es provista mediante un callback
function find(array, fn) {
    for(let i = 0; i< array.length; i++) {
        const result = fn(array[i]);
        if(result) {
            return array[i];
        }
    }
}

export { filter, find }
var findRestaurant = function(list1, list2) {
    const index = new Map();
    for (let i = 0; i < list1.length; i++) {
        index.set(list1[i], i);
    }

    const ret = [];
    let indexSum = Number.MAX_VALUE;
    for (let i = 0; i < list2.length; i++) {
        if (index.has(list2[i])) {
            const j = index.get(list2[i]);
            if (i + j < indexSum) {
                ret.length = 0;
                ret.push(list2[i]);
                indexSum = i + j;
            } else if (i + j == indexSum) {
                ret.push(list2[i]);
            }
        }
    }
    return ret;
};

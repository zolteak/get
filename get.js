const get = (mass, number, defaultVal = null) => {
    let result = defaultVal;
    
    if (number < mass.length && number >= 0) {
        result = mass[number];
    }
    
    return result;
};

exports.get = get;

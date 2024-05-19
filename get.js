const get = (array, index, defaultVal = null) => {
    let result = defaultVal;
    
    if (index < array.length && index >= 0) {
        result = array[index];
    }
    
    return result;
};

exports.get = get;

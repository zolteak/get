const get = (array, index, defaultString = null) => {
    if (index >= array.length || index < 0) {
        return(defaultString)
    } else {
        return array[index]
    }
};

exports.get = get;
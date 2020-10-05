module.exports = function towelSort(matrix) {

    if (!arguments.length || !matrix.length) return [];

    const transformArr = (value, index) => {
        if (index % 2) {
            return value.reverse();
        }
        return value;
    };

    return matrix.map(transformArr).flat();
};

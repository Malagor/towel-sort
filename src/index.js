module.exports = function towelSort (matrix) {
    if (!arguments.length || !matrix.length) {
        return [];
    }

    let resultArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let curArr = matrix[i];

        if (i % 2) {
            curArr = curArr.reverse();
        }

        for (let j = 0; j < curArr.length; j++) {
            resultArr.push(curArr[j]);
        }
    }

    return resultArr;
};

module.exports = function transform(arr) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (arr[i - 2] !== '--discard-next') array.pop();
                break;
            case '--double-next':
                if (arr[i + 1] !== undefined) array.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') array.push(arr[i - 1]);
                break;
            default:
                array.push(arr[i]);
                break;
        }
    }
    return array;
};
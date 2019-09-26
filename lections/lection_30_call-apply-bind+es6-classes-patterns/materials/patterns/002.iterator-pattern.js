
let iterator = (function(data) {
    let index = 0, size = data.length;

    return {
        next() {
            return ++index;
        },
        hasNext() {
            return index < size;
        },
        hasPrevious() {
            return index != 0;
        }
    };
})([1,2,3]);
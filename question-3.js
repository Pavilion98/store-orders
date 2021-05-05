
const findHighestOrderValue = (orders) => {
    // do your magic here..
    var max = 0;
    var sum = 0;
    var arrSum = [];
    var index = -1;

    orders.forEach( (order) => {
        order.forEach( (item) => {
            sum += item;
        });
        arrSum.push(sum);
    });

    arrSum.forEach( (item) => {
        if(item > max) {
            max = item;
            index++;
        }
    });
    return index;
}


// const orderItemsTotal = (items) => {
//     var sum = items.reduce( (a,b) => {
//         return a + b;
//     }, 0);
//     return sum;
// }




console.log( findHighestOrderValue([[1,2,3], [2,3,4]]) ); // output: 1
console.log( findHighestOrderValue([[1.5], [2, 3], [10, 1]]) ); // output: 2
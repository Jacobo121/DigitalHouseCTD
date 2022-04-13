function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; //smaller tan all other numbers
    for (let num of nums) {
        if (num > max_num) {
            max_num = num
        }
    }
    return max_num
}

find_max([Number.POSITIVE_INFINITY])
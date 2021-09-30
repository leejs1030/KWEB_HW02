const factorial = (n) => {
    if(n == 0) return 1;
    return n * factorial(n - 1);
};

const permutation = (n, r) =>{
    return factorial(n) / factorial(n - r);
};

const combination = (n, r) =>{
    return factorial(n) / factorial(n - r) / factorial(r);
};

const multiPermutation = (n, r) =>{
    if(r == 0) return 1;
    return n * multiPermutation(n, r - 1);
}

const multiCombination = (n, r) =>{
    return factorial(n + r - 1) / factorial(n - 1) / factorial(r);
};

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination,
};
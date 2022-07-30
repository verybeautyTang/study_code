var convertToTitle = function(n) {
    let results = [],
        num = n;
    do {
        const quotient = Math.floor(num / 26);
        const remainder = num % 26;
        
        num = remainder === 0 ? quotient - 1 : quotient;
        results.unshift(remainder === 0 ? 26 : remainder);
    } while (num);

    return results.map(item => String.fromCharCode(64 + item)).join('');
};

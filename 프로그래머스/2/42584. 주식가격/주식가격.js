function solution(prices) {
    let result = Array(prices.length).fill(0);
    
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[i] <= prices[j]) {
                result[i]++;
            } else {
                result[i]++;
                break;
            }
        }
    }
    
    return result;
}
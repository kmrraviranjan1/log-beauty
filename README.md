# log-beauty

A node package to log your variables, message in a beautiful, meaningful , readable and a clearly differentiable way

Examples:
1. String

log("ravi");

result:-

┌────────────┬────────┐
│  (index)   │   0    │
├────────────┼────────┤
│ log-beauty │ 'ravi' │
└────────────┴────────┘

2. Strings

log("ravi","kumar");

result:-

┌────────────┬────────┬─────────┐
│  (index)   │   0    │    1    │
├────────────┼────────┼─────────┤
│ log-beauty │ 'ravi' │ 'kumar' │
└────────────┴────────┴─────────┘

3. Objects

log({one:"string 1",two:"string 1"});

result:-

┌────────────┬──────────────────────────────────────┐
│  (index)   │                  0                   │
├────────────┼──────────────────────────────────────┤
│ log-beauty │ { one: 'string 1', two: 'string 1' } │
└────────────┴──────────────────────────────────────┘

4. Functions

function yourSum (m,n){
    return m+n
}

log(yourSum(4,5))

result:-

┌────────────┬───┐
│  (index)   │ 0 │
├────────────┼───┤
│ log-beauty │ 9 │
└────────────┴───┘

5. Combinations

function yourMultiply(m, n) {
  return m * n;
}
const var1 = "ravi";

log(yourMultiply(2, 6), var1);

result:-

┌────────────┬────┬────────┐
│  (index)   │ 0  │   1    │
├────────────┼────┼────────┤
│ log-beauty │ 12 │ 'ravi' │
└────────────┴────┴────────┘

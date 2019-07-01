// ------------------------------
// ------------------------------
// Climbing Stairs 
// ------------------------------
// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// Note: Given n will be a positive integer.

(() => {
  const stairs = (int) => {
    let seen = {
      1: 1,
      2: 2
    };
    const climb = (int) => {
      if(seen[int] !== undefined) {
        return seen[int];
      } else {
        seen[int] = climb(int - 1) + 1;
      };
    };
    let i = 3;
    while(i <= int) {
      climb(i);
      i++;
    };
    return seen[int];
  };
  console.log(stairs(4))
})()
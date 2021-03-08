var tictactoe = function(moves) {
    let mx = Array.apply(null, Array(3)).map(t => Array(3).fill(0))
    // 一. 把下的子,放到棋盘中
    moves.forEach((t, i) => {
        let [x, y] = t
        console.log(x, y);
        console.log(i)
      mx[x][y] = i & 1 ? 'B' : 'A'
    })
    console.log(moves)
    // 二. 检查行
    for(let i = 0; i < 3; i++){
      let [a, b, c] = mx[i]
      if(a && a == b && b == c)return a
    }
    // 三. 检查列
    for(let j = 0; j < 3; j++){
      let [a, b, c] = [mx[0][j], mx[1][j], mx[2][j]]
      if(a && a == b && b == c) return a
    }
    // 四. 检查两条交叉
    let [a, b, c] = [mx[0][0], mx[1][1], mx[2][2]]
    if(a && a == b && b == c) return a
    let [d, e, f] = [mx[0][2], mx[1][1], mx[2][0]]
    if(d && d == e && e == f) return d
    // 五. 是否下完 或 平局
    if(moves.length < 9) return 'Pending'
    return 'Draw'
  
};
  
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))
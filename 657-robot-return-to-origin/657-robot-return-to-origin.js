/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    let up = 0, left= 0;
    
    for (const move of moves){
        if(move == 'L') left++;
        else if(move == 'R') left--;
        else if(move == 'U') up++;
        else up--;
    }
    return up == 0 && left == 0;
};
// Given two strings, write a method to decide if one is a
// permutation of the other.
// https://www.reddit.com/r/dailyprogrammer/comments/164zvs/010713_challenge_116_easy_permutation_of_a_string/
// p.73

function allPerms(string) {
    
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        } else {
            var out = [];
            for (var i = 0; i < string.length; i++) {
                var pre = string.substring(0, i);
                var post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            console.log("out: ", out)
            return out;
        }
    }
    
    var distinct = {};
    
    // return recur(string, "")
    
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    
    // return distinct;
    return Object.keys(distinct);
}

console.log( "final: ", allPerms('abc') );



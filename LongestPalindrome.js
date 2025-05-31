/**
 * @param {string} s
 * @return {string}
 */



/*
    Palindromes:
        same character at the end and the start
        same chars in the center when the char amount is even
        left side is mirrored right side and vice versa
*/

var longestPalindrome = function(s) {
    
    const length = s.length;

    for( let i = 0; i < length; i++)
    {
        let j = length-1;
        for( ; j > i; j--)
        {
            if(s.charAt(j) == s.charAt(i))
            {
                let l_end;
                let r_start;

                if( ((j+1)-i) % 2 === 0 )
                {
                    l_end = ((j+1)/2) - 1;
                    r_start = l_end+1;
                }
                else
                {
                    l_end = Math.floor(((j) - i)/2);
                    r_start = Math.ceil(((j) - i)/2);
                }

                console.log(l_end)
                console.log(r_start)
                console.log(s.slice(0, l_end));
                console.log(s.slice(r_start+1, length).split('').reverse().join(''));
            }
        }
    
    }


};


longestPalindrome("ababba");

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans='';
    let i=a.length-1,j=b.length-1;
    let sum=0,carry=0;
    
    while(i>=0 || j>=0 || sum>0){
        
        sum+=(a[i]?+a[i]:0)+(b[j]?+b[j]:0);
        
        let quo=Math.floor(sum/2);
        let rem=sum%2;
        
        ans=rem+ans;
        if(quo>0) carry=1;
        
        sum=carry;
        carry=0;
        i--;j--;
    }
    return ans;
};
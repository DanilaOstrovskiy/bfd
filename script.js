function firstDuplicate(str){
    const charCount = {};
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        if(charCount[char]){
            return char;
        }
        charCount[char] = true
    }
    return null
}

///the time complexity is O(n) and Space complexity is O(n)
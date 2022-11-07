function my_levenshtein(str_1, str_2) {
    
    if (str_1.length !== str_2.length) {
        return -1;
    }

    count = 0
    for (i = 0; i < str_1.length && str_2.length; i++)
        if (str_1[i] !== str_2[i]) {
            count++;
        }
        return count;
};

//console.log(my_levenshtein("", "" ));
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {

    var test_string, test_string_len,
    global_test_string_mid_temp, global_test_string_mid,
    pailendrom_lengths, palendrom_length, is_pailendrom_find, is_possibility, subtrahend;
    
    test_string = S;
    test_string_len = S.length;
    
    pailendrom_lengths = [];

    for(var out=0; out<test_string_len; out++){
        
        is_possibility = false;
        for(var temp = test_string_len - 1;temp>out;temp--){

            if(test_string[out] == test_string[temp]){
                is_possibility = true;
                break;
            }
        }

        if(is_possibility){

            global_test_string_mid_temp = parseInt((temp - out)/2, 10);

            is_pailendrom_find = true;
            palendrom_length = 0;
            subtrahend = 0;
            var upper_bound = out + global_test_string_mid_temp;

            for(i=out; i<upper_bound; i++){

                if(test_string[i] != test_string[temp - subtrahend]){
                    is_pailendrom_find = false;
                    break;
                }

                subtrahend++;
            }

            if(is_pailendrom_find){
                palendrom_length = temp-out+1;
                pailendrom_lengths.push(palendrom_length);
            }
        }
    }
    
    var max_pailndrom_length = Math.max.apply(null, pailendrom_lengths);

    return max_pailndrom_length%2==0? 'NO':'YES';
}

ans = solution('random1232321random');
console.log(ans);


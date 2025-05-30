const removeDuplicates = (nums) => {
    let curr = 0;
    while(curr < nums.length){

        let temp = nums.slice(0, curr);
        console.log(temp, nums[curr]);

        if(temp.includes(nums[curr])){
            console.log(`val: ${nums[curr]} ${curr}`);
            nums.splice(curr, 1);
        }else {
            curr++;
        }

    }
};
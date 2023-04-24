     function sumFactorial(arr) {
            let ar = [];
            let sum = 0;
            for (let item of arr) {
                let factorial_item = 1;
                for (let i = 1; i <= item; i++) {
                    factorial_item *= i;
                }
                ar.push(factorial_item);
            }

            for (let item of ar) {
                sum += item;
            }
            return sum;
        }

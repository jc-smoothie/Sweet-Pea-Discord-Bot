module.exports = {
    name: 'fizzbuzz',
    description: "this is a gaame called FizzBuzz!",
    execute(message, args){
        for(var i = 1; i <= 100; i++){
            //First Attempt
            /*if((i % 5 != 0) && (i % 3 == 0)){
                console.log("Fizz");
            }

            if((i % 3 != 0) && (i % 5 == 0)){
                console.log("Buzz");
            }

            if((i % 3 == 0) && (i % 5 == 0)){
                console.log("FizzBuzz");
            }

            if((i % 3 != 0) && (i % 5 != 0)){
                console.log(i);
            }*/

            //Second Attempt
            /*if((i % 3 == 0) && (i % 5 == 0)){
                console.log("FizzBuzz");
            } else if(i % 3 == 0){
                console.log("Fizz");
            } else if(i % 5 == 0){
                console.log("Buzz");
            } else{
                console.log(i);
            }*/

            //Third Attempt
            var output = "";

            if(i % 3 == 0){output += "Fizz";}
            if(i % 5 == 0){output += "Buzz";}

            if(output == ""){output = i;}

            console.log(output);
        }
    }
}
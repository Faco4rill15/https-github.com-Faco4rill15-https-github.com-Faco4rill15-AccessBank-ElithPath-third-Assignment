// creation of javaScript function that will take scores as input and return the corresponding 
// category based on the criteria below


function scoreCategory(score){
    
    if (score >= 90){
        return console.log('Excellent')
    }else if (score >= 80 && score <= 89){
        return console.log('Very Good')
    }else if (score >= 70 && score <= 79){
        return console.log('Pass')
    }else {
        return console.log('Failed')
    }
}

scoreCategory(console.log(95))
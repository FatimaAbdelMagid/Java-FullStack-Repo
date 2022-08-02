function addNumbers(){
    //console.log("Add function is working");
    var num1 = Number(document.getElementById('first').value)
    var num2 = Number(document.getElementById('second').value)
    console.log(num1+num2);
    var sum = num1+num2;
    alert('The sum is '+sum);
    document.getElementById('message').innerHTML = 'The sum is' + sum;
    document.write('document is writing in html')
}

//To modify the document object model of the 'message' ID 
//document.getElementById('message').innerHTML = 'This is from JavaScript innerHTML'

console.log("Hi from HTML Js file")
function myString() {
var y = (document.getElementById('name').value) 
var z = (document.getElementById('amount').value)
var x = parseInt(y) + parseInt(z)
document.getElementById('total').innerHTML= x
}

// function addnum(n1, n2) {
//     var no1 = parseFloat(n1)
//     var no2 = parseFloat(n2)
//     varno3 = no1+ no2
//     myform.total.value = no3
// }
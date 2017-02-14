var needCoffee = true;
if (needCoffee) {
    console.log ('finding coffee');
}

else {
    console.log ("you don't need it")
}
var hungry = prompt('are you hungry?')

if (hungry == "yes") {
    alert("Too bad!")
}
else {
    alert("Good for you!")
}

var Arnold = prompt("Do you want to live?") 
if (Arnold == "yes") {
    alert("then come with me!")
}
else {
    console.log("Hasta la vista baby")
}

var groceryItem = 'papaya';
switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya'
        console.log('Papayas are%S $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}
    
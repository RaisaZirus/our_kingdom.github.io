var raima = prompt("Enter the Aga-Raima number to who are friends with alarm-clock Raisa : ");
var what_to_print ;
for(i = 1 ; i <= raima ; i++){
    what_to_print = "Aga-Raima no."+i+"is a friend";
    if(i%2 === 0 ){
        continue;
    }else{
        console.log(what_to_print);
    }
}






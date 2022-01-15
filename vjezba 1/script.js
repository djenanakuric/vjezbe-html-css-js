

let datum = document.getElementById("datum");

let vrijeme = document.getElementById("vrijeme");
let statusSedmice = document.getElementById("statusSedmice");
let statusDana = document.getElementById("statusDana");

var today = new Date();

datum.innerText = today.toLocaleDateString();
vrijeme.innerText = today.toLocaleTimeString();

let dan = today.getDay();
console.log(dan);
if( dan === 1 || dan === 2) 
    statusSedmice.innerText = 'Sretan pocetak sedmice';
else if (dan === 3 || dan === 4)
    statusSedmice.innerText = 'Na sredini sedmice smo';
else if (dan === 5 || dan === 6)
    statusSedmice.innerText = 'Ugodan vikend';
else
    statusSedmice.innerText = 'Pripreme za radnu sedmicu';

let sat = today.getHours();
let minuta = today.getMinutes()

if(sat >= 6 && sat <= 12) 
    statusDana.innerText = 'Dobro jutro';
else if( sat>=12 && sat <= 18)
statusDana.innerText = 'Dobar dan';
else
statusDana.innerText = 'Laku noc';




// Tetszőleges betűvel tetszőleges (1-10) sort töltsünk fel a képernyőn!
let sorokszama = 6
let betu = "*"

for(let i = 0; i < sorokszama; i++){
    console.log(betu.repeat(i));
}

// Írassuk ki 99-től csökkenő sorrendben az összes pozitív, 3-mal osztható egész számot!

for(let i = 99; i > 0; i--){
    if(i % 3 === 0){
        console.log(i);   
    }
}
// Írassuk ki 101-től 50-ig csökkenő sorrendben az öttel osztható számok kétszeresét! HFFFFFF
for(let i = 101; i > 50; i--){
    if(i % 5 === 0){
        console.log(i * 2);
    }
}


// Határozzuk meg az első N természetes szám összegét!
let N = 5
osszeg = 0
for(let i = 1; i <= N; i++){
    osszeg += i
}
console.log(`Az első ${N} természetes szám összege ${osszeg}`);

// Írjuk ki az első N négyzetszám átlagát!
for(let i = 1; i <= N; i++){
    osszeg += i * i
}
console.log(`Az első ${N} négyzetszám átlaga ${osszeg / N}`);

// Készítsünk N-es szorzótáblát (1xN, 2xN,...)!
let N2 = 6
for(let i = 1; i < 10; i++){
    console.log(`${i} x ${N2} = ${i*N2}`);
    
}
//Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg hatost nem dobunk. Írjuk ki
//az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!
let dobasszam = 0;
let dobasosszege = 0; 
while(true){
    let dobas = Math.floor(Math.random () *  6 ) + 1
    console.log(dobas);
    dobasszam ++
    dobasosszege += dobas
    
    if(dobas === 6){
        break;
    }
}
let dobasokatlaga = dobasosszege / dobasszam
console.log(`A dobások átlaga ${dobasokatlaga}`);

// Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg 3 db hatost nem dobunk.
// Írjuk ki az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!
hatosddobasdb = 0;
while(hatosddobasdb < 3){
    let dobas = Math.floor(Math.random () *  6 ) + 1
    console.log(dobas);
    dobasszam ++
    dobasosszege += dobas
    
    if(dobas === 6){
        hatosddobasdb ++
    }

}
let dobasokatlaga2 = dobasosszege / dobasszam
console.log(`A dobások átlaga ${dobasokatlaga2}`);

// Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg a dobások összege kisebb,
// mint K. Írjuk ki az egyes dobások eredményét, majd a sorozat végén a dobások átlagát
// is!
let K = 20
while(dobasosszege < K){
    let dobas = Math.floor(Math.random () *  6 ) + 1
    console.log(dobas);
    dobasszam ++
    dobasosszege += dobas }
let dobasokatlaga3 = dobasosszege / dobasszam
console.log(`A dobások átlaga ${dobasokatlaga3}`);




// Kérjen be a program számokat mindaddig, amíg 0-át nem írunk be! Ezután írja ki, hogy
// páros szám volt a beírt számok között!
paros = false
while(true){
    let szam = parseInt(prompt("Kérem adjon meg egy számot(0-val kilépsz)"))
    if(isNaN(szam)){
        alert("érvénytelen bevitel, számot adj meg");
        continue;
    }
    
    console.log(szam);
    
    if(szam === 0){
        break
    }
    if(szam % 2 === 0){
        
        paros = true
    }
}
if(paros){
    console.log("Volt közte páros");
    
}
else{
    console.log("Nem volt közötte páros");
    
}

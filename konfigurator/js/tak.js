const blockHandler  = document.getElementById("blok");
blockHandler.innerHTML = "Witaj na naszej stronie";

var gfx = {
    nazwa: "Asus ROG Strix GeForce RTX 2070 Gaming OC edition",
    ram: 8,
    coreHz: 1845,
    describe: "Układ graficzny NVIDIA GeForce RTX 2070 zapewni ekstremalnie realistyczne doświadczenia wizualne w topowych grach."

}

const gfxBlock = document.getElementById("gfx");
gfxBlock.innerHTML=gfx.nazwa+"<br>RAM:"+gfx.ram+" GB"+"<br>Taktowanie rdzenia"+gfx.coreHz+" mHz"+"<br>Opis:"+gfx.describe;

var cpu= {
    nazwa: "AMD Ryzen 5 3600, 3.6GHz, 32 MB, BOX ",
    coregHz: 3.6,
    describe: "Linia procesorów AMD Ryzen 5 obejmuje jednostki ze średniej półki cenowej, które są dość uniwersalne i odpowiednie do większości zastosowań. Ich dopracowane parametry techniczne i rozsądna cena to czynniki, które powodują, że procesory Ryzen 5 są chętnie wybierane do komputerów domowych i dla graczy. Jednostki te mogą dysponować 4 lub 6 rdzeniami, co przekłada się na wysoką sprawność podczas bardziej skomplikowanych działań."

}

const cpuBlock = document.getElementById("cpu");
cpuBlock.innerHTML=cpu.nazwa;

var mobo= {
    nazwa: "MSI MAG B550M BAZOOKA",
    chipset: "AMD B550",
    describe: "Płyta główna w rozmiarze Micro ATX pasuje do obudów komputerowych typu Midi Tower, Micro Tower, Mini Tower i Full Tower."
}

const moboBlock = document.getElementById("mobo");
moboBlock.innerHTML=mobo.nazwa;
const summaryCompHandler = document.getElementById("summaryComp")

let psu = [
    {
        id: 0,
        name: "SilentiumPC Vero L3 500W",
        price: 219,
        img: "zasilacz1.jpg",
    },
    {
        id: 1,
        name: "be quiet! Straight Power 11 1000W",
        price: 850,
        img: "zasilacz4.jpg"
    },
    {
        id: 2,
        name: "Thermaltake PS-SPR-0700NHSAWE-1 700W",
        price: 340,
        img: "zasilacz2.jpg"
    },
    {
        id: 3,
        name: "Corsair RM750x 750W",
        price: 619,
        img: "1790294_0_i1064.jpg"
    },
]
let ram = [
    {
        id: 0,
        name: "ADATA Gammix D10, DDR4, 16 GB, 3200MHz, CL16",
        price: 289,
        img: "ram1.jpg"
    },
    {
        id: 1,
        name: "GoodRam IRDM, DDR4, 16 GB, 3600MHz, CL17",
        price: 319,
        img: "Ram2.jpg"
    },
    {
        id: 2,
        name: "Corsair Vengeance RGB PRO, DDR4, 16 GB, 3200MHz, CL16",
        price: 370,
        img: "ram3.jpg"
    },
    {
        id: 3,
        name: "Corsair Vengeance LPX, DDR4, 16 GB, 3200MHz, CL16",
        price: 310,
        img: "ram4.jpeg"
    },
]
let casef = [
    {
        id: 0,
        name: "SilentiumPC Signum SG7V Evo TG ARGB",
        price: 389,
        img: "sg7vevo.jpg"
    },
    {
        id: 1,
        name: "MSI MAG Forge 100M",
        price: 209,
        img: "msifag.jpg"
    },
    {
        id: 2,
        name: "be quiet! Pure Base 600",
        price: 360,
        img: "bqpb6.jpg"
    },
    {
        id: 3,
        name: "Fractal Design Meshify C TG",
        price: 410,
        img: "obudowa4.jpg"
    },
]
let gpu = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1660 OC 6GB GDDR5 ",
        price: 939,
        img: "gpu1.jpg"
    },
    {
        id: 2,
        name: "Gigabyte Radeon RX 5600 XT Gaming OC 6GB GDDR6",
        price: 1349,
        img: "gpu2.jpg"
    },
    {
        id: 3,
        name: "MSI GeForce RTX 2070 SUPER Gaming X 8GB GDDR6",
        price: 1799,
        img: "gpu3.jpg"
    },
    {
        id: 4,
        name: "Gigabyte GeForce GT 1030 OC 2GB GDDR5",
        price: 394.29,
        img: "gpu4.jpg"
    },
    {
        id: 5,
        name: "Gainward GeForce RTX 3090 Phoenix GS 24GB GDDR6X",
        price: 8169,
        img: "gpu5.jpg"
    },
    {
      id: 6,
      name: "XFX Radeon RX 590 Fatboy 8GB GDDR5",
        price: 939,
        img: "gpu6.jpg"
    },
]
let cpu = [
    {
        id: 1,
        name: "AMD Ryzen 5 3600",
        price: 929,
        socket: "AM4",
        img: "cpu1.jpg"
    },
    {
        id: 2,
        name: "Intel Core i5-10400f",
        price: 699,
        socket: "1200",
        img: "cpu1.jpeg"
    },
    {
        id: 3,
        name: "AMD Ryzen 7 3700x",
        price: 1359,
        socket: "AM4",
        img: "cpu3.jpg"
    },
    {
        id: 4,
        name: "AMD Ryzen 9 3900X",
        price: 2000,
        socket: "AM4",
        img: "cpu4.jpg"
    },
    {
        id: 5,
        name: "Intel Core i3-10300",
        price: 699,
        socket: "1200",
        img: "cpu5.jpg"
    },
    {
        id: 6,
        name: "Intel Core i5-9600k",
        price: 929,
        socket: "1151",
        img: "cpu6.jpg"
    },
]
let mb = [
    {
        id: 1,
        name: "Gigabyte B450 AORUS ELITE",
        price: 409,
        socket: "AM4",
        img: "b450ae.jpg"
    },
    {
        id: 2,
        name: "Gigabyte X570 GAMING X",
        price: 770,
        socket: "AM4",
        img: "gx57gx.jpg"
    },
    {
        id: 3,
        name: "Gigabyte GA-A320M-S2H",
        price: 240,
        socket: "AM4",
        img: "ga32ms2.jpg"
    },
    {
        id: 4,
        name: "MSI MPG X570 GAMING PLUS",
        price: 780,
        socket: "AM4",
        img: "mmx57gp.jpg"
    },
    {
        id: 5,
        name: "Gigabyte Z390 AORUS PRO",
        price: 830,
        socket: "1151",
        img: "gz39ap.jpg"
    },
    {
        id: 6,
        name: "MSI MPG X570 GAMING EDGE WIFI",
        price: 1000,
        socket: "AM4",
        img: "mmx57gew.jpg"
    },
    {
        id: 7,
        name: "Gigabyte B550 AORUS ELITE",
        price: 660,
        socket: "AM4",
        img: "gb55ae.jpg"
    },
    {
        id: 8,
        name: "MSI B460 TOMAHAWK",
        price: 600,
        socket: "1200",
        img: "mb46t.jpg"
    },
]
let ssd = [
    {
        id: 0,
        name: "Western Digital Blue 500 GB 2.5'' SATA III",
        price: 279,
        img: "wdblussd.jpg"
    },
    {
        id: 1,
        name: "Crucial MX500 1 TB 2.5'' SATA III",
        price: 549,
        img: "979472_0_i1064.jpg"
    },
    {
        id: 2,
        name: "Samsung 860 EVO 1 TB 2.5'' SATA III",
        price: 620,
        img: "samsungssd1tb.jpg"
    },
    {
        id: 3,
        name: "Kingston A2000 500 GB M.2 2280 PCI-E x4 Gen3 NVMe",
        price: 300,
        img: "ssd4.jpg"
    },
]
let biurkof = [
    {
        id: 0,
        name: "PRO-GAMER D-3000",
        price: 650,
        img: "biurko1.jpg"
    },
    {
        id: 1,
        name: "Ultradesk Frag",
        price: 700,
        img: "biurko2.jpg"
    },
    {
        id: 2,
        name: "Guard Desk VoidDesk-C",
        price: 1300,
        img: "biurko3.jpg"
    },
    {
        id: 3,
        name: "TopEshop Plus",
        price: 420,
        img: "biurko4.jpg"
    },
]
let podkladka = [
    {
        id: 0,
        name: "Genesis Carbon 500 Maxi Flash",
        price: 65,
        img: "podkladka1.jpg"
    },
    {
        id: 1,
        name: "Razer Gigantus V2 L",
        price: 100,
        img: "podkladka2.jpg"
    },
    {
        id: 2,
        name: "Logitech G640",
        price: 180,
        img: "podkladka3.jpeg"
    },
    {
        id: 3,
        name: "Dream Machines XL",
        price: 50,
        img: "podkladka4.jpg"
    },
]
let keyboard = [
    {
        id: 0,
        name: "Corsair K55 RGB",
        price: 220,
        img: "klawa1.jpg"
    },
    {
        id: 1,
        name: "SPC Gear GK540 Magna",
        price: 240,
        img: "klawa2.jpg"
    },
    {
        id: 2,
        name: "Logitech G213 Prodigy",
        price: 225,
        img: "klawa3.jpg"
    },
    {
        id: 3,
        name: "Genesis Rhod 400 RGB",
        price: 100,
        img: "klawa4.jpg"
    },
]
let fotel = [
    {
        id: 0,
        name: "PRO-GAMER Aguri+ Czarno-szary ",
        price: 620,
        img: "fotel1.jpg"
    },
    {
        id: 1,
        name: "MSI CH120",
        price: 900,
        img: "fotel2.jpg"
    },
    {
        id: 2,
        name: "Diablo Chairs X-ONE 2.0 NORMAL Czarno-czerwony",
        price: 690,
        img: "fotel3.jpg"
    },
    {
        id: 3,
        name: "Genesis Trit 600 RGB",
        price: 1100,
        img: "fotel4.jpg"
    },
]
let myszka = [
    {
        id: 0,
        name: "HP X220 Gaming Mouse ",
        price: 92,
        img: "myszka1.jpg"
    },
    {
        id: 1,
        name: "Logitech G102 Lightsync",
        price: 120,
        img: "myszka2.jpg"
    },
    {
        id: 2,
        name: "Modecom Volcano Shinobi 3327 czarna",
        price: 99,
        img: "myszka3.jpg"
    },
    {
        id: 3,
        name: "SteelSeries Rival 3",
        price: 160,
        img: "myszka4.jpg"
    },
]
var cart = [
    {
        name: 'mainboard',
        price: 0
    },
    {
        name: 'cpu',
        price: 0
    },
    {
        name: 'gpu',
        price: 0
    },
    {
        name: 'ram',
        price: 0
    },
    {
        name: 'psu',
        price: 0
    },
    {
        name: 'casef',
        price: 0
    },
    {
        name: 'ssd',
        price: 0
    },
    {
        name: 'biurkof',
        price: 0
    },
    {
        name: 'podkladka',
        price: 0
    },
    {
        name: 'keyboard',
        price: 0
    },
    {
        name: 'fotel',
        price: 0
    },
    {
        name: 'myszka',
        price: 0
    },
    ]
function addOpt(elem, optValue, textOpt){
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("name", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}
function sumAll(cart){
    console.log("Ilość elementów w koszyku: "+cart.length)

    let cena = 0;

    for(let i=0; i<cart.length; i++)
        cena = cena + cart[i].price

    return cena;
}


function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('name');
    console.log("Wybrane element ma ID: "+strAtt);

    const summaryMB = document.getElementById("summaryMB");
    const summaryCPU = document.getElementById("summaryCPU");
    const summaryGPU = document.getElementById("summaryGPU");
    const summaryPSU = document.getElementById("summaryPSU");
    const summaryRAM = document.getElementById("summaryRAM");
    const summaryCASEF = document.getElementById("summaryCASEF");
    const summarySSD = document.getElementById("summarySSD");
    const summaryBIURKOF = document.getElementById("summaryBIURKOF");
    const summaryPODKLADKA = document.getElementById("summaryPODKLADKA");
    const summaryKEYBOARD = document.getElementById("summaryKEYBOARD");
    const summaryMYSZKA = document.getElementById("summaryMYSZKA");
    const summaryFOTEL = document.getElementById("summaryFOTEL");

    if (SelectId == "mb") {
        summaryMB.innerHTML = "<td><img src='img/"+mb[strAtt - 1].img+"'></td><td>"+mb[strAtt - 1].name + "</td><td>" + mb[strAtt - 1].price + "zł</td>" + "<td>" + "Socket" + "</td>" + mb[strAtt - 1].socket + "</td>"
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        cart[0].name = mb[strAtt - 1].socket
    }
    else if (SelectId == "cpu") {
        summaryCPU.innerHTML = "<td><img src='img/"+cpu[strAtt - 1].img+"'></td><td>"+cpu[strAtt - 1].name + "</td><td>" + cpu[strAtt - 1].price + "zł</td>" + "<td>" + "Socket" + "</td><td>" + mb[strAtt - 1].socket + "</td>"
        cart[1].price = cpu[strAtt - 1].price
        cart[1].name = cpu[strAtt - 1].name
        cart[1].name = cpu[strAtt - 1].socket
    }
    else if (SelectId == "gpu") {
        summaryGPU.innerHTML = "<td><img src='img/"+gpu[strAtt - 1].img+"'></td><td>"+gpu[strAtt - 1].name + "</td><td>" + gpu[strAtt - 1].price + "zł</td>"
        cart[2].price = gpu[strAtt - 1].price
        cart[2].name = gpu[strAtt - 1].name
    }
    else if (SelectId == "ram") {
        summaryRAM.innerHTML = "<td><img src='img/"+ram[strAtt].img+"'></td><td>"+ram[strAtt].name + "</td><td>" + ram[strAtt].price + "zł</td>"
        cart[3].price = ram[strAtt - 1].price
        cart[3].name = ram[strAtt - 1].name
    }
    else if (SelectId == "psu") {
        summaryPSU.innerHTML = "<td><img src='img/"+psu[strAtt].img+"'></td><td>"+psu[strAtt].name + "</td><td>" + psu[strAtt].price + "zł </td>"
        cart[4].price = psu[strAtt].price
        cart[4].name = psu[strAtt].name
    }
    else if (SelectId == "casef") {
        summaryCASEF.innerHTML = "<td><img src='img/"+casef[strAtt].img+"'></td><td>"+casef[strAtt].name + "</td><td>" + casef[strAtt].price + "zł</td>"
        cart[5].price = casef[strAtt].price
        cart[5].name = casef[strAtt].name
    }
    else if (SelectId == "ssd") {
        summarySSD.innerHTML = "<td><img src='img/"+ssd[strAtt].img+"'></td><td>"+ ssd[strAtt].name + "</td><td>" + ssd[strAtt].price + "zł</td>"
        cart[6].price = ssd[strAtt].price
        cart[6].name = ssd[strAtt].name
    }
    else if (SelectId == "biurkof") {
        summaryBIURKOF.innerHTML = "<td><img src='img/"+biurkof[strAtt].img+"'></td><td>"+ biurkof[strAtt].name + "</td><td>" + biurkof[strAtt].price + "zł</td>"
        cart[7].price = biurkof[strAtt].price
        cart[7].name = biurkof[strAtt].name
    }
    else if (SelectId == "podkladka") {
        summaryPODKLADKA.innerHTML = "<td><img src='img/"+podkladka[strAtt].img+"'></td><td>"+ podkladka[strAtt].name + "</td><td>" + podkladka[strAtt].price + "zł</td>"
        cart[8].price = podkladka[strAtt].price
        cart[8].name = podkladka[strAtt].name
    }
    else if (SelectId == "myszka") {
        summaryMYSZKA.innerHTML = "<td><img src='img/"+myszka[strAtt].img+"'></td><td>"+ myszka[strAtt].name + "</td><td>" + myszka[strAtt].price + "zł</td>"
        cart[9].price = myszka[strAtt].price
        cart[9].name = myszka[strAtt].name
    }
    else if (SelectId == "fotel") {
        summaryFOTEL.innerHTML = "<td><img src='img/"+fotel[strAtt].img+"'></td><td>"+ fotel[strAtt].name + "</td><td>" + fotel[strAtt].price + "zł</td>"
        cart[10].price = fotel[strAtt].price
        cart[10].name = fotel[strAtt].name
    }
    else if (SelectId == "keyboard") {
        summaryKEYBOARD.innerHTML = "<td><img src='img/"+keyboard[strAtt].img+"'></td><td>"+ keyboard[strAtt].name + "</td><td>" + keyboard[strAtt].price + "zł</td>"
        cart[11].price = keyboard[strAtt].price
        cart[11].name = keyboard[strAtt].name
    }
    else
    {}
    document.getElementById("sumALL").innerHTML="<b>Suma koszyka: "+ sumAll(cart) + "</b>zł"
}



for(let i=0; i<mb.length; i++){
    addOpt("mb", mb[i].id, mb[i].name, mb[i].price)
}
for(let i=0; i<gpu.length; i++){
    addOpt("gpu", gpu[i].id, gpu[i].name, gpu[i].price)
}
for(let i=0; i<cpu.length; i++){
    addOpt("cpu", cpu[i].id, cpu[i].name, cpu[i].price)
}
for(let i=0; i<ram.length; i++){
    addOpt("ram", ram[i].id, ram[i].name, ram[i].price)
}
for(let i=0; i<psu.length; i++){
    addOpt("psu", psu[i].id, psu[i].name, psu[i].price)
}
for(let i=0; i<casef.length; i++){
    addOpt("casef", casef[i].id, casef[i].name, casef[i].price)
}
for(let i=0; i<ssd.length; i++){
    addOpt("ssd", ssd[i].id, ssd[i].name, ssd[i].price)
}
for(let i=0; i<biurkof.length; i++){
    addOpt("biurkof", biurkof[i].id, biurkof[i].name, biurkof[i].price)
}
for(let i=0; i<podkladka.length; i++){
    addOpt("podkladka", podkladka[i].id, podkladka[i].name, podkladka[i].price)
}
for(let i=0; i<myszka.length; i++){
    addOpt("myszka", myszka[i].id, myszka[i].name, myszka[i].price)
}
for(let i=0; i<keyboard.length; i++){
    addOpt("keyboard", keyboard[i].id, keyboard[i].name, keyboard[i].price)
}
for(let i=0; i<fotel.length; i++){
    addOpt("fotel", fotel[i].id, fotel[i].name, fotel[i].price)
}



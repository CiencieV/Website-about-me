const summaryCompHandler = document.getElementById("summaryComp")

let psu = [
    {
        id: 0,
        name: "SilentiumPC Vero L3 500W",
        price: 219,
    },
    {
        id: 1,
        name: "be quiet! Straight Power 11 1000W ",
        price: 850,
    },
    {
        id: 2,
        name: "Thermaltake PS-SPR-0700NHSAWE-1 700W",
        price: 340,
    },
    {
        id: 3,
        name: "Corsair RM750x 750W",
        price: 619,
    },
]
let ram = [
    {
        id: 0,
        name: "ADATA Gammix D10, DDR4, 16 GB, 3200MHz, CL16",
        price: 289,
    },
    {
        id: 1,
        name: "GoodRam IRDM, DDR4, 16 GB, 3600MHz, CL17",
        price: 319,
    },
    {
        id: 2,
        name: "Corsair Vengeance RGB PRO, DDR4, 16 GB, 3200MHz, CL16",
        price: 370,
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
]
let gpu = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1660 OC 6GB GDDR5 ",
        price: 939,
    },
    {
        id: 2,
        name: "Gigabyte Radeon RX 5600 XT Gaming OC 6GB GDDR6 ",
        price: 1349,
    },
    {
        id: 3,
        name: "MSI GeForce RTX 2070 SUPER Gaming X 8GB GDDR6",
        price: 1799,
    },
    {
        id: 4,
        name: "Gigabyte GeForce GT 1030 OC 2GB GDDR5",
        price: 394.29,
    },
    {
        id: 5,
        name: "Gainward GeForce RTX 3090 Phoenix GS 24GB GDDR6X",
        price: 8169,
    },
    {
      id: 6,
      name: "XFX Radeon RX 590 Fatboy 8GB GDDR5 ",
        price: 939,
    },
]
let cpu = [
    {
        id: 1,
        name: "AMD Ryzen 5 3600",
        price: 929,
        socket: "AM4",
    },
    {
        id: 2,
        name: "Intel Core i5-10400f",
        price: 699,
        socket: "1200",
    },
    {
        id: 3,
        name: "AMD Ryzen 7 3700x",
        price: 1359,
        socket: "AM4",
    },
    {
        id: 4,
        name: "AMD Ryzen 9 3900X",
        price: 2000,
        socket: "AM4",
    },
    {
        id: 5,
        name: "Intel Core i3-10300",
        price: 699,
        socket: "1200",
    },
    {
        id: 6,
        name: "Intel Core i5-9600k",
        price: 929,
        socket: "1151",
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
    ]
function addOpt(elem, optValue, textOpt){
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("name", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}
function sumCart(koszyk){
    console.log("Ilość elementów w koszyku: "+koszyk.lenght)
    let cena = 0;
    for(let i=0; i<koszyk.lenght; i++)
        cena = cena + koszyk[i].price

    return cena;
}
function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('name');
    console.log("Wybrane element ma ID: "+strAtt);

    const summaryMB = document.getElementById("summaryMB");
    const summaryCPU = document.getElementById("summaryCPU");
    const summaryGPU = document.getElementById("summaryGPU");
    const summaryRAM = document.getElementById("summaryRAM");
    const summaryPSU = document.getElementById("summaryPSU");
    const summaryCASEF = document.getElementById("summaryCASEF");
    const summarySSD = document.getElementById("summarySSD");

    if (SelectId == "mb") {
        summaryMB.innerHTML = "<td><img src='img/"+mb[strAtt - 1].img+"'></td>"+mb[strAtt - 1].name + " " + mb[strAtt - 1].price + "zł" + " " + "Socket" + " " + mb[strAtt - 1].socket
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        cart[0].name = mb[strAtt - 1].socket
    }
    else if (SelectId == "cpu") {
        summaryCPU.innerHTML = "<td><img src='img/"+cpu[strAtt - 1].img+"'></td>"+cpu[strAtt - 1].name + " " + cpu[strAtt - 1].price + "zł" + " " + "Socket" + " " + mb[strAtt - 1].socket
        cart[1].price = cpu[strAtt - 1].price
        cart[1].name = cpu[strAtt - 1].name
        cart[1].name = cpu[strAtt - 1].socket
    }
    else if (SelectId == "gpu") {
        summaryGPU.innerHTML = "<td><img src='img/"+gpu[strAtt - 1].img+"'></td>"+gpu[strAtt - 1].name + " " + gpu[strAtt - 1].price + "zł"
        cart[2].price = gpu[strAtt - 1].price
        cart[2].name = gpu[strAtt - 1].name
    }
    else if (SelectId == "ram") {
        summaryRAM.innerHTML = "<td><img src='img/"+ram[strAtt - 1].img+"'></td>"+ram[strAtt - 1].name + " " + ram[strAtt - 1].price + "zł"
        cart[3].price = ram[strAtt - 1].price
        cart[3].name = ram[strAtt - 1].name
    }
    else if (SelectId == "psu") {
        summaryRAM.innerHTML = "<td><img src='img/"+psu[strAtt].img+"'></td>"+psu[strAtt].name + " " + psu[strAtt].price + "zł"
        cart[4].price = psu[strAtt].price
        cart[4].name = psu[strAtt].name
    }
    else if (SelectId == "casef") {
        summaryCASEF.innerHTML = "<td><img src='img/"+casef[strAtt].img+"'></td>"+casef[strAtt].name + " " + casef[strAtt].price + "zł"
        cart[5].price = casef[strAtt].price
        cart[5].name = casef[strAtt].name
    }
    else if (SelectId == "ssd") {
        summarySSD.innerHTML = "<td><img src='img/"+ssd[strAtt].img+"'></td>"+ ssd[strAtt].name + " " + ssd[strAtt].price + "zł"
        cart[6].price = ssd[strAtt].price
        cart[6].name = ssd[strAtt].name
    }
    else
    {}


    document.getElementById("sumALL").innerHTML="<b>Suma koszyka: "+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price+cart[6].price) + "</b>zł"
    //return(parseInt(strAtt));
}

function sumCart(cart){
    console.log("Ilość elementów w koszyku: "+cart.lenght)
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




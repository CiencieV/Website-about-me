const summaryCompHandler = document.getElementById("summaryComp")
const Ala = summaryCompHandler.innerHTML


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
    },
    {
        id: 2,
        name: "Gigabyte X570 GAMING X",
        price: 770,
        socket: "AM4",
    },
    {
        id: 3,
        name: "Gigabyte GA-A320M-S2H",
        price: 240,
        socket: "AM4",
    },
    {
        id: 4,
        name: "MSI MPG X570 GAMING PLUS",
        price: 780,
        socket: "AM4",
    },
    {
        id: 5,
        name: "Gigabyte Z390 AORUS PRO",
        price: 830,
        socket: "1151",
    },
    {
        id: 6,
        name: "MSI MPG X570 GAMING EDGE WIFI",
        price: 1000,
        socket: "AM4",
    },
    {
        id: 7,
        name: "Gigabyte B550 AORUS ELITE",
        price: 660,
        socket: "AM4",
    },
    {
        id: 8,
        name: "MSI B460 TOMAHAWK",
        price: 600,
        socket: "1200",
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
    ]
function addOpt(elem, optValue, textOpt){
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("name", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}

function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('name');
    console.log("Wybrane element ma ID: "+strAtt);

    const summaryMB = document.getElementById("summaryMB");
    const summaryCPU = document.getElementById("summaryCPU");
    const summaryGPU = document.getElementById("summaryGPU");

    if (SelectId == "mb") {
        summaryMB.innerHTML = mb[strAtt - 1].name + " " + mb[strAtt - 1].price + "zł" + mb[strAtt - 1].socket + "socket"
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        cart[0].name = cpu[strAtt - 1].socket
    }
    else if (SelectId == "cpu") {
        summaryCPU.innerHTML = cpu[strAtt - 1].name + " " + cpu[strAtt - 1].price + "zł" + mb[strAtt - 1].socket + "socket"
        cart[1].price = cpu[strAtt - 1].price
        cart[1].name = cpu[strAtt - 1].name
        cart[1].name = cpu[strAtt - 1].socket
    }
    else if (SelectId == "gpu") {
        summaryGPU.innerHTML = gpu[strAtt - 1].name + " " + gpu[strAtt - 1].price + "zł"
        cart[2].price = gpu[strAtt - 1].price
        cart[2].name = gpu[strAtt - 1].name
    }
    else
    {}


    document.getElementById("sumALL").innerHTML="<b>Suma koszyka: "+ (cart[0].price+cart[1].price+cart[2].price) + "</b>zł"
    //return(parseInt(strAtt));
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




const ops = document.getElementById("SWC");
const param = document.getElementById("showParam");
const button = document.querySelector("#buttonV");
let swedishNmr = Math.floor(Math.random() * 10 + 1);
let RUNmr = Math.floor(Math.random() * 20 + 1);
let USNmr = Math.floor(Math.random() * 20 + 1);
let UKNmr = Math.floor(Math.random() * 20 + 1);
let TRNmr = Math.floor(Math.random() * 20 + 1);
let IRNmr = Math.floor(Math.random() * 20 + 1);
let CHNmr = Math.floor(Math.random() * 20 + 1);
let BRNmr = Math.floor(Math.random() * 20 + 1);
let JANmr = Math.floor(Math.random() * 20);
console.log(swedishNmr);
function exchangeNumberS() { swedishNmr = Math.floor(Math.random() * 20 + 1) }
function exchangeNumberUK() { UKNmr = Math.floor(Math.random() * 20 + 1) }
function exchangeNumberUS() { USNmr = Math.floor(Math.random() * 20 + 1)}
function exchangeNumberTR() { TRNmr = Math.floor(Math.random() * 20 + 1)}
function exchangeNumberRU() { RUNmr = Math.floor(Math.random() * 20 + 1)}
function exchangeNumberIR() { IRNmr = Math.floor(Math.random() * 20 + 1)}
function exchangeNumberCH() { CHNmr = Math.floor(Math.random() * 20 + 1)}
function exchangeNumberBR() { BRNmr = Math.floor(Math.random() * 20 + 1)}
function exchangeNumberJA() { JANmr = Math.floor(Math.random() * 20)}
function returnCity() {
    if (ops.value == "SWEDEN") {
        if (swedishNmr == 1){
            param.value  = "Stockholm"; exchangeNumberS();
        } 
        else if (swedishNmr == 2 ){param.value  = "Visby"; exchangeNumberS();}
        else if (swedishNmr == 3){param.value  = "Kalmar"; exchangeNumberS();}
        else if (swedishNmr == 4){param.value  = "Malmö"; exchangeNumberS();}
        else if (swedishNmr == 5){param.value  = "Göteborg"; exchangeNumberS();}
        else if (swedishNmr == 6){param.value = "Umeå"; exchangeNumberS();}
        else if (swedishNmr == 7){param.value  = "Luleå"; exchangeNumberS();}
        else if (swedishNmr == 8){param.value  = "Linköping"; exchangeNumberS();}
        else if (swedishNmr == 9){param.value  = "Västerås"; exchangeNumberS();}
        else if (swedishNmr == 10){param.value  = "Helsingborg"; exchangeNumberS();}
        else if (swedishNmr == 11){param.value  = "Örebro"; exchangeNumberS();}
        else if (swedishNmr == 12){param.value  = "Växsjö"; exchangeNumberS();}
        else if (swedishNmr == 13){param.value  = "Jönköping"; exchangeNumberS();}
        else if (swedishNmr == 14){param.value  = "Borås"; exchangeNumberS();}
        else if (swedishNmr == 15){param.value  = "Gävle"; exchangeNumberS();}
        else if (swedishNmr == 16){param.value  = "Kiruna"; exchangeNumberS();}
        else if (swedishNmr == 17){param.value  = "Eskilstuna"; exchangeNumberS();}
        else if (swedishNmr == 18){param.value  = "Mariestad"; exchangeNumberS();}
        else if (swedishNmr == 19){param.value  = "Strängnäs"; exchangeNumberS();}
        else if (swedishNmr == 20){param.value  = "Sundsvall"; exchangeNumberS();}
    }
    else if (ops.value == "UK") {
        if (UKNmr == 1) {param.value = "London"; exchangeNumberUK();}
        else if (UKNmr == 2 ){param.value = "Manchester"; exchangeNumberUK();}
        else if (UKNmr == 3){param.value = "Liverpool"; exchangeNumberUK();}
        else if (UKNmr == 4){param.value = "Glasgow"; exchangeNumberUK();}
        else if (UKNmr == 5){param.value = "Birmingham"; exchangeNumberUK();}
        else if (UKNmr == 6){param.value = "Bristol"; exchangeNumberUK();}
        else if (UKNmr == 7){param.value = "Sheffield"; exchangeNumberUK();}
        else if (UKNmr == 8){param.value = "Leeds"; exchangeNumberUK();}
        else if (UKNmr == 9){param.value = "Edinburgh"; exchangeNumberUK();}
        else if (UKNmr == 10){param.value = "Leicester"; exchangeNumberUK();}
        else if (UKNmr == 11){param.value = "Nottingham"; exchangeNumberUK();}
        else if (UKNmr == 12){param.value = "Bradford"; exchangeNumberUK();}
        else if (UKNmr == 13){param.value = "Cardiff"; exchangeNumberUK();}
        else if (UKNmr == 14){param.value = "Newcastle"; exchangeNumberUK();}
        else if (UKNmr == 15){param.value = "Coventry"; exchangeNumberUK();}
        else if (UKNmr == 16){param.value = "Hull"; exchangeNumberUK();}
        else if (UKNmr == 17){param.value = "Southampton"; exchangeNumberUK();}
        else if (UKNmr == 18){param.value = "Plymouth"; exchangeNumberUK();}
        else if (UKNmr == 19){param.value = "Derby"; exchangeNumberUK();}
        else if (UKNmr == 20){param.value = "Sunderland"; exchangeNumberUK();}
    }
    else if (ops.value == "USA") {
        if (USNmr == 1){param.value = "New york"; exchangeNumberUS();}
        else if (USNmr == 2){param.value = "Los Angeles"; exchangeNumberUS();}
        else if (USNmr == 3){param.value = "California"; exchangeNumberUS();}
        else if (USNmr == 4){param.value = "Chicago"; exchangeNumberUS();}
        else if (USNmr == 5){param.value = "Houston"; exchangeNumberUS();}
        else if (USNmr == 6){param.value = "Phoenix"; exchangeNumberUS();}
        else if (USNmr == 7){param.value = "Philadelphia"; exchangeNumberUS();}
        else if (USNmr == 8){param.value = "San Antonio"; exchangeNumberUS();}
        else if (USNmr == 9){param.value = "San Diego"; exchangeNumberUS();}
        else if (USNmr == 10){param.value = "Dallas"; exchangeNumberUS();}
        else if (USNmr == 11){param.value = "San Jose"; exchangeNumberUS();}
        else if (USNmr == 12){param.value = "Washington DC"; exchangeNumberUS();}
        else if (USNmr == 13){param.value = "Miami"; exchangeNumberUS();}
        else if (USNmr == 14){param.value = "Jacksonville"; exchangeNumberUS();}
        else if (USNmr == 15){param.value = "Austin"; exchangeNumberUS();}
        else if (USNmr == 16){param.value = "Columbus"; exchangeNumberUS();}
        else if (USNmr == 17){param.value = "Indianapolis"; exchangeNumberUS();}
        else if (USNmr == 18){param.value = "San Francisco"; exchangeNumberUS();}
        else if (USNmr == 19){param.value = "Las Vegas"; exchangeNumberUS();}
        else if (USNmr == 20){param.value = "Detroit"; exchangeNumberUS();}
    }
    else if (ops.value == "TURKEY") {
        if (TRNmr == 1){param.value = "Konya"; exchangeNumberTR();}
        else if (TRNmr == 2){param.value = "Antalya"; exchangeNumberTR();}
        else if (TRNmr == 3){param.value = "İzmir"; exchangeNumberTR();}
        else if (TRNmr == 4){param.value = "Adana"; exchangeNumberTR();}
        else if (TRNmr == 5){param.value = "Bursa"; exchangeNumberTR();}
        else if (TRNmr == 6){param.value = "Gaziantep"; exchangeNumberTR();}
        else if (TRNmr == 7){param.value = "Şanliurfa"; exchangeNumberTR();}
        else if (TRNmr == 8){param.value = "Antalya"; exchangeNumberTR();}
        else if (TRNmr == 9){param.value = "Van"; exchangeNumberTR();}
        else if (TRNmr == 10){param.value = "Istanbul"; exchangeNumberTR();}
        else if (TRNmr == 11){param.value = "Fethiye"; exchangeNumberTR();}
        else if (TRNmr == 12){param.value = "Edirne"; exchangeNumberTR();}
        else if (TRNmr == 13){param.value = "Eskishehir"; exchangeNumberTR();}
        else if (TRNmr == 14){param.value = "Samsun"; exchangeNumberTR();}
        else if (TRNmr == 15){param.value = "Trabzon"; exchangeNumberTR();}
        else if (TRNmr == 16){param.value = "Batman"; exchangeNumberTR();}
        else if (TRNmr == 17){param.value = "Bodrum"; exchangeNumberTR();}
        else if (TRNmr == 18){param.value = "Pamukkalle"; exchangeNumberTR();}
        else if (TRNmr == 19){param.value = "Cappadocia"; exchangeNumberTR();}
        else if (TRNmr == 20){param.value = "Kusadasi"; exchangeNumberTR();}
    }
    else if (ops.value == "RUSSIA") {
        if (RUNmr == 1) {param.value = "Moskva"; exchangeNumberRU();}
        else if (RUNmr == 2){param.value = "St. Petersburg"; exchangeNumberRU();}
        else if (RUNmr == 3){param.value = "Sevastopol"; exchangeNumberRU();}
        else if (RUNmr == 4){param.value = "Tyumen"; exchangeNumberRU();}
        else if (RUNmr == 5){param.value = "Novosibirsk"; exchangeNumberRU();}
        else if (RUNmr == 6){param.value = "Yekaterinburg"; exchangeNumberRU();}
        else if (RUNmr == 7){param.value = "Kazan"; exchangeNumberRU();}
        else if (RUNmr == 8){param.value = "Nizhny Novgorod"; exchangeNumberRU();}
        else if (RUNmr == 9){param.value = "Chelyabinsk"; exchangeNumberRU();}
        else if (RUNmr == 10){param.value = "Krasnoyarsk"; exchangeNumberRU();}
        else if (RUNmr == 11){param.value = "Samara"; exchangeNumberRU();}
        else if (RUNmr == 12){param.value = "Ufa"; exchangeNumberRU();}
        else if (RUNmr == 13){param.value = "Rostov-on-Don"; exchangeNumberRU();}
        else if (RUNmr == 14){param.value = "Omsk"; exchangeNumberRU();}
        else if (RUNmr == 15){param.value = "Krasnodar"; exchangeNumberRU();}
        else if (RUNmr == 16){param.value = "Voronezh"; exchangeNumberRU();}
        else if (RUNmr == 17){param.value = "Perm"; exchangeNumberRU();}
        else if (RUNmr == 18){param.value = "Volgograd"; exchangeNumberRU();}
        else if (RUNmr == 19){param.value = "Saratov"; exchangeNumberRU();}
        else if (RUNmr == 20){param.value = "Khabarovsk"; exchangeNumberRU();}
    }
    else if (ops.value == "IRAN") {
        if (IRNmr == 1){param.value = "Tehran"; exchangeNumberIR();}
        else if (IRNmr == 2){param.value = "Isfahan"; exchangeNumberIR();}
        else if (IRNmr == 3){param.value = "Karaj"; exchangeNumberIR();}
        else if (IRNmr == 4){param.value = "Ahvaz"; exchangeNumberIR();}
        else if (IRNmr == 5){param.value = "Mashhad"; exchangeNumberIR();}
        else if (IRNmr == 6){param.value = "Qom"; exchangeNumberIR();}
        else if (IRNmr == 7){param.value = "Shiraz"; exchangeNumberIR();}
        else if (IRNmr == 8){param.value = "Tabriz"; exchangeNumberIR();}
        else if (IRNmr == 9){param.value = "Kermanshah"; exchangeNumberIR();}
        else if (IRNmr == 10){param.value = "Urmia"; exchangeNumberIR();}
        else if (IRNmr == 11){param.value = "Rasht"; exchangeNumberIR();}
        else if (IRNmr == 12){param.value = "Zahedan"; exchangeNumberIR();}
        else if (IRNmr == 13){param.value = "Hamadan"; exchangeNumberIR();}
        else if (IRNmr == 14){param.value = "Kerman"; exchangeNumberIR();}
        else if (IRNmr == 15){param.value = "Yazd"; exchangeNumberIR();}
        else if (IRNmr == 16){param.value = "Ardabil"; exchangeNumberIR();}
        else if (IRNmr == 17){param.value = "Bandar Abbas"; exchangeNumberIR();}
        else if (IRNmr == 18){param.value = "Arak"; exchangeNumberIR();}
        else if (IRNmr == 19){param.value = "Zanjan"; exchangeNumberIR();}
        else if (IRNmr == 20){param.value = "Sanandaj"; exchangeNumberIR();}
    }
    if (ops.value == "BRAZIL") {
        if (BRNmr == 1){param.value = "São Paulo"; exchangeNumberBR();}
        else if (BRNmr == 2){param.value = "Rio de Janeiro"; exchangeNumberBR();}
        else if (BRNmr == 3){param.value = "Salvador"; exchangeNumberBR();}
        else if (BRNmr == 4){param.value = "Fortaleza"; exchangeNumberBR();}
        else if (BRNmr == 5){param.value = "Belo horizonte"; exchangeNumberBR();}
        else if (BRNmr == 6){param.value = "Brasília"; exchangeNumberBR();}
        else if (BRNmr == 7){param.value = "Curitiba"; exchangeNumberBR();}
        else if (BRNmr == 8){param.value = "Manaus"; exchangeNumberBR();}
        else if (BRNmr == 9){param.value = "Recífe"; exchangeNumberBR();}
        else if (BRNmr == 10){param.value = "Belem"; exchangeNumberBR();}
        else if (BRNmr == 11){param.value = "Porto Alegre"; exchangeNumberBR();}
        else if (BRNmr == 12){param.value = "Goiania"; exchangeNumberBR();}
        else if (BRNmr == 13){param.value = "Guarulhos"; exchangeNumberBR();}
        else if (BRNmr == 14){param.value = "Campinas"; exchangeNumberBR();}
        else if (BRNmr == 15){param.value = "Nova Iguacu"; exchangeNumberBR();}
        else if (BRNmr == 16){param.value = "Maceio"; exchangeNumberBR();}
        else if (BRNmr == 17){param.value = "São Luis"; exchangeNumberBR();}
        else if (BRNmr == 18){param.value = "Duque de Caxias"; exchangeNumberBR();}
        else if (BRNmr == 19){param.value = "Natal"; exchangeNumberBR();}
        else if (BRNmr == 20){param.value = "Teresina"; exchangeNumberBR();}
    }
    else if (ops.value == "CHINA") {
        if (CHNmr == 1){param.value = "Beijing"; exchangeNumberCH();}
        else if (CHNmr == 2){param.value = "Shanghai"; exchangeNumberCH();}
        else if (CHNmr == 3){param.value = "Shenzhen"; exchangeNumberCH();}
        else if (CHNmr == 4){param.value = "Guangzhou"; exchangeNumberCH();}
        else if (CHNmr == 5){param.value = "Chengdu"; exchangeNumberCH();}
        else if (CHNmr == 6){param.value = "Tianjin"; exchangeNumberCH();}
        else if (CHNmr == 7){param.value = "Wuhan"; exchangeNumberCH();}
        else if (CHNmr == 8){param.value = "Dongguan"; exchangeNumberCH();}
        else if (CHNmr == 9){param.value = "Chongqing"; exchangeNumberCH();}
        else if (CHNmr == 10){param.value = "Xi'an"; exchangeNumberCH();}
        else if (CHNmr == 11){param.value = "Hangzhou"; exchangeNumberCH();}
        else if (CHNmr == 12){param.value = "Foshan"; exchangeNumberCH();}
        else if (CHNmr == 13){param.value = "Nanjing"; exchangeNumberCH();}
        else if (CHNmr == 14){param.value = "Shenyang"; exchangeNumberCH();}
        else if (CHNmr == 15){param.value = "Zhengzhou"; exchangeNumberCH();}
        else if (CHNmr == 16){param.value = "Qingdao"; exchangeNumberCH();}
        else if (CHNmr == 17){param.value = "Suzhou"; exchangeNumberCH();}
        else if (CHNmr == 18){param.value = "Jinan"; exchangeNumberCH();}
        else if (CHNmr == 19){param.value = "Changsha"; exchangeNumberCH();}
        else if (CHNmr == 20){param.value = "Kunming"; exchangeNumberCH();}
    }
    else if (ops.value == "JAPAN") {
        const jpCT = [
            "Tokyo", "Yokohama", "Osaka",
            "Nagoya", "Sapporo", "Fukuoka",
            "Kobe", "Kyoto", "Kawasaki",
            "Saitama", "Hiroshima", "Sendai",
            "Kitakyushu", "Chiba", "Sakai",
            "Niigata", "Hamamatsu", "Shizuoka",
            "Okayama", "Kumamoto"
        ];
        param.value = jpCT[JANmr]; exchangeNumberJA();        
    }
}
button.addEventListener("click", returnCity)
function PromptInput() {
    let a = prompt("Do you like this? (Y/N)")
    if (a == "Y" || a == "Yes" || a == "Yea" || a == "yes" || a == "yea") {alert("Thank you!")}
    else if (a == "N" || a == "No" || a == "no") {alert("Okay, Thanks for the feedback atleast")}
    else if (a == "[secret]") alert("Code: 89(**999/(") 
        else {
        alert("What 😭")
    }
}
let delay = Math.floor(Math.random() * 10000) + 20000;

console.log("Function will run after " + (delay / 1000) + " seconds.");
setTimeout(PromptInput, delay);

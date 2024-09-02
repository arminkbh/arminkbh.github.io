let output = document.querySelector("#OutputRC");
let CBlocal = document.getElementById("RCinput");
let lv = document.querySelector("#selectWorld")
let rndmCN = 0;
function exchangeNumber() {
    rndmCN = Math.floor(Math.random() * CN + 1);
}
let CN = 0;
function GenerateCountry() {
    if (lv.value == "EUROPE") {
        CN = 50;
        exchangeNumber();
        const europeanCountries = [
            "United Kingdom", "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
            "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
            "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary",
            "Iceland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg",
            "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway",
            "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
            "Spain", "Sweden", "Switzerland", "Türkiye", "Ukraine", "Ireland"
        ];
        output.value = europeanCountries[rndmCN - 1]; exchangeNumber();
    } else if (lv.value == "ASIA") {
        CN = 48;
        exchangeNumber();
        const asianCountries = [
            "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei",
            "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel",
            "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia",
            "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine",
            "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka",
            "Syria", "Taiwan", "Thailand", "Timor-Leste", "Turkey", "United Arab Emirates", "Uzbekistan",
            "Vietnam", "Yemen"
        ];
        output.value = asianCountries[rndmCN - 2];
        exchangeNumber();
    } else if (lv.value == "AFRICA") {
        CN = 52
        exchangeNumber();
        
        const afr = [
            "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon",
            "Central African Republic", "Chad", "Comoros", "DR Congo", "Congo",
            "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
            "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya",
            "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia",
            "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone",
            "Somalia", "South Africa", "South Sudan", "Sudan", "Togo", "Tunisia", "Uganda", "United Republic of Tanzania",
            "Zambia", "Zimbabwe"
        ];
        output.value = afr[rndmCN - 1];
        exchangeNumber();
    } else if (lv.value == "SOUTH") {
        CN = 12;
        exchangeNumber();
        const sth = [
            "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay",
            "Peru", "Suriname", "Uruguay", "Venezuela"
        ];
        output.value = sth[rndmCN - 1];
    } else if (lv.value == "NORTH") {
        CN = 26;
        exchangeNumber();
        const norther = [
            "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba",
            "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras",
            "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia",
            "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States", 
            "United States", "United States"
        ];
        output.value = norther[rndmCN - 1];
        exchangeNumber();
    } else if (lv.value == "OCEANIA") {
        CN = 13;
        exchangeNumber();
        const oce = [
            "Australia", "Tonga", "New Zealand", "Fiji", "Samoa", "Papua New Guinea", "Kiribati",
            "Vanuatu", "Micronesia", "Marshall Islands", "Palau", "Nauru", "Tuvalu"
        ];
        
        output.value = oce[rndmCN - 1];
    } else if (lv.value == "ALL") {
        CN = 197;
        exchangeNumber();
        const evCon = [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
            "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
            "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
            "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
            "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
            "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
            "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
            "China", "Colombia", "Comoros", "DR Congo", "Congo",
            "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
            "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
            "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
            "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
            "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
            "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
            "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
            "India", "Indonesia", "Iran", "Iraq", "Ireland",
            "Israel", "Italy", "Jamaica", "Japan", "Jordan",
            "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea",
            "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
            "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
            "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
            "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
            "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
            "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
            "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
            "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
            "Oman", "Pakistan", "Palau", "Palestine", "Panama",
            "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
            "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
            "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
            "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
            "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
            "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
            "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
            "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
            "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
            "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
            "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Sigma Land",
            "Zambia", "Zimbabwe"
        ];
        if (rndmCN - 1 < 0 || rndmCN - 1 > 196 || evCon[rndmCN - 1] == undefined) {
            if (Math.floor(Math.random() * 3 + 1) == 1) output.value = "AMERIMAA🦅🦅"
            else if (Math.floor(Math.random() * 3 + 1) == 2) output.value = "Turkey 🦃"
            else if (Math.floor(Math.random() * 3 + 1) == 3) output.value = "Zimbabwabwa"
        } else output.value = evCon[rndmCN - 1];
    }
}
CBlocal.addEventListener("click", GenerateCountry);
/*
THIS IS JUST TOO EZ
CODING IS TOO EASY FOR ME BRO
LETS GOOOOOO
(This took like 3 hours)
*/
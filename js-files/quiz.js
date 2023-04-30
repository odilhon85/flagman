    let next;
    let iterator;
   
    let countryArr = {
    "AF": "Afghanistan", 
     "AL": "Albania", 
     "DZ": "Algeria", 
     "AI": "Anguilla", 
     "AO": "Angola", 
     "AO2": "Angola", 
     "AM": "Armenia", 
     "AW": "Aruba", 
     "AT": "Austria", 
     "BH": "Bahrain", 
     "BD": "Bangladesh", 
     "BB": "Barbados", 
     "BY": "Belarus", 
     "BE": "Belgium", 
     "BZ": "Belize", 
     "BJ": "Benin", 
     "BM": "Bermuda", 
     "BT": "Bhutan", 
     "BO": "Bolivia", 
     "BA": "Bosnia and Herzegovina", 
     "BW": "Botswana", 
     "BR": "Brazil", 
     "VG": "British Virgin Islands", 
     "BN": "Brunei Darussalam", 
     "BG": "Bulgaria", 
     "BF": "Burkina Faso", 
     "BI": "Burundi", 
     "KH": "Cambodia", 
     "CM": "Cameroon", 
     "CF": "Central African Republic", 
     "TD": "Chad", 
     "CO": "Colombia", 
     "CR": "Costa Rica", 
     "HR": "Croatia", 
     "CU": "Cuba", 
     "CW": "Curaçao", 
     "CZ": "Czech Republic", 
     "CI": "Côte d'Ivoire", 
     "KP": "Dem. Rep. Korea", 
     "CD": "Democratic Republic of the Congo", 
     "DJ": "Djibouti", 
     "DM": "Dominica", 
     "DO": "Dominican Republic", 
     "EC": "Ecuador", 
     "EG": "Egypt", 
     "SV": "El Salvador", 
     "GQ": "Equatorial Guinea", 
     "ER": "Eritrea", 
     "EE": "Estonia", 
     "ET": "Ethiopia", 
     "FI": "Finland", 
     "GF": "French Guiana", 
     "GA": "Gabon", 
     "GE": "Georgia", 
     "DE": "Germany", 
     "GH": "Ghana", 
     "GL": "Greenland", 
     "GD": "Grenada", 
     "GU": "Guam", 
     "GT": "Guatemala", 
     "GN": "Guinea", 
     "GW": "Guinea-Bissau", 
     "GY": "Guyana", 
     "HT": "Haiti", 
     "HN": "Honduras", 
     "HU": "Hungary", 
     "IS": "Iceland", 
     "IN": "India", 
     "IR": "Iran", 
     "IQ": "Iraq", 
     "IE": "Ireland", 
     "PS1": "Palestine", 
     "JM": "Jamaica", 
     "JO": "Jordan", 
     "KZ": "Kazakhstan", 
     "KE": "Kenya", 
     "XK": "Kosovo", 
     "KW": "Kuwait", 
     "KG": "Kyrgyzstan", 
     "LA": "Lao PDR", 
     "LV": "Latvia", 
     "LB": "Lebanon", 
     "LS": "Lesotho", 
     "LR": "Liberia", 
     "LY": "Libya", 
     "LT": "Lithuania", 
     "LU": "Luxembourg", 
     "MK": "Macedonia", 
     "MG": "Madagascar", 
     "MW": "Malawi", 
     "MV": "Maldives", 
     "ML": "Mali", 
     "MH": "Marshall Islands", 
     "MQ": "Martinique", 
     "MR": "Mauritania", 
     "YT": "Mayotte", 
     "MX": "Mexico", 
     "MD": "Moldova", 
     "MN": "Mongolia", 
     "ME": "Montenegro", 
     "MS": "Montserrat", 
     "MA": "Morocco", 
     "MZ": "Mozambique", 
     "MM": "Myanmar", 
     "NA": "Namibia", 
     "NR": "Nauru", 
     "NP": "Nepal", 
     "NL": "Netherlands", 
     "BQBO": "Netherlands", 
     "NI": "Nicaragua", 
     "NE": "Niger", 
     "NG": "Nigeria", 
     "PK": "Pakistan", 
     "PW": "Palau", 
     "PS": "Palestine", 
     "PA": "Panama", 
     "PY": "Paraguay", 
     "PE": "Peru", 
     "PL": "Poland", 
     "PT": "Portugal", 
     "QA": "Qatar", 
     "CG": "Republic of Congo", 
     "KR": "Republic of Korea", 
     "RE": "Reunion", 
     "RO": "Romania", 
     "RW": "Rwanda", 
     "BQSA": "Saba (Netherlands)", 
     "LC": "Saint Lucia", 
     "VC": "Saint Vincent and the Grenadines", 
     "BL": "Saint-Barthélemy", 
     "MF": "Saint-Martin", 
     "SA": "Saudi Arabia", 
     "SN": "Senegal", 
     "RS": "Serbia", 
     "SL": "Sierra Leone", 
     "SX": "Sint Maarten", 
     "SK": "Slovakia", 
     "SI": "Slovenia", 
     "SO": "Somalia", 
     "ZA": "South Africa", 
     "SS": "South Sudan", 
     "ES": "Spain", 
     "LK": "Sri Lanka", 
     "BQSE": "St. Eustatius (Netherlands)", 
     "SD": "Sudan", 
     "SR": "Suriname", 
     "SZ": "Swaziland", 
     "SE": "Sweden", 
     "CH": "Switzerland", 
     "SY": "Syria", 
     "TW": "Taiwan", 
     "TJ": "Tajikistan", 
     "TZ": "Tanzania", 
     "TH": "Thailand", 
     "GM": "The Gambia", 
     "TL": "Timor-Leste", 
     "TG": "Togo", 
     "TN": "Tunisia", 
     "TM": "Turkmenistan", 
     "TV": "Tuvalu", 
     "UG": "Uganda", 
     "UA": "Ukraine", 
     "AE": "United Arab Emirates", 
     "UY": "Uruguay", 
     "UZ": "Uzbekistan", 
     "VE": "Venezuela", 
     "VN": "Vietnam", 
     "EH": "Western Sahara", 
     "YE": "Yemen", 
     "ZM": "Zambia",
     "RU": "Russian Federation", 
     "RU1": "Russian Federation", 
     "RU2": "Russian Federation", 
     "RU3": "Russian Federation", 
     "RU4": "Russian Federation", 
     "RU5": "Russian Federation", 
     "RU6": "Russian Federation", 
     "RU7": "Russian Federation", 
     "RU8": "Russian Federation", 
     "RU9": "Russian Federation", 

     "US": "United States", 
     "US1": "United States", 
     "US2": "United States", 
     "US3": "United States", 
     "US4": "United States", 
     "US5": "United States", 
     "US6": "United States", 
     "US7": "United States", 
     "US8": "United States", 
     "US9": "United States", 

     "NZ": "New Zealand",
     "NZ1": "New Zealand", 

     "CL": "Chile", 
     "CL1": "Chile", 

     "CN": "China", 
     "CN1": "China", 

     "CAN": "Canada", 
     "CAN1": "Canada", 
     "CAN2": "Canada", 
     "CAN3": "Canada", 
     "CAN4": "Canada", 
     "CAN5": "Canada", 
     "CAN6": "Canada", 
     "CAN7": "Canada", 
     "CAN8": "Canada", 
     "CAN9": "Canada", 
     "CAN10": "Canada", 
     "CAN11": "Canada", 
     "CAN12": "Canada", 
     "CAN13": "Canada", 
     "CAN14": "Canada", 
     "CAN15": "Canada", 
     "CAN16": "Canada", 
     "CAN17": "Canada",
     "CAN18": "Canada", 
     "CAN19": "Canada", 
     "CAN20": "Canada",
     "CAN21": "Canada", 
     "CAN22": "Canada", 
     "CAN23": "Canada", 
     "CAN24": "Canada", 
     "CAN25": "Canada", 
     "CAN26": "Canada", 
     "CAN27": "Canada",
     "CAN28": "Canada", 
     "CAN29": "Canada",

     "JP": "Japan",
     "JP1": "Japan",
     "JP2": "Japan",

     "PHIL": "Philippines", 
     "PHIL1": "Philippines", 
     "PHIL2": "Philippines", 
     "PHIL3": "Philippines", 
     "PHIL4": "Philippines", 
     "PHIL5": "Philippines", 
     "PHIL6": "Philippines", 

     "ITA": "Italy", 
     "ITA1": "Italy", 
     "ITA2": "Italy",

     "TR": "Turkey",
     "TR1": "Turkey",

     "GR": "Greece",
     "GR1": "Greece",

     "OMAN": "Oman",
     "OMAN1": "Oman",

     "AZER": "Azerbaijan",
     "AZER1": "Azerbaijan",

     "AR": "Argentina", 
     "AR1": "Argentina",

     "ID": "Indonesia",
     "ID1": "Indonesia",
     "ID2": "Indonesia",
     "ID3": "Indonesia",
     "ID4": "Indonesia",
     "ID5": "Indonesia",
     "ID6": "Indonesia",
     "ID7": "Indonesia",
     "ID8": "Indonesia",
     "ID9": "Indonesia",
     "ID10": "Indonesia",
     "ID11": "Indonesia",
     "ID12": "Indonesia",

     "PG": "Papua New Guinea",
     "PG1": "Papua New Guinea",
     "PG2": "Papua New Guinea",
     "PG3": "Papua New Guinea",

     "NOR": "Norway",
     "NOR1": "Norway",
     "NOR2": "Norway",
     "NOR3": "Norway",

     "DK": "Denmark",
     "DK1": "Denmark",

     "GB": "United Kingdom",
     "GB1": "United Kingdom",

     "AUS": "Australia", 
     "AUS2": "Australia", 
     "FR": "France", 
     "FR1": "France", 
     "ZW": "Zimbabwe"
    }
       
    getKeysAndShuffle();
    setNextSvgImage()
    markCountry(next.value, "red")
       
    document.getElementById("btn").addEventListener("click", ()=>{
       let enteredData = document.getElementById("entered-data").value

            if(enteredData){
                if(enteredData.toLowerCase() === countryArr[next.value].toLowerCase()){
                    if(!next.done){
                        markCountry(next.value, "green")
                        next = iterator.next()
                        setNextSvgImage()
                    }else{
                        alert("Ro'yxat tugadi. Yana boshidan boshlaniladi.")
                    }
                    setDefault()  
                    markCountry(next.value, "red")             
                }else{
                    alert("Yana bir bor urinib ko'ring")
                    setDefault()
                }
            }else{
                alert("Malumotni to'g'ri kiriting")
            }
    })
       
       



    function nameWithoutNumber(name){
        return name.substring(0,2)
    }

    function setNextSvgImage(){        
        document.getElementById("flag-image").src = `assets/flags/${nameWithoutNumber(next.value)}.svg`
    }

    function getKeysAndShuffle(){
        let keyArray = Object.keys(countryArr);
        keyArray.sort(() => Math.random() - 0.5);
 
        iterator = keyArray.values();
        next = iterator.next();
    }

    function setDefault(){
        document.getElementById("entered-data").value = ""
    }

    function markCountry(country, color){
        let parent = document.querySelector("svg");
        let child = parent.getElementById(`${country}`);
        child.setAttribute("fill",`${color}`);
    }
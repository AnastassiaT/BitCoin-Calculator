const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    let url = "https://restcountries.eu/rest/v2/name/estonia?fullText=true";

    axios.get(url).
    then((response)=>{
        let EstoniaName = response.data[0].name;
        let EstoniaCapital = response.data[0].callingCodes[0].capital;
        let EstoniaTimazone = response.data[0].timezones;
        let Currency = response.data[0].currencies[0].name;
        let Regional = response.data[0].regionalBlocs[0].acronym;

        res.write(`<p> Name - ${EstoniaName}</p>`);
        res.write(`<p> Capital - ${EstoniaCapital}</p>`);
        res.write(`<p> Timezone - ${EstoniaTimazone}</p>`);
        res.write(`<p> Currency - ${Currency}</p>`);
        res.write(`<p> Regional - ${Regional}</p>`);
        res.send();
    }).
        catch((error) => {
            console.log(error);
    });
});

/*app.get('/', function(req, res){

    let url = "https://api.coindesk.com/v1/bpi/currentprice/eur.json";
    
    axios.get(url).
    then((response)=> {
        let disclaimer = response.data.disclaimer;
        let eurRates = response.data.bpi.EUR.rate;
        let eurCode = response.data.bpi.EUR.code;
        let usdRates = response.data.bpi.USD.rate;
        let usdCode = response.data.bpi.USD.code;

        res.write(`<p>1 BitCoin in EUR - ${eurRates} ${eurCode} </p>`);
        res.write(`<p>1 BitCoin in USD - ${usdRates} ${usdCode} </p>`);
        res.write(`<p>Disclaimer - ${disclaimer}</p>`);
        res.send();
    }).
    catch((error) => {
        console.log(error);
    });




    //response.send('<h1>Hello, World!</h1>');
    //console.log(__dirname);
    //response.sendFile(__dirname+"/index.html");
});*/



/*app.post('/', function(req, res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
   // console.log("Number 1", number1);
   // console.log("Number 2", number2);
    let result = number1 + number2;
    console.log(req.body);
    res.send(`${result}`);
});*/

app.listen(3000, function(){
    console.log('Server is running on Port 3000')
});
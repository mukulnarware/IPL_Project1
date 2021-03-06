// Express Imports







const express= require("express")
const app= express();
const port= 80;
// app.get("/",(req,res)=> {
//   res.send({ mukul : 51});
// })

app.use(express.static("public"))
 app.get('/give', (req, res) => {
 //res.send(req.query.YEAR);
  //res.sendFile(__dirname+"/data3.json");
  const year=req.query.YEAR

var a = {};
  for (let x in myData) {
    a[x]=myData[x];
  
  }
  
  const seriesData = [];
  for (let name in a[year]) {
    seriesData.push([name,a[year][name]]);
  }
  

  res.send(seriesData)
 return 	

 });

 
app.listen(port);







const myData=
{
    
        "2008": {
            "TM Dilshan": 3,
            "DJ Thornely": 5.454545454545455,
            "BAW Mendis": 6,
            "Sohail Tanvir": 6.226415094339623,
            "RG Sharma": 6.239999999999999,
            "DW Steyn": 6.437246963562753,
            "IK Pathan": 6.446428571428571,
            "AB Dinda": 6.514285714285714,
            "SC Ganguly": 6.545454545454545,
            "SM Pollock": 6.578571428571429
        },
        "2009": {
            "R Ashwin": 3.5,
            "CK Langeveldt": 3.5999999999999996,
            "RS Bopara": 3.75,
            "AM Rahane": 5,
            "B Lee": 5.097744360902255,
            "LA Carseldine": 5.142857142857142,
            "M Muralitharan": 5.269736842105264,
            "JP Duminy": 5.3831775700934585,
            "M Morkel": 5.454545454545455,
            "A Singh": 5.607476635514019
        },
        "2010": {
            "V Sehwag": 4.0588235294117645,
            "ND Doshi": 4.08,
            "AJ Finch": 4.285714285714286,
            "RE van der Merwe": 6,
            "B Akhil": 6,
            "R Ashwin": 6.222222222222222,
            "AB Dinda": 6.458333333333333,
            "DP Nannes": 6.46788990825688,
            "A Kumble": 6.508997429305913,
            "DW Steyn": 6.518324607329843
        },
        "2011": {
            "S Rana": 3,
            "JP Faulkner": 5,
            "SS Mundhe": 5.142857142857142,
            "R Sharma": 5.523178807947019,
            "SL Malinga": 5.9395465994962215,
            "AG Murtaza": 6,
            "AJ Finch": 6,
            "M Manhas": 6,
            "RN ten Doeschate": 6,
            "S Dhawan": 6
        },
        "2012": {
            "L Balaji": 5.365079365079365,
            "AG Murtaza": 5.5,
            "SP Narine": 5.579831932773109,
            "SW Tait": 5.885350318471337,
            "RE van der Merwe": 5.901639344262295,
            "LR Shukla": 6,
            "DW Steyn": 6.02076124567474,
            "SL Malinga": 6.068376068376068,
            "WD Parnell": 6.138461538461538,
            "AB McDonald": 6.19672131147541
        },
        "2013": {
            "AC Gilchrist": 0,
            "BJ Hodge": 3,
            "RG Sharma": 4,
            "RV Gomez": 5,
            "Anand Rajan": 5.0588235294117645,
            "Bipul Sharma": 5.25,
            "SP Narine": 5.4728682170542635,
            "DW Steyn": 5.788235294117648,
            "Parvez Rasool": 5.8,
            "VS Malik": 5.803278688524591
        },
        "2014": {
            "Ankit Sharma": 5.5,
            "R Rampaul": 6,
            "NM Coulter-Nile": 6.230769230769231,
            "AR Patel": 6.312655086848634,
            "R Tewatia": 6.4363636363636365,
            "Harbhajan Singh": 6.517857142857143,
            "SL Malinga": 6.592592592592593,
            "SP Narine": 6.612244897959184,
            "Shakib Al Hasan": 6.625407166123779,
            "B Kumar": 6.6422018348623855
        },
        "2015": {
            "RN ten Doeschate": 3.4285714285714284,
            "J Yadav": 4.142857142857143,
            "V Kohli": 5.454545454545455,
            "R Ashwin": 5.725,
            "S Nadeem": 5.863636363636364,
            "Z Khan": 6.15483870967742,
            "Parvez Rasool": 6.2,
            "MC Henriques": 6.2675159235668785,
            "MA Starc": 6.75,
            "M de Lange": 6.923076923076923
        },
        "2016": {
            "N Rana": 3,
            "Sachin Baby": 4.8,
            "MR Marsh": 4.909090909090909,
            "YK Pathan": 5.210526315789474,
            "JW Hastings": 5.285714285714286,
            "CH Gayle": 6,
            "S Gopal": 6.333333333333333,
            "Mustafizur Rahman": 6.8138297872340425,
            "A Zampa": 6.815533980582524,
            "R Vinay Kumar": 6.842105263157895
        },
        "2017": {
            "NB Singh": 4.319999999999999,
            "Mohammad Nabi": 5.363636363636363,
            "R Tewatia": 5.563636363636364,
            "Avesh Khan": 6,
            "P Negi": 6.06,
            "Washington Sundar": 6.230769230769231,
            "S Nadeem": 6.490909090909091,
            "Harbhajan Singh": 6.534412955465587,
            "GJ Maxwell": 6.57391304347826,
            "LH Ferguson": 6.620689655172414
        },
        "2018": {
            "I Sodhi": 6,
            "L Ngidi": 6.441717791411043,
            "Rashid Khan": 6.963503649635037,
            "YK Pathan": 7,
            "N Rana": 7.105263157894737,
            "M Ur Rahman": 7.133858267716535,
            "A Mishra": 7.194690265486726,
            "KH Pandya": 7.219512195121951,
            "DL Chahar": 7.330645161290322,
            "JJ Bumrah": 7.333333333333333
        },
        "2019": {
            "S Dube": 4.909090909090909,
            "A Roy": 5.6,
            "SK Raina": 6,
            "STR Binny": 6.272727272727273,
            "RA Jadeja": 6.4924012158054705,
            "R Tewatia": 6.615384615384615,
            "RD Chahar": 6.627177700348431,
            "Rashid Khan": 6.735694822888283,
            "M Ali": 6.75,
            "A Mishra": 6.765432098765432
        }
    
}
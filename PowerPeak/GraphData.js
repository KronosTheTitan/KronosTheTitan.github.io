const graphTypes = ["bar","pie","bar","line"];

let data = [
    [   //consumption rates
        [1,0,1,1,3,4,6,5,4,4,5,6,5,4,4,4,5,7,10,8,6,4,2,1,1], //hourly consumption
        [5,5,5,5,5,7,7], //daily consumption
        [1,2,3,4,5,6,7,8,9,10,11,12], // monthly consumption
        [1,2,3,4,5]
    ],
    [   //per person consumption
        [1,2,3,4],
        [4,3,2,1],
        [1,2,3,4],
        [1,2,3,4]
    ],
    [   //Solar Panel Yield
        [0,0,0,0,0,0,1,3,4,6,8,11,10,7,6,3,1,0,0],
        [60,51,70,43,51,59,60],
        [60,50,56,90,120,146,160,203,180,167,99,63],
        [420,6700,8000,7900,6800,7800]
    ],
    [   //Savings compared to last year
        [1,2,3,4],
        [4,3,2,1],
        [1,2,3,4],
        [1,2,3,4]
    ]
]
const timeSpans = [
    ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","22:00","23:00"],
    ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    ["January","February","March","April","May","June","July","August","September","October","November", "December"],
    ["2019","2020","2021","2022","2023","2024"]
];

const GraphNames = [
    "Total Consumption (in KwH)",
    "Individual Consumption (in KwH)",
    "Solar Panel Yield (in KwH)",
    "Savings Compared To Previous Year (in KwH)",
]

const blue = "#4285f4";
const red = "#ea4335";
const yellow = "#fbbc05";
const green = "#34a853";
const barColors = [blue,[blue,red,yellow,green],blue,blue];
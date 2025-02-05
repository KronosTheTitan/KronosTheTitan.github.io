let graphState = 0;
let graphTimeFrame = 0;

let chart;

function main(){
    createGraph()
}

function updateGraph(){

    let labels = timeSpans[graphTimeFrame];

    if(graphState === 1){
        labels = ["Caroline", "Dilan", "Frans", "Rob"];
    }

    chart.destroy();

    chart = new Chart("Graph", {
        type: graphTypes[graphState],
        data: {
            labels: labels,
            datasets: [{
                data: data[graphState][graphTimeFrame],
                backgroundColor: barColors[graphState],
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: GraphNames[graphState]
            }
        }
    });
}

function createGraph(){
    chart = new Chart("Graph", {
        type: graphTypes[graphState],
        data: {
            labels: timeSpans[graphTimeFrame],
            datasets: [{
                data: data[graphState][graphTimeFrame],
                backgroundColor: barColors[graphState],
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: "Graph"
            }
        }
    });
}

function SetTimeframe(newTimeFrame){
    graphTimeFrame = newTimeFrame;

    document.getElementById("Time3").classList.add("UnSelected")
    document.getElementById("Time3").classList.remove("Selected")

    document.getElementById("Time2").classList.add("UnSelected")
    document.getElementById("Time2").classList.remove("Selected")

    document.getElementById("Time1").classList.add("UnSelected")
    document.getElementById("Time1").classList.remove("Selected")

    document.getElementById("Time0").classList.add("UnSelected")
    document.getElementById("Time0").classList.remove("Selected")

    document.getElementById("Time" + newTimeFrame).classList.add("Selected")
    document.getElementById("Time" + newTimeFrame).classList.remove("UnSelected")

    updateGraph();

    console.log(newTimeFrame);
}

function setGraphState(newGraphState){
    graphState = newGraphState;

    document.getElementById("State3").classList.add("UnSelected")
    document.getElementById("State3").classList.remove("Selected")

    document.getElementById("State2").classList.add("UnSelected")
    document.getElementById("State2").classList.remove("Selected")

    document.getElementById("State1").classList.add("UnSelected")
    document.getElementById("State1").classList.remove("Selected")

    document.getElementById("State0").classList.add("UnSelected")
    document.getElementById("State0").classList.remove("Selected")

    document.getElementById("State" + newGraphState).classList.add("Selected")
    document.getElementById("State" + newGraphState).classList.remove("UnSelected")

    updateGraph();
}
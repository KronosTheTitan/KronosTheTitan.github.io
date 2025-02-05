let charts = []
let timeFrames = [0,0,0,0];

const timeFrameNames = ["Hour","Day","Month","Year"]

function main(){
    createCharts()
}

function createCharts(){
    for (let targetGraph = 0; targetGraph < 4; targetGraph++) {
        let labels = timeSpans[timeFrames[targetGraph]];

        if(targetGraph === 1){
            labels = ["Caroline", "Dilan", "Frans", "Rob"];
        }

        charts[targetGraph] = new Chart("graph" + targetGraph, {
            type: graphTypes[targetGraph],
            data: {
                labels: labels,
                datasets: [{
                    data: data[targetGraph][timeFrames[targetGraph]],
                    backgroundColor: barColors[targetGraph],
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: GraphNames[targetGraph]
                }
            }
        });
    }
}

function updateGraph(targetGraph){
    let labels = timeSpans[timeFrames[targetGraph]];

    if(targetGraph === 1){
        labels = ["Caroline", "Dilan", "Frans", "Rob"];
    }

    charts[targetGraph].destroy();

    charts[targetGraph] = new Chart("graph" + targetGraph, {
        type: graphTypes[targetGraph],
        data: {
            labels: labels,
            datasets: [{
                data: data[targetGraph][timeFrames[targetGraph]],
                backgroundColor: barColors[targetGraph],
            }]
        },
        options: {
            legend: {display: false},
            title: {
                display: true,
                text: GraphNames[targetGraph]
            }
        }
    });
}

function changeTimeFrame(newTimeFrame, targetGraph){

    timeFrames[targetGraph] = newTimeFrame;

    document.getElementById("button"+targetGraph).textContent = timeFrameNames[newTimeFrame];

    updateGraph(targetGraph);
}
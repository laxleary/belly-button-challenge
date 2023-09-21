//Store the API endpoint as query
let query = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


//Perform a GET request to the query URL
d3.json(query).then(function (data){
    console.log(data);

    //Prepare Test Subject "940" data
    let subject1 = [data.samples[0].sample_values, data.samples[0].otu_ids, data.samples[0].otu_labels];
    //Create the default bar chart for Test Subject "940"
    let chartData = [{
        x: subject1[0].slice(0,10).reverse(),
        y: subject1[1].slice(0,10).map(item => `OTU ${item}`).reverse(),
        text: subject1[2].slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
    }];

    let layout = {
        height: 700, 
        width: 500,
        margin: {
            l: 60,
            r: 90,
            t: 10,
            b: 30
        }
    }
    Plotly.newPlot("bar", chartData, layout);

    //Create the default bubble chart for Test Subject "940"
    let info = data.samples[0]
    let bubbleData = [{
        x: subject1[1],
        y: subject1[0],
        type: "scatter",
        mode: "markers",
        marker: {
            size:subject1[0],
            color:subject1[1]},
        text: subject1[2]
    }];

    let layout2 = {
        height: 400, 
        width: 1200,
        xaxis: {title: "OTU ID"},
        margin: {
            l: 60,
            r: 90,
            t: 10,
            b: 30
        }
       
    }

    Plotly.newPlot("bubble", bubbleData, layout2);

    //Make the original demographics Table
    d3.select("#sample-metadata").text("ID: " +info.id);
    d3.select("#sample-metadata").append("text").html("<br> <b>Ethnicity:</b> " + info.ethnicity + 
        "<br> <b>Age:</b> " +info.age+ "<br> <b>Gender:</b> " + info.gender + "<br><b> Location:</b> " + 
        info.location + "<br> <b> Button Type: </b> "+  info.bbtype + "<br> <b>Wash Frequency:</b> " + info.wfreq);
    

    //Create drop-down menu options
    for (let i = 0; i <= data.names.length; i++){
        let option =d3.select("#selDataset").append("option");
        option.text(data.names[i])
    };

    //Get a reference to the drop-down menu for selections
    d3.selectAll("#selDataset").on("change", updatePlotly);

    //Define what should happen when a selection on the drop-down is made
    function updatePlotly() {
        let dropdown = d3.select("#selDataset");
        let datafinder = dropdown.property("value");

        //Identify the relevant data for the selection
        let dataset = Object
        for (let i = 0; i < data.samples.length; i ++){
            if (data.samples[i].id==datafinder){
                dataset = data.samples[i]
        }};
        let info = Object
        for (let i = 0; i < data.samples.length; i ++){
            if (data.metadata[i].id==datafinder){
                info = data.metadata[i]
        }};
        console.log(info)

        //Change the bar chart
        let values = dataset.sample_values.slice(0,10).reverse()
        let labels = dataset.otu_ids.slice(0.10).map(item => `OTU ${item}`).reverse()
        let hoverText = dataset.otu_labels.slice(0,10).reverse()

        Plotly.restyle("bar", "x", [values]);
        Plotly.restyle("bar", "y", [labels]);
        Plotly.restyle("bar", "text", [hoverText]);

        //Change the demographics
        d3.select("#sample-metadata").text("ID: " +info.id);
        d3.select("#sample-metadata").append("text").html("<br> <b>Ethnicity:</b> " + info.ethnicity + 
            "<br> <b>Age:</b> " +info.age+ "<br> <b>Gender:</b> " + info.gender + "<br><b> Location:</b> " + 
            info.location + "<br> <b> Button Type: </b> "+  info.bbtype + "<br> <b>Wash Frequency:</b> " + info.wfreq);

        };
});






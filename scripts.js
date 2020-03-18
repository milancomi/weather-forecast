// Data

const weatherData = {
    tempUnit: "C",
    windSpeedUnit: "m/s",
    days: [
    { day: "Mon", temp: 22, windDirection: "north-east", windSpeed: 10 , type:"sunny" },
    { day: "Tue", temp: 14, windDirection: "north-west", windSpeed: 14, type: "rainy" },
    { day: "Wed", temp: 17, windDirection: "south-east", windSpeed: 13, type: "cloudy" },
    { day: "Thu", temp: 15, windDirection: "south-east", windSpeed: 12, type: "cloudy" },
    { day: "Fri", temp: 23, windDirection: "north-east", windSpeed: 14, type: "sunny" },
    { day: "Sat", temp: 18, windDirection: "north-west", windSpeed: 13, type: "sunny" },
    { day: "Sun", temp: 28, windDirection: "north-east", windSpeed: 22, type: "rainy" }


    
    ]
}

// Widget functionality show/hide
const toggleClass = (id) => {
    console.log(id)
    let element = document.getElementById(`hidden-${id}`);
    console.log(element);
    if (element.className) {
        element.className = ''
       let btn = document.getElementById(id);
       btn.innerText = "show less";
    } else {
        element.className = 'hidden'
        let btn = document.getElementById(id);
        btn.innerText = "show advanced";
    }
}

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;

}

const convertTemp = (id,celsius)=>{
    let element = document.getElementById(`temperature-${id}`);
    
    let fahrenheit = cToF(celsius);
   
    element.innerHTML = "Average temperature is: <b>" + fahrenheit + " °F</b>";
    
}

// Function for render data from collection

function fillDate(){

    var arrayLength = weatherData.days.length;

    for ( i= 0; i< arrayLength; i++)
    {
        data= document.createElement('div');
        data.className='card';
        data.id = 'card-'+ i;

        // Main Data in card
        mainData = document.createElement('div');
        mainData.className=weatherData.days[i].type;

        dataDay = document.createElement('div');
        dataDay.className='day';
        dataDay.innerHTML = weatherData.days[i].day;

        dataTemp = document.createElement('div');
        dataTemp.className='temperature';
        dataTemp.id = 'temperature-'+i;
        dataTemp.innerHTML = "Average temperature is:<b> " + weatherData.days[i].temp +" °" + weatherData.tempUnit+"</b>";
        
        dataType = document.createElement('div');
        dataType.className="day-type";
        dataType.innerHTML = weatherData.days[i].type;

        //Divider 
        divider = document.createElement('hr');
        divider2 = document.createElement('hr');
        divider2.className= "divider2";
        divider.className= "divider";

        // HIDDEN ELEMENTS in card
        hiddenData = document.createElement('div');
        hiddenData.className = 'hidden';
        hiddenData.id = `hidden-${i}`;

        dataWindDirection= document.createElement('div');
        dataWindDirection.className='wind_direction';
        dataWindDirection.innerHTML = "Wind direction: "+ weatherData.days[i].windDirection;

       dataWindSpeed = document.createElement('div');
       dataWindSpeed.className='wind_speed';
       dataWindSpeed.innerHTML = "Wind speed: " + weatherData.days[i].windSpeed + " " +weatherData.windSpeedUnit;

       dataWindImage= document.createElement('div');
       dataWindImage.className = weatherData.days[i].windDirection;


       // Show/Hide Button in card
       btnShow = document.createElement('button');
       btnShow.type = "button";
       btnShow.id = i;
       btnShow.className='showBtn';
       btnShow.innerHTML = 'show advanced';
       btnShow.onclick = (i) => toggleClass(i.target.id);


       // convert Celsius/Farenh button
       btnConvert = document.createElement('button');
       btnConvert.type="button";
       btnConvert.id = i;
       btnConvert.className="convertTempBtn";
       btnConvert.innerHTML = '°C to °F';
       celsius = weatherData.days[i].temp;
       btnConvert.onclick = (i) =>convertTemp(i.target.id,celsius);

       // Merge 
        mainData.appendChild(dataDay);
        mainData.appendChild(dataType);
        mainData.appendChild(dataTemp);

        hiddenData.appendChild(divider2);
        hiddenData.appendChild(dataWindDirection);
        hiddenData.appendChild(dataWindSpeed);
        hiddenData.appendChild(dataWindImage);


        data.appendChild(mainData);
        data.appendChild(hiddenData);
        data.appendChild(divider);
        data.appendChild(btnShow);
        data.appendChild(btnConvert);

        document.getElementById('data-container').appendChild(data);
    }

}




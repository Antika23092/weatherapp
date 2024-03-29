async function fetchData(){
    let city = document.getElementById('cityName').value;
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70d08f3576e2d00fff5c80037678b233&units=metric);`);
    const jsonData = await weatherData.json();
    document.getElementById('temp').innerHTML = jsonData.main.temp;
    document.getElementById('humid').innerHTML = jsonData.main.humidity;
    document.getElementById('ws').innerHTML = jsonData.wind.speed;
    document.getElementById('feels_like').innerHTML = jsonData.main.feels_like;
    document.getElementById('cityName').value = '';
    let newNum = Number(jsonData.main.temp);
    if(newNum>15){
        document.getElementById('new_img').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXDiDtwm_fK1V-p54ctnUqE6qsnYxBUDp098IN9Hfkw&s'
    }
    else{
        document.getElementById('new_img').src = 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000'
    }

}
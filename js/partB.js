let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A7ABC55A-F46A-4AF2-96FD-45F5451A579B";
fetch(url).then((res)=>res.json()).then((data)=>{
    let locationData = data["records"]["location"];
    let locations = document.querySelector(".locations");
    for(let i=0;i<locationData.length;i++){
        //景點名稱
        let locationBar = document.createElement("div");
        locationBar.className = "location_bar";
        mouse(locationBar);
        locationBar.addEventListener("click",Tw_area);
        locationBar.textContent = locationData[i]["locationName"];
        if(i == 0){
            locationBar.style.borderTopLeftRadius = "2.5em";
        }
        locations.append(locationBar);
        //時段
        let weatherElement = locationData[i]["weatherElement"];
        let start0 = document.querySelector(".start0");
        let end0 = document.getElementById("end0");
        let start1 = document.querySelector(".start1");
        let end1 = document.getElementById("end1");
        let start2 = document.querySelector(".start2");
        let end2 = document.getElementById("end2");
        start0.textContent = weatherElement[0]["time"][0]["startTime"];
        end0.textContent = weatherElement[0]["time"][0]["endTime"];
        start1.textContent = weatherElement[0]["time"][1]["startTime"];
        end1.textContent = weatherElement[0]["time"][1]["endTime"];
        start2.textContent = weatherElement[0]["time"][2]["startTime"];
        end2.textContent = weatherElement[0]["time"][2]["endTime"];
        let time0 = document.getElementById("time0");
        let time1 = document.getElementById("time1");
        let time2 = document.getElementById("time2");
        time0.addEventListener("click",Tw_area);
        time1.addEventListener("click",Tw_area);
        time2.addEventListener("click",Tw_area);
        mouse(time0);
        mouse(time1);
        mouse(time2);
    };
    console.log(data);
});
function Tw_area(){
    alert("yo");
};
function mouse(p){
    p.addEventListener("mouseover",()=>{
        p.style.background = "darkblue";
    });
    p.addEventListener("mouseout",()=>{
        p.style.background = "linear-gradient(rgb(46, 141, 133),rgba(37, 43, 117, 0.685))";
    });
}

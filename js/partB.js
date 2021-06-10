let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A7ABC55A-F46A-4AF2-96FD-45F5451A579B";
fetch(url).then((res)=>res.json()).then((data)=>{
    let locationData = data["records"]["location"];
    let locations = document.querySelector(".locations");
    for(let i=0;i<locationData.length;i++){
        //景點名稱
        let locationBar = document.createElement("div");
        locationBar.className = "location_bar";
        locationBar.id = "location"+i;
        locationClick(locationBar);
        
        locationBar.textContent = locationData[i]["locationName"];
        locationBar.addEventListener("click",function(){ Tw_area(locationBar.textContent, ""); });
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
        time0.addEventListener("click",function(){ Tw_area("", start0.textContent); });
        time1.addEventListener("click",function(){ Tw_area("", start1.textContent); });
        time2.addEventListener("click",function(){ Tw_area("", start2.textContent); });
        locationClick(time0);
        locationClick(time1);
        locationClick(time2);
        //顯示對應欄位
        let wxIcon = document.querySelector(".wxIcon");
        let wx = document.querySelector(".wx");
        let min = document.querySelector(".min");
        let max = document.querySelector(".max");
        let CI = document.querySelector(".CI");
        let PoP = document.querySelector(".PoP");
        wx.textContent = locationData[5].weatherElement[0].time[0].parameter.parameterName;
        wxIcon.setAttribute("src","image/icon/"+ wx.textContent+".png");
        min.textContent = locationData[5].weatherElement[2].time[0].parameter.parameterName + "°c ~";
        max.textContent = locationData[5].weatherElement[4].time[0].parameter.parameterName + "°c ";
        CI.textContent = locationData[5].weatherElement[3].time[0].parameter.parameterName;
        PoP.textContent = locationData[5].weatherElement[1].time[0].parameter.parameterName+ " %";
    };
    Tw_area(NewArea, "");//顯示預設圖
    Tw_area("",time);//時段
    
    console.log(data);
});
function locationClick(p){
    p.addEventListener("click",()=>{
        p.style.background = "darkblue";
    });
}

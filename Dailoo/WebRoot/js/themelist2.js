/**
 * Created by Waiting on 2017/10/7.
 */
//取得地區ID
var regionId = $('#regionId').val();

window.onload = function () {

    $.get("footer.html",function(data){
        $("#footer").html(data);
        if (regionId == "61ae4ab6-ed11-4131-85e2-9f2be7651e65") { //如果是金峰鄉地區
            changeCss("jinfeng");
        } else if(regionId == "fa179ec9-a754-45a2-8dc2-96b837594a6d"){ //如果是成功鎮''主題
            changeCss("none");
        } else if(regionId == "e031f31d-7f41-4380-b1fc-ed156a0bd96e"){ //如果是台東市主題
            changeCss("taitong");
        }
    });
}

history.replaceState(null, null, location.href);

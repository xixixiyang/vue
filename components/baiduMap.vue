<template>
<div id="box">
<div id="allmap" ></div>
<p>在地图上添加全景控件，点击全景控件进入全景图</p>
</div>
</template>
<script>
 export default{
      mounted(){
    var map = new BMap.Map('allmap');
    map.centerAndZoom("广州", 12);
    map.enableScrollWheelZoom(true);

    map.addTileLayer(new BMap.PanoramaCoverageLayer());

    var stCtrl = new BMap.PanoramaControl(); 
    stCtrl.setOffset(new BMap.Size(20, 20));
    map.addControl(stCtrl); 
      }
 }
</script>
<style>
            body,
            html{
                width: 100%;
                height: 100%;
                margin: 0;
                font-family: "微软雅黑";
            }
            
            #allmap,
            #box {
                width: 100%;
                height: 100%;
            }
            
            p {
                margin-left: 5px;
                font-size: 14px;
            }
</style>
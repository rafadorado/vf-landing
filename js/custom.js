var VF = {};
VF.N_SECTIONS = 4;

VF.loadProgress = function(scrollPosition,idElement){
    var wh = VF.getWidthAndHeight();
    var cp = ((scrollPosition * 100) / wh.height) / VF.N_SECTIONS;
    var currentProgress = Math.round(cp);
    var progress = document.getElementById(idElement);
    progress.setAttribute('value',currentProgress);
}

VF.getWidthAndHeight = function(){
    w=window,
    d=document,
    e=d.documentElement,
    g=d.getElementsByTagName('body')[0],
    x=w.innerWidth||e.clientWidth||g.clientWidth,
    y=w.innerHeight||e.clientHeight||g.clientHeight;
    return {
        width: x,
        height: y,
    }
}
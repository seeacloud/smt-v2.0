/**
 * Created by alex on 10/19/16.
 */



var wid=document.body.scrollWidth;
console.log('wid is:',wid);

var panelAry=document.querySelectorAll('.panel');

for(var i=0;i<panelAry.length;i++)
{
    panelAry[i].style.width=(wid-100-4)/2+'px';
}

window.onresize=function () {
    var wid=document.body.scrollWidth;
    for(var i=0;i<panelAry.length;i++)
    {
        panelAry[i].style.width=(wid-100-4)/2+'px';
    }

}


// 显示隐藏 设置弹出菜单

var setBtn=document.querySelector('#setting-btn');
var settingPopMenu=document.querySelector('#setting-popup');

var oUl=document.querySelector('#setting-popup ul');
console.log('oUl is:',oUl);




var bOnUl=false;

oUl.addEventListener('mouseover',function () {
    bOnUl=true;
});
setBtn.addEventListener('mouseover',function () {

    settingPopMenu.style.display='block';

});


settingPopMenu.addEventListener('mouseout',function () {

    var e=event || window.event;
    console.log(e.target.tagName);
    // this.style.display='none';
    if(e.target.tagName=='DIV' & bOnUl)
    {
        settingPopMenu.style.display='none';
        bOnUl=false;
    }

});


//
// var clientPopup=document.querySelector('#clientPopup');
//
// var clientMoreBtn=document.querySelector('#clientMoreBtn');
//
// var closeBtn=document.querySelector('.close-btn');
//
// clientMoreBtn.addEventListener('click',function () {
//     clientPopup.style.display='block';
//
// })
//
// closeBtn.addEventListener('click',function () {
//     clientPopup.style.display='none';
//
// })


// message 弹出层



//高级搜索框显示与隐藏















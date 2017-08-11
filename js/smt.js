/**
 * Created by alex on 10/19/16.
 */






window.onload=function () {
    setAllSize();
};
window.onresize=function () {
    console.log('win-resize');
    setAllSize();

};

function setAllSize() {

    var wh=document.body.scrollHeight-3;
    var ww=document.body.scrollWidth;
    console.log(wh);


    var oMenu=document.querySelector('.leftside');
    oMenu.style.height=wh+'px';

    var o_iframe=document.querySelector('iframe');
    o_iframe.style.height=wh+'px';


    var oiframeWrap=document.querySelector('.iframeWrap');
    oiframeWrap.style.height=wh+'px';

    var iwid=oiframeWrap.style.width;


}


var mainMenuAry=document.querySelectorAll('.leftside .menubtn');
console.log(mainMenuAry);

var subMenuAry=document.querySelectorAll('.sub-menu');

for(var i=0;i<subMenuAry.length;i++)
{
    subMenuAry[i].addEventListener('click',function () {
        this.style.display='none';

    });

    subMenuAry[i].addEventListener('mouseout',function () {

        var e=event || window.event;
        if(e.target.tagName=='DIV')
        {
            e.target.style.display='none';
        }

    });

    subMenuAry[i].style.top=i*94+101+'px';
}



var currentID='';

for(var i=0;i<mainMenuAry.length;i++)
{
    mainMenuAry[i].addEventListener('mouseover',function () {
        var e=event || window.event;
        if(e.target.tagName=="I")
        {
            console.log('undefined:',e.target.parentNode.id);
            currentID=e.target.parentNode.id
        }else
        {
            console.log(e.target.id);
            currentID=e.target.id;
        }

        showSubmenu(currentID);
    });
}

function showSubmenu(id) {


    for(var i=0;i<subMenuAry.length;i++)
    {
        subMenuAry[i].style.display='none';
    }
    var sub=document.querySelector('#'+id.replace('m-',''));
    sub.style.display='block';

}
var oiframe=document.querySelector('iframe');

oiframe.addEventListener('mouseover',function () {
    console.log('mouse on iframe');

    for(var i=0;i<subMenuAry.length;i++)
    {
        subMenuAry[i].style.display='none';
    }

})





// subMenu.addEventListener('mouseout',function () {
//
//     var e=event || window.event;
//     console.log('tag name is:',e.target.tagName);
//     if(e.target.tagName=='DIV')
//     {
//         this.style.display='none';
//
//     }
//
// });


// mainMenuAry[0].addEventListener('mouseover',function () {
//     console.log('mo');
//     subMenu.style.display='block';
//
// });





















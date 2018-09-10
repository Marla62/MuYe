function banner_lr(imgs,btns,banner,second="2000"){

    let num = 0;
    let t = setInterval(move,second);
    let i =0;
    console.log(imgs,btns,banner);
    btns[0].classList.add("action");
    imgs[0].style.zIndex=2;
    for (let i=0;i<imgs.length;i++){
        btns[i].onmouseover = function () {
            for (let j=0;j<imgs.length;j++){
                btns[j].classList.remove("action");
                imgs[j].style.zIndex=1;
            }
            btns[i].classList.add("action");
            imgs[i].style.zIndex=2;
            num = i;
        };
    }
    banner.onmouseover = function(){
        clearTimeout(t);

    };


    banner.onmouseout = function(){
        t = setInterval(move,second);
        num = i;
    };


    function move(){
        num++;
        for (let j=0;j<imgs.length;j++){
            btns[j].classList.remove("action");
            imgs[j].style.zIndex=1;
        }
        if (num==5){
            num=0;
        }
        btns[num].classList.add("action");
        imgs[num].style.zIndex=2;
    }



}
function updateTime(){
    const now = new Date();
    const then = new Date();
    then.setHours(17,0,0);

    const timeleft = new Date();
    timeleft.setHours(then.getHours()-now.getHours()-1,(then.getMinutes() - now.getMinutes()+60),(then.getSeconds() - now.getSeconds()+60));

    const hours = timeleft.getHours().toString().padStart(2,'0');
    const minutes =timeleft.getMinutes().toString().padStart(2,'0');
    const seconds =timeleft.getSeconds().toString().padStart(2,'0');
    const timeString = hours +"hrs "+minutes+'min '+seconds+"s";
    const end = "00hr 00min 00s";
    if(8<=now.getHours()<=17){
        document.getElementById('timo').innerText = timeString;
    }
    else{
        document.getElementById('timo').innerText = end;
    }

    if(now.getHours() >= 17){
        document.getElementById('Candi').style.display = 'none';
        document.getElementById('result1').style.display = '';
    }
}
setInterval(updateTime,1000);

updateTime();

/* const then = new Date();
then.setHours(17,0,0);

const now = new Date();

function updateTime(){


    left = then - now;
    const hours1 = Math.floor((left % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60 ));
    const minutes1 = Math.floor((left % (1000 * 60 * 60))/ (1000 * 60));
    const seconds1 = Math.floor((left % (1000 * 60))/ (1000));

    const hours = hours1.toString().padStart(2,'0');
    const minutes = minutes1.toString().padStart(2,'0');
    const seconds = seconds1.toString().padStart(2,'0');


    const timeString = hours +"Hr "+minutes+'min '+seconds+'S';
    document.getElementById('timo').innerText = timeString;

}
setInterval(updateTime,1000);

updateTime(); */
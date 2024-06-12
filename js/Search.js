
document.getElementById('votsearch').addEventListener('keyup',function(){
    let input = this.value.toLowerCase();
    let table = document.getElementById('votable');
    let rows = table.getElementsByTagName('tr');

    for(var i=0;i<rows.length;i++){
        let data = rows[i].getElementsByTagName("td")[0];
        if(data){
            let textvalue = data.textContent || data.innerHTML;
            if(textvalue.toLowerCase().indexOf(input) > -1 ){
                rows[i].style.display = "";
            }
            else{
                rows[i].style.display = "none";
            }
        }
    }

});

document.getElementById('cansearch').addEventListener('keyup',function(){
    let input = this.value.toLowerCase();
    let table = document.getElementById('cantable');
    let rows = table.getElementsByTagName('tr');

    for(var i=0;i<rows.length;i++){
        let data = rows[i].getElementsByTagName("td")[0];
        if(data){
            let textvalue = data.textContent || data.innerHTML;
            if(textvalue.toLowerCase().indexOf(input) > -1 ){
                rows[i].style.display = "";
            }
            else{
                rows[i].style.display = "none";
            }
        }
    }

});

document.getElementById('polsearch').addEventListener('keyup',function(){
    let input = this.value.toLowerCase();
    let ul = document.getElementById('todoList');
    let li = ul.getElementsByTagName('li');

    for(var i=0;i<li.length;i++){
        let item = li[i];
        if(item){
            let textvalue = item.textContent || item.innerHTML;
            if(textvalue.toLowerCase().indexOf(input) > -1 ){
                item.style.display = "";
            }
            else{
                item.style.display = "none";
            }
        }
    }

});
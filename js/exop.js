const addbtn = document.querySelector('.add');

const input = document.querySelector('.inp-group');
const pay = document.getElementById('pay');

var opt = document.createElement('option');
opt.value = 'paul';
opt.text = 'PauL';

const nam = document.createElement('select');
nam.options.selectedIndex

pay.append(opt);

alert(pay.options[0].value);


var list = [];

for(var i=0; i<pay.options.length;i++){
    list.push(pay.options[i].text);
}

alert(list);



function addInput(){

    const name = document.createElement('input');
    name.className = 'box2';
    name.type = 'text';
    var num = pay.options.selectedIndex;
    name.value = pay.options[num].value;

    const btn = document.createElement('a');
    btn.className = "delete";
    btn.innerHTML = '&times';

    const flex = document.createElement('div');
    flex.className = 'flex';

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(btn);

}



addbtn.addEventListener('click', addInput)

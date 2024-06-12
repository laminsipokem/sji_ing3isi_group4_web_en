//Defines all your functions below
$(document).ready(function(){
    $('#list-students').on('click', 'li', function(){
        $('#details-student').empty();
let li=$(this);
        $('#details-student').append(`<ul id='ul2' class=' list-group'></ul>`)
        $('#ul2').append(`<li class='list-group-item'>id   :   ${li.attr('data-id')}</li>`)
        $('#ul2').append(`<li class='list-group-item'>name   :   ${li.attr('data-name')}</li>`)
        $('#ul2').append(`<li class='list-group-item'>classe   :   ${li.attr('data-classe')}</li>`)
        $('#ul2').append(`<li class='list-group-item'>gender   :   ${li.attr('data-gender')}</li>`)
        $('#details-student').append(`<ul id='note' class=' list-group'></ul>`)
        $('#note').append(`<h5>Note semestre 2</h5>`)
        const notes = JSON.parse(li.attr('data-note'));
        for (const note of notes) {
            $('#note').append(`<li class='list-group-item'>${note.ue}: ${note.value}</li>`)
        }
        $('#note').append(`<h5>Ancienne Note semestre 2</h5>`)
        const subjects = li.attr('data-previous').split(";");
        $('#details-student').append(`<ul id='ul3' class=' list-group'></ul>`)
        for (const subject of subjects) {
            $('#ul3').append(`<li class='list-group-item'>${subject}</li>`)
        }

    });

    const items=$('#ul li');
    //Use only for JQuery instructions

    const loadfile=$('#load-file');
    const loadstorage=$('#load-storage');
    const searchbar=$('#txtSearch');
   /* function fetch()
    {
        const list=$('#list-students');
        list.empty();
    list.append(`<ul id='ul' class=' list-group'></ul>`)
    const ul=$('#ul');

    $.getJSON('data/students.json',function(json)
    {
    console.log(json);

    const students=json;
    for(student of students)
        {
    const li=`<li class='list-group-item list-group-item-action' data-classe='${student.classe}' data-id='${student.id}' data-name='${student.name}'  data-gender='${student.gender}'>${student.id}; </li>`;

    ul.append(li);
        }
    });
    }*/
    searchbar.on('keyup',function()
    {
    search();
    });
    loadfile.on('click',function()
    {
    fetch();
    });
    loadstorage.on('click',function()
    {
    fetchs();
    });

    function search()
    {
    const items=$('#ul li');
    let input= searchbar.val().toLowerCase();

    items.each(function() {
        const text = $(this).text().toLowerCase();
        if (text.includes(input)) {
            $(this).show();
        }
        else
        {
            $(this).hide();
        }
      });

    }
    function fetch()
    {
        const list=$('#list-students');
        list.empty();
        list.append(`<ul id='ul' class=' list-group'></ul>`)
        const ul=$('#ul');
        $.getJSON('data/students.json',function(json)
        {
            const students=json;
            for(student of students)
                {

            const li=`<li class='list-group-item list-group-item-action' data-classe='${student.classe}' data-id='${student.id}' data-name='${student.name}'  data-gender='${student.gender}' data-note='${JSON.stringify(student.notes)}' data-previous='${student.previous}'>${student.name}; </li>`;

            ul.append(li);
                }
        });




    }

    $.getJSON('data/students.json',function(json)
    {
    localStorage.setItem('students',JSON.stringify(json))
    });



    function fetchs()
    {
    const students=JSON.parse(localStorage.getItem('students'));
    const list=$('#list-students');
    list.empty();
    list.append(`<ul id='ul' class=' list-group'></ul>`)
    const ul=$('#ul');

     for(student of students)
            {

        const li=`<li class='list-group-item list-group-item-action' data-classe='${student.classe}' data-id='${student.id}' data-name='${student.name}'  data-gender='${student.gender}' data-note='${JSON.stringify(student.notes)}' data-previous='${student.previous}'>${student.name}; </li>`;
        ul.append(li);
            }
        }

});


//Use only for No JQuery instructions





/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. appendChild
   4. Навесить событие на дин. элем.
   5. cycles event


*/



window.onload = function() {
    var parents = document.querySelectorAll('.parent, .parentSecond');

    console.dir(div, 'div');
    console.dir(parents, 'parents');
    // parent.appendChild(div);

    for(var i = 0; i < parents.length; i++) {
        var div = document.createElement('div');
         div.classList.add('block');
        console.log(i, 'i');    
        // parents[i].append(div); // appendChild() - в конец

        // parents[i].prepend(div); в начало

        // parents[i].before(div);  // до parents[i] -го

        
        // parents[i].after(div);  // после parents[i] -го

    }   


    function sendAjax() {
        var responce = [
            {
                name: "vasdsad",
                lastName: "asdasdasd",
                age: '15',
                isMarried: false,
                adress: 'Str 1, 12'
            },
            {
                name: "vasdsad",
                lastName: "asdasdasd",
                age: '15',
                isMarried: true,
                adress: 'Str 1, 12'
            },
            {
                name: "vasdsad",
                lastName: "asdasdasd",
                age: '15',
                isMarried: false,
                adress: 'Str 1, 12'
            }
        ];

        return responce;
    }

    function createTable(model) {
        var table = document.createElement('table');

        for(var i = 0; i < model.length; i++) {
            var tr = document.createElement('tr');

            for(var key in model[i]) {
                var td = document.createElement('td');
                var color  = null;

                if(key == 'isMarried' ) {
                    color = model[i][key]? 'red' : 'green';
                    td.style.backgroundColor = color;
                }

                td.classList.add('cell', key);
                td.innerHTML = model[i][key];
                tr.append(td);
            }

            table.append(tr);
        }


        document.body.append(table);
    }

    var model = sendAjax();

    createTable(model);


} 





let table = [
    {name: "Cruz Nunez", city: "Celaya", state: "Guanajuato", country: "Mexico", language:["English", "Spanish", "French"]},
    ];
    
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
    }
    
    let table = document.querySelector("table");
    // let data = Object.keys(mountains[0]);
    generateTableHead(table);
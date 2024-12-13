let size = 0;

function getSize() 
    {
        size = prompt("How many squares per side would you like?");
        return size;
    };

document.getElementById('reset').onclick = function() {alert('I am working.');};





const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

for(let i = 0; i< 15; i++){
    let col = document.createElement('div');
    col.className = "column";
    container.appendChild(col);
        for(let j = 0; j < 15; j++){
            let row = document.createElement('div');
            row.className = 'row';
            col.appendChild(row);            
        };
        const rows = document.querySelectorAll('.row');

        rows.forEach(row=> {
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = 'black';
            })
        })
};




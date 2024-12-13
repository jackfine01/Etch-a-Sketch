// let size = 16;

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', 
    () => 
        {
            let size = prompt("How many squares per side would you like?");
            //Delete Old Columns/Rows
            let columnsToDelete = document.querySelectorAll('.column');

            columnsToDelete.forEach(column=> {
                column.remove();
                }
            )
            // Add New Columns/Rows
            for(let i = 0; i< size; i++){
                let col = document.createElement('div');
                col.className = "column";
                container.appendChild(col);
                    for(let j = 0; j < size; j++){
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
        }
    );





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




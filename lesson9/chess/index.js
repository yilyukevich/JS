const chess = document.querySelector("#chess");


const generateChess = () => {
  chess.innerHTML = "";
  let rowCount = +document.querySelector("#rowCount").value;
  let colCount = +document.querySelector("#colCount").value;

  let table = document.createElement("table");
  table.setAttribute('border', 1);

  for (let i = 0; i < rowCount; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < colCount; j++) {
      let td = document.createElement("td");
      tr.append(td);
    }
    table.append(tr);
  }

  table.addEventListener('click', () => chess.classList.toggle('revert'));

  chess.append(table);
};

const btnCreate = document.querySelector("#create");
btnCreate.addEventListener('click', generateChess);

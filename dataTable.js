let tableData = JSON.parse(localStorage.getItem("userData"));
const dataTable = document.querySelector('#data-table');
tableData.map((item) => {
    dataTable.innerHTML +=
    `
    <tr>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
      </tr>
    `
})
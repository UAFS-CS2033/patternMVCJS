async function getUsers(){
    let response = await fetch('http://localhost/projects/patternMVCJS/api/getUsers.php');
    let users = await response.json();
    await renderTable(users);
    return users;
}

async function renderTable(users){
    console.log(users);
    let table = document.getElementById('usertable');
    let row = "<tbody>";
    users.forEach(user => {
        row = row + "<tr><td>" + user['userID'] + "</td><td>" + user['lastname'] + "</td><td>" + user['firstname'] + "</td></tr>";
    });
    table.innerHTML=table.innerHTML + row;

}

getUsers();
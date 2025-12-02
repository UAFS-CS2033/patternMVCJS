
async function userListController(){
    let response = await fetch('http://localhost/patternMVCJS/api/getUsers.php');
    let users = await response.json();
    await userListView(users);
    return users;
}

async function userListView(users){
    let table = document.getElementById('usertable');
    let view = "<thead><tr><th>User ID</th><th>Last Name</th><th>First Name</th><th>Email</th><th>Username</th><th>Password</th></tr></thead><tbody>";
    users.forEach(user => {
        view = view + "<tr><td>" + user['userID'] + "</td><td>" + user['lastname'] + "</td><td>" + 
                user['firstname'] + "</td><td>" + user['email'] + "</td><td>"  + user['username']
                + "</td><td>" + user['passwd'] + "</td></tr>";
    });
    table.innerHTML=view;
    let message = document.getElementById('message');
    message.textContent = "Updated: " + new Date();

}

let button = document.getElementById('refresh');
button.addEventListener("click",function(event){
   userListController();
});

setInterval(function(){
   userListController();
},10000);

userListController();
const users = [
    {
        userName: "test"
    },
	{
        userName: "test1"
    },
	{
        userName: "test2"
    }
]

class Users{
    getUser(username){
        return users.find(user => user.userName === username);
    }
}


(() => {
    window.users = new Users();
})()
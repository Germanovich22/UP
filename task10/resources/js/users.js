const users = [
    {
        userName: "test",
		password:""
    },
	{
        userName: "test1",
		password:""
    },
	{
        userName: "test2",
		password:""
    }
]

class Users{
    getUser(username){
        return users.find(user => user.userName === username);
    }

    login(username, password){
        const user = window.users.getUser(username);
		console.log(user);
        if (!user || user.password !== password){
            return null;
        } else {
            return user;
        }
    }
}


(() => {
    window.users = new Users();
})()
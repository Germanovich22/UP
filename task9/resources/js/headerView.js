class HeaderView{
    displayHeader(){
        const user = window.users.getUser(window._username);
        const usernameContainer = document.getElementById("header-username");
        const logOutInButton = document.getElementById("log-out-btn");
        if (!user){
            //usernameContainer.innerText = "";
            logOutInButton.innerHTML = "<button class=\"btn btn-outline-success my-2 my-sm-0\" id=\"log-out-btn\" onclick=\"window.header.login('test')\">Войти</button>";
           
        } else {
          //  usernameContainer.innerText = user.userName;
            logOutInButton.innerHTML = "<button class=\"btn btn-outline-success my-2 my-sm-0\" id=\"log-out-btn\" onclick=\"window.header.logout()\">Выйти</button>";
           
        }
    }

    logout(){
        window._username = "";
        this.displayHeader();
        window.view.redisplay();
    }

    login(username="test"){
	    window._username = username;
        this.displayHeader();
        window.view.redisplay();
    }
}

(() => {
    window.header = new HeaderView();
})()
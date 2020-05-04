class Modals {
    showDeleteDialog(postId) {
        const sureDeleteElement = document.createElement("div");
        sureDeleteElement.classList.add("popup-container");
        sureDeleteElement.innerHTML = `
            <div class="popup">
            <div class="popup-exit">
            <a href="#" class="popup-exit-btn">Закрыть</a>
            </div>
            <div class="popup-label">
            <p>Вы действительно желаете удалить запись?</p>
            </div>
            <div class="popup-submit" style="margin-top: 5%">
            <button class="popup-submit-btn">Да</button>
            </div>
            </div>
        `;
        const exit = sureDeleteElement.getElementsByClassName("popup-exit-btn").item(0);
        const submit = sureDeleteElement.getElementsByClassName("popup-submit-btn").item(0);

        exit.addEventListener("click", () => sureDeleteElement.remove());
        submit.addEventListener("click", () => {
            window.view.removePost(postId);
            sureDeleteElement.remove();
        });

        // Stop propagation when clicking on popup
        sureDeleteElement.getElementsByClassName("popup").item(0)
            .addEventListener("click", e => e.stopPropagation());
        // Close element when clicking outside popup
        sureDeleteElement.addEventListener("click", ()=>sureDeleteElement.remove());

        const main = document.getElementsByTagName("main");
        main.item(0).append(sureDeleteElement);
    }

    showEditPostDialog(post){
        this.createPopUpPostDialog(post, true);
    }

    showCreatePostDialog(){
        this.createPopUpPostDialog(null, false);
    }

    createPopUpPostDialog(post, edit){
        const popUpPostElement = document.createElement("div");
        popUpPostElement.classList.add("popup-container");
        if (post) {
            popUpPostElement.innerHTML = this.getPopUpPostHTML(post, edit);
        } else {
            popUpPostElement.innerHTML = this.getPopUpPostHTML(null, edit);
        }

        popUpPostElement.addEventListener(
            "submit",
            () => {
                const text = document.getElementById("popup-post-textarea-text").value;
                
                if (edit) {
                    window.view.editPost(post.id, {"description": text});
                } else {
                    window.view.addPost(text, window._user);
                }
                popUpPostElement.remove();
            }
        )

        this.setDefaultEvents(popUpPostElement);

        const main = document.getElementsByTagName("main");
        main.item(0).append(popUpPostElement);
    }

    getPopUpPostHTML(post, edit){
        return `
            <form class="popup popup-edit">
            <div class="popup-post-textarea">
            
            <div class="popup-post-text-container-left">
            <textarea name="text" class="popup-post-textarea" id="popup-post-textarea-text" 
            placeholder="Текст поста" maxlength="3000"
            spellcheck="true">${ post ? post.description : '' }</textarea>
            </div>
            <div class="popup-submit">
            <input type="submit" class="popup-submit-btn" value="${ edit ? 'Изменить' : 'Создать'}">
            </div>
            </div>
            </div>
            </form>
        `;
    }

    showLoginDialog(){
        const loginDialog = document.createElement("div");
        loginDialog.classList.add("popup-container");
        loginDialog.innerHTML = this.getLoginHTML();

        loginDialog.addEventListener(
                "submit",
                () => {
                    const username = loginDialog.getElementsByClassName("login-username-textarea")
                        .item(0).value;
                    const password = loginDialog.getElementsByClassName("login-password-textarea")
                        .item(0).value;
                    console.log(username, password);
                    if (window.pageView.login(username, password)){
                        loginDialog.remove();
                    } else {
                        loginDialog.getElementsByClassName("login-warning").item(0)
                            .classList.add("show");
                    }
                }
            );

        this.setDefaultEvents(loginDialog)

        const main = document.getElementsByTagName("main");
        main.item(0).append(loginDialog);
    }

    getLoginHTML(){
        return `
            <div class="popup popup-login">
            <div class="login-warning">
            Неправильный логин и/или пароль
            </div>
            <form class="login-user-form">
            <div class="login-user-container">
            <div class="login-text-container">
            <div class="login-user-label">Логин:</div>
            <input type="text" id="username" name="username" placeholder="username" class="login-username-textarea" size="50">
            </div>
            <div class="login-text-container">
            <div class="login-user-label">Пароль:</div>
            <input type="password" id="pwd" name="password" placeholder="password" class="login-password-textarea" size="50">
            </div>
            <div class="popup-submit">
            <input type="submit" class="popup-submit-btn" value="Вход">
            </div>
            </div>
            </form>
            </div>
        `
    }

    setDefaultEvents(element){
        // For now do not send request when submitting form
        element.getElementsByTagName("form").item(0).onsubmit =
            () => {return false;};
        // Stop propagation when clicking on popup
        element.getElementsByClassName("popup").item(0)
            .addEventListener("click", e => e.stopPropagation());
        // Close element when clicking outside popup
        element.addEventListener("click", () => element.remove());
    }
}

(() => {
    window.modals = new Modals();
})()
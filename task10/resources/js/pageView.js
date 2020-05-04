class PageView{
    initializePage(){
        const logOutInButton = document.getElementById("log-out-btn");
        if (!window._user){
			logOutInButton.innerHTML = "<button class=\"btn btn-outline-success my-2 my-sm-0\" id=\"log-out-btn\" onclick=\"window.modals.showLoginDialog()\">Войти</button>";
        } else {
			logOutInButton.innerHTML = "<button class=\"btn btn-outline-success my-2 my-sm-0\" id=\"log-out-btn\" onclick=\"window.pageView.logout()\">Выйти</button>";
        }
		
        document.getElementById("add-post-btn").addEventListener("click", e => {
            window.modals.showCreatePostDialog();
            e.stopPropagation();
        });

        document.getElementsByClassName("load-more-btn").item(0)
            .addEventListener(
                "click",
                () => {
                    window.view.displayPosts(window._postsFrom);
                }
            )

        if (localStorage.getItem('posts') != null){
			window.posts.restore();
		} else {
			window.posts.save();
		}
        this.initializeFilter();
    }

    logout(){
        window._user = null;
        this.initializePage();
        window.view.redisplay();
    }

    login(username, password){
        const user = window.users.login(username, password);
        if (!user){
            return false;
        }
        window._user = user;
        this.initializePage();
        window.view.redisplay();
        return true;
    }

    initializeFilter(){ 
        document.getElementById("filter-form").innerHTML = `
        <div class="filter-fields">
        
        <input type="submit" class="btn filter-submit" value="OK">
		<div class="filter-formset">
        <input type="text" class="btn filter-username filter-textarea" placeholder="логин">
        <input type="date" class="btn filter-date-from filter-textarea">
        <input type="date" class="btn filter-date-to filter-textarea">
        </div>
        </div>
        `;
        this.setFilterEvent();
    }

    setFilterEvent(){
        const filterForm = document.getElementById("filter-form");
        filterForm.onsubmit = () => {return false;}
        filterForm.addEventListener(
            "submit",
            () => {
                const username = filterForm.getElementsByClassName("filter-username")
                    .item(0).value;
              
                const dateFrom = new Date(
                    filterForm.getElementsByClassName("filter-date-from")
                        .item(0).valueAsNumber
                );
                const dateTo = new Date(filterForm.getElementsByClassName("filter-date-to")
                    .item(0).valueAsNumber
                );
                const filterConfig = [];
                if (username){
                    filterConfig.push({
                        fieldName: "author",
                        fieldValue: username
                    })
                }
                if (!isNaN(dateFrom.getDate())){
                    filterConfig.push({
                        fieldName: "createdAt",
                        fieldValue: dateFrom,
                        comparison: "after"
                    })
                }
                if (!isNaN(dateTo.getDate())){
                    filterConfig.push({
                        fieldName: "createdAt",
                        fieldValue: dateTo,
                        comparison: "before"
                    })
                }
                window._filterConfig = filterConfig
                window.view.redisplay();
                window.pageView.initializeFilter();
                switchFilter();
            }
        )
    }
}

(() => {
    window.pageView = new PageView();
})()
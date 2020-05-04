function parseValue(value){
    return value < 10 ? "0" + value : value;
}

function getLikeDiv(post, user){
 //console.log(post.likesPost.find(function(element) {return user.userName == element != undefined}));
    if (!user) {
        return '';
    } else if (post.likesPost.indexOf(user.userName)){  //find(_username => user.userName === _username)){
        return `
                <button class="like-btn btn btn-outline-likes">
                    Не нравится!
                </button>
        `;
    } else {
        return `
                <button class="like-btn btn btn-outline-likes">
                    Нравится!
                </button>
        `;
    }
}

function getEditDeleteDiv(post, user) {
    if (!user || post.author !== user.userName){
        return '';
    } else {
        return `
            <button class="edit-btn btn btn-outline-likes">
               Правка
            </button>
            <button class="trash-btn btn btn-outline-likes">
               Удалить
            </button>
        `
    }
}


function getPostAsHTML(post, user){

    const postDate = post.createdAt;
    const date = parseValue(postDate.getHours()) + ":"
        + parseValue(postDate.getMinutes()) + " " + parseValue(postDate.getDate())
        + "." + parseValue(postDate.getMonth()) + "." + parseValue(postDate.getFullYear());

    const like_div = getLikeDiv(post, user);
    const edit_delete_div = getEditDeleteDiv(post, user);

    return `
	<div class="tiles">
    <div class="photo-tiles">
     <img src="${post.photoLink}" style="width:200px;height:150px">
	 <p><b>${post.author}</b></p>
    </div>
    <div class="text-tiles">
    <p><b>Дата добавления:</b> ${date}</p> <hr class="my-4">
    <p class="lead">${post.description}</p>
	 <hr class="my-4">
	 
  <div class="tags"><a href="#">${edit_delete_div}</a></div>
  <div class="like">${like_div}</div>
  </div>
  </div>
                `
}

function getPostAsDOMElement(post, user){

    let postElement = document.createElement("article");

    postElement.id = "post-" + post.id;
    postElement.innerHTML = getPostAsHTML(post, user);
    return postElement;
}

class PostsView{
    displayPosts(){
	    const user = window.users.getUser(window._username);
        console.log(user);
        let el = document.getElementById("posts-container");
        console.log(el);
		window.posts.getPage().forEach(
            post => {
                const postElement = getPostAsDOMElement(post, user);
                el.append(postElement);
            }
        );
    }

    redisplay(){
        let el = document.getElementById("posts-container");
        el.innerHTML = "";
        this.displayPosts();
    }

    addPost(post){
        if (window.posts.add(post)) {
            // Should re-get posts as we need to resort them
            this.redisplay();
        } else {
            console.log(`Post ${post} isn't valid.`);
        }
    }

    editPost(id, newPostFields){
        try {
            const post = window.posts.edit(id, newPostFields);
            const user = window.users.getUser(window._username);
            document.getElementById(`post-${id}`).innerHTML = getPostAsHTML(post, user);
        } catch (e) {
            console.log(e);
        }
    }

    removePost(id){
        window.posts.remove(id);
        document.getElementById(`post-${id}`).remove();
    }
}

(() => {
    window.view = new PostsView();
})()
class PostConstructor{
    getLikeDiv(post, user){
	    if (!user) {
            return '';
        } else if ((!isNaN(post.likesPost)) && ((post.likesPost.indexOf(user.userName)) != -1)) { //(post.postLikes.find(username => user.userName === username)){
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

    getEditDeleteDiv(post, user) {
        if (!user || post.author !== user.userName){
            return '';
        } else {
            return `
            <div class="edit">
            <button class="edit-btn btn btn-outline-likes">
               Правка
            </button>
            </div>
            <div class="delete">
            <button class="trash-btn btn btn-outline-likes">
               Удалить
            </button>
            </div>
			
           
        `
        }
    }


    getPostAsHTML(post, user){
        const postDate = new Date(post.createdAt);
	const date = parseValue(postDate.getHours()) + ":"
        + parseValue(postDate.getMinutes()) + " " + parseValue(postDate.getDate())
        + "." + parseValue(postDate.getMonth()) + "." + parseValue(postDate.getFullYear());

        const like_div = this.getLikeDiv(post, user);
        const edit_delete_div = this.getEditDeleteDiv(post, user);
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

    setPostEventListeners(postElement, post){
        const like = postElement.getElementsByClassName("like").item(0);
        if (like) {
            like.addEventListener(
                "click",
                e => {
                    window.view.like_pressed(post.id);
                    e.stopPropagation();
                }
            );
        }

        const deleteElement = postElement.getElementsByClassName("delete").item(0);
        if (deleteElement){
            deleteElement.addEventListener(
                "click",
                e => {
                    window.modals.showDeleteDialog(post.id);
                    e.stopPropagation();
                }
            )
        }

        const editElement = postElement.getElementsByClassName("edit").item(0);
        if (editElement){
            editElement.addEventListener(
                "click",
                e => {
                    window.modals.showEditPostDialog(post);
                    e.stopPropagation();
                }
            )
        }
    }

    getPostAsDOMElement(post, user){
        let postElement = document.createElement("article");

        postElement.id = `post-${post.id}`;
        postElement.innerHTML = this.getPostAsHTML(post, user);
        this.setPostEventListeners(postElement, post);
        return postElement;
    }

    displayTags(tags){
        const s = tags.toString();
        return s.replace(/,/g, " ");
    }
	
	set_like(post, username){
        const userIndexInLikes = post.likesPost.indexOf(username);
		if (userIndexInLikes !== -1){
			post.likesPost.splice(userIndexInLikes, 1);
		} else {
            post.likesPost.push(username);
        }
		window.posts.edit(post.id, {likesPost: post.likesPost});
    }
}

(() => {
    window.postConstructor = new PostConstructor();
})()
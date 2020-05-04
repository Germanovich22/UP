class PostsView{
    displayPosts(){
	    let el = document.getElementById("posts-container");
		//console.log((isNaN(window._postsFrom)));
		if (isNaN(window._postsFrom))  window._postsFrom = 0;
        const posts = window.posts.getPage();
	
    
        posts.forEach(
            post => {
                const postElement = window.postConstructor.getPostAsDOMElement(post, window._user);
                el.append(postElement);
            }
        );
        window._postsFrom += posts.length;
		console.log(window._postsFrom);
    }

    redisplay(){
        let el = document.getElementById("posts-container");
        el.innerHTML = "";
		window._postsFrom = 0;
        window._filterConfig = [];
        this.displayPosts();
    }
//'id', 'description', 'createdAt', 'author', 'photoLink', 'likesPost'
    addPost(text, user){
        const post = {
            "description": text,
            "author": user.userName,
            "postLikes": [],
            "photoLink": '',
            "createdAt": new Date()
        }
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
            const postElement = document.getElementById(`post-${id}`);
            postElement.innerHTML = window.postConstructor.getPostAsHTML(post, window._user);
            window.postConstructor.setPostEventListeners(postElement, post);
        } catch (e) {
            console.log(e);
        }
    }

    removePost(id){
        window.posts.remove(id);
        document.getElementById(`post-${id}`).remove();
    }

    like_pressed(postId){
        const post = window.posts.get(postId);
        window.postConstructor.set_like(post, window._user.userName);
        const el = document.getElementById(`post-${post.id}`);
        el.innerHTML = window.postConstructor.getPostAsHTML(post, window._user);
        window.postConstructor.setPostEventListeners(el, post);
    }
}

(() => {
    window.view = new PostsView();
})()
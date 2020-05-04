class PostCollection {
    _posts;
    _lastId;
    static _standartPostFields = ['id', 'description', 'createdAt', 'author', 'photoLink', 'likesPost'];

    constructor(initialPosts = []) {
        this._posts = initialPosts;
		this._lastId = 0;
        initialPosts.forEach(post => {
            if (post.id >= this._lastId){
                this._lastId = post.id + 1;
            }
        })
    }

    _filterPostsBy(config) {
        let result = this._posts;
        config.forEach(configElement => {
            result = result.filter(element => {
                const elementToFilter = element[configElement.fieldName];

                if (Array.isArray(elementToFilter)) {
                    // Array intersection is not empty
                    return elementToFilter.filter(element => {
                        return configElement.fieldValue.includes(element);
                    }).length > 0;

                } else if (elementToFilter instanceof Date) {
                    if (configElement.comparison === 'before') {
                        return elementToFilter <= configElement.fieldValue;
                    } else if (configElement.comparison === 'after') {
                        return elementToFilter >= configElement.fieldValue;
                    }
                } else {
                    return configElement.fieldValue.includes(elementToFilter);
                }
            });
        });
        return result;
    }

    _sortByDate(postsToSort) {
        postsToSort.sort((a, b) => {
            return b.date - a.date;
        })
        return postsToSort;
    }

   getPage() {
        const from = window._postsFrom;
		console.log(window);
    
        const filteredPosts = this._filterPostsBy(window._filterConfig);
        const sortedPosts = this._sortByDate(filteredPosts);
        return sortedPosts.slice(from, from + 10);
    }

    get(id) {
        const matchingPosts = this._posts.filter(element => {
            return element.id === id;
        })
        if (matchingPosts.length > 1) {
            throw Error(`Got ${matchingPosts.length} posts with id = '${id}' instead of 1!`);
        } else if (matchingPosts.length === 0) {
            throw Error(`No post with id = '${id}' was found!`);
        }
        return matchingPosts[0];
    }

    static validate(postObject, newPost = true) {
        return (
              (typeof postObject.id === "string") &&
            (typeof postObject.description === 'string') &&
            (typeof postObject.author === 'string') &&
            (typeof postObject.photoLink === 'string')
        );
    }

    add(post) {
        if (!post){
            return false;
        }
        if (!post.id){
			post.id = this._lastId.toString();
        } else if (post.id > this._lastId) {
			this._lastId = post.id;
        }
        if (PostCollection.validate(post)) {
            this._posts.push(post);
		   this._lastId++;
            return true;
        }
        this.save();
        return false;
    }

    addAll(postsToAdd) {
        postsToAdd.forEach(post => {
            this.add(post);
        });
    }

    clear() {
        this._posts = [];
        this.save();
    }

    edit(id, newPostFields) {
	    const oldPost = this.get(id);
        const fieldsToChange = Object.keys(newPostFields);
        const readOnlyFields = ['id', 'author', 'createdAt'];
		fieldsToChange.forEach(field => {
        console.log((readOnlyFields.indexOf(field) === -1 || oldPost[field] === newPostFields[field]));
            if (readOnlyFields.indexOf(field) === -1 || oldPost[field] === newPostFields[field]) {
                console.log(oldPost[field]);
				oldPost[field] = newPostFields[field];
				console.log(newPostFields[field]);
            }
            else {
                throw Error(`You cannot edit field ${field} of existing post!!!`);
            }
        });
		console.log(PostCollection.validate(oldPost, false));
    
        if (PostCollection.validate(oldPost, false)) {
            this._posts[this._posts.findIndex(post => { return post.id === id })] = oldPost;
		console.log(oldPost);
        	
        } else {
            throw Error(`Unable to edit post fields with these values: ${newPostFields}`);
        }
        this.save();
		return oldPost;
    }

    remove(id) {
        // Add deletion by other fields in next task implementation
        const removedPosts = [];
        let removedPostsNumber = 0;
        this._posts = this._posts.filter(el => {
            const equal = (el.id === id);
            if (equal) {
                removedPosts.push(el);
                removedPostsNumber += 1;
            }
            return !equal;
        })
        this.save();
        return (removedPostsNumber, removedPosts);
    }

    save(){
        localStorage.removeItem("posts");
        localStorage.setItem("posts", JSON.stringify(this._posts));
    }

    restore(){
        const postsStr = localStorage.getItem("posts");
        const posts = JSON.parse(postsStr);
        posts.forEach(post => {
            post.date = new Date(post.date);
        })
        this._posts = posts;
    }
}

(() => {
    window.posts = new PostCollection();
})()

class PostCollection {
    _posts;
    static _standartPostFields = ['id', 'description', 'createdAt', 'author', 'photoLink'];

    constructor(initialPosts = []) {
        this._posts = initialPosts;
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
                        return elementToFilter < configElement.fieldValue;
                    } else if (configElement.comparison === 'after') {
                        return elementToFilter > configElement.fieldValue;
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

    getPage(skip = 0, top = 10, filterConfig = []) {
        const filteredPosts = this._filterPostsBy(filterConfig);
        const slicedPosts = filteredPosts.slice(skip, skip + top);
        return this._sortByDate(slicedPosts);
    }

    get(id) {
        const matchingPosts = this._posts.filter(element => {
            return element.id === id;
        })
        if (matchingPosts.length > 1) {
            throw Error(`Got ${matchingPosts.length} posts with id = '${id}' instead of 1!`);
        } else if (matchingPosts.length == 0) {
            throw Error(`No post with id = '${id}' was found!`);
        }
        return matchingPosts[0];
    }

    static _postDoesNotContainExtraFields(postObject) {
        Object.keys(postObject).forEach(field => {
            if (PostCollection._standartPostFields.indexOf(field) == -1) {
                return false;
            }
        }
        )
        return true;
    }

    static validate(postObject, newPost = true) {
        return (
            PostCollection._postDoesNotContainExtraFields(postObject) &&
            (typeof postObject.id === "string") &&
            // Valid if a function is not static
            //(!newPost || !this._posts.find((e) => { return e.id == postObject.id; })) && 
            (typeof postObject.postText === 'string') &&
            //postObject.postText.length < 200 &&
            (postObject.date instanceof Date) &&
            (typeof postObject.userName === 'string') &&
            postObject.userName.length &&
            (typeof postObject.userPhoto === 'string')
        );
    }

    add(post) {
        if (PostCollection.validate(post)) {
            this._posts.push(post);
            return true;
        }
        return false;
    }

    addAll(postsToAdd) {
        const notAddedPosts = []
        postsToAdd.forEach(post => {
            if (PostCollection.validate(post)) {
                this._posts.push(post);
            } else {
                notAddedPosts.push(post);
            }
        })
        return notAddedPosts;
    }

    clear() {
        this._posts = [];
    }

    edit(id, newPostFields) {
        const oldPost = this.get(id);
        const fieldsToChange = Object.keys(newPostFields);
        const readOnlyFields = ['id', 'author', 'createdAt'];
        fieldsToChange.forEach(field => {
            if (readOnlyFields.indexOf(field) == -1 || oldPost[field] == newPostFields[field]) {
                oldPost[field] = newPostFields[field];
            }
            else {
                throw Error(`You cannot edit field ${field} of existing post!!!`);
            }
        });
        if (PostCollection.validate(oldPost, false)) {
            this._posts[this._posts.findIndex(post => { return post.id == id })] = oldPost;
        } else {
            throw Error(`Unable to edit post fields with these values: ${newPostFields}`);
        }
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
        return (removedPostsNumber, removedPosts);
    }
}

(() => {
    window.posts = new PostCollection();
})()

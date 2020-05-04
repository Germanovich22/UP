var posts = [
 {
   id: '1',
   description: 'Более 76 тыс. человек во всем мире уже излечились от заболевания, спровоцированного новым коронавирусом, тогда как количество смертей превысило 6,4 тыс.',
   createdAt: new Date('2020-03-17T23:00:00'),
   author: 'Иванов Иван',
   photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '2',
    description: 'Пост 2',
	createdAt: new Date('2020-01-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '3',
    description: 'Пост 3',
	createdAt: new Date('2020-02-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '4',
    description: 'Пост 4',
	createdAt: new Date('2010-01-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '5',
    description: 'Пост 5',
	createdAt: new Date('2015-01-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '6',
    description: 'Пост 6',
	createdAt: new Date('2011-01-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '7',
    description: 'Пост 7',
	createdAt: new Date('2019-01-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '8',
    description: 'Пост 8',
	createdAt: new Date('2020-07-17T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '9',
    description: 'Пост 9',
	createdAt: new Date('2020-01-11T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '10',
    description: 'Пост 10',
	createdAt: new Date('2020-09-10T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '11',
    description: 'Пост 11',
	createdAt: new Date('2018-02-11T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '12',
    description: 'Пост 12',
	createdAt: new Date('2019-02-01T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '13',
    description: 'Пост 13',
	createdAt: new Date('2018-04-27T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '14',
    description: 'Пост 14',
	createdAt: new Date('2019-01-24T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '15',
    description: 'Пост 15',
	createdAt: new Date('2020-02-19T23:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '16',
    description: 'Пост 16',
	createdAt: new Date('2020-01-17T01:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '17',
    description: 'Пост 17',
	createdAt: new Date('2017-10-27T21:00:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '18',
    description: 'Пост 18',
	createdAt: new Date('2020-01-17T23:15:00'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '19',
    description: 'Пост 19',
	createdAt: new Date('2020-01-17T23:40:07'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  },
  {
    id: '20',
    description: 'Пост 20',
	createdAt: new Date('2020-12-17T01:01:10'),
	author: 'Иванев Иван',
	photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
  }
];
// console.log(posts);
var MyFuncions = (function() {

    function validatePost(post){
        if ((typeof(post.id) == "undefined") || (typeof(post.description) == "undefined")
        || (typeof(post.createdAt) == "undefined") || (typeof(post.author) == "undefined") ||
         (typeof(post.photoLink) == "undefined")) return false; else return true;
    };

    function addPost(post){
        if (validatePost(post)){
            if (posts.push(post)) return true; else return false;
        }
    };

    function removePost(id){
        var checkR=false;
        posts.forEach((element, ind) => {
            if (element.id == id) {
                 posts.splice(ind, 1);
                 checkR=true;
    }
    });
        if (checkR) return true; else return false;
    };

    function getPost(id){
return (posts.filter(card => card.id == id));
    };


 function getPosts(skip = 0, top = 10, filterConfig = ''){
//console.log(skip);
//console.log(top);

 var db = posts;
 var db_result=new Array();
 db.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
//console.log(db);
 
 var count=0;
 db.forEach((element, ind) => {
   if ((ind >= skip) && (count < top)) {
	 if (filterConfig == ''){ 
		//console.log(element);
		db_result.push(element);
		count++;		
	 } else {
		 if ((typeof(filterConfig.createdAt) != "undefined") || (typeof(filterConfig.author)  != "undefined")){
		    if((element.createdAt == filterConfig.createdAt) || (element.author == filterConfig.author)){

		db_result.push(element);
		count++;	
		 }
    }
	 }; 
  }
});
 //alert(db.join('\n'));
return (db_result);
  
}
  return {
    getPosts: function(skip, top, filterConfig) {
      return getPosts(skip, top, filterConfig);
    },
      getPost: function(id) {
          return getPost(id);
      },
      validatePost: function(post) {
          return validatePost(post);
      },
      addPost: function(post) {
          return addPost(post);
      },
      removePost: function(id) {
          return removePost(id);
      },
    value: function() {
      return posts;
    }
  };   
})()
//console.log(func.value());
// getPosts(0, 10, "");

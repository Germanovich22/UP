window.posts.addAll([

    {
        id: "10",
        author: "test",
        createdAt: new Date("2020-03-01T14:45"),
        description: "Пост 1",
		likesPost: ["test"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
   
    },
    {
        id: "9",
        author: "test2",
        createdAt: new Date("2020-02-29T11:00"),
        description: "Пост 2    ",
        likesPost: ["test"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "8",
        author: "test1",
        createdAt: new Date("2020-02-27T06:36"),
        description: "Пост 3            ",
        likesPost: ["test1"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "7",
        author: "test2",
        createdAt: new Date("2020-02-25T17:30"),
        description: "Пост 4            ",
		likesPost: ["test2"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "6",
        author: "test1",
        createdAt: new Date("2020-02-20T05:56"),
        description: "Пост 5            ",
		likesPost: ["test1"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "5",
        author: "test2",
        createdAt: new Date("2020-02-15T07:30"),
        description: "Пост 6            ",
		likesPost: ["test"],
        
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "4",
        author: "test3",
        createdAt: new Date("2020-02-10T21:21"),
        description: "Пост 7            ",
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
        likesPost: ["test2"]
        
    },
    {
        id: "3",
        author: "test2",
        createdAt: new Date("2020-02-05T05:30"),
        description: "Пост 8            ",
		likesPost: ["test"],
   
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "2",
        author: "test2",
        createdAt: new Date("2020-02-07T14:00"),
        description: "Пост 9            ",
		likesPost: ["test"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: "1",
        author: "test",
        createdAt: new Date("2020-02-01T01:29"),
        description: "Пост 10            ",
		likesPost: ["test1"],
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
		}
	]);

	
		
window._username = "test";

window.header.displayHeader();

window.view.displayPosts();
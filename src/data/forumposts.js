import courseData from './courses';

var key = 1;
const data = {
    posts: [
        {
            title: 'ArrayLists vs Linked Lists',
            type: 'HELP',
            question:
                'So I understand that for different situations, either the ArrayList API or the LinkedList API will be more efficient. So what should I look for in terms of design that will tell me which one of those structures is recommended? Is it more related to preference rather than specific uses?So I understand that for different situations, either the ArrayList API or the LinkedList API will be more efficient. So what should I look for in terms of design that will tell me which one of those structures is recommended? Is it more related to preference rather than specific uses?So I understand that for different situations, either the ArrayList API or the LinkedList API will be more efficient. So what should I look for in terms of design that will tell me which one of those structures is recommended? Is it more related to preference rather than specific uses?',
            id: `${key++}`,
            authorusername: 'ScrawnyColeman',
            comments: [
                {
                    commentid: '1',
                    comment: 'This message has been deleted.',
                    parentid: '0',
                    authorusername: 'Anonymous',
                },
                {
                    commentid: '5',
                    comment: 'Shut up bitch',
                    parentid: '0',
                    authorusername: 'SkinnyPaddy',
                },
                {
                    commentid: '2',
                    comment: 'Oh okay. That sucks',
                    parentid: '1',
                    authorusername: 'ScrawnyColeman',
                },
                {
                    commentid: '3',
                    comment:
                        'Helpful comment. Good Job... OP, you can use arraylists for certain use cases but not others. arraylists tend to be more useful when quick access to elements is needed due ot their structure',
                    parentid: '1',
                    authorusername: 'SkinnyPaddy',
                },
                {
                    commentid: '4',
                    comment: 'Thank you!!',
                    parentid: '3',
                    authorusername: 'ScrawnyColeman',
                },
            ],
        },
        {
            title: 'Can this be done in one loop?',
            type: 'HELP',
            question: `Hey all, I'm currently working my way through the MOOC course and I've just completed an exercise where a scanner asks for a list of numbers from the user, and then it prints out what the smallest number in the index is, and prints out every index it is at. I'm wondering if this could be completed in just one loop.`,
            id: `${key++}`,
            comments: [
                {
                    commentid: '6',
                    comment: 'comment 1',
                    parentid: '0',
                    authorusername: 'user 1',
                },
                {
                    commentid: '7',
                    comment: 'comment 2 (reply to comment 1)',
                    parentid: '6',
                    authorusername: 'user 2',
                },
                {
                    commentid: '8',
                    comment: 'comment 3 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 3',
                },
                {
                    commentid: '9',
                    comment: 'comment 4 (reply to comment 1)',
                    parentid: '6',
                    authorusername: 'user 4',
                },
                {
                    commentid: '10',
                    comment: 'comment 5 (reply to comment 4)',
                    parentid: '9',
                    authorusername: 'user 5',
                },
                {
                    commentid: '11',
                    comment: 'comment 6',
                    parentid: '0',
                    authorusername: 'user 6',
                },
                {
                    commentid: '13',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
                {
                    commentid: '14',
                    comment: 'comment 6',
                    parentid: '0',
                    authorusername: 'user 6',
                },
                {
                    commentid: '15',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
                {
                    commentid: '16',
                    comment: 'comment 6',
                    parentid: '0',
                    authorusername: 'user 6',
                },
                {
                    commentid: '17',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
                {
                    commentid: '15',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
                {
                    commentid: '16',
                    comment: 'comment 6',
                    parentid: '0',
                    authorusername: 'user 6',
                },
                {
                    commentid: '17',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
                {
                    commentid: '15',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
                {
                    commentid: '16',
                    comment: 'comment 6',
                    parentid: '0',
                    authorusername: 'user 6',
                },
                {
                    commentid: '17',
                    comment: 'comment 7 (reply to comment 2)',
                    parentid: '7',
                    authorusername: 'user 6',
                },
            ],
        },
    ],
};

courseData.courses.forEach((course) => {
    data.posts.push({
        title: `${course.title} [${course.language}]`,
        id: `${key++}`,
        type: 'LESSON',
        question: `This thread is for discussing the ${course.title} lesson, taught in ${course.language}`,
        comments: [],
    });
});
export default data;

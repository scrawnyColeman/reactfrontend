import courseData from './courses';

var key = 1;
const data = {
    posts: [
        {
            title: 'ArrayLists vs Linked Lists',
            type: 'HELP',
            question:
                'So I understand that for different situations, either the ArrayList API or the LinkedList API will be more efficient. So what should I look for in terms of design that will tell me which one of those structures is recommended? Is it more related to preference rather than specific uses?',
            id: `${key++}`,
            comments: [
                {
                    commentid: '1',
                    comment: "No it can't my guy",
                    parentid: '0',
                    authorusername: 'anon',
                },
                {
                    commentid: '2',
                    comment: 'Oh okay. That sucks',
                    parentid: '1',
                },
                {
                    commentid: '3',
                    comment: 'Helpful post. Good Job... OP, you can do it by...',
                    parentid: '1',
                },
                {
                    commentid: '4',
                    comment: 'Thank you!!',
                    parentid: '3',
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
                    commentid: '5',
                    comment: "No it can't my guy",
                    parentid: '0',
                },
                {
                    commentid: '6',
                    comment: 'Oh okay. That sucks',
                    parentid: '5',
                },
                {
                    commentid: '7',
                    comment: 'Helpful post. Good Job smh... OP, you can do it by...',
                    parentid: '5',
                },
                {
                    commentid: '8',
                    comment: 'Thank you!!',
                    parentid: '7',
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

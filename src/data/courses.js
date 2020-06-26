import JavaIcon from '../images/java.png';
import JavaImg from '../images/javaheader.jpg';
import JSIcon from '../images/js.png';
import JSImg from '../images/jsimage.jpg';
import PythonIcon from '../images/python.png';
import PythonImg from '../images/python image.jpg';

const data = {
    courses: [
        {
            title: 'ReactJS',
            language: 'JavaScript',
            description:
                'Learn React, an open-source JavaScript library, for building fast webapps and clever User interfaces.',
            icon: JSIcon,
            header: JSImg,
            id: '1',
            activeUsers: '3514', //how many users have taken this course to generate popularity ranking
            currentUsers: ['1'],
            prereqs: [],
            theory: `yes`,
            youtubeLink: null,
        },
        {
            title: 'Lambda Functions',
            language: 'Java',
            description:
                'Produce concise lambda functions to enhance your functional programming skills. It is recommended that users complete our interfaces lesson first.',
            icon: JavaIcon,
            header: JavaImg,
            id: '2',
            activeUsers: '38',
            currentUsers: ['1', '2'],
            prereqs: ['1', '2'],
            theory: `yes`,
            youtubeLink: null,
        },
        {
            title: 'Recursion',
            language: 'JavaScript',
            description:
                'Learn recursive functions to ace all of your coding interviews. We recommend that all users complete our loops and conditionals lesson before beginning here.',
            icon: JSIcon,
            header: JSImg,
            id: '3',
            activeUsers: '802',
            currentUsers: ['0'],
            prereqs: ['1', '2'],
            theory: `A common computer programming tactic is to divide a problem into sub-problems of the same type as the original, solve those sub-problems, and combine the results. This is often referred to as the divide-and-conquer method; when combined with a lookup table that stores the results of solving sub-problems (to avoid solving them repeatedly and incurring extra computation time), it can be referred to as dynamic programming or memoization.\n
            A recursive function definition has one or more base cases, meaning input(s) for which the function produces a result trivially (without recurring), and one or more recursive cases, meaning input(s) for which the program recurs (calls itself). For example, the factorial function can be defined recursively by the equations 0! = 1 and, for all n > 0, n! = n(n − 1)!. Neither equation by itself constitutes a complete definition; the first is the base case, and the second is the recursive case. Because the base case breaks the chain of recursion, it is sometimes also called the "terminating case".\n
            The job of the recursive cases can be seen as breaking down complex inputs into simpler ones. In a properly designed recursive function, with each recursive call, the input problem must be simplified in such a way that eventually the base case must be reached. (Functions that are not intended to terminate under normal circumstances—for example, some system and server processes—are an exception to this.) Neglecting to write a base case, or testing for it incorrectly, can cause an infinite loop.\n
            For some functions (such as one that computes the series for e = 1/0! + 1/1! + 1/2! + 1/3! + ...) there is not an obvious base case implied by the input data; for these one may add a parameter (such as the number of terms to be added, in our series example) to provide a 'stopping criterion' that establishes the base case. Such an example is more naturally treated by co-recursion, where successive terms in the output are the partial sums; this can be converted to a recursion by using the indexing parameter to say "compute the nth term (nth partial sum)" `,
            youtubeLink: `https://www.youtube.com/watch?v=Mv9NEXX1VHc`,
        },
        {
            title: 'Polymorphism',
            language: 'Java',
            description:
                'Meaning to take many forms, polymorphism is among the four pillars of Object-oriented programming; a must know for all programmers.',
            icon: JavaIcon,
            header: JavaImg,
            id: '4',
            activeUsers: '604',
            currentUsers: ['1', '2'],
            prereqs: ['1', '2'],
            theory: `The word polymorphism is used in various contexts and describes situations in which something occurs in several different forms. In computer science, it describes the concept that objects of different types can be accessed through the same interface. Each type can provide its own, independent implementation of this interface. It is one of the core concepts of object-oriented programming (OOP). \nIf you’re wondering if an object is polymorphic, you can perform a simple test. If the object successfully passes multiple is-a or instanceof tests, it’s polymorphic. As I’ve described in my post about inheritance, all Java classes extend the class Object. Due to this, all objects in Java are polymorphic because they pass at least two instanceof checks.`,
            youtubeLink: `https://www.youtube.com/watch?v=tIWm3I_Zu7I`,
        },
        {
            title: 'Control Flow and Conditionals',
            language: 'Python',
            description:
                'Learn how to write a program that is able to do hundreds of hours of human cognition in seconds through repetition and scripted decision making',
            icon: PythonIcon,
            header: PythonImg,
            id: '5',
            activeUsers: '190',
            currentUsers: ['0'],
            prereqs: ['1', '2'],
            theory: `yes`,
            youtubeLink: null,
        },
        {
            title: 'Classes and Objects',
            language: 'Python',
            description: 'Learn the fundamental elements that make up the world of Object-Oriented Programming.',
            icon: PythonIcon,
            header: PythonImg,
            id: '6',
            activeUsers: '334',
            currentUsers: ['0'],
            prereqs: ['1', '2'],
            theory: `yes`,
            youtubeLink: null,
        },
        {
            title: 'ES6 Arrow Functions',
            language: 'JavaScript',
            description:
                'Learn arrow functions - introduced with the ECMAScript 6 - and discover how to write shorter, more concise functions with more capable than before.',
            icon: JSIcon,
            header: JSImg,
            id: '7',
            activeUsers: '2154',
            currentUsers: ['0'],
            prereqs: ['1', '2'],
            theory: `yes`,
            youtubeLink: null,
        },
    ],
};

export default data;

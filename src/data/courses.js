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
        },
        {
            title: 'Recursion',
            language: 'Python',
            description:
                'Learn recursive functions to ace all of your coding interviews. We recommend that all users complete our loops and conditionals lesson before beginning here.',
            icon: PythonIcon,
            header: PythonImg,
            id: '3',
            activeUsers: '802',
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
        },
        {
            title: 'Classes and Objects',
            language: 'Python',
            description: 'Learn the fundamental elements that make up the world of Object-Oriented Programming.',
            icon: PythonIcon,
            header: PythonImg,
            id: '6',
            activeUsers: '334',
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
        },
    ],
};

data.courses.sort(function (a, b) {
    return b.activeUsers - a.activeUsers;
});

export default data;

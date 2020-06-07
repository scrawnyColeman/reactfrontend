import JavaImg from '../images/java.png';
import JSImg from '../images/js.png';
import PythonImg from '../images/python.png';

const data = {
    courses: [
        {
            title: 'React',
            description:
                'React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile application',
            imgUrl: JSImg,
            id: '1',
        },
        {
            title: 'Java',
            description:
                'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture',
            imgUrl: JavaImg,
            id: '2',
        },
        {
            title: 'Python',
            description:
                "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
            imgUrl: PythonImg,
            id: '3',
        },
    ],
};

export default data;

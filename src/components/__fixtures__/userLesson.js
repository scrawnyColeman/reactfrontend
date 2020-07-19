export const userLesson = {
    id: 1,
    lesson: {
        id: 1,
        title: 'Recursion',
        description:
            'Learn recursive functions to ace all of your coding interviews. We recommend that all users complete our loops and conditionals lesson before beginning here.',
        theory:
            'A common computer programming tactic is to divide a problem into sub-problems of the same type as the original, solve those sub-problems, and combine the results. This is often referred to as the divide-and-conquer method; when combined with a lookup table that stores the results of solving sub-problems (to avoid solving them repeatedly and incurring extra computation time), it can be referred to as dynamic programming or memoization.\\n\r\n            A recursive function definition has one or more base cases, meaning input(s) for which the function produces a result trivially (without recurring), and one or more recursive cases, meaning input(s) for which the program recurs (calls itself). For example, the factorial function can be defined recursively by the equations 0! = 1 and, for all n > 0, n! = n(n − 1)!. Neither equation by itself constitutes a complete definition; the first is the base case, and the second is the recursive case. Because the base case breaks the chain of recursion, it is sometimes also called the "terminating case".\\n\r\n            The job of the recursive cases can be seen as breaking down complex inputs into simpler ones. In a properly designed recursive function, with each recursive call, the input problem must be simplified in such a way that eventually the base case must be reached. (Functions that are not intended to terminate under normal circumstances—for example, some system and server processes—are an exception to this.) Neglecting to write a base case, or testing for it incorrectly, can cause an infinite loop.\\n\r\n            For some functions (such as one that computes the series for e = 1/0! + 1/1! + 1/2! + 1/3! + ...) there is not an obvious base case implied by the input data; for these one may add a parameter (such as the number of terms to be added, in our series example) to provide a \'stopping criterion\' that establishes the base case. Such an example is more naturally treated by co-recursion, where successive terms in the output are the partial sums; this can be converted to a recursion by using the indexing parameter to say "compute the nth term (nth partial sum)',
        youtubeLink: 'https://www.youtube.com/watch?v=Mv9NEXX1VHc&feature=emb_title',
        activeUsers: 1,
        approved: true,
        recommendedLessons: [
            {
                id: 5,
                title: 'Loops',
                description: 'Learn how to utilise Loops in your programs.',
                theory:
                    'The Java for loop is used to iterate a part of the program several times. If the number of iteration is fixed, it is recommended to use for loop.\r\n\r\nThere are three types of for loops in java.\r\n\r\nSimple For Loop\r\nFor-each or Enhanced For Loop\r\nLabeled For Loop\r\nJava Simple For Loop\r\nA simple for loop is the same as C/C++. We can initialize the variable, check condition and increment/decrement value. It consists of four parts:\r\n\r\nInitialization: It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition.\r\nCondition: It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.\r\nStatement: The statement of the loop is executed each time until the second condition is false.\r\nIncrement/Decrement: It increments or decrements the variable value. It is an optional condition.',
                youtubeLink: 'https://www.youtube.com/watch?v=guXgBe2wvEA',
                activeUsers: 1,
                approved: true,
                recommendedLessons: [],
                language: {
                    id: 1,
                    language: 'java',
                    imagePath: 'JavaImg',
                    iconPath: 'JavaIcon',
                },
            },
            {
                id: 6,
                title: 'Conditionals',
                description: 'Learn to use if statements to create intelligent programs that can make decisions.',
                theory:
                    'Relational operators are used to check conditions like whether two values are equal, or whether one is greater than the other. The following expressions show how they are used:\r\n\r\nx == y          // x is equal to y\r\nx != y          // x is not equal to y\r\nx > y           // x is greater than y\r\nx < y           // x is less than y\r\nx >= y          // x is greater than or equal to y\r\nx <= y          // x is less than or equal to y\r\nThe result of a relational operator is one of two special values, true or false. These values belong to the data type boolean; in fact, they are the only boolean values.\r\n\r\n\r\nYou are probably familiar with these operations, but notice that the Java operators are different from the mathematical symbols like =, ≠, and ≤. A common error is to use a single = instead of a double ==. Remember that = is the assignment operator, and == is a comparison operator. Also, there is no such thing as the =< or => operators.\r\n\r\nThe two sides of a relational operator have to be compatible. For example, the expression 5 < "6" is invalid because 5 is an int and "6" is a String. When comparing values of different numeric types, Java applies the same conversion rules we saw previously with the assignment operator. For example, when evaluating the expression 5 < 6.0, Java automatically converts the 5 to 5.0.\r\n\r\nMost relational operators don’t work with strings. But confusingly, == and != do work with strings – they just don’t do what you expect. We’ll explain what they do later; in the meantime, don’t use them with strings. Instead, you should use the equals method:\r\n\r\nString fruit1 = "Apple";\r\nString fruit2 = "Orange";\r\nSystem.out.println(fruit1.equals(fruit2));\r\nThe result of fruit1.equals(fruit2) is the boolean value false.\r\n\r\nRelational operators are used to check conditions like whether two values are equal, or whether one is greater than the other. The following expressions show how they are used:\r\n\r\nx == y          // x is equal to y\r\nx != y          // x is not equal to y\r\nx > y           // x is greater than y\r\nx < y           // x is less than y\r\nx >= y          // x is greater than or equal to y\r\nx <= y          // x is less than or equal to y\r\nThe result of a relational operator is one of two special values, true or false. These values belong to the data type boolean; in fact, they are the only boolean values.\r\n\r\n\r\nYou are probably familiar with these operations, but notice that the Java operators are different from the mathematical symbols like =, ≠, and ≤. A common error is to use a single = instead of a double ==. Remember that = is the assignment operator, and == is a comparison operator. Also, there is no such thing as the =< or => operators.\r\n\r\nThe two sides of a relational operator have to be compatible. For example, the expression 5 < "6" is invalid because 5 is an int and "6" is a String. When comparing values of different numeric types, Java applies the same conversion rules we saw previously with the assignment operator. For example, when evaluating the expression 5 < 6.0, Java automatically converts the 5 to 5.0.\r\n\r\nMost relational operators don’t work with strings. But confusingly, == and != do work with strings – they just don’t do what you expect. We’ll explain what they do later; in the meantime, don’t use them with strings. Instead, you should use the equals method:\r\n\r\nString fruit1 = "Apple";\r\nString fruit2 = "Orange";\r\nSystem.out.println(fruit1.equals(fruit2));\r\nThe result of fruit1.equals(fruit2) is the boolean value false.\r\n\r\n',
                youtubeLink: 'https://www.youtube.com/watch?v=fsTC0Mqy0EU',
                activeUsers: 1,
                approved: false,
                recommendedLessons: [],
                language: {
                    id: 1,
                    language: 'java',
                    imagePath: 'JavaImg',
                    iconPath: 'JavaIcon',
                },
            },
        ],
        language: {
            id: 2,
            language: 'javascript',
            imagePath: 'JSImg',
            iconPath: 'JSIcon',
        },
    },
    completed: false,
};

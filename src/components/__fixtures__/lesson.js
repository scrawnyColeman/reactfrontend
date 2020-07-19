export const lesson = {
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
    ],
};

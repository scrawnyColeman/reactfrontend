const data = {
    practicals: [
        {
            correspondingLessonID: '3',
            language: 'javascript',
            title: 'Fibonacci',
            question:
                'Given the following iterative approach to the Fibonacci sequence, attempt to recreate the same result using Recursion',
            hint: `The formula is:\nfib(n) = fib(n-1) + fib(n-2)`,
            codesnippet: `function Fib(var num){\n\tif( num < 2 ){\n\t\treturn num\n\t}\n\tvar first = 0\n\tvar second = 1\n\tvar temporaryVariable = 1\n\tfor(var i = 2; i <= num; i++){\n\t\ttemporaryVariable= first+second;\n\t\tfirst = second;\n\t\tsecond = temporaryVariable;\n\t}\n\treturn temporaryVariable\n}`,
            solution: {
                code: `function Fib(var num) {\n\tif( number < 2 ){\n\t\treturn num;\n\t} else {\n\t\treturn Fib(num - 1) + Fib(num - 2);\n\t}\n}`,
                explanation: `The recursive method (algorithm) ‘unwinds’ the number you give it until it can get an actual value (0 or 1), and then adds that to the total. The “unwinding” takes place each time the value of ‘number-2’ and the value of ‘number-1’ is given to the fibonacci method when the line\n
                fibonacci(number-2) + fibonacci(number-1)\n
                is evaluated. Note that the value of ‘number-2’ in this case is the value of the next instance of the fibonacci method’s variable number (next recursive loop). The same goes for the value of ‘number-1’.
                With each recursion where the method variable number is NOT smaller than 2, the state or instance of the fibonacci method is stored in memory, and the method is called again. Each time the fibonacci method is called though, the value passed in is less than the value passed in during the previous recursive call (by either 1 or 2). This goes on until the value returned is a value smaller than 2 (either 0 or 1). The resolution of the previous instance can then be done. In one instance, 0 is returned and fibonacci(0) can be resolved to 0. In another, 1 is returned and fibonacci(1) can be resolved to 1.
                These values are then summed in order to obtain the requested Fibonacci number. This summing action happens each time a 0 or 1 is returned from one instance of the fibonacci method to the previous instance of the fibonacci method, and so on.
                This is equivalent to where all the 1’s and 0’s at the bottom of the tree structure are added together. The final sum (or total) of all these 0's and 1's is then the value of the Fibonacci number requested in the first place. This value is returned during the final return of the fibonacci method to where the method was called from in the first place.`,
            },
        },
    ],
};

export default data;

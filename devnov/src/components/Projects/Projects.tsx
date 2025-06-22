import { DIFFICULTY_LEVELS } from "../Constants/Constants";

export const PROJECT_INDEX = {
    HELLO_WORLD_JAVA_PROGRAMMING: 0,
    HELLO_WORLD_C_PLUS_PLUS_PROGRAMMING: 1,
    HELLO_WORLD_C_SHARP_PROGRAMMING: 2,
    HELLO_WORLD_C_PROGRAMMING: 3,
    HELLO_WORLD_PYTHON_PROGRAMMING: 4,
    HELLO_WORLD_R_PROGRAMMING: 5,
    HELLO_WORLD_JAVASCRIPT_PROGRAMMING: 6,
    HELLO_WORLD_PHP_PROGRAMMING: 7,
    INPUT_JAVA_PROGRAMMING: 8,
}

export const KEYS = {
    output: "Output",
    input: "Input"
}

export const PROJECTS = [
    {
        fileName: "HelloDevnov.java",
        page: "/JavaHelloWorld",
        key: "Output",
        programmingLanguage: "Java",
        title: "Welcome Fellow Devnov to your First Java Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a Java application called 'HelloDevnov' that will output the text 'Hello Devnov' to the output stream",
        learningOutcomes: [
                            {
                               isChecked: false,
                               label: "Correct class name for the Java application",
                               possibleSolutions: [
                                                        "HelloDevnov"
                                                  ]
                            },
                            {
                                isChecked: false,
                                label: "Output text to the standard output stream",
                                possibleSolutions: [
                                                         "System.out.println(\"Hello Devnov\");",
                                                         "System.out.println('Hello Devnov');"
                                                   ]
                             }
                            
                          ],
            output: "Hello World"
    },
    {
        fileName: "HelloDevnov.cpp",
        page: "/CPlusPlusHelloWorld",
        key: "Output",
        programmingLanguage: "C++",
        title: "Welcome Fellow Devnov to your First C++ Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a C++ application that will output the text 'Hello Devnov' to the output stream",
        learningOutcomes: [
                                 {
                                    isChecked: false,
                                    label: "Include header files",
                                    possibleSolutions: [
                                                            "#include <iostream>"
                                                       ]
                                 },
                                 {
                                     isChecked: false,
                                     label: "Using namespaces in C++",
                                     possibleSolutions: [
                                                            "using namespace std;"
                                                        ]
                                 },
                                 {
                                    isChecked: false,
                                    label:  "Output text to the standard output stream using a separate import",
                                    possibleSolutions: [
                                                             "cout<<\"Hello Devnov\";",
                                                             "cout<<'Hello Devnov';",
                                                             "cout<<'Hello Devnov'<<endl;",
                                                             "cout<<\"Hello Devnov\"<<endl;",
                                                       ]
                                 },
                                 
                                
                                
                               
                          ],
         output: "Hello World"
    },
    {
        fileName: "HelloDevnov.cs",
        page: "/CSharpHelloWorld",
        key: "Output",
        programmingLanguage: "C#",
        title: "Welcome Fellow Devnov to your First C# Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a C# application with a user-defined namespace called 'HelloDevnov' and a user-defined class called 'HelloDevnovClass' that will output the text 'Hello Devnov' to the output stream",
        learningOutcomes: [
                                {
                                    isChecked: false,
                                    label:  "Using system namespaces in C#",
                                    possibleSolutions: [
                                                            "using System;"
                                                       ]
                                },
                                {
                                    isChecked: false,
                                    label:  "Using user-defined namespaces in C#",
                                    possibleSolutions: [
                                                            "namespace HelloDevnov"
                                                       ]
                                },
                                {
                                    isChecked: false,
                                    label:  "Using user-defined classes in C#",
                                    possibleSolutions: [
                                                            "HelloDevnovClass"
                                                       ]
                                },
                                {
                                  isChecked: false,
                                  label: "Output text to the standard output stream",
                                  possibleSolutions: [
                                                          "Console.WriteLine(\"Hello Devnov\");",
                                                          "Console.WriteLine('Hello Devnov');"
                                                     ]
                                },
                           
                            
                          ],
         output: "Hello World"
    },

    {
        fileName: "HelloDevnov.c",
        page: "/CHelloWorld",
        key: "Output",
        programmingLanguage: "C",
        title: "Welcome Fellow Devnov to your First C Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a C application with user-defined namespace called 'HelloDevnov'  that will output the text 'Hello Devnov' to the output stream",
        learningOutcomes: [
                               {
                                    isChecked: false,
                                    label: "Include header files",
                                    possibleSolutions: [
                                                            "#include <stdio.h>"
                                                       ]
                                },
                                {
                                    isChecked: false,
                                    label:  "Output text to the standard output stream",
                                    possibleSolutions: [
                                                            "printf('Hello Devnov');",
                                                            "printf(\"Hello Devnov\");"
                                                       ]
                                },
                            
                            
                          ],
         output: "Hello World"
    },

    {
       fileName: "HelloDevnov.py",
       page: "/PythonHelloWorld",
        key: "Output",
        programmingLanguage: "Python",
        title: "Welcome Fellow Devnov to your First Python Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a Python application that will output the text 'Hello Devnov' to the output stream",
        learningOutcomes: [
                                {
                                    isChecked: false,
                                    label:   "Output text to the output stream",
                                    possibleSolutions: [
                                                            "print('Hello Devnov');",
                                                            "print(\"Hello Devnov\");",
                                                            "print('Hello Devnov')",
                                                            "print(\"Hello Devnov\")"
                                                       ]
                                },
                           ],
         output: "Hello World"
    },

    {
      fileName: "HelloDevnov.r",
      page: "/RHelloWorld",
       key: "Output",
       programmingLanguage: "R",
       title: "Welcome Fellow Devnov to your First R Program",
       difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
       problemStatement: "Create a R application that will output the text 'Hello Devnov' to the output stream without the quotation marks",
       learningOutcomes: [
                               {
                                   isChecked: false,
                                   label:   "Output text to the output stream",
                                   possibleSolutions: [
                                                            "print('Hello Devnov', quote=FALSE);",
                                                            "print(\"Hello Devnov\", quote=FALSE);",
                                                            "print('Hello Devnov', quote=FALSE)",
                                                            "print(\"Hello Devnov\", quote=FALSE)",
                                                            "print('Hello Devnov',quote=FALSE);",
                                                            "print(\"Hello Devnov\",quote=FALSE);",
                                                            "print('Hello Devnov',quote=FALSE)",
                                                            "print(\"Hello Devnov\",quote=FALSE)"
                                                      ]
                               },
                          ],
        output: "Hello World"
   },

    {
        fileName: "HelloDevnov.js",
        page: "/JSHelloWorld",
        key: "Output",
        programmingLanguage: "JavaScript",
        title: "Welcome Fellow Devnov to your First JavaScript Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a JavaScript application that will output the text 'Hello Devnov' to the console",
        learningOutcomes: [
                                {
                                    isChecked: false,
                                    label:   "Output text to the console",
                                    possibleSolutions: [
                                        "console.log('Hello Devnov');",
                                        "console.log(\"Hello Devnov\");",
                                        "console.log('Hello Devnov')",
                                        "console.log(\"Hello Devnov\")"
                                    ]
                                },
                           ],
         output: "Hello World"
    },

    { 
        fileName: "HelloDevnov.php",
        page: "/PHPHelloWorld",
        key: "Output",
        programmingLanguage: "PHP",
        title: "Welcome Fellow Devnov to your First PHP Program",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a PHP application that will output the text 'Hello Devnov' to a web page",
        learningOutcomes: [
                               {
                                    isChecked: false,
                                    label:    "Output text to a web page",
                                    possibleSolutions: [
                                        "echo \"Hello Devnov\";",
                                        "echo \"Hello Devnov\"",
                                        "echo 'Hello Devnov';",
                                        "echo 'Hello Devnov'"
                                    ]
                                },
                            
                          ],
         output: "Hello World"
    },

   
    {
        fileName: "InputDevnov.java",
        page: "/JavaInput",
        key: "Input",
        programmingLanguage: "Java",
        title: "Input using Java",
        difficulty: DIFFICULTY_LEVELS.EASY_LEVEL,
        problemStatement: "Create a Java application called 'Input Devnov' that will input text using the standard input stream.",
        learningOutcomes: [
                                {
                                    isChecked: false,
                                    label: "Importing the scanner class",
                                    possibleSolutions: [
                                                            "java.util.Scanner;"
                                                       ]
                                },
                                {
                                    isChecked: false,
                                    label: "Create the scanner object to introduce input stream",
                                    possibleSolutions: [
                                                            "Scanner sc = new Scanner(System.in);"
                                                       ]
                                },
                            
                          ],
        output: ""
    },

    
]
   
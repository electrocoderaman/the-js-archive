let coding = ['js', 'ruby', 'python', 'c', 'c++', 'java', 'rust']

coding.forEach((item, index, array) => {
    // console.log(item, index, array)
}
)

let myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    },
    {
        languageName: 'ruby',
        languageFileName: 'rb'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach((val) => {
    console.log(val)
    console.log(`name is ${val.languageName} and file name is ${val.languageFileName}`);
}
)
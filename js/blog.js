// BLOG 

const blogBtn = document.getElementById('blogBtn')



const blogsContainer = document.getElementById('blogPosts')

function createBlogPost(blogWritings = '',title="New Blog Title",image='') {

    const singleBlogPost = document.createElement('div')
    singleBlogPost.classList.add('p-2')
    singleBlogPost.innerHTML = `
    <h2 class="text-center font-bold border-2 p-2 text-cyan-700 text-3xl lg:text-5xl">${title}</h2>
    <img class="w-3/4 lg:w-1/2 mx-auto mt-14" src="${image}" alt="blogPhoto">
    <p class="text-xl  lg:text-2xl font-medium p-1 lg:p-10" id="mainWritting">
    ${blogWritings}
    </p>
    
    `
    blogsContainer.appendChild(singleBlogPost)

}

// posting first blog post

const title_01 = "Brief Discussion on var,let and const"
const image_01 = './img/varletconst.png'
const mainWriting_01 = `
Using the flexible and popular programming language JavaScript, programmers may create dynamic and
                    interactive online apps. JavaScript offers a range of tools and features, such as variables, to
                    accomplish this. For storing and manipulating data in your code, variables are crucial. Var, let,
                    and const are the three alternatives available in JavaScript for declaring variables. We'll examine
                    the distinctions between these three variable declarations and when to utilize each one in this blog
                    post. <br> <br>

                    The first method of declaring variables in JavaScript is with the var keyword. A variable that is
                    declared using the var command is function-scoped, which means that it can only be used within the
                    function in which it is used or, if declared globally, by the entire program.
                    <br> <br>
                    <span class="bg-yellow-400 p-0 lg:p-2">These are some of the essential traits of var: </span>
                    <br><br>
                    Variables declared using the var keyword are hoisted, or positioned at the top of the containing
                    function or script, prior to execution. If this is not handled properly, it may result in unexpected
                    behavior.
                    <br><br>
                    Reassignment: var-declared variables can be redeclared and reassigned inside the same scope without
                    encountering any problems. This may make code more challenging to maintain.
                    <br><br>
                    Global scope: Var variables become global if they are defined outside of any function or block,
                    which could have unforeseen consequences.
                    <br><br>
                    The let keyword, which was added in ECMAScript 6 (ES6), addresses some of the problems of var.
                    Let-declared variables are restricted to the block in which they are defined (for example, inside of
                    a loop or an if statement), which is known as block scope.
                    <br><br>
                    <span class="bg-yellow-400 p-0 lg:p-2">Key elements of let are as follows:</span>
                    <br> <br>
                    No hoisting problems: The possibility of unexpected behavior is decreased because let variables are
                    not hoisted to the top of their contained block.
                    <br><br>
                    No redeclaration: Using let, a variable with the same name cannot be declared twice in the same
                    scope. This lessens the chance of unintentional variable shadowing.
                    <br><br>
                    Reassignment permitted: Let variables can still be changed by reassignment inside the same scope.
                    <br><br>
                    The const keyword was also introduced in ES6, much like let. Const variables, however, serve a
                    different function. They are employed for values that ought not to undergo subsequent assignment.
                    
                    <br><br>
                    <span class="bg-yellow-400  p-0 lg:p-2">The following are important const attributes:</span>
                    <br><br>
                    Const variables are block-scoped, similar to let. 
                    <br><br>
                    Immutability: Once initialized, variables specified with const cannot be reallocated. Const is a
                    sensible choice for values that need to stay the same throughout the program because of this.
                    <br><br>
                    Const variables must get an initial value at the time of declaration.

                    <br><br>
                    <span class="font-extrabold">

                        For producing dependable and clean code in JavaScript, it is essential to comprehend the distinctions between var, let, and const. Let is appropriate for most variable declarations, however var should typically be avoided in contemporary JavaScript work due to its scope and hoisting problems. For ensuring that a variable's value stays constant, const is the best option. You can create JavaScript code that is easier to maintain and free of bugs by selecting the appropriate type of variable declaration for your online applications.
                    </span>

`
// posting second blog post

const title_02 = "Use Cases of null and undefined"
const image_02 = "./img/null.png"
const mainWriting_02= ` Null and undefined are two distinct values in JavaScript, and they have different use cases. <br> <br>
<span class="bg-yellow-400 p-1 lg:p-2">Undefined:</span>
<br> <br>
Default Value for Uninitialized Variables: In JavaScript, when you declare a variable without assigning a value to it, it automatically gets the value undefined. This is often used as a default value for variables until they are assigned a meaningful value.
<br> <br>
<img class="mx-auto lg:w-1/3 w-3/4" src="./img/undefined_01.png"
<br> <br>
Function Parameters: If a function is called with fewer arguments than it expects, the missing parameters are set to undefined.
<br> <br>
<img class="mx-auto lg:w-1/3 w-3/4" src="./img/undefined_02.png"
<br> <br>
<span class="bg-yellow-400 p-2">Null:</span>
<br> <br>
Explicit Absence of Value: null is often used to indicate that a variable intentionally holds no value or that an object property intentionally has no value. It signifies the explicit absence of any object value.
<br> <br>
<img class="mx-auto lg:w-1/3 w-3/4" src="./img/undefined_03.png"
<br> <br>
Checking for Uninitialized Variables: You can use null to check whether a variable has been intentionally left empty or uninitialized.
<br> <br>
<img class="mx-auto lg:w-1/3 w-3/4" src="./img/undefined_04.png"
<br> <br>
<span class="font-extrabold"> 
The distinction between null and undefined in JavaScript must be made. Undefined often denotes an uninitialized or missing value, while null denotes a value that is intentionally absent. It's critical to use them correctly in your code dependent on the situation you're trying to portray.
<span>
`



const title_03 = "REST API"
const image_03 = "./img/rest.png"
const mainWriting_03= `<span class="bg-yellow-400 p-2">A REST API</span> (Representational State Transfer Application Programming Interface) is a set of rules for creating and interacting with web services. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform actions (e.g., retrieve data, create, update, delete) on resources (e.g., data or services) identified by unique URLs. REST APIs are stateless, have a uniform interface, support various data formats (e.g., JSON, XML), and use HTTP status codes for responses. They are widely used for building web and mobile applications due to their simplicity and scalability.
<br><br>
<span class="bg-yellow-400 p-2">HTTP Methods: </span>REST APIs use standard HTTP methods (GET, POST, PUT, DELETE, etc.) to perform CRUD (Create, Read, Update, Delete) operations on resources. These methods map to the corresponding actions you want to perform on a resource.
<br>
<br>
GET: Retrieve data from the server.
<br>
<br>
POST: Create a new resource on the server.
<br>
<br>
PUT: Update an existing resource on the server.
<br>
<br>
DELETE: Remove a resource from the server.
<br>
<br>
<span class="font-bold lg:font-extrabold"> 
Since they offer a straightforward and standardized method of interacting with server resources, REST APIs are frequently employed in the creation of websites and mobile applications. They serve as the basis for many contemporary online services and are employed for a variety of operations, including handling intricate business processes and obtaining data from a server.
</span>

`
























// params = blogWritings = '',title="New Blog Title",image=''


createBlogPost(mainWriting_01,title_01,image_01)
createBlogPost(mainWriting_02,title_02,image_02)
createBlogPost(mainWriting_03,title_03,image_03)
// createBlogPost(mainWriting_03,title_03,image_03)











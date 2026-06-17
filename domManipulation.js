// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function () {

    myName.innerHTML = "Sylas";
    myHobby.innerHTML = "I like to go outside and have fun.";
    myLocation.innerHTML = "I live in Newburgh, Indiana.";



});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("click",
    function () {
        image.src = "https://thfvnext.bing.com/th/id/OIP.QCWbnP6qqZW5BYiqNywRAwHaE8?w=306&h=204&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.3&pid=1.7&rm=3";
    });




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("click",
    function () {
        image.src = "https://thfvnext.bing.com/th/id/OIP.EqDjnvMzyn5v8N8foLaUDgHaE2?w=275&h=185&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.3&pid=1.7&rm=3";
    });

// BONUS
// 7. Try using different event types for your buttons.
image1Button.addEventListener("mouseover",
    function () {
        myName.innerHTML = "I'm so cool.";
    });
image1Button.addEventListener("mouseout",
    function () {
        myName.innerHTML = "Sylas";
    });
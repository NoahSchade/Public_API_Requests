$('.search-container').html(`
    <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>
`);

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateImage(data))

let html = '';
let htmlHolder = '';

function generateImage(data) {
    
console.log(data.results[0].picture.large);

    for(let i = 0; i < 12; i++) {
        html +=  `
                    <div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}last</h3>
                            <p class="card-text">${data.results[i].email}</p>
                            <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                        </div>
                    </div>
                `;
    }

    $('#gallery').html(html);
}


$("body").append("<div class='modal-container'>Appended text</div>");
$(".modal-container").hide();

$('.modal-container').html(`
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">email</p>
                <p class="modal-text cap">city</p>
                <hr>
                <p class="modal-text">(555) 555-5555</p>
                <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
        </div>

        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
`);

$("#modal-close-btn").click(function(){
    $(".modal-container").hide();
});

$(".card").click(function(){
    $(".modal-container").show();
});

hiddenElements = $(':hidden');
visibleElements = $(':visible');

let i = false

$(".modal").click(function(){
    i = true;
});

$(".modal-btn-container").click(function(){
    i = true;
});

$(".modal-container").click(function(){
    if(i === false) {
        $(".modal-container").hide();
    }
    i = false;
});
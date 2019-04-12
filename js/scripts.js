$('.search-container').html(`
    <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>
`);

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateData(data))

let html = '';
let htmlHolder = '';

function generateData(data) {

    for(let i = 0; i < 12; i++) {
        html +=  `
                    <div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                            <p class="card-text">${data.results[i].email}</p>
                            <p class="card-text cap">${data.results[i].location.city}</p>
                        </div>
                    </div>
                `;
    }

    $('#gallery').html(html);

    $(".card").click(function(){
        const index = $(this).index();
        addModal(data, index);
    });
}

function addModal(data, index) {
    $("body").append("<div class='modal-large-container'>Appended text</div>");

    const rawBirthday = /^(\d{4})-(\d{2})-(\d{2})(.+)$/;
    const formating = '$2/$3/$1';
    const dob = data.results[index].dob.date;

    const birthday = dob.replace(rawBirthday, formating);

    $('.modal-large-container').html(`
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${data.results[index].picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${data.results[index].name.first} ${data.results[index].name.last}</h3>
                    <p class="modal-text">${data.results[index].email}</p>
                    <p class="modal-text cap">${data.results[index].location.city}</p>
                    <hr>
                    <p class="modal-text">${data.results[index].cell}</p>
                    <p class="modal-text cap">${data.results[index].location.street}, ${data.results[index].location.state} ${data.results[index].location.postcode}</p>
                    <p class="modal-text">Birthday: ${birthday}</p>
                </div>
            </div>

            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>
    `);

    $("#modal-close-btn").click(function(){
        $(".modal-large-container").remove();
    });

    let i = false

    $(".modal").click(function(){
        i = true;
    });

    $(".modal-btn-container").click(function(){
        i = true;
    });

    $(".modal-large-container").click(function(){
        if(i === false) {
            $(".modal-large-container").remove();
        }
        i = false;
    });

}
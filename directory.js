
if (typeof jQuery !== 'undefined') {
    console.log('jQuery Loaded');
}
else {
    console.log('not loaded yet');
}

console.log(localStorage)

var directoryArray = [] ;
function init() {
    if (localStorage.minidirectory) {
        directoryArray = JSON.parse(localStorage.minidirectory);
        for(var i = 0; i< directoryArray.length; i++) {
            $("tbody").append("<tr class='ab'><td>" + directoryArray[i].name + "</td><td>" + directoryArray[i].number + "</td><td><span><i class='fas fa-trash-alt'></i></span></td></tr>")
        }
    }
}

$(document).ready(function () {
    $(".addnew").click(function () {
        var name = $("input[type='text']").val();
        var number = $("input[type='number']").val();
        if (number.length > 6 && number.length < 11) {

            var dirObj = {name: name, number: number}
            directoryArray.push(dirObj);
        
            localStorage.minidirectory = JSON.stringify(directoryArray);

            $("tbody").append("<tr class='ab'><td>" + name + "</td><td>" + number + "</td><td><button  class='btn btn-default btn-sm' onclick='deletedir()'><span class='lo'><i class='fas fa-trash-alt'></i></span></button></td></tr>")
            $("input[type='number']").val("");
            $("input[type='text']").val("");
            return true;
        } else {
            alert('Please Enter Valid Number')
        }

    });
});


//Click on X to delete Todo
$("tbody").on("click", "span", function (event) {
    $(this).parentsUntil(".table").remove();
    event.stopPropagation();
});

// // var bin = $(button)
// function deletedir() {
//     // var in = $(this).index;
//     $("button[type='button']").parentsUntil(".table").remove();
//     directoryArray.splice($(this).index,1);
//     localStorage.minidirectory = JSON.stringify(directoryArray);
//     init();
// }

function deleteall() {
    localStorage.clear();
    $(this).parentsUntil(".table").remove();
    event.stopPropagation();
    location.reload();
    init();
}
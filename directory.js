// const form = document.querySelector('form');
// const tbody = document.querySelector('tbody');
// const button = document.querySelector('button');
// const input1 = document.getElementsByClassName('name');
// const input2 = document.getElementsByClassName('number');
if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}
// var nam = document.getElementsByClassName("name");
// var num = document.getElementsByClassName("number");
// .classList.add("mystyle");

// $("button").click(function(){
// 	$("input[type='text']").slideToggle();
// 	// $("input[type='number']").fadeToggle();
// });

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var name = $(this).val();
        // $(".name").classList.add("hide")
        // $(".number").classList.remove("hide");
        $("input[type='name']").css("visibility", "none");

        $("input[type='number']").css("visibility", "visible");

                $("input[type='number']").keypress(function(event){
                    if(event.which === 13){
                        var number = $(this).val();
                        
                        //create a new directory
                        $("tbody").append("<tr class='ab'><td>" + name + "</td><td>" + number + "</td><td><span><i class='fas fa-trash-alt'></i></span></td></tr>")
                        $(this).val("");
                        $("input[type='text']").val("");

                    }
                });
                        $("input[type='number']").css("visibility", "none");
                        // $(this).val("");
        
	}
});


//Click on X to delete Todo
$("tbody").on("click", "span", function(event){
	// $(this).parents().fadeOut(500,function(){
		$(this).parentsUntil(".table").remove();
	// });
    event.stopPropagation();
});



// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text, number) => {
//   const td1 = document.createElement('td');
//   const td2 = document.createElement('td');
//   td1.textContent = text;
//   td2.textContent = number;
// //   tbody.appendChild("<tr class='ab'><td>" + td1 + "</td><td>" + td2 + "</td></tr>");
//   $("tbody").append("<tr class='ab'><td>" + td1 + "</td><td>" + td2 + "</td></tr>")
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input1.value,input2.value );
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input1.value,input2.value );
//   input1.value = "";
//   input2.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });
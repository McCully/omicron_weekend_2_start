var primates = []
var currentPrimate = 0;
$(document).ready(function(){
  loadData();

  $('#forward').on('click', goFor);
  $('#previous').on('click' , goBac);
  $('.numberButt').on("click" , ".primateNumButt", function(){
    $(this).data('id')
    currentPrimate = $(this).data('id');
    showPrimate(primates, currentPrimate);

  });
});


function loadData(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      for(var i = 0; i <= 17; i++){
        primates.push(data.omicron[i]);
        currentPrimate++;
      }


      numPrimates();
      showPrimate(primates, currentPrimate);

      console.log(primateNum);
    },

    error: function() {
      console.log("ERROR, Link to server has been lost");
    }
  });
}
console.log(primates);


// console.log(omicron);÷
function numPrimates(){
  for(var i = 0; i < primates.length - 1; i++){
    var displayNum = i + 1;
    $('.numberButt').append('<button class = "primateNumButt" data-id = "' + i  + '">' + displayNum + '</button>');
  }
}

function showPrimate(omicronArr , index) {
  var primates = omicronArr[index];
  console.log(index);
  var primerInfo = '<h2>' + primates.name + '</h2><br><h3>' + "<a href='https://github.com/'" + primates.git_username + ">https://github.com/" + primates.git_username + "</a><br><br>" + primates.shoutout + "</h3>";



$('.person').fadeOut(400, function() {
      $('.person').html(primerInfo);
      $('.person').fadeIn(400);
  });


  if(index == currentPrimate){
    $('.primateNumButt').removeClass('current');
    $('#' + currentPrimate).addClass('current');
  }
}

function goFor() {
  if(currentPrimate >= primates.length - 1){
    currentPrimate = 0;
  } else {
    currentPrimate += 1;
  }

  showPrimate(primates , currentPrimate);
}

function goBac(){
  if(currentPrimate == 0) {
    currentPrimate = primates.length;
  }
  currentPrimate -= 1;
  showPrimate(primates , currentPrimate);
}

function primateNum() {
  currentPrimate = parseInt(this.id);
  showPrimate(primates , currentPrimate)
}

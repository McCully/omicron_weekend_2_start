$(document).ready(function(){
  loadData();

  $('#forward').on('click', goFor);
  $('#previous').on('click' , goBac);
});
var primates = []
var currentPrimate = 0;

function loadData(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      console.log(data);
      var primates = data.omicron;
      numPrimates();
      showPrimate(primates, currentPrimate);
      $('.primateButton').on("click" , primateNum);
      console.log(primates);
    },

    error: function() {
      console.log("ERROR, Link to server has been lost");
    }
  });
}

function numPrimates(){
  for(var i = 0; i < primates.length; i++){
    var displayNum = i + 1;
    $('.numberButt').append('<button class = "primateNumButt">' + displayNum + '</button>');
  }
}

function showPrimate(omicronArr , index) {
  var primates = omicronArr[index];
  var primerInfo = '<h3>' + primates.name + '</h3><br><p>' + "<a href='https://github.com/'" + primates.git_username + ">https://github.com/" + primates.git_username + "</a><br>" + primates.shoutout + "</p>";
console.log(primates)
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
  intPrimeNum = parseInt(this.id);
  showPrimate(primates , currentPrimate)
}

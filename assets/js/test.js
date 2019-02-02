console.log('hi')

var myimage = $('#myhead')
console.log(myimage)
// myimage.animate({
//     opacity: 0.25,
//     width: '256px',
//     height: '256px'
// }, 3000, function () {
//     console.log('wow');
//     $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
// });
$(document).ready(function () {
    var small = { width: "150px", height: "150px" };
    var large = { width: "300px", height: "300px" };
    var count = 1;
    $("#myhead").css(small).on('click', function () {
        $(this).animate((count == 1) ? large : small);
        count = 1 - count;
    });
});

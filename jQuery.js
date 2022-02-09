$('document').ready(function(){
    console.log("Let's get ready to party with jQuery!")
})

$('article img').addClass('image-center')

$('p').last().remove()

$('#title').css('font-size', Math.random() * 100)

$('ol').append('<li>This is my contribution</>')

$('aside').replaceWith('<p>I apologize for inconviencing you with this horrible list my good sir<p/>')

$('.form-control').on('keyup blur change',function(){
    let red = $('.form-control').eq(0).val()
    let green = $('.form-control').eq(1).val()
    let blue = $('.form-control').eq(2).val()
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')')
});

$('img').on('click', function(event){
    $(event.target).remove()
})






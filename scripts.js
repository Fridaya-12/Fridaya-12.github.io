
let imagesData = [
    {
        photo: './images/photo1.jpg',
        title: 'Desert',
        description: 'This a vers nice image with shadows of the hills in a desert'  
    },
    {
        photo: './images/photo2.jpg',
        title: 'Sunset',
        description: 'The main focus was on the sunset behind the cactus'  
    },
    {
        photo: './images/photo3.jpg',
        title: 'Beach',
        description: 'The best memory of my life is to swim in the Ocean during the sunset'  
    },
    {
        photo: './images/photo4.jpg',
        title: 'Road',
        description: 'You need only a nice car to drive'
    },
    {
        photo: './images/photo5.jpg',
        title: 'Stars',
        description: 'The stars are the best visible in a dark desert'  
    },
];


$('#next').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++
        loadPhoto(currentPhoto)
        console.log(currentPhoto)
        console.log(imagesData.length)
    } else {
        
    }
});

$('#previous').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--
        loadPhoto(currentPhoto)
        console.log(currentPhoto)
        console.log(imagesData.length)
    } else {
        
    }
});

let i = 0

imagesData.forEach((element, index) => {
    $('#keret').append('<div class="thumbnailKep" data-index="'+ i +'"><img class= "kisKep" data-index="'+ i +'" width="100px" margin="0" padding="0"><title>'+ element.title +'</title></div>');
    $("img").last().attr('src', element.photo);
    i = i + 1;
});

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('img.kisKep').css({'margin': '5px 5px', 'box-shadow': '0px 8px 5px -6px black'});
    $('img.kisKep[data-index='+ photoNumber +']').css({'margin': '0 5px 10px 5px', 'box-shadow': '0px 12px 8px -6px black'});
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(''+ imagesData[photoNumber].title +'')
    $('#photo-description').text(''+ imagesData[photoNumber].description +'')
}

loadPhoto(currentPhoto)

console.log(currentPhoto)



$('.thumbnailKep').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    currentPhoto = indexClicked;
    loadPhoto(currentPhoto);
    console.log(indexClicked);
})

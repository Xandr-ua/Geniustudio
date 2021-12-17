function changeResixe(bkock) {
    if(bkock.style.width == '450px', bkock.style.height == '200px') {
        bkock.style.width = '550px';
        bkock.style.height = '300px';
    }
    else{
        bkock.style.width = '450px';
        bkock.style.height = '200px';
    }
}


function colorId() {
    let resId = document.getElementById('res');

    if (resId.style.backgroundColor == 'aqua') {
        resId.style.backgroundColor = 'red';
    } else {
        resId.style.backgroundColor = 'aqua';
    }
    
}

// document.getElementsByClassName('.resize').onclick = function (textClass) {
//     if (textClass.style.display == 'none') {
//         textClass.style.display = 'block';
//     }
// };

function textClass() {
    let resClass = document.getElementsByClassName('resize');

    if (textClass.style.display == 'none') {
        textClass.style.display = 'block';
    } else {
        textClass.style.display = 'none';
    }
    
}


console.log("Drag And Drop Project");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) =>{
    // console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e)=>{
    // console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        // console.log('drapOver has been triggred');
    });

    whiteBox.addEventListener('dragenter', (e)=>{
        e.target.className += ' dashed'; 
        // console.log('drapEnter has been triggred');
    });

    whiteBox.addEventListener('dragleave', (e)=>{
        e.target.className = ' whiteBox';
        // console.log('drapLeave has been triggred');
    });

    whiteBox.addEventListener('drop', (e)=>{
        e.target.append(imgBox);
        // console.log('drop has been triggered ');
    });
}
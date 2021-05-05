const $register = document.getElementById('register');
const $modalOne = document.getElementById('one');
const $modalTwo = document.getElementById('two');
const $back = document.getElementById('back');

const $stepOne = $modalOne.clientHeight;
const $stepTwo = $modalTwo.clientHeight;





$register.addEventListener('click', () => {
    console.log('тык');
    // $modalTwo.style.transform = 'translateY(' + `${ - 333}px`;
    $modalTwo.style.transform = 'translateY(' + `${ - $stepOne - 5}px`;
    $modalOne.style.opacity = '0';
});

$back.addEventListener('click', () => {
    console.log('тук');
    // $modalTwo.style.transform = 'translateY(' + `${333}px`;
    $modalTwo.style.transform = 'translateY(' + `${ $stepTwo }px`;
    $modalOne.style.opacity = '1';
});
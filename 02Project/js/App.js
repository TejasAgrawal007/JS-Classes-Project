const copyText = document.querySelector('.copyText');
const past = document.querySelector('.past');


copyText.onclick = () => {
    copyText.select();
    document.execCommand('copy');
}
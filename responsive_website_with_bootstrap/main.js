/* <div class="col-md-5 col-sm-12 text-white">
        <h6>Become a <div id="result"></div></h6> */

const showName = () => {
    let name = document.getElementById('result');
    name.innerHTML = 'a Coding-Expert';


setTimeout(() => {
    name.innerHTML = 'a Web-Developer';
}, 2000);

setTimeout(() => {
    name.innerHTML = 'an Engineer';
}, 4000);

setTimeout(() => {
    name.innerHTML = 'a FreeLancer';
}, 6000);
}
showName();

setInterval(showName, 8000);

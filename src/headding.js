


class Headding{
    creat(text){
        const h2 =  document.createElement('h2');
        h2.innerText = text;
        h2.classList.add('h2');

        document.querySelector('body').appendChild(h2);
    }
}

export default Headding;
const div = document.createElement('div')
const header = document?.querySelector('header')
const h1 = document.querySelector('h1')
const logoContainer = header?.querySelector('.logo')
const videoPlayer = document?.querySelector('.hero video')

const a = document.createElement('a'),
linkContainer = header?.querySelector('.nav-cta')
if(linkContainer){
    a.href = 'https://www.mydigitalschool.com/'
    a.innerText = 'Lien'
    a.target = "_blank"
    linkContainer.append(a)
}






div.textContent = `test`
//div.setAttribute('id', 'test')
logoContainer.append(div)

setTimeout(() => {
    div.removeAttribute('id')
    // videoPlayer.src = 'https://papillonsdenuit.com/wp-content/uploads/2026/08/EDIT-V5-P2N-2026.mp4'
}, 2000);



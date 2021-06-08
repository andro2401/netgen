const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


/*dropdown menu*/

const btn = document.getElementById('btn');
const menu = document.getElementById('submenu');

menu.style.display = 'none';

btn.addEventListener('click', () =>{
    if(menu.style.display == 'none'){
        menu.style.display = 'block';

    } else {
        menu.style.display = 'none';
    }
})
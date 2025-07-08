function showSideNav() {
    const sideBar = document.querySelector('.side-nav-bar')
    sideBar.style.width = '50%'
    const sideBarSwitch = document.querySelector('.sideBarOpen')
    sideBarSwitch.style.opacity = '0'
    const bg = document.querySelector('.behind-sidenav')
    bg.style.width = '100%'

    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
}
function closeSideNav() {
    const sideBar = document.querySelector('.side-nav-bar')
    sideBar.style.width = '0%'
    const sideBarSwitch = document.querySelector('.sideBarOpen')
    sideBarSwitch.style.opacity = '1'
    const bg = document.querySelector('.behind-sidenav')
    bg.style.width = '0%'

    const body = document.querySelector('body')
    body.style.overflow = 'visible'
}
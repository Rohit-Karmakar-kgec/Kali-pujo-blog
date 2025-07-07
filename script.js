function showSideNav() {
    const sideBar = document.querySelector('.side-nav-bar')
    sideBar.style.right = '0%'
    sideBar.style.left = 'auto'
    const sideBarSwitch = document.querySelector('.sideBarOpen')
    sideBarSwitch.style.opacity = '0'
    const bg = document.querySelector('.behind-sidenav')
    bg.style.width = '100%'
}
function closeSideNav() {
    const sideBar = document.querySelector('.side-nav-bar')
    sideBar.style.right = '-100%'
    const sideBarSwitch = document.querySelector('.sideBarOpen')
    sideBarSwitch.style.opacity = '1'
    const bg = document.querySelector('.behind-sidenav')
    bg.style.width = '0%'
}
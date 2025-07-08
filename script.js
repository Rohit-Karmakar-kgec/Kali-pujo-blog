function showSideNav() {
    const sideBar = document.querySelector('.side-nav-bar')
    sideBar.style.width = '50%'
    const sideBarSwitch = document.querySelector('.sideBarOpen')
    sideBarSwitch.style.opacity = '0'
    const bg = document.querySelector('.behind-sidenav')
    bg.style.width = '100%'
}
function closeSideNav() {
    const sideBar = document.querySelector('.side-nav-bar')
    sideBar.style.width = '0%'
    const sideBarSwitch = document.querySelector('.sideBarOpen')
    sideBarSwitch.style.opacity = '1'
    const bg = document.querySelector('.behind-sidenav')
    bg.style.width = '0%'
}
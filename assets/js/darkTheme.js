let changeTheme = document.querySelector('#changeTheme');
let switchMode = localStorage.getItem("switchMode");

const switchTheme = function () {
    let body = document.querySelector('body');
    this.modeDark = () => {
        body.className = "dark";
    }
}

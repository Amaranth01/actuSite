let changeTheme = document.querySelector('#changeTheme');
let switchMode = localStorage.getItem("switchMode");
let body = document.querySelector('body');

export const SwitchTheme = function () {
    this.themeSwitch = () => {
        changeTheme.addEventListener('click', function () {
            // get their switchMode setting
            switchMode = localStorage.getItem('switchMode');
            // if it not current enabled, enable it
            if (switchMode !== 'enable') {
                let darkMode = new DarkMode();
                darkMode.modeDark();
                // if it has been enabled, turn it off
            } else {
                let lightMode = new LightMode();
                lightMode.modeLight();
            }
        });
    }
}

const DarkMode = function () {
    this.modeDark = () => {
        body.className = "dark";
        // Update switchMode in localStorage
        localStorage.setItem('switchMode', 'enable');
    }
}

const LightMode = function () {
    this.modeLight = () => {
        body.className = "light";
        localStorage.setItem('switchMode', null);
    }
}
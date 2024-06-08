document.addEventListener('DOMContentLoaded', function() {
    // Function to apply theme
    function applyTheme(theme) {
      document.body.style.background = theme.background;
      document.body.style.color = theme.color;
      document.body.style.fontFamily = theme.fontFamily;
  
      // Apply additional styles for specific elements if needed
    }
  
    // Theme data
    const themes = {
      theme1: {
        background: 'lightblue',
        color: 'black',
        fontFamily: 'Arial, sans-serif'
      },
      theme2: {
        background: 'lightgreen',
        color: 'white',
        fontFamily: 'Verdana, sans-serif'
      }
    };
  
    // Function to change theme
    window.changeTheme = function(themeName) {
      const selectedTheme = themes[themeName];
      applyTheme(selectedTheme);
      localStorage.setItem('selectedTheme', themeName);
    };
  
    // Apply default theme
    const selectedTheme = localStorage.getItem('selectedTheme');
    if(selectedTheme) {
      applyTheme(themes[selectedTheme]);
    }
  });
  
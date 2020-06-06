window.onload = function() {
    function close() {
        var d = document.querySelector('.mdl-layout');
        d.MaterialLayout.toggleDrawer();
    }
    
    document.querySelector('.mdl-layout__drawer').addEventListener('click', close);
} 

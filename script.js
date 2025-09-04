// Simple client-side auth gate using localStorage
// App page guard + logout (auth temporarily disabled)
(function(){
  var AUTH_DISABLED = true; // Toggle auth requirement
  function isHome() { return document.getElementById('appPage'); }
  function isLoggedIn() { try { return !!localStorage.getItem('auth_token'); } catch(_) { return false; } }
  function ensureAuth(){ if (AUTH_DISABLED) return; if (isHome() && !isLoggedIn()) { location.replace('login.html'); } }
  function setupLogout(){
    document.querySelectorAll('.js-logout').forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        try { localStorage.removeItem('auth_token'); } catch(_) {}
        if (!AUTH_DISABLED) { location.replace('login.html'); }
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function(){ ensureAuth(); setupLogout(); });
})();



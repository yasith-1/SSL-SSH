function show(name, btn, activeClass) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active-ssl', 'active-ssh', 'active-cmp');
        b.style.background = '';
        b.style.color = '';
    });
    document.getElementById('panel-' + name).classList.add('active');
    btn.classList.add(activeClass);
}
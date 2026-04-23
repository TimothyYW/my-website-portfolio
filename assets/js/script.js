document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.cdropdown-container');
    if (!container) return;

    var trigger = container.querySelector(':scope > a');
    var content = container.querySelector('.cdropdown-content');

    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = container.classList.contains('dropdown-open');
        container.classList.toggle('dropdown-open', !isOpen);
        content.style.display = isOpen ? '' : 'flex';
    });

    document.addEventListener('click', function (e) {
        if (!container.contains(e.target)) {
            container.classList.remove('dropdown-open');
            content.style.display = '';
        }
    });
});

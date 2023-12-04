function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    var button = document.getElementById('mode-toggle');
    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️'; // 다크 모드일 때 해 아이콘으로 변경
    } else {
        button.textContent = '🌙'; // 라이트 모드일 때 달 아이콘으로 변경
    }
}

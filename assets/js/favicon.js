// favicon.js
window.onload = function() {
    console.log("Current directory:", window.location.href);
    // faviconのリンクタグを作成
    var link = document.createElement('link');
    link.rel = 'icon';  // faviconの属性
    link.href = 'https://yakatakaya.github.io/assets/images/favicon.ico';  // faviconファイルのパスを指定

    // headにlinkタグを追加
    document.head.appendChild(link);
};

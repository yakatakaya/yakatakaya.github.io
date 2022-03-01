const mermaiding = function() {
    const elements = document.querySelectorAll("pre>code.language-mermaid");
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        const pre = e.parentElement;
        const replace = function(graph) {
            const elem = document.createElement('div');
            elem.innerHTML = graph;
            elem.className = 'mermaid';
            elem.setAttribute('data-processed', 'true');
            pre.parentElement.replaceChild(elem, pre);
        }
        mermaid.mermaidAPI.render('id' + i, e.textContent, replace);
    }
}

if (document.readyState == 'interactive' || document.readyState == 'complete') {
    mermaiding();
}else{
    document.addEventListener("DOMContentLoaded", mermaiding);
}
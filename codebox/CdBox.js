// Find the target element by its class
    const targetElement = document.querySelector('.code-box-wrapper');
    
    // Retrieve the values from data attributes
    const fileValue = targetElement.getAttribute('data-file');
    const langValue = targetElement.getAttribute('data-lang');

    // Get the code content from an HTML element
    const codeContentElement = document.getElementById('code-content');
const codeContent = codeContentElement.innerHTML;

    // Create the necessary elements
    const preElement = document.createElement('pre');
    const syntaxDiv = document.createElement('div');
    syntaxDiv.classList.add('syntax-container', 'notranslate');
    const syntaxHeadDiv = document.createElement('div');
    syntaxHeadDiv.classList.add('syntax-head');
    const syntaxBodyDiv = document.createElement('div');
    syntaxBodyDiv.classList.add('syntax-body', 'has-lines');
    const syntaxLinesDiv = document.createElement('div');
    syntaxLinesDiv.classList.add('syntax-lines');
    const codeElement = document.createElement('code');
    codeElement.classList.add('language-' + langValue); // Add the language class
    codeElement.innerHTML = codeContent; // Set the code content

    // Calculate the number of lines
    const numLines = codeContent.split('\n').length;
    for (let i = 1; i <= numLines; i++) {
        const spanElement = document.createElement('span');
        syntaxLinesDiv.appendChild(spanElement);
    }

    const syntaxFooterDiv = document.createElement('div');
    syntaxFooterDiv.classList.add('syntax-footer');
    const fileSpan = document.createElement('span');
    fileSpan.classList.add('file');
    fileSpan.textContent = fileValue;
    const langSpan = document.createElement('span');
    langSpan.classList.add('lang');
    langSpan.textContent = langValue;

    // Assemble the elements
    syntaxDiv.appendChild(syntaxHeadDiv);
    syntaxBodyDiv.appendChild(syntaxLinesDiv);
    syntaxBodyDiv.appendChild(codeElement);
    syntaxDiv.appendChild(syntaxBodyDiv);
    syntaxFooterDiv.appendChild(fileSpan);
    syntaxFooterDiv.appendChild(langSpan);
    syntaxDiv.appendChild(syntaxFooterDiv);
    preElement.appendChild(syntaxDiv);

    // Append the code box to the target element
    targetElement.appendChild(preElement);
    
    // Apply syntax highlighting using Prism.js
    Prism.highlightElement(codeElement);

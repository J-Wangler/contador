const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    const count = text.length;
    charCount.textContent = count + (count === 1 ? ' caractere' : ' caracteres');
});

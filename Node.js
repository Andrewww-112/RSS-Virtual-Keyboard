const keyboard = document.querySelector('.keyboard');
const input = document.querySelector('#keyboard-input');

// Function to handle key press
const handleKeyPress = (e) => {
  // Get the pressed key
  const key = e.target.dataset.letter;
  
  // Handle different keys
  switch (key) {
    case 'backspace':
      input.value = input.value.slice(0, -1);
      break;
    case 'capslock':
      keyboard.classList.toggle('capslock-active');
      break;
    case 'shift':
      keyboard.classList.toggle('shift-active');
      break;
    case 'enter':
      input.value += '\n';
      break;
    case 'space':
      input.value += ' ';
      break;
    default:
      if (keyboard.classList.contains('capslock-active') || keyboard.classList.contains('shift-active')) {
        input.value += key.toUpperCase();
      } else {
        input.value += key.toLowerCase();
      }
      break;
  }
}

// Add event listener to keys
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', handleKeyPress));
import 'dap-design-system/dist/dds.js';
import 'dap-design-system/dist/light.theme.css'
import '/src/style.css'

const button = document.getElementById('open-modal')

button.addEventListener('click', () => {
    console.log(modal.open) 
    modal.show()
})

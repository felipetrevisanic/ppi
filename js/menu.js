document.addEventListener('DOMContentLoaded', (e)=>{
    const btn = document.querySelectorAll('.order-lista-btn')

    btn.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault()

            button.id === 'novoPedido' ? (window.location.href = '../Pages/Order.html') : ''
            button.id === 'pedido' ? (window.location.href = '') : ''
            button.id === 'menu' ? (window.location.href = '') : ''
            button.id === 'logout' ? (window.location.href = '../Pages/Login.html') : ''

            
        })
    })
})
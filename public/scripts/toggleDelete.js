function toggleHandler() {
    console.log('Loading...')
    const toggleButton = document.getElementById('toggleEditBtn');
    let toggle = false;
    toggleButton.addEventListener('click', () => {
        const deleteButtons = document.querySelectorAll('.deleteBtn');
        deleteButtons.forEach((deleteBtn) => {
            deleteBtn.hidden = toggle;
        })
        toggle = !toggle;
    })
}

toggleHandler();
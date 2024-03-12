    let maxField = 100;
    let addButton = document.querySelector('.add_button');
    let wrapper = document.querySelector('.field_wrapper');
    let x = 1;

    addButton.addEventListener('click', function () {
        if (x < maxField) {
            x++;
            let newInput = document.createElement('div');
            newInput.innerHTML = '<input type="text"> <button class="remove_button">Remove</button> <br><br>';
            wrapper.append(newInput);
        } 
    });

    wrapper.addEventListener('click', function (e) {
        let target = e.target;
        if (target.classList.contains('remove_button')) {
            target.parentElement.remove();
            x--;
        }
    });


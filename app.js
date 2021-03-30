  
    deleteButton.forEach(function(button, index){
        button.addEventListener('click', function(e){
            console.log(e.path[1].childNodes);
           
           
           let deletedStorage = localStorage.getItem('item');
           let deletedStorageParsed = JSON.parse(deletedStorage);

                deletedStorageParsed.splice(index, 1);
                console.log(deletedStorageParsed);
                localStorage.setItem('item',JSON.stringify(deletedStorageParsed));
            if(deletedStorageParsed.length === 0){
                let todoList = document.querySelector('ul');
                todoList.innerHTML = '';
                let todoItem = document.createElement('li');
                todoItem.innerHTML = `No more todos!`;
                
                todoList.appendChild(todoItem);
                displayLocalStorage();
               
                
                

            } else {
                localStorage.setItem('item',JSON.stringify(deletedStorageParsed));
            }
            

        })
    })
}

let preloader = document.getElementById('preloader'); 
 
fetch('https://jsonplaceholder.typicode.com/users') 
    .then((response) => { 
       return response.json(); 
    }) 
    .then((data) => { 
        data.forEach(item => { 
            document.getElementById('box').innerHTML += ` 
                <h1>Name: ${item.name}</h1> 
                <h5>Username <b>${item.username}</b></h5> 
                <h5>Email : <b>${item.email}</b> </h5> 
                <h5>ID: <b>${item.id}</b></h5>  
                <hr>         
            `; 
        }); 
        preloader.style.display = 'none'; 
    }) 
    .catch((error) => { 
        console.error('данные загружается:', error); 
        preloader.style.display = 'none'; 
    });
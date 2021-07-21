function cowinData(){
    let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=781171&date=21-07-2021`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);
        }
        else{
            alert('Something went wrong');
        }
    };
    xhr.send();
    
}
cowinData();
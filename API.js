class API{
    static getAll(){
        return new Promise((resolve,reject) => {
            let xml = new XMLHttpRequest();
            xml.open('GET', 'https://raw.githubusercontent.com/Danilovesovic/pitanja/main/data.json');
            xml.onreadystatechange = function (){
                if(xml.readyState === 4 && xml.status === 200){
                    resolve(JSON.parse(xml.responseText));
                }
            }
            xml.send()
        } )
    }
}
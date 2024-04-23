class Utils {
    static randomize(arr){
        let arrCopy = [].concat(arr);
        let forExport = []
        for (let i = 0; i < arr.length; i++){
            let rand = Math.floor(Math.random() * arrCopy.length)
            forExport.push(arrCopy[rand]);
            arrCopy.splice(rand,1)
        }
        return forExport
    }
}
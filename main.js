
let baseURL = 'https://api.imgflip.com/get_memes'

function getInfo(info) {
    if (info) {
        axios.get(baseURL).then(function(result) {
            res = result.data.data.memes.filter(word => word.name.includes(info));
            $("#content").empty()
            res.forEach(element => {
                $("#content").append(`
                <button onclick="$('#${element.id}').toggle()" style="font-size:24px">${element.name}</button><br>
                <img id="${element.id}" src="${element.url}" style="width:${element.width}px;height:${element.height}px"><br>
                `
                )
            });
    
        })
       
    } else {
        axios.get(baseURL).then(function(result) {
            res = result.data.data.memes
            $("#content").empty()
            res.forEach(element => {
                $("#content").append(`
                <button onclick="$('#${element.id}').toggle()" style="font-size:24px">${element.name}</button><br>
                <img id="${element.id}" src="${element.url}" style="width:${element.width}px;height:${element.height}px"><br>
                `
                )
            });
    
        })
    
    }
}
    


$(document).ready(function() {

    getInfo('')

})
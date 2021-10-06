function klik(){
    var list = document.getElementById('unordered list') 
    var input = document.getElementById('input')
    var ul = document.createElement('li')
    var element = document.getElementsByTagName('li')

    var tombol = document.createElement('button')
    tombol.innerHTML = "hapus"
    tombol.onclick = function() {
        list.removeChild(ul)
    }

    ul.innerHTML = input.value
    var stringlist = String(ul.innerHTML)
    for (let index = 0; index < element.length; index++) {
        var e = element[index].innerText
        lastSpace = e.lastIndexOf(" ");
        e = e.substring(0, lastSpace)

        if (stringlist === e) {
            alert(`${stringlist} sudah ada`)
            input.value = ''
            return
        }
        
    }

    document.getElementById('unordered list').appendChild(ul)
    ul.append(" ",tombol)
    input.value = ''
}
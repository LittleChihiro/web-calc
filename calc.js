function mamali() {
    aElement = document.getElementById('a')
    bElement = document.getElementById('b')
    oElement = document.getElementById('operator')
    cElement = document.getElementById('c')

    a = parseInt(aElement.value)
    b = parseInt(bElement.value)
    o = oElement.value
    console.log (a)
    console.log (o)
    console.log (b)

    if (o == '+') {
        c = a + b
    }
    if (o == '-') {
        c = a - b
    }
    if (o == '*') {
        c = a * b
    }
    if (o == '/') {
        c = a / b
    }
    console.log (c)
    cElement.value = c
}

const URL = 'https://www.adlibris.com' +
  '/se/bok/factfulness-tio-knep-som-hjalper-dig-forsta-varlden-9789127149946' +
  '?hej=monika' +
  '&filter=hardcover' +
  '&some=thing' +
  '&gclid=760a19f0-5057-417a-8e6a-b44a01b12a46'


const a = document.createElement('a');
a.href = URL
//let params = a.search  print from ?

let params = new URLSearchParams(a.search)
params.delete('gclid')
const first = URL.split("?")[0]
const newParams = params.toString()
const URLwithoutGCLID = `${first}?${newParams}`

console.log(URLwithoutGCLID);

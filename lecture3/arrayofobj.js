var allProducts = [
    {
        name:'cycle',
        path:'https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70'
    },
    {
        name:'cycle1',
        path:'https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70'
    },
    {
        name:'cycle2',
        path:'https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70'
    },
    {
        name:'cycle3',
        path:'https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70'
    },
    {
        name:'cycle4',
        path:'https://rukminim1.flixcart.com/image/400/400/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70'
    },
]

console.log(allProducts);

if(allProducts.length>0){
    document.write(`<div class="container"> <div class="row">`)
    for(var results of allProducts){
        //  console.log(results);
        document.write(`
            <div class='col-xl-3 text-certer'> 
                <img src='${results.path}' class="img-fluid"/>
                <h3>${results.name}</h3>
            </div>
        `)      
    }
    document.write(`</div></div> `)
}

console.log(document);
// function all with object as obj.functionName() is called method 
// and variables under class are called as properties. 

document.write('<h1>')
document.write("hello")
document.write('</h1>')

var hospital = {
    name: 'lilavati',
    startDate: '10-23-1995',
    patCapacity: 1200
}

for(var i in hospital ){
    document.write(hospital[i])
}
document.write(`<br>`);
document.write(hospital.name)
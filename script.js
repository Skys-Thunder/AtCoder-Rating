async function access(){
    var res = await fetch("https://script.google.com/macros/s/AKfycbyOEzub_UX-nEISIiwk2d1oFsBVKw6w5Sqg28g7k_l7_t3nVSeHz_x5PTb0f4pJk0vi/exec?name=Sky_Thunder");
    var res = await res.json();
    link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([res.map(n=>n.Rating).join("\n")],{type:"text/plain"}));
    link.download = 'Rating.txt';
    link.click();
    link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([res.map(n=>n.Name).join("\n")],{type:"text/plain"}));
    link.download = 'ContestName.txt';
    link.click();
}

access();

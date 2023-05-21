i=document.getElementsByClassName("text-center"),t=[];
for(c=7;c<i.length;c++){
    if(i[c].children[4].innerText!="-") t.push(i[c].children[4].innerText);
}
link = document.createElement('a');
link.href = URL.createObjectURL(new Blob([t.reverse().join("\n")],{type:"text/plain"}));
link.download = 'test.txt';
link.click();

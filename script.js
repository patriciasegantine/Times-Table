function clickMe() {
  let num = document.querySelector("#txtnumber");
  let tab = document.querySelector("#seltab");
  let msg = document.querySelector("#txtmsg");

  if (num.value.length == 0) {
    msg.innerHTML = "[ERROR!] Please fill in the number camp";
  } else {
    let nu = Number(num.value);
    let c = 1;
    tab.innerHTML = "" //usado para limpar a tabela antes da proxima resolucao.
    
    
    
    while (c <= 12) {
      let item = document.createElement(`option`); //cria no HTML um option no select
      item.text = `${nu} x ${c} = ${nu * c}`;
      tab.appendChild(item); //adicionar um elemento-filho
      c++; //tem que usar para incrementar
    }
       
  }
}

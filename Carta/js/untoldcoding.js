const text =
  "'Querida Kemilly venho através deste humilde programa, mostrar tudo o que você é pra mim, mas para isso não basta palavras, porque não possui palavras que te descrevam, creio que Deus colocou você na minha vida, porque você me completa, não consigo viver mais sem você, pois você me completa em tudo, e eu espero te completar em tudo também, posso não ser o melhor com palavras, mas creio que consegui, e com você eu já tenho tudo, não preciso de mais nada para ser feliz, pois eu estando ao seu lado, e você estando feliz eu também estou.Eu Te Amo Muito Meu Amor, minha namorada e futura esposa.    Seu Namorado Lucas Saraiva'";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
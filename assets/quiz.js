/* ================= QUIZ ENGINE ================= */

const QUESTION_BANK = {
  key: [
    {
      q: "Mosquito com corpo marrom sem padrão branco evidente:",
      a: "Culex",
      why: "Culex não possui escamas brancas contrastantes."
    },
    {
      q: "Mosquito com pernas aneladas e desenho em lira no tórax:",
      a: "Aedes aegypti",
      why: "Padrão clássico de identificação do Aedes aegypti."
    }
  ]
};

let idx = 0;
let correct = 0;

function renderQuestion(){
  const item = QUESTION_BANK.key[idx];
  document.getElementById("qText").textContent = item.q;

  const opts = ["Culex", "Anopheles", "Aedes aegypti"];
  const box = document.getElementById("qOpts");
  box.innerHTML = "";

  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, item);
    box.appendChild(btn);
  });
}

function checkAnswer(choice, item){
  const fb = document.getElementById("qFeedback");
  if(choice === item.a){
    correct++;
    fb.textContent = "✅ Correto! " + item.why;
  } else {
    fb.textContent = "❌ Não. " + item.why;
  }
  idx++;
  if(idx < QUESTION_BANK.key.length){
    setTimeout(renderQuestion, 1200);
  } else {
    fb.textContent += ` | Resultado: ${correct}/${QUESTION_BANK.key.length}`;
  }
}

document.addEventListener("DOMContentLoaded", renderQuestion);

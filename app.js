const faqSection = document.getElementsByClassName("faq-wrapper");

const data = fetch("info.json")
  .then((response) => response.json())
  .then((data) => {
    main(data);
  });

const main = ({ data }) => {
  data.forEach((faq) => {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "faq";

    const firstLineDiv = document.createElement("div");
    firstLineDiv.className = "first-line";

    const question = document.createElement("p");
    question.innerText = faq.question;

    const arrow = document.createElement("img");
    arrow.src = "./images/icon-arrow-down.svg";

    firstLineDiv.appendChild(question);
    firstLineDiv.appendChild(arrow);

    wrapperDiv.appendChild(firstLineDiv);

    faqSection[0].appendChild(wrapperDiv);

    wrapperDiv.addEventListener("click", () => clickHandler(wrapperDiv, faq.answer));
  });
};

const clickHandler = (parent, answer) => {
  const spans = document.getElementsByClassName("answer");
  const reverses = document.getElementsByClassName("reverse");

  if (spans.length == 1) {
    if (spans[0].innerText == answer) {
      spans[0].remove();
      reverses[0].classList = [];
      return;
    }
    spans[0].remove();
    reverses[0].classList = [];
  }

  parent.children[0].children[1].className = "reverse";

  const answerTag = document.createElement("answer");
  answerTag.className = "answer";
  answerTag.innerText = answer;

  parent.appendChild(answerTag);
};

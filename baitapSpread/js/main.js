let jumpText = () => {
    let text = document.querySelector(".heading").innerHTML;
    let textArr = [...text];
    let newTextArr = textArr.filter(item => item !== " ");
    let content = "";
    for (let i in newTextArr) {
        content += `<span>${newTextArr[i]}</span>`;
    };
    document.querySelector(".heading").innerHTML = content;
}
jumpText();
const inpTxt = document.querySelector('.input-text')
const submit = document.querySelector('.submit');
const result = document.querySelector('.result-box');
const resultEnt = document.querySelector('.result-box-entire');

submit.addEventListener('click', () => {
    result.innerHTML = "";
    const sentence = inpTxt.value;
    console.log(sentence);
    if (sentence == '') return;
    const final = wordCount(sentence);
    console.log(final);

    for (const el in final) {
        console.log(el)
        console.log(final[el])
        console.log(el)
        console.log(result);
        const tbl = document.createElement("table");
        console.log(tbl);
        const row = tbl.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = el;
        cell2.innerHTML = final[el];
        result.insertAdjacentElement("beforeend", tbl);
    }
    resultEnt.style.display = 'block';
})
//wordcount function
function wordCount(sentence) {
    // to lowercase
    sentence = sentence.toLowerCase();
    // to replace quotes and brackets
    sentence = sentence.replace(/["“”(\[{}\])]|\B['‘]([^'’]+)['’]/g, '$1');
    // to replace rest
    sentence = sentence.replace(/[:‒–—―…]|--|\.\.\./g, ' ');
    // to remove punctuation marks
    sentence = sentence.replace(/[!?;:.,]\B/g, '');

    console.log(sentence);
    //S+ -> search for non - white space characters(words)
    return sentence.match(/\S+/g).reduce(function(count, curWord) {
        if (count.hasOwnProperty(curWord)) ++count[curWord];
        else count[curWord] = 1;
        console.log(count);
        return count;
    }, {});
}
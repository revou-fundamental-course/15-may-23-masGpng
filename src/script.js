const tabLinks = document.querySelectorAll('.nav-item a');
const tabContentParents = document.querySelectorAll('.tab-pane');

tabLinks.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
        tabLinks.forEach(link => link.parentNode.classList.remove('active'));
        tabContentParents.forEach(parent => parent.classList.remove('active'));

        tabLink.parentNode.classList.add('active');
        tabContentParents[index].classList.add('active');
    });
});

let sisiLuas, sisiKeliling, panjangLuas, lebarLuas, panjangKeliling, lebarKeliling;
let outputLuasPersegi, outputKelilingPersegi, outputLuasPpanjang, outputKelilingPpanjang;

const pPanjangInputValue = document.getElementsByName('array[]');

console.log(pPanjangInputValue);

const luasPersegi = (s) => {
    console.log(s.value * s.value);
    sisiLuas = s.value;
    outputLuasPersegi = s.value * s.value;
}

const kelilingPersegi = (s) => {
    console.log(4 * s.value);
    sisiKeliling = s.value;
    outputKelilingPersegi = 4 * s.value;
}

const hitungLuasPersegi = (e) => {
    const output = e.previousElementSibling;
    const outputTag = `
    <p>L = ${sisiLuas} x ${sisiLuas}</p>
    <p>L = ${outputLuasPersegi}</p>
    `;

    output.innerHTML = outputTag;
}

const hitungKelilingPersegi = (e) => {
    const output = e.previousElementSibling;
    const outputTag = `
    <p>K = 4 x ${sisiKeliling}</p>
    <p>K = ${outputKelilingPersegi}</p>
    `;

    output.innerHTML = outputTag;
}

const getValueFromInputs = (formId) => {
    const form = document.getElementById(formId);
    const panjang = form.elements["panjang"].value;
    const lebar = form.elements["lebar"].value;

    return {
        valPanjang: panjang,
        valLebar: lebar
    }
}

const luasPersegiPanjang = () => {
    panjangLuas = getValueFromInputs('luasPersegiPanjang').valPanjang;
    lebarLuas = getValueFromInputs('luasPersegiPanjang').valLebar;
    outputLuasPpanjang = panjangLuas * lebarLuas;
}

const kelilingPersegiPanjang = () => {
    panjangKeliling = getValueFromInputs('kelilingPersegiPanjang').valPanjang;
    lebarKeliling = getValueFromInputs('kelilingPersegiPanjang').valLebar;
    outputKelilingPpanjang = 2 * panjangKeliling + 2 * lebarKeliling;
}

const hitungLuasPersegiPanjang = (e) => {
    const output = e.previousElementSibling;
    const outputTag = `
    <p>L = ${panjangLuas} x ${lebarLuas}</p>
    <p>L = ${outputLuasPpanjang}</p>
    `;

    output.innerHTML = outputTag;
}

const hitungKelilingPersegiPanjang = (e) => {
    const output = e.previousElementSibling;
    const outputTag = `
    <p>K = 2 x (${panjangKeliling} + ${lebarKeliling})</p>
    <p>K = ${outputKelilingPpanjang}</p>
    `;

    output.innerHTML = outputTag;
}

const resetAll = (e) => {
    e.closest('form').querySelector('.output').innerHTML = "";
}
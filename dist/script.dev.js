"use strict";

var tabLinks = document.querySelectorAll('.nav-item a');
var tabContentParents = document.querySelectorAll('.tab-pane');
tabLinks.forEach(function (tabLink, index) {
  tabLink.addEventListener('click', function () {
    tabLinks.forEach(function (link) {
      return link.parentNode.classList.remove('active');
    });
    tabContentParents.forEach(function (parent) {
      return parent.classList.remove('active');
    });
    tabLink.parentNode.classList.add('active');
    tabContentParents[index].classList.add('active');
  });
});
var sisiLuas, sisiKeliling, panjangLuas, lebarLuas, panjangKeliling, lebarKeliling;
var outputLuasPersegi, outputKelilingPersegi, outputLuasPpanjang, outputKelilingPpanjang;
var pPanjangInputValue = document.getElementsByName('array[]');
console.log(pPanjangInputValue);

var luasPersegi = function luasPersegi(s) {
  console.log(s.value * s.value);
  sisiLuas = s.value;
  outputLuasPersegi = s.value * s.value;
};

var kelilingPersegi = function kelilingPersegi(s) {
  console.log(4 * s.value);
  sisiKeliling = s.value;
  outputKelilingPersegi = 4 * s.value;
};

var hitungLuasPersegi = function hitungLuasPersegi(e) {
  var output = e.previousElementSibling;
  var outputTag = "\n    <p>L = ".concat(sisiLuas, " x ").concat(sisiLuas, "</p>\n    <p>L = ").concat(outputLuasPersegi, "</p>\n    ");
  output.innerHTML = outputTag;
};

var hitungKelilingPersegi = function hitungKelilingPersegi(e) {
  var output = e.previousElementSibling;
  var outputTag = "\n    <p>K = 4 x ".concat(sisiKeliling, "</p>\n    <p>K = ").concat(outputKelilingPersegi, "</p>\n    ");
  output.innerHTML = outputTag;
};

var getValueFromInputs = function getValueFromInputs(formId) {
  var form = document.getElementById(formId);
  var panjang = form.elements["panjang"].value;
  var lebar = form.elements["lebar"].value;
  return {
    valPanjang: panjang,
    valLebar: lebar
  };
};

var luasPersegiPanjang = function luasPersegiPanjang() {
  panjangLuas = getValueFromInputs('luasPersegiPanjang').valPanjang;
  lebarLuas = getValueFromInputs('luasPersegiPanjang').valLebar;
  outputLuasPpanjang = panjangLuas * lebarLuas;
};

var kelilingPersegiPanjang = function kelilingPersegiPanjang() {
  panjangKeliling = getValueFromInputs('kelilingPersegiPanjang').valPanjang;
  lebarKeliling = getValueFromInputs('kelilingPersegiPanjang').valLebar;
  outputKelilingPpanjang = 2 * panjangKeliling + 2 * lebarKeliling;
};

var hitungLuasPersegiPanjang = function hitungLuasPersegiPanjang(e) {
  var output = e.previousElementSibling;
  var outputTag = "\n    <p>L = ".concat(panjangLuas, " x ").concat(lebarLuas, "</p>\n    <p>L = ").concat(outputLuasPpanjang, "</p>\n    ");
  output.innerHTML = outputTag;
};

var hitungKelilingPersegiPanjang = function hitungKelilingPersegiPanjang(e) {
  var output = e.previousElementSibling;
  var outputTag = "\n    <p>K = 2 x (".concat(panjangKeliling, " + ").concat(lebarKeliling, ")</p>\n    <p>K = ").concat(outputKelilingPpanjang, "</p>\n    ");
  output.innerHTML = outputTag;
};

var resetAll = function resetAll(e) {
  e.closest('form').querySelector('.output').innerHTML = "";
};
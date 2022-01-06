let textPembukaHasil = '<h3 class="mt-3">Console :</h3><h4 class="hasil">';
let textPenutupHasil = '</h4>';

// Operator Aritmatika
function OpAritmatika(){
	let form = document.getElementById('formAritmatika');
	let VarA = document.getElementById('formAritmatika').AritmatikaVarA.value;
	let VarB = document.getElementById('formAritmatika').AritmatikaVarB.value;
	let JOperator = document.getElementById('formAritmatika').SelOpAritmatika.value;
	let CBVarA = document.getElementById('formAritmatika').CBAritmatikaVarA.checked;
	let CBVarB = document.getElementById('formAritmatika').CBAritmatikaVarB.checked;
	let Coding = document.getElementById('CodingAritmatika');
	let Value = document.getElementById('AritmatikaValue');

	let textHasil = {
		tambah : "let Hasil = A + B; <br><i>console</i>.log(Hasil);",
		kurang : "let Hasil = A - B; <br><i>console</i>.log(Hasil);",
		kali : "let Hasil = A * B; <br><i>console</i>.log(Hasil);",
		pangkat : "let Hasil = A ** B; <br><i>console</i>.log(Hasil);",
		bagi : "let Hasil = A / B; <br><i>console</i>.log(Hasil);",
		modulus : "let Hasil = A % B; <br><i>console</i>.log(Hasil);"
	}

	let textCodingCB = {
		CBVarAB : `let A = "${VarA}"; <br> let B = "${VarB}"; <br><br>`,
		CBVarA : `let A = "${VarA}"; <br> let B = ${VarB}; <br><br>`,
		CBVarB : `let A = ${VarA}; <br> let B = "${VarB}"; <br><br>`,
		NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
	}

	let c = Number(VarA);
	let d = Number(VarB);

	if (JOperator == "+") {
		if(CBVarA && CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} "${VarA + VarB}" ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} "${c + VarB}" ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} "${VarA + d}" ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} ${c + d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "-") {
		if(CBVarA && CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA - VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${c - VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA - d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${c - d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "*") {
		if(CBVarA && CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA * VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${c * VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA * d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${c * d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "**") {
		if(CBVarA && CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA ** VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${c ** VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA ** d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${c ** d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "/") {
		if(CBVarA && CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA / VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${c / VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA / d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${c / d} ${textPenutupHasil}`;
			form.reset();
		}
	}else{
		if(CBVarA && CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA % VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${c % VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA % d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${c % d} ${textPenutupHasil}`;
			form.reset();
		}
	}
}
//end Operator Aritmatika

// Operator Penugasan
function OpPenugasan(){
	var form = document.getElementById('formPenugasan');
	var VarA = document.getElementById('formPenugasan').PenugasanVarA.value;
	var VarB = document.getElementById('formPenugasan').PenugasanVarB.value;
	var JOperator = document.getElementById('formPenugasan').SelOpPenugasan.value;
	var CBVarA = document.getElementById('formPenugasan').CBPenugasanVarA.checked;
	var CBVarB = document.getElementById('formPenugasan').CBPenugasanVarB.checked;
	var Coding = document.getElementById('CodingPenugasan');
	var Value = document.getElementById('PenugasanValue');

	let textHasil = {
		tambah : "A += B; <br><i>console</i>.log(A);",
		kurang : "A -= B; <br><i>console</i>.log(A);",
		kali : "A *= B; <br><i>console</i>.log(A);",
		pangkat : "A **= B; <br><i>console</i>.log(A);",
		bagi : "A /= B; <br><i>console</i>.log(A);",
		modulus : "A %= B; <br><i>console</i>.log(A);"
	}

	let textCodingCB = {
		CBVarAB : `let A = "${VarA}"; <br> let B = "${VarB}"; <br><br>`,
		CBVarA : `let A = "${VarA}"; <br> let B = ${VarB}; <br><br>`,
		CBVarB : `let A = ${VarA}; <br> let B = "${VarB}"; <br><br>`,
		NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
	}

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == "+="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} "${VarA += VarB}" ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} "${c += VarB}" ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} "${VarA += d}" ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.tambah}`;
			Value.innerHTML = `${textPembukaHasil} ${c += d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "-="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA -= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB}${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${c -= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA}${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA -= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB}${textHasil.kurang}`;
			Value.innerHTML = `${textPembukaHasil} ${c -= d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "*="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA *= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${c *= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA *= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.kali}`;
			Value.innerHTML = `${textPembukaHasil} ${c *= d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "**="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA **= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${c **= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA **= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.pangkat}`;
			Value.innerHTML = `${textPembukaHasil} ${c **= d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "/="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA /= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${c /= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA /= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.bagi}`;
			Value.innerHTML = `${textPembukaHasil} ${c /= d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "%="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA %= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${c %= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA %= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.modulus}`;
			Value.innerHTML = `${textPembukaHasil} ${c %= d} ${textPenutupHasil}`;
			form.reset();
		}
	}	
}
// end Operator Penugasan

// operator Perbandingan
function OpPerbandingan(){
	var form = document.getElementById('formPerbandingan');
	var VarA = document.getElementById('formPerbandingan').PerbandinganVarA.value;
	var VarB = document.getElementById('formPerbandingan').PerbandinganVarB.value;
	var JOperator = document.getElementById('formPerbandingan').SelOpPerbandingan.value;
	var CBVarA = document.getElementById('formPerbandingan').CBPerbandinganVarA.checked;
	var CBVarB = document.getElementById('formPerbandingan').CBPerbandinganVarB.checked;
	var Coding = document.getElementById('CodingPerbandingan');
	var Value = document.getElementById('PerbandinganValue');

	let textHasil = {
		lBesar : "let Hasil = A > B; <br><i>console</i>.log(Hasil);",
		lKecil : "let Hasil = A < B; <br><i>console</i>.log(Hasil);",
		lBesarSD : "let Hasil = A >= B; <br><i>console</i>.log(Hasil);",
		lKecilSD : "let Hasil = A <= B; <br><i>console</i>.log(Hasil);",
		samaDengan2 : "let Hasil = A == B; <br><i>console</i>.log(Hasil);",
		samaDengan3 : "let Hasil = A === B; <br><i>console</i>.log(Hasil);",
		tSD1 : "let Hasil = A != B; <br><i>console</i>.log(Hasil);",
		tSD2 : "let Hasil = A !== B; <br><i>console</i>.log(Hasil);"
	}

	let textCodingCB = {
		CBVarAB : `let A = "${VarA}"; <br> let B = "${VarB}"; <br><br>`,
		CBVarA : `let A = "${VarA}"; <br> let B = ${VarB}; <br><br>`,
		CBVarB : `let A = ${VarA}; <br> let B = "${VarB}"; <br><br>`,
		NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
	}

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == ">"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA > VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${c > VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA > d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${c > d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "<"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA < VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${c < VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${ VarA < d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${c < d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == ">="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA >= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${c >= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA >= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${c >= d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "<="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA <= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${c <= VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA <= d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${c <= d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA == VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${c == VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA == d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${c == d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "==="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA === VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${c === VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA === d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${c === d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "!="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA != VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${c != VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA != d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${c != d} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "!=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA !== VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${c !== VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA !== d} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${c !== d} ${textPenutupHasil}`;
			form.reset();
		}
	}	
}
// end Operator Perbandingan

// Operator Logika
function OpLogika(){
	var form = document.getElementById('formLogika');
	var VarA = document.getElementById('formLogika').LogikaVarA.value;
	var VarB = document.getElementById('formLogika').LogikaVarB.value;
	var JOperator = document.getElementById('formLogika').SelOpLogika.value;
	var CBVarA = document.getElementById('formLogika').CBLogikaVarA.checked;
	var CBVarB = document.getElementById('formLogika').CBLogikaVarB.checked;
	var Coding = document.getElementById('CodingLogika');
	var Value = document.getElementById('LogikaValue');

	let textHasil = {
		dan : "let Hasil = A && B; <br><i>console</i>.log(Hasil);",
		atau : "let Hasil = A || B; <br><i>console</i>.log(Hasil);"
	}

	let textCodingCB = {
		CBVarAB : `let A = !${VarA}; <br> let B = !${VarB}; <br><br>`,
		CBVarA : `let A = !${VarA}; <br> let B = ${VarB}; <br><br>`,
		CBVarB : `let A = ${VarA}; <br> let B = !${VarB}; <br><br>`,
		NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
	}

	if (JOperator == "&&") {
		if (CBVarA && CBVarB) {
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!true && !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!true && !false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!false && !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!false && !false} ${textPenutupHasil}`;
				form.reset();
			}
		}else if(CBVarA){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!true && true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!true && false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!false && true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${!false && false} ${textPenutupHasil}`;
				form.reset();
			}
		}else if(CBVarB){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${true && !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${true && !false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${false && !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${false && !false} ${textPenutupHasil}`;
				form.reset();
			}
		}else{
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${true && true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${true && false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${false && true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.dan}`;
				Value.innerHTML = `${textPembukaHasil} ${false && false} ${textPenutupHasil}`;
				form.reset();
			}
		}
	}else{
		if (CBVarA && CBVarB) {
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!true || !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!true || !false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} var ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!false || !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarAB} var ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!false || !false} ${textPenutupHasil}`;
				form.reset();
			}
		}else if(CBVarA){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!true || true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!true || false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!false || true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${!false || false} ${textPenutupHasil}`;
				form.reset();
			}
		}else if(CBVarB){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${true || !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${true || !false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${false || !true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${false || !false} ${textPenutupHasil}`;
				form.reset();
			}
		}else{
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${true || true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${true || false} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${false || true} ${textPenutupHasil}`;
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.atau}`;
				Value.innerHTML = `${textPembukaHasil} ${false || false} ${textPenutupHasil}`;
				form.reset();
			}
		}
	}
}
// end Operator Logika

// Operator Bitwise
function OpBitwise(){
	var form = document.getElementById('formBitwise');
	var VarA = document.getElementById('formBitwise').BitwiseVarA.value;
	var VarB = document.getElementById('formBitwise').BitwiseVarB.value;
	var JOperator = document.getElementById('formBitwise').SelOpBitwise.value;
	var CBVarA = document.getElementById('formBitwise').CBBitwiseVarA.checked;
	var CBVarB = document.getElementById('formBitwise').CBBitwiseVarB.checked;
	var Coding = document.getElementById('CodingBitwise');
	var Value = document.getElementById('BitwiseValue');

	let textHasil = {
		and : "let Hasil = A & B; <br><i>console</i>.log(Hasil);",
		or : "let Hasil = A | B; <br><i>console</i>.log(Hasil);",
		xor : "let Hasil = A ^ B; <br><i>console</i>.log(Hasil);",
		rightShift : "let Hasil = A >> B; <br><i>console</i>.log(Hasil);",
		leftShift : "let Hasil = A << B; <br><i>console</i>.log(Hasil);",
		rightShiftU : "let Hasil = A >>> B; <br><i>console</i>.log(Hasil);",
	}

	let textCodingCB = {
		CBVarAB : `let A = ~${VarA}; <br> let B = ~${VarB}; <br><br>`,
		CBVarA : `let A = ~${VarA}; <br> let B = ${VarB}; <br><br>`,
		CBVarB : `let A = ${VarA}; <br> let B = ~${VarB}; <br><br>`,
		NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
	}

	if(JOperator == "&"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.and}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA & ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.VarA} ${textHasil.and}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA & VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.VarB} ${textHasil.and}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA & ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.and}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA & VarB} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "|"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.or}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA | ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.VarA} ${textHasil.or}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA | VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.VarB} ${textHasil.or}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA | ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.or}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA | VarB} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "^"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.xor}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA ^ ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.VarA} ${textHasil.xor}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA ^ VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.VarB} ${textHasil.xor}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA ^ ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.xor}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA ^ VarB} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "<<"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.leftShift}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA << ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.VarA} ${textHasil.leftShift}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA << VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.VarB} ${textHasil.leftShift}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA << ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.leftShift}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA << VarB} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == ">>"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.rightShift}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA >> ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.VarA} ${textHasil.rightShift}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA >> VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.VarB} ${textHasil.rightShift}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA >> ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.rightShift}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA >> VarB} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == ">>>"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.rightShiftU}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA >>> ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.VarA} ${textHasil.rightShiftU}`;
			Value.innerHTML = `${textPembukaHasil} ${~VarA >>> VarB} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.VarB} ${textHasil.rightShiftU}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA >>> ~VarB} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.rightShiftU}`;
			Value.innerHTML = `${textPembukaHasil} ${VarA >>> VarB} ${textPenutupHasil}`;
			form.reset();
		}
	}
}
// end Operator Bitwise

// Operator Ternary
function OpTernary(){
	var form = document.getElementById('formTernary');
	var VarA = document.getElementById('formTernary').TernaryVarA.value;
	var VarB = document.getElementById('formTernary').TernaryVarB.value;
	var JOperator = document.getElementById('formTernary').SelOpTernary.value;
	var CBVarA = document.getElementById('formTernary').CBTernaryVarA.checked;
	var CBVarB = document.getElementById('formTernary').CBTernaryVarB.checked;
	var Coding = document.getElementById('CodingTernary');
	var Value = document.getElementById('TernaryValue');

	let textHasil = {
		lBesar : "let Hasil = (A > B) ? true : false; <br><i>console</i>.log(Hasil);",
		lKecil : "let Hasil = (A < B) ? true : false; <br><i>console</i>.log(Hasil);",
		lBesarSD : "let Hasil = (A >= B) ? true : false; <br><i>console</i>.log(Hasil);",
		lKecilSD : "let Hasil = (A <= B) ? true : false; <br><i>console</i>.log(Hasil);",
		samaDengan2 : "let Hasil = (A == B) ? true : false; <br><i>console</i>.log(Hasil);",
		samaDengan3 : "let Hasil = (A === B) ? true : false; <br><i>console</i>.log(Hasil);",
		tSD1 : "let Hasil = (A != B) ? true : false; <br><i>console</i>.log(Hasil);",
		tSD2 : "let Hasil = (A !== B) ? true : false; <br><i>console</i>.log(Hasil);"
	}

	let textCodingCB = {
		CBVarAB : `let A = "${VarA}"; <br> let B = "${VarB}"; <br><br>`,
		CBVarA : `let A = "${VarA}"; <br> let B = ${VarB}; <br><br>`,
		CBVarB : `let A = ${VarA}; <br> let B = "${VarB}"; <br><br>`,
		NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
	}

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == ">"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA > VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${(c > VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA > d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lBesar}`;
			Value.innerHTML = `${textPembukaHasil} ${(c > d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "<"){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA < VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${(c < VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA < d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lKecil}`;
			Value.innerHTML = `${textPembukaHasil} ${(c < d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == ">="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA >= VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(c >= VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA >= d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lBesarSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(c >= d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "<="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA <= VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(c <= VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA <= d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.lKecilSD}`;
			Value.innerHTML = `${textPembukaHasil} ${(c <= d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA == VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${(c == VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA == d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.samaDengan2}`;
			Value.innerHTML = `${textPembukaHasil} ${(c == d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "==="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA === VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${(c === VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA === d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.samaDengan3}`;
			Value.innerHTML = `${textPembukaHasil} ${(c === d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "!="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA != VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${(c != VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA != d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.tSD1}`;
			Value.innerHTML = `${textPembukaHasil} ${(c != d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "!=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA !== VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${(c !== VarB) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${(VarA !== d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.tSD2}`;
			Value.innerHTML = `${textPembukaHasil} ${(c !== d) ? true : false} ${textPenutupHasil}`;
			form.reset();
		}
	}	
}
// end Operator Ternary
// Operator Aritmatika
function OpAritmatika(){
	var hasil;

	var form = document.getElementById('formAritmatika');
	var VarA = document.getElementById('formAritmatika').AritmatikaVarA.value;
	var VarB = document.getElementById('formAritmatika').AritmatikaVarB.value;
	var JOperator = document.getElementById('formAritmatika').SelOpAritmatika.value;

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == "+"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = VarA + VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Penjumlahan dari "'+ VarA +'" + "'+ VarB +'" adalah = "'+ hasil +'"';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = c + VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Penjumlahan dari '+ c +' + "'+ VarB +'" adalah = "'+ hasil +'"';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			hasil = VarA + d;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Penjumlahan dari "'+ VarA +'" + '+ d +' adalah = "'+ hasil + '"';
			form.reset();
		}else{
			hasil = c + d;
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Penjumlahan dari "+ c +" + "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "-"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = VarA - VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pengurangan dari "'+ VarA +'" - "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = c - VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pengurangan dari '+ c +' - "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			hasil = VarA - d;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pengurangan dari "'+ VarA +'" - '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c - d;
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Pengurangan dari "+ c +" - "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "*"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = VarA * VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Perkalian dari "'+ VarA +'" * "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = c * VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Perkalian dari '+ c +' * "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			hasil = VarA * d;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Perkalian dari "'+ VarA +'" * '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c * d;
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Perkalian dari "+ c +" * "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "**"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = VarA ** VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pemangkatan dari "'+ VarA +'" ** "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = c ** VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pemangkatan dari '+ c +' ** "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			hasil = VarA ** d;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pemangkatan dari "'+ VarA +'" ** '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c ** d;
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Pemangkatan dari "+ c +" ** "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "/"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = VarA / VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pembagian dari "'+ VarA +'" / "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = c / VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pembagian dari '+ c +' / "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			hasil = VarA / d;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pembagian dari "'+ VarA +'" / '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c / d;
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Pembagian dari "+ c +" / "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "%"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = VarA % VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Modulus/Sisa bagi dari "'+ VarA +'" % "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			hasil = c % VarB;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Modulus/Sisa bagi dari '+ c +' % "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			hasil = VarA % d;
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Modulus/Sisa bagi dari "'+ VarA +'" % '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c % d;
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Modulus/Sisa bagi dari "+ c +" % "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}	
}
// end Operator Aritmatika

// Operator Penugasan
function OpPenugasan(){
	var form = document.getElementById('formPenugasan');
	var VarA = document.getElementById('formPenugasan').PenugasanVarA.value;
	var VarB = document.getElementById('formPenugasan').PenugasanVarB.value;
	var JOperator = document.getElementById('formPenugasan').SelOpPenugasan.value;

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == "+="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			VarA += VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Ditambah dengan "'+ VarB +'" adalah = "'+ VarA +'"';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			c += VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Ditambah dengan "'+ VarB +'" adalah = "'+ c +'"';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			VarA += d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Ditambah dengan '+ d +' adalah = "'+ VarA +'"';
			form.reset();
		}else{
			c += d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Ditambah dengan '+ d +' adalah = '+ c;
			form.reset();
		}
	}else if(JOperator == "-="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			VarA -= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikurang dengan "'+ VarB +'" adalah = '+ VarA;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			c -= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikurang dengan "'+ VarB +'" adalah = '+ c;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			VarA -= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikurang dengan '+ d +' adalah = '+ VarA;
			form.reset();
		}else{
			c -= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikurang dengan '+ d +' adalah = '+ c;
			form.reset();
		}
	}else if(JOperator == "*="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			VarA *= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikali dengan "'+ VarB +'" adalah = '+ VarA;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			c *= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikali dengan "'+ VarB +'" adalah = '+ c;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			VarA *= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikali dengan '+ d +' adalah = '+ VarA;
			form.reset();
		}else{
			c *= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dikali dengan '+ d +' adalah = '+ c;
			form.reset();
		}
	}else if(JOperator == "**="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			VarA **= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dipangkatkan dengan "'+ VarB +'" adalah = '+ VarA;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			c **= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dipangkatkan dengan "'+ VarB +'" adalah = '+ c;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			VarA **= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dipangkatkan dengan '+ d +' adalah = '+ VarA;
			form.reset();
		}else{
			c **= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dipangkatkan dengan '+ d +' adalah = '+ c;
			form.reset();
		}
	}else if(JOperator == "/="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			VarA /= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dibagi dengan "'+ VarB +'" adalah = '+ VarA;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			c /= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dibagi dengan "'+ VarB +'" adalah = '+ c;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			VarA /= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dibagi dengan '+ d +' adalah = '+ VarA;
			form.reset();
		}else{
			c /= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dibagi dengan '+ d +' adalah = '+ c;
			form.reset();
		}
	}else if(JOperator == "%="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			VarA %= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dimodulus dengan "'+ VarB +'" adalah = '+ VarA;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			c %= VarB;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dimodulus dengan "'+ VarB +'" adalah = '+ c;
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			VarA %= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dimodulus dengan '+ d +' adalah = '+ VarA;
			form.reset();
		}else{
			c %= d;
			document.getElementById('PenugasanValue').innerHTML = 'Hasil Variabel A setelah Diisi dan Dimodulus dengan '+ d +' adalah = '+ c;
			form.reset();
		}
	}	
}
// end Operator Penugasan


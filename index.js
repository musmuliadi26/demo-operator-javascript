function OpAritmatika(){
	var hasil;

	var form = document.getElementById('formAritmatika');
	var VarA = document.getElementById('formAritmatika').AritmatikaVarA.value;
	var VarB = document.getElementById('formAritmatika').AritmatikaVarB.value;
	var JOperator = document.getElementById('formAritmatika').SelOpAritmatika.value;

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == "+"){
		if(document.getElementById('CheckboxVarA').checked && document.getElementById('CheckboxVarB').checked){
			hasil = VarA + VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Penjumlahan dari "'+ VarA +'" + "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarB').checked){
			hasil = c + VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Penjumlahan dari '+ c +' + "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarA').checked){
			hasil = VarA + d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Penjumlahan dari "'+ VarA +'" + '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c + d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Penjumlahan dari "+ c +" + "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "-"){
		if(document.getElementById('CheckboxVarA').checked && document.getElementById('CheckboxVarB').checked){
			hasil = VarA - VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pengurangan dari "'+ VarA +'" - "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarB').checked){
			hasil = c - VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pengurangan dari '+ c +' - "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarA').checked){
			hasil = VarA - d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pengurangan dari "	'+ VarA +'" - '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c - d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Pengurangan dari "+ c +" - "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "*"){
		if(document.getElementById('CheckboxVarA').checked && document.getElementById('CheckboxVarB').checked){
			hasil = VarA * VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Perkalian dari "'+ VarA +'" * "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarB').checked){
			hasil = c * VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Perkalian dari '+ c +' * "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarA').checked){
			hasil = VarA * d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Perkalian dari "'+ VarA +'" * '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c * d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Perkalian dari "+ c +" * "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "**"){
		if(document.getElementById('CheckboxVarA').checked && document.getElementById('CheckboxVarB').checked){
			hasil = VarA ** VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pemangkatan dari "'+ VarA +'" ** "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarB').checked){
			hasil = c ** VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pemangkatan dari '+ c +' ** "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarA').checked){
			hasil = VarA ** d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pemangkatan dari "'+ VarA +'" ** '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c ** d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Pemangkatan dari "+ c +" ** "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "/"){
		if(document.getElementById('CheckboxVarA').checked && document.getElementById('CheckboxVarB').checked){
			hasil = VarA / VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pembagian dari "'+ VarA +'" / "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarB').checked){
			hasil = c / VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pembagian dari '+ c +' / "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarA').checked){
			hasil = VarA / d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Pembagian dari "'+ VarA +'" / '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c / d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Pembagian dari "+ c +" / "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}else if(JOperator == "%"){
		if(document.getElementById('CheckboxVarA').checked && document.getElementById('CheckboxVarB').checked){
			hasil = VarA % VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Modulus/Sisa bagi dari "'+ VarA +'" % "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarB').checked){
			hasil = c % VarB;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Modulus/Sisa bagi dari '+ c +' % "'+ VarB +'" adalah = '+ hasil;
			form.reset();
		}else if(document.getElementById('CheckboxVarA').checked){
			hasil = VarA % d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = 'Hasil Modulus/Sisa bagi dari "'+ VarA +'" % '+ d +' adalah = '+ hasil;
			form.reset();
		}else{
			hasil = c % d;
			console.log(hasil);
			document.getElementById('AritmatikaValue').innerHTML = "Hasil Modulus/Sisa bagi dari "+ c +" % "+ d +" adalah = "+ hasil;
			form.reset();
		}
	}
	
}


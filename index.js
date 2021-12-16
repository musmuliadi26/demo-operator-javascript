// Operator Aritmatika
function OpAritmatika(){
	var hasil;
	var form = document.getElementById('formAritmatika');
	var VarA = document.getElementById('formAritmatika').AritmatikaVarA.value;
	var VarB = document.getElementById('formAritmatika').AritmatikaVarB.value;
	var JOperator = document.getElementById('formAritmatika').SelOpAritmatika.value;
	var CBVarA = document.getElementById('formAritmatika').CBAritmatikaVarA.checked;
	var CBVarB = document.getElementById('formAritmatika').CBAritmatikaVarB.checked;
	var Coding = document.getElementById('CodingAritmatika');
	var Value = document.getElementById('AritmatikaValue');

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == "+"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = VarA + VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">"'+ hasil +'"</h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = c + VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">"'+ hasil +'"</h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = VarA + d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">"'+ hasil +'"</h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = c + d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "-"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = VarA - VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = c - VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = VarA - d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = c - d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "*"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = VarA * VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = c * VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = VarA * d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = c * d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "**"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = VarA ** VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = c ** VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = VarA ** d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = c ** d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "/"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = VarA / VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = c / VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = VarA / d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = c / d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "%"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = VarA % VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = c % VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = VarA % d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = c % d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
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
	var CBVarA = document.getElementById('formPenugasan').CBPenugasanVarA.checked;
	var CBVarB = document.getElementById('formPenugasan').CBPenugasanVarB.checked;
	var Coding = document.getElementById('CodingPenugasan');
	var Value = document.getElementById('PenugasanValue');

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == "+="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A += B; <br><i>console</i>.log(A);';
			VarA += VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> "'+ VarA +'" </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A += B; <br><i>console</i>.log(A);';
			c += VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> "'+ c +'" </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A += B; <br><i>console</i>.log(A);';
			VarA += d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> "'+ VarA +'" </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A += B; <br><i>console</i>.log(A);';
			c += d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "-="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A -= B; <br><i>console</i>.log(A);';
			VarA -= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A -= B; <br><i>console</i>.log(A);';
			c -= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A -= B; <br><i>console</i>.log(A);';
			VarA -= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A -= B; <br><i>console</i>.log(A);';
			c -= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "*="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A *= B; <br><i>console</i>.log(A);';
			VarA *= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A *= B; <br><i>console</i>.log(A);';
			c *= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A *= B; <br><i>console</i>.log(A);';
			VarA *= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A *= B; <br><i>console</i>.log(A);';
			c *= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "**="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A **= B; <br><i>console</i>.log(A);';
			VarA **= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A **= B; <br><i>console</i>.log(A);';
			c **= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A **= B; <br><i>console</i>.log(A);';
			VarA **= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A **= B; <br><i>console</i>.log(A);';
			c **= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "/="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A /= B; <br><i>console</i>.log(A);';
			VarA /= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A /= B; <br><i>console</i>.log(A);';
			c /= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A /= B; <br><i>console</i>.log(A);';
			VarA /= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A /= B; <br><i>console</i>.log(A);';
			c /= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "%="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A %= B; <br><i>console</i>.log(A);';
			VarA %= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A %= B; <br><i>console</i>.log(A);';
			c %= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A %= B; <br><i>console</i>.log(A);';
			VarA %= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A %= B; <br><i>console</i>.log(A);';
			c %= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}	
}
// end Operator Penugasan

// operator Perbandingan
function OpPerbandingan(){
	var hasil;

	var form = document.getElementById('formPerbandingan');
	var VarA = document.getElementById('formPerbandingan').PerbandinganVarA.value;
	var VarB = document.getElementById('formPerbandingan').PerbandinganVarB.value;
	var JOperator = document.getElementById('formPerbandingan').SelOpPerbandingan.value;
	var CBVarA = document.getElementById('formPerbandingan').CBPerbandinganVarA.checked;
	var CBVarB = document.getElementById('formPerbandingan').CBPerbandinganVarB.checked;
	var Coding = document.getElementById('CodingPerbandingan');
	var Value = document.getElementById('PerbandinganValue');

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == ">"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = VarA > VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = c > VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = VarA > d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = c > d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = VarA < VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = c < VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = VarA < d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = c < d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == ">="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = VarA >= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = c >= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = VarA >= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = c >= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = VarA <= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = c <= VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = VarA <= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = c <= d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = VarA == VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = c == VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = VarA == d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = c == d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "==="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = VarA === VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = c === VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = VarA === d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = c === d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "!="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = VarA != VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = c != VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = VarA != d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = c != d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "!=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = VarA !== VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = c !== VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = VarA !== d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = c !== d;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}	
}
// end Operator Perbandingan

// Operator Logika
function OpLogika(){
	var hasil;

	var form = document.getElementById('formLogika');
	var VarA = document.getElementById('formLogika').LogikaVarA.value;
	var VarB = document.getElementById('formLogika').LogikaVarB.value;
	var JOperator = document.getElementById('formLogika').SelOpLogika.value;
	var CBVarA = document.getElementById('formLogika').CBLogikaVarA.checked;
	var CBVarB = document.getElementById('formLogika').CBLogikaVarB.checked;
	var Coding = document.getElementById('CodingLogika');
	var Value = document.getElementById('LogikaValue');

	if (JOperator == "&&") {
		if (CBVarA && CBVarB) {
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}else if(CBVarA){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}else if(CBVarB){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}else{
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A && B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a && b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}
	}else if(JOperator == "||"){
		if (CBVarA && CBVarB) {
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}else if(CBVarA){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = !'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}else if(CBVarB){
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = !'+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}else{
			if(VarA == "true" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "true" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = true; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "true"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = true; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}else if(VarA == "false" && VarB == "false"){
				Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A || B; <br><i>console</i>.log(hasil);';
				var a = false; var b = false; hasil = a || b;
				Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
				form.reset();
			}
		}
	}
}
// end Operator Logika
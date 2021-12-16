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
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = VarA + VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">"'+ hasil +'"</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = c + VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">"'+ hasil +'"</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = VarA + d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">"'+ hasil +'"</h4>';
			form.reset();
		}else{
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A + B; <br><i>console</i>.log(Hasil);';
			hasil = c + d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "-"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = VarA - VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = c - VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = VarA - d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A - B; <br><i>console</i>.log(Hasil);';
			hasil = c - d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "*"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = VarA * VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = c * VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = VarA * d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A * B; <br><i>console</i>.log(Hasil);';
			hasil = c * d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "**"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = VarA ** VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = c ** VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = VarA ** d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A ** B; <br><i>console</i>.log(Hasil);';
			hasil = c ** d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "/"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = VarA / VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = c / VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = VarA / d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A / B; <br><i>console</i>.log(Hasil);';
			hasil = c / d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}
	}else if(JOperator == "%"){
		if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked && document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = VarA % VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarB.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = c % VarB;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else if(document.getElementById('formAritmatika').CBAritmatikaVarA.checked){
			document.getElementById('CodingAritmatika').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = VarA % d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
			form.reset();
		}else{
			document.getElementById('CodingAritmatika').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var Hasil = A % B; <br><i>console</i>.log(Hasil);';
			hasil = c % d;
			document.getElementById('AritmatikaValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil">'+ hasil +'</h4>';
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
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A += B; <br><i>console</i>.log(A);';
			VarA += VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> "'+ VarA +'" </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A += B; <br><i>console</i>.log(A);';
			c += VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> "'+ c +'" </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A += B; <br><i>console</i>.log(A);';
			VarA += d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> "'+ VarA +'" </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A += B; <br><i>console</i>.log(A);';
			c += d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "-="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A -= B; <br><i>console</i>.log(A);';
			VarA -= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A -= B; <br><i>console</i>.log(A);';
			c -= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A -= B; <br><i>console</i>.log(A);';
			VarA -= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A -= B; <br><i>console</i>.log(A);';
			c -= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "*="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A *= B; <br><i>console</i>.log(A);';
			VarA *= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A *= B; <br><i>console</i>.log(A);';
			c *= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A *= B; <br><i>console</i>.log(A);';
			VarA *= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A *= B; <br><i>console</i>.log(A);';
			c *= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "**="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A **= B; <br><i>console</i>.log(A);';
			VarA **= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A **= B; <br><i>console</i>.log(A);';
			c **= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A **= B; <br><i>console</i>.log(A);';
			VarA **= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A **= B; <br><i>console</i>.log(A);';
			c **= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "/="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A /= B; <br><i>console</i>.log(A);';
			VarA /= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A /= B; <br><i>console</i>.log(A);';
			c /= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A /= B; <br><i>console</i>.log(A);';
			VarA /= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A /= B; <br><i>console</i>.log(A);';
			c /= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}
	}else if(JOperator == "%="){
		if(document.getElementById('formPenugasan').CBPenugasanVarA.checked && document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> A %= B; <br><i>console</i>.log(A);';
			VarA %= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarB.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> A %= B; <br><i>console</i>.log(A);';
			c %= VarB;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
			form.reset();
		}else if(document.getElementById('formPenugasan').CBPenugasanVarA.checked){
			document.getElementById('CodingPenugasan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> A %= B; <br><i>console</i>.log(A);';
			VarA %= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ VarA +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPenugasan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> A %= B; <br><i>console</i>.log(A);';
			c %= d;
			document.getElementById('PenugasanValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ c +' </h4>';
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

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == ">"){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = VarA > VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = c > VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = VarA > d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A > B; <br><i>console</i>.log(hasil);';
			hasil = c > d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<"){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = VarA < VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = c < VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = VarA < d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A < B; <br><i>console</i>.log(hasil);';
			hasil = c < d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == ">="){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = VarA >= VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = c >= VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = VarA >= d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A >= B; <br><i>console</i>.log(hasil);';
			hasil = c >= d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<="){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = VarA <= VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = c <= VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = VarA <= d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A <= B; <br><i>console</i>.log(hasil);';
			hasil = c <= d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "=="){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = VarA == VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = c == VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = VarA == d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A == B; <br><i>console</i>.log(hasil);';
			hasil = c == d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "==="){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = VarA === VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = c === VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = VarA === d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A === B; <br><i>console</i>.log(hasil);';
			hasil = c === d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "!="){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = VarA != VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = c != VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = VarA != d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A != B; <br><i>console</i>.log(hasil);';
			hasil = c != d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "!=="){
		if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked && document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = VarA !== VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarB.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = c !== VarB;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(document.getElementById('formPerbandingan').CBPerbandinganVarA.checked){
			document.getElementById('CodingPerbandingan').innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = VarA !== d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			document.getElementById('CodingPerbandingan').innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A !== B; <br><i>console</i>.log(hasil);';
			hasil = c !== d;
			document.getElementById('PerbandinganValue').innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}	
}
// end Operator Perbandingan
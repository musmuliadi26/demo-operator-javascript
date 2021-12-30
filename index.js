let textPembukaHasil = '<h3 class="mt-3">Console :</h3><h4 class="hasil">';
let textPenutupHasil = '</h4>';

// Operator Aritmatika
function OpAritmatika(){
	let hasil;
	let form = document.getElementById('formAritmatika');
	let VarA = document.getElementById('formAritmatika').AritmatikaVarA.value;
	let VarB = document.getElementById('formAritmatika').AritmatikaVarB.value;
	let JOperator = document.getElementById('formAritmatika').SelOpAritmatika.value;
	let CBVarA = document.getElementById('formAritmatika').CBAritmatikaVarA.checked;
	let CBVarB = document.getElementById('formAritmatika').CBAritmatikaVarB.checked;
	let Coding = document.getElementById('CodingAritmatika');
	let Value = document.getElementById('AritmatikaValue');
	let textHasilPenjumlahan = "var Hasil = A + B; <br><i>console</i>.log(Hasil);";
	let textHasilPengurangan = "var Hasil = A - B; <br><i>console</i>.log(Hasil);";
	let textHasilPerkalian = "var Hasil = A * B; <br><i>console</i>.log(Hasil);";
	let textHasilPemangkatan = "var Hasil = A ** B; <br><i>console</i>.log(Hasil);";
	let textHasilPembagian = "var Hasil = A / B; <br><i>console</i>.log(Hasil);";
	let textHasilModulus = "var Hasil = A % B; <br><i>console</i>.log(Hasil);";

	let c = Number(VarA);
	let d = Number(VarB);

	if(JOperator == "+"){
		if(CBVarA && CBVarB){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = "${VarB}"; <br><br> ${textHasilPenjumlahan}`;
			hasil = VarA + VarB;
			Value.innerHTML = `${textPembukaHasil} "${hasil}" ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `var A = ${VarA}; <br> var B = "${VarB}"; <br><br> ${textHasilPenjumlahan}`;
			hasil = c + VarB;
			Value.innerHTML = `${textPembukaHasil} "${hasil}" ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = ${VarB}; <br><br> ${textHasilPenjumlahan}`;
			hasil = VarA + d;
			Value.innerHTML = `${textPembukaHasil} "${hasil}" ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `var A = ${VarA};<br> var B = ${VarB}; <br><br> ${textHasilPenjumlahan}`;
			hasil = c + d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "-"){
		if(CBVarA && CBVarB){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = "${VarB}"; <br><br> ${textHasilPengurangan}`;
			hasil = VarA - VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `var A = ${VarA}; <br> var B = "${VarB}"; <br><br> ${textHasilPengurangan}`;
			hasil = c - VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = ${VarB}; <br><br> ${textHasilPengurangan}`;
			hasil = VarA - d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `var A = ${VarA}<br> var B = ${VarB}; <br><br> ${textHasilPengurangan}`;
			hasil = c - d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "*"){
		if(CBVarA && CBVarB){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = "${VarB}"; <br><br> ${textHasilPerkalian}`;
			hasil = VarA * VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `var A = ${VarA}; <br> var B = "${VarB}"; <br><br> ${textHasilPerkalian}`;
			hasil = c * VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = ${VarB}; <br><br> ${textHasilPerkalian}`;
			hasil = VarA * d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `var A = ${VarA}; <br> var B = ${VarB}; <br><br> ${textHasilPerkalian}`;
			hasil = c * d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "**"){
		if(CBVarA && CBVarB){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = "${VarB}"; <br><br> ${textHasilPemangkatan}`;
			hasil = VarA ** VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `var A = ${VarA}; <br> var B = "${VarB}"; <br><br> ${textHasilPemangkatan}`;
			hasil = c ** VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = ${VarB}; <br><br> ${textHasilPemangkatan}`;
			hasil = VarA ** d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `var A = ${VarA};<br> var B = ${VarB}; <br><br> ${textHasilPemangkatan}`;
			hasil = c ** d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "/"){
		if(CBVarA && CBVarB){
			Coding.innerHTML = `var A = "${VarA}";<br> var B = "${VarB}"; <br><br> ${textHasilPembagian}`;
			hasil = VarA / VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `var A = ${VarA}; <br> var B = "${VarB}"; <br><br> ${textHasilPembagian}`;
			hasil = c / VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = ${VarB}; <br><br> ${textHasilPembagian}`;
			hasil = VarA / d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `var A = ${VarA}; <br> var B = ${VarB}; <br><br> ${textHasilPembagian}`;
			hasil = c / d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}
	}else if(JOperator == "%"){
		if(CBVarA && CBVarB){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = "${VarB}"; <br><br> ${textHasilModulus}`;
			hasil = VarA % VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML = `var A = ${VarA}; <br> var B = "${VarB}"; <br><br> ${textHasilModulus}`;
			hasil = c % VarB;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML = `var A = "${VarA}"; <br> var B = ${VarB}; <br><br> ${textHasilModulus}`;
			hasil = VarA % d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
			form.reset();
		}else{
			Coding.innerHTML = `var A = ${VarA}; <br> var B = ${VarB}; <br><br> ${textHasilModulus}`;
			hasil = c % d;
			Value.innerHTML = `${textPembukaHasil} ${hasil} ${textPenutupHasil}`;
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

// Operator Bitwise
function OpBitwise(){
	var hasil;

	var form = document.getElementById('formBitwise');
	var VarA = document.getElementById('formBitwise').BitwiseVarA.value;
	var VarB = document.getElementById('formBitwise').BitwiseVarB.value;
	var JOperator = document.getElementById('formBitwise').SelOpBitwise.value;
	var CBVarA = document.getElementById('formBitwise').CBBitwiseVarA.checked;
	var CBVarB = document.getElementById('formBitwise').CBBitwiseVarB.checked;
	var Coding = document.getElementById('CodingBitwise');
	var Value = document.getElementById('BitwiseValue');

	if(JOperator == "&"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A & B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA & ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A & B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA & VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A & B; <br><i>console</i>.log(hasil);';
			hasil = VarA & ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A & B; <br><i>console</i>.log(hasil);';
			hasil = VarA & VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "|"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A | B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA | ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A | B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA | VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A | B; <br><i>console</i>.log(hasil);';
			hasil = VarA | ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A | B; <br><i>console</i>.log(hasil);';
			hasil = VarA | VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "^"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A ^ B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA ^ ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A ^ B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA ^ VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A ^ B; <br><i>console</i>.log(hasil);';
			hasil = VarA ^ ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A ^ B; <br><i>console</i>.log(hasil);';
			hasil = VarA ^ VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<<"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A << B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA << ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A << B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA << VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A << B; <br><i>console</i>.log(hasil);';
			hasil = VarA << ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A << B; <br><i>console</i>.log(hasil);';
			hasil = VarA << VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == ">>"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A >> B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA >> ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A >> B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA >> VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A >> B; <br><i>console</i>.log(hasil);';
			hasil = VarA >> ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A >> B; <br><i>console</i>.log(hasil);';
			hasil = VarA >> VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == ">>>"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A >>> B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA >>> ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = ~'+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A >>> B; <br><i>console</i>.log(hasil);';
			hasil = ~VarA >>> VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = ~'+ VarB +'; <br><br> var hasil = A >>> B; <br><i>console</i>.log(hasil);';
			hasil = VarA >>> ~VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = A >>> B; <br><i>console</i>.log(hasil);';
			hasil = VarA >>> VarB;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}
}
// end Operator Bitwise

// Operator Ternary
function OpTernary(){
	var hasil;

	var form = document.getElementById('formTernary');
	var VarA = document.getElementById('formTernary').TernaryVarA.value;
	var VarB = document.getElementById('formTernary').TernaryVarB.value;
	var JOperator = document.getElementById('formTernary').SelOpTernary.value;
	var CBVarA = document.getElementById('formTernary').CBTernaryVarA.checked;
	var CBVarB = document.getElementById('formTernary').CBTernaryVarB.checked;
	var Coding = document.getElementById('CodingTernary');
	var Value = document.getElementById('TernaryValue');

	var c = Number(VarA);
	var d = Number(VarB);

	if(JOperator == ">"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a > b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA > VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a > b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c > VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a > b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA > d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a > b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c > d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<"){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a < b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA < VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a < b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c < VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a < b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA < d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a < b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c < d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == ">="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a >= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA >= VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a >= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c >= VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a >= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA >= d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a >= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c >= d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "<="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a <= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA <= VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a <= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c <= VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a <= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA <= d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a <= b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c <= d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a == b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA == VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a == b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c == VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a == b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA == d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a == b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c == d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "==="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a === b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA === VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a === b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c === VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a === b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA === d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a === b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c === d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "!="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a != b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA != VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a != b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c != VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a != b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA != d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a != b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c != d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}else if(JOperator == "!=="){
		if(CBVarA && CBVarB){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = "'+ VarB +'"; <br><br> var hasil = (a !== b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA !== VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :</h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarB){
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = "'+ VarB +'"; <br><br> var hasil = (a !== b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c !== VarB) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else if(CBVarA){
			Coding.innerHTML ='var A = "'+ VarA +'";<br> var B = '+ VarB +'; <br><br> var hasil = (a !== b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (VarA !== d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}else{
			Coding.innerHTML ='var A = '+ VarA +';<br> var B = '+ VarB +'; <br><br> var hasil = (a !== b) ? true : false; <br><i>console</i>.log(hasil);';
			hasil = (c !== d) ? true : false;
			Value.innerHTML = '<h3 class="mt-3">Console :<h3><h4 class="hasil"> '+ hasil +' </h4>';
			form.reset();
		}
	}	
}
// end Operator Ternary
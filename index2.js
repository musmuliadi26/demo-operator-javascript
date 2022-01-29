class Logic{
	constructor(value, idform, idCoding, idValue){
		this.value = value;
		this.idform = idform;
		this.idCoding = idCoding;
		this.idValue = idValue;
	}

	Operator(operator) {
		this.operator = operator;

		let form = document.getElementById(this.idform);
		let VarA = form.VarA.value;
		let VarB = form.VarB.value;
		let CBVarA = form.CBVarA.checked;
		let CBVarB = form.CBVarB.checked;
		let Coding = document.getElementById(this.idCoding);
		let Value = document.getElementById(this.idValue);

		const textCodingCB = {
			CBVarAB : `let A = "${VarA}"; <br> let B = "${VarB}"; <br><br>`,
			CBVarA : `let A = "${VarA}"; <br> let B = ${VarB}; <br><br>`,
			CBVarB : `let A = ${VarA}; <br> let B = "${VarB}"; <br><br>`,
			NonCB : `let A = ${VarA}; <br> let B = ${VarB}; <br><br>`
		}

		const textCodingCBLogika = {
			CBVarAB : `let A = !${VarA}; <br> let B = !${VarB}; <br><br>`,
			CBVarA : `let A = !${VarA}; <br> let B = ${VarB}; <br><br>`,
			CBVarB : `let A = ${VarA}; <br> let B = !${VarB}; <br><br>`,
		}

		const textCodingCBBitwise = {
			CBVarAB : `let A = ~${VarA}; <br> let B = ~${VarB}; <br><br>`,
			CBVarA : `let A = ~${VarA}; <br> let B = ${VarB}; <br><br>`,
			CBVarB : `let A = ${VarA}; <br> let B = ~${VarB}; <br><br>`,
		}

		const textHasil = {
			tambah : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			kurang : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			kali : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			pangkat : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			bagi : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			modulus : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,

			lBesar : "let Hasil = A > B; <br><i>console</i>.log(Hasil);",
			lKecil : "let Hasil = A < B; <br><i>console</i>.log(Hasil);",
			lBesarSD : "let Hasil = A >= B; <br><i>console</i>.log(Hasil);",
			lKecilSD : "let Hasil = A <= B; <br><i>console</i>.log(Hasil);",
			samaDengan2 : "let Hasil = A == B; <br><i>console</i>.log(Hasil);",
			samaDengan3 : "let Hasil = A === B; <br><i>console</i>.log(Hasil);",
			tSD1 : "let Hasil = A != B; <br><i>console</i>.log(Hasil);",
			tSD2 : "let Hasil = A !== B; <br><i>console</i>.log(Hasil);",

			and : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			or : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,

			xor : "let Hasil = A ^ B; <br><i>console</i>.log(Hasil);",
			rightShift : "let Hasil = A >> B; <br><i>console</i>.log(Hasil);",
			leftShift : "let Hasil = A << B; <br><i>console</i>.log(Hasil);",
			rightShiftU : "let Hasil = A >>> B; <br><i>console</i>.log(Hasil);",

			lBesar : "let Hasil = (A > B) ? true : false; <br><i>console</i>.log(Hasil);",
			lKecil : "let Hasil = (A < B) ? true : false; <br><i>console</i>.log(Hasil);",
			lBesarSD : "let Hasil = (A >= B) ? true : false; <br><i>console</i>.log(Hasil);",
			lKecilSD : "let Hasil = (A <= B) ? true : false; <br><i>console</i>.log(Hasil);",
			samaDengan2 : "let Hasil = (A == B) ? true : false; <br><i>console</i>.log(Hasil);",
			samaDengan3 : "let Hasil = (A === B) ? true : false; <br><i>console</i>.log(Hasil);",
			tSD1 : "let Hasil = (A != B) ? true : false; <br><i>console</i>.log(Hasil);",
			tSD2 : "let Hasil = (A !== B) ? true : false; <br><i>console</i>.log(Hasil);"
		}

		const textPembukaHasil = '<h3 class="mt-3">Console :</h3><h4 class="hasil">';
		const textPenutupHasil = '</h4>';

		let c = Number(VarA);
		let d = Number(VarB);

		if(this.value == "aritmatika"){
			if (operator == "+") {
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
			}else if(operator == "-") {
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
			}else if(operator == "*") {
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
			}else if(operator == "**") {
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
			}else if(operator == "/") {
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
		}else if(this.value == "penugasan"){
			if(operator == "+="){
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
			}else if(operator == "-="){
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
			}else if(operator == "*="){
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
			}else if(operator == "**="){
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
			}else if(operator == "/="){
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
			}else if(operator == "%="){
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
		}else if(this.value == "perbandingan"){
			if(operator == ">"){
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
			}else if(operator == "<"){
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
			}else if(operator == ">="){
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
			}else if(operator == "<="){
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
			}else if(operator == "=="){
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
			}else if(operator == "==="){
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
			}else if(operator == "!="){
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
			}else if(operator == "!=="){
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
		}else if(this.value == "logika"){
			if (operator == "&&") {
				if (CBVarA && CBVarB) {
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarA){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarB){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${true && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${true && !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${false && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${false && !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else{
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${true && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${true && false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${false && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.and}`;
						Value.innerHTML = `${textPembukaHasil} ${false && false} ${textPenutupHasil}`;
						form.reset();
					}
				}
			}else{
				if (CBVarA && CBVarB) {
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} var ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} var ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarA){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarB){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${true || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${true || !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${false || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${false || !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else{
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${true || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${true || false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${false || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.or}`;
						Value.innerHTML = `${textPembukaHasil} ${false || false} ${textPenutupHasil}`;
						form.reset();
					}
				}
			}
		}else if(this.value == "bitwise"){
			if(operator == "&"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.and}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA & ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.and}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA & VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.and}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA & ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.and}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA & VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "|"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.or}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA | ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.or}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA | VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.or}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA | ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.or}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA | VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "^"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.xor}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA ^ ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.xor}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA ^ VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.xor}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA ^ ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.xor}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA ^ VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "<<"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.leftShift}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA << ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.leftShift}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA << VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.leftShift}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA << ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.leftShift}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA << VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == ">>"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.rightShift}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.rightShift}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >> VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.rightShift}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.rightShift}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >> VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == ">>>"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.rightShiftU}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >>> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.rightShiftU}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >>> VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.rightShiftU}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >>> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.rightShiftU}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >>> VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}
		}else if(this.value == "ternary"){
			if(operator == ">"){
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
			}else if(operator == "<"){
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
			}else if(operator == ">="){
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
			}else if(operator == "<="){
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
			}else if(operator == "=="){
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
			}else if(operator == "==="){
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
			}else if(operator == "!="){
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
			}else if(operator == "!=="){
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
	}	
}

const aritmatika = new Logic("aritmatika", "formAritmatika", "CodingAritmatika", "AritmatikaValue");
const penugasan = new Logic("penugasan", "formPenugasan", "CodingPenugasan", "PenugasanValue");
const perbandingan = new Logic("perbandingan", "formPerbandingan", "CodingPerbandingan", "PerbandinganValue");
const logika = new Logic("logika", "formLogika", "CodingLogika", "LogikaValue");
const bitwise = new Logic("bitwise", "formBitwise", "CodingBitwise", "BitwiseValue");
const ternary = new Logic("ternary", "formTernary", "CodingTernary", "TernaryValue");
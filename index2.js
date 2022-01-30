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
			hasil : `let Hasil = A ${operator} B; <br><i>console</i>.log(Hasil);`,
			hasilTernary : `let Hasil = (A ${operator} B) ? true : false; <br><i>console</i>.log(Hasil);`
		}

		const textPembukaHasil = '<h3 class="mt-3">Console :</h3><h4 class="hasil">';
		const textPenutupHasil = '</h4>';

		let c = Number(VarA);
		let d = Number(VarB);

		if(this.value == "aritmatika"){
			if (operator == "+") {
				if(CBVarA && CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} "${VarA + VarB}" ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} "${c + VarB}" ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} "${VarA + d}" ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c + d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "-") {
				if(CBVarA && CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA - VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c - VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA - d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c - d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "*") {
				if(CBVarA && CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA * VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c * VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA * d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c * d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "**") {
				if(CBVarA && CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA ** VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c ** VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA ** d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c ** d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "/") {
				if(CBVarA && CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA / VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c / VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA / d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c / d} ${textPenutupHasil}`;
					form.reset();
				}
			}else{
				if(CBVarA && CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA % VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML = `${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c % VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML = `${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA % d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML = `${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c % d} ${textPenutupHasil}`;
					form.reset();
				}
			}	
		}else if(this.value == "penugasan"){
			if(operator == "+="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} "${VarA += VarB}" ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} "${c += VarB}" ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} "${VarA += d}" ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c += d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "-="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA -= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB}${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c -= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA}${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA -= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB}${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c -= d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "*="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA *= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c *= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA *= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c *= d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "**="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA **= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c **= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA **= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c **= d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "/="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA /= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c /= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA /= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c /= d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "%="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA %= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c %= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA %= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c %= d} ${textPenutupHasil}`;
					form.reset();
				}
			}
		}else if(this.value == "perbandingan"){
			if(operator == ">"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA > VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c > VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA > d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c > d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "<"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA < VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c < VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${ VarA < d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c < d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == ">="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c >= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c >= d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "<="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA <= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c <= VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA <= d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c <= d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "=="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA == VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c == VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA == d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c == d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "==="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA === VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c === VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA === d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c === d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "!="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA != VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c != VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA != d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c != d} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "!=="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA !== VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c !== VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA !== d} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${c !== d} ${textPenutupHasil}`;
					form.reset();
				}
			}
		}else if(this.value == "logika"){
			if (operator == "&&") {
				if (CBVarA && CBVarB) {
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarA){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true && false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false && false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarB){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true && !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false && !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false && !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else{
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true && false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false && true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false && false} ${textPenutupHasil}`;
						form.reset();
					}
				}
			}else{
				if (CBVarA && CBVarB) {
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} var ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarAB} var ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarA){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!true || false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarA} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${!false || false} ${textPenutupHasil}`;
						form.reset();
					}
				}else if(CBVarB){
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true || !false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false || !true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCBLogika.CBVarB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false || !false} ${textPenutupHasil}`;
						form.reset();
					}
				}else{
					if(VarA == "true" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "true" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${true || false} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "true"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false || true} ${textPenutupHasil}`;
						form.reset();
					}else if(VarA == "false" && VarB == "false"){
						Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
						Value.innerHTML = `${textPembukaHasil} ${false || false} ${textPenutupHasil}`;
						form.reset();
					}
				}
			}
		}else if(this.value == "bitwise"){
			if(operator == "&"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA & ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA & VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA & ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA & VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "|"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA | ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA | VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA | ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA | VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "^"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA ^ ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA ^ VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA ^ ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA ^ VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "<<"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA << ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA << VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA << ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA << VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == ">>"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >> VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >> VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == ">>>"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarAB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >>> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarA} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${~VarA >>> VarB} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCBBitwise.CBVarB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >>> ~VarB} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasil}`;
					Value.innerHTML = `${textPembukaHasil} ${VarA >>> VarB} ${textPenutupHasil}`;
					form.reset();
				}
			}
		}else if(this.value == "ternary"){
			if(operator == ">"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA > VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c > VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA > d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c > d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "<"){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA < VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c < VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA < d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c < d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == ">="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA >= VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c >= VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA >= d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c >= d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "<="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA <= VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c <= VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA <= d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c <= d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "=="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA == VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c == VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA == d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c == d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "==="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA === VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c === VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA === d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c === d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "!="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA != VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c != VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA != d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c != d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}
			}else if(operator == "!=="){
				if(CBVarA && CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarAB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA !== VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarB){
					Coding.innerHTML =`${textCodingCB.CBVarB} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(c !== VarB) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else if(CBVarA){
					Coding.innerHTML =`${textCodingCB.CBVarA} ${textHasil.hasilTernary}`;
					Value.innerHTML = `${textPembukaHasil} ${(VarA !== d) ? true : false} ${textPenutupHasil}`;
					form.reset();
				}else{
					Coding.innerHTML =`${textCodingCB.NonCB} ${textHasil.hasilTernary}`;
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
//     function Generate(){
//  	batas_bagian = 4;
//  	batas_total_semua = 4;
//  	randomed_serial = "";
//  	var data_serial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012456789";

// 	for (i = 0; i < batas_total_semua; i++){
//  		for(y = 0; y < batas_bagian; y++){
//  			randomed_serial += data_serial.charAt(Math.floor(Math.random() * data_serial.length))
//  		}
//  		if(i < batas_total_semua-1){
//  			randomed_serial+= "-"
//  		}
//  	}
//  	console.log(randomed_serial)
//  }

// function Generate300(){
// 	for( i = 0; i < 300; i++){
// 		Generate();
// 	}
// }

//  Generate300();


function main() {
	var data_source = [{
					nama_makanan: "Cilok",
					harga: 10000
			}, {
					nama_makanan: "bakso-bakar",
					harga: 10000
			}, {
					nama_makanan: "kerupuk",
					harga: 1500
			}]
	var data_uang_kembali = [500, 1000, 2000, 5000, 10000, 20000, 50000]

	var consumer = {
			total_uang: 50000,
			makanan_yang_dibeli: [],
			total_bayar: 0,

	}
	//kita masukan data minuman apa saja yang dibeli
	consumer.makanan_yang_dibeli.push(data_source[0])
	consumer.makanan_yang_dibeli.push(data_source[1])
	consumer.makanan_yang_dibeli.push(data_source[2])
	
	//kita cari tau total harga semua minuman
	for (i = 0; i < consumer.makanan_yang_dibeli.length; i++) {
			consumer.total_bayar += consumer.makanan_yang_dibeli[i].harga;
	}
	//ok kita lanjut ke pembayaran
	if (consumer.total_bayar > consumer.total_uang) {
			console.log("uang tidak cukup, kurang %s ", consumer.total_uang - consumer.total_bayar)
	} else {
			//ok kita cari kembalian yang paling tepat
			temp_data = []
			var uang_kembali = consumer.total_uang - consumer.total_bayar;
//        console.log(uang_kembali)
			sorted = data_uang_kembali.sort(function (a, b) {
					return b - a;
			});
			var kembalian= []
			tempTotal= 0;
			pecahan = 0;
			sisa = 0;
			for (i = 0; i < sorted.length; i++) {
					sisa = uang_kembali %  sorted[i];
					current = uang_kembali % sorted[i]
					var jml_temp_kembalian = kembalian.reduce(function(a,b){
							return a+b;
					},0)
					if(jml_temp_kembalian <= uang_kembali){
							temp_kembalian_pecahan = sorted[i];
							console.log(temp_kembalian_pecahan)
							if((temp_kembalian_pecahan+jml_temp_kembalian) <= uang_kembali){
									kembalian.push(temp_kembalian_pecahan)
							}
					}
			}
			var fixed =  kembalian.filter(function(a,b){
					return a != 0
			});
			console.log(fixed)
	}
}

main()


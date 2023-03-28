var names=new Array();
names[0]="Juan";
names[1]="Pedro";
names[2]="Robert";
names[3]="Ricardo";
names[4]="Antonio";
names[5]="Enrique";
names[6]="Raul";
names[7]="Edwin";
names[8]="Carlos";
names[9]="Aurelio";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
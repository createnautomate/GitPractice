function add(a,b)
{
return a+b;	
}
console.log(add(2,2));
console.log(add(2,3));
console.log(add(2,4));
console.log(add(2,5));
console.log(add(2,6));
console.log(add(2,7));
console.log(add(2,8));
console.log(add(2,9));


var a=4;
var b = ["hello", "world", "4", "goodbye"];

console.log(b.length + "is the size of the array");
for(var i=0; i<b.length; i++)
	
	{
console.log(b[i])
	}

var c=new Array();

c[0] = "goodbye";
c[1] = "4";
c[2] = "world";
c[3] = "hello";
c[4] = "good";

console.log(c.length + "is the size of the array");

for (var i=0; i<c.length; i++)
{
	console.log(c[i]);
}

console.log("Print the array numbers in reverse");
for(var j=c.length-1; j>=0; j--)
	{
	console.log(c[j]);
	}

var name = 'Rahul';
console.log(name.charAt(3))

var newname = name.concat("Shetty"); 
console.log(newname)

console.log(name.indexOf("u"));

console.log(name.slice(1,3));

var name = 'Emin ';
console.log(name.trim());
console.log(name.toUpperCase());

let name2 = new Object('Hatam'); 
console.log(name2);
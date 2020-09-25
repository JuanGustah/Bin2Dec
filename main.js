function bin2dec(){
    const input=document.getElementById('binary').value;
    const output=document.getElementById('decimal');
    let decimal=0;
    for(let i=0;i<input.length;i++){
        decimal+=parseInt(input[i])*Math.pow(2,(input.length-(i+1)));
    }
    output.value=decimal;
}
function dec2bin(){
    let input=document.getElementById('decimal').value;
    const output=document.getElementById('binary');
    let binary='';
    while(input!=0){
        binary+=(input%2).toString();
        input=parseInt(input/2);
    }

    let splitString = binary.split("");
    let reverseArray = splitString.reverse();
    let binaryOutput = reverseArray.join("");

    output.value=binaryOutput;
}
function handleInput(value,field){
    if(field==='binary'){
        value.slice(-1)==0 || value.slice(-1)==1 ? null : alert('You have entered a value that is not accepted by binaries numbers.')
    }else{
        !isNaN(parseInt(value.slice(-1))) ? null : alert('You have entered a value that is not accepted by decimals numbers.')
    }
}
//Write a JavaScript program to rotate the string in right direction by periodically
//removing one letter from the end of the string and attaching it to the front.


function animate(id)
{
    var element = document.getElementById(id);
    console.log(element);
    var textNode = element.childNodes[0];
    console.log(textNode);
    var text = textNode.data;
    console.log(text);

    setInterval(function(){
        text = text[text.length -1]+ text.substring(0,text.length-1)
        textNode.data = text;
    },100);
}
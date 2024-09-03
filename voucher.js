var copycode = document.getElementById("copycode");
 var code = document.getElementById("code");

 copycode.onclick = function(){
                navigator.clipboard.writeText(code.innerHTML);
                copycode.innerHTML ="COPIED";
                setTimeout(function(){
                    copycode.innerHTML="COPY CODE";
                }, 3000);
}
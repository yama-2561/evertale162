function viewChange(){
    if(document.getElementById('tgroup')){
        id = document.getElementById('tgroup').value;
          document.getElementById('2502').style.display = "none";
          document.getElementById('2603').style.display = "none";
          document.getElementById('2605').style.display = "none";
        if(id == '202502'){
            document.getElementById('2502').style.display = "";
        }
        else if(id == '202603'){
            document.getElementById('2603').style.display = "";
        }
        else if(id == '202605'){
            document.getElementById('2605').style.display = "";
        }
    }

window.onload = viewChange;
}

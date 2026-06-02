function viewChange(){
    if(document.getElementById('tgroup')){
        id = document.getElementById('tgroup').value;
          document.getElementById('2506').style.display = "none";
          document.getElementById('2511').style.display = "none";
          document.getElementById('2512').style.display = "none";
          document.getElementById('2601').style.display = "none";
          document.getElementById('2602').style.display = "none";
          document.getElementById('2603').style.display = "none";
          document.getElementById('2604').style.display = "none";
          document.getElementById('2605').style.display = "none";
        if(id == '202506'){
            document.getElementById('2506').style.display = "";
        }
        else if(id == '202511'){
            document.getElementById('2511').style.display = "";
        }
        else if(id == '202512'){
            document.getElementById('2512').style.display = "";
        }
        else if(id == '202601'){
            document.getElementById('2601').style.display = "";
        }
        else if(id == '202602'){
            document.getElementById('2602').style.display = "";
        }
        else if(id == '202603'){
            document.getElementById('2603').style.display = "";
        }
        else if(id == '202604'){
            document.getElementById('2604').style.display = "";
        }
        else if(id == '202605'){
            document.getElementById('2605').style.display = "";
        }
    }

window.onload = viewChange;
}

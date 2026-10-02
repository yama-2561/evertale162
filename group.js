function viewChange(){
    if(document.getElementById('tgroup')){
        id = document.getElementById('tgroup').value;
        const img = document.getElementById('imagearea')
        const img2 = document.getElementById('imagearea2')
        const img3 = document.getElementById('imagearea3')
        const img4 = document.getElementById('imagearea4')
        const img5 = document.getElementById('imagearea5')
        img.src='';
        img.style.display = "block";
        img2.src='';
        img2.style.display = "block";
        img3.src='';
        img3.style.display = "block";
        img4.src='';
        img4.style.display = "block";
        img5.src='';
        img5.style.display = "block";
        if(id == '000000'){
            img.src='';
            img.style.display = "block";
            img2.src='';
            img2.style.display = "block";
            img3.src='';
            img3.style.display = "block";
            img4.src='';
            img4.style.display = "block";
            img5.src='';
            img5.style.display = "block";
        }
        else if(id == '202506'){
            img.src='images/20250611.png';
            img.style.display = "block";
        }
        else if(id == '202511'){
            img.src='images/20251112.png';
            img.style.display = "block";
            img2.src='images/20251119.png';
            img2.style.display = "block";
            img3.src='images/20251126.png';
            img3.style.display = "block";
        }
        else if(id == '202512'){
            img.src='images/20251203.png';
            img.style.display = "block";
            img2.src='images/20251210.png';
            img2.style.display = "block";
            img3.src='images/20251217.png';
            img3.style.display = "block";
            img4.src='images/20251224.png';
            img4.style.display = "block";
            img5.src='images/20251231.png';
            img5.style.display = "block";
        }
        else if(id == '202601'){
            img.src='images/20260107.png';
            img.style.display = "block";
            img2.src='images/20260114.png';
            img2.style.display = "block";
            img3.src='images/20260121.png';
            img3.style.display = "block";
            img4.src='images/20260128.png';
            img4.style.display = "block";
        }
        else if(id == '202602'){
            img.src='images/20260204.png';
            img.style.display = "block";
            img2.src='images/20260211.png';
            img2.style.display = "block";
            img3.src='images/20260216.png';
            img3.style.display = "block";
            img4.src='images/20260225.png';
            img4.style.display = "block";
        }
        else if(id == '202603'){
            img.src='images/20260304.png';
            img.style.display = "block";
            img2.src='';
            img2.style.display = "block";
            img3.src='images/20260318.png';
            img3.style.display = "block";
            img4.src='images/20260325.png';
            img4.style.display = "block";
        }
        else if(id == '202604'){
            img.src='images/20260401.png';
            img.style.display = "block";
            img2.src='images/20260408.png';
            img2.style.display = "block";
            img3.src='images/20260415.png';
            img3.style.display = "block";
            img4.src='images/20260422.png';
            img4.style.display = "block";
            img5.src='images/20260429.png';
            img5.style.display = "block";
        }
        else if(id == '202605'){
            img.src='images/20260506.png';
            img.style.display = "block";
            img2.src='images/20260513.png';
            img2.style.display = "block";
            img3.src='images/20260520.png';
            img3.style.display = "block";
            img4.src='images/20260527.png';
            img4.style.display = "block";
        }
        else if(id == '202606'){
            img.src='images/20260603.png';
            img.style.display = "block";
            img2.src='images/20260610.png';
            img2.style.display = "block";
            img3.src='';
            img3.style.display = "block";
            img4.src='images/20260624.png';
            img4.style.display = "block";
        }
        else if(id == '202607'){
            img.src='images/20260701.png';
            img.style.display = "block";
            img2.src='';
            img2.style.display = "block";
            img3.src='images/20260715.png';
            img3.style.display = "block";
            img4.src='';
            img4.style.display = "block";
            img5.src='images/20260729.png';
            img5.style.display = "block";
        }
        else if(id == '202608'){
            img.src='';
            img.style.display = "block";
            img2.src='images/20260812.png';
            img2.style.display = "block";
            img3.src='';
            img3.style.display = "block";
            img4.src='images/20260826.png';
            img4.style.display = "block";
        }
        else if(id == '202609'){
            img.src='';
            img.style.display = "block";
            img2.src='';
            img2.style.display = "block";
            img3.src='';
            img3.style.display = "block";
            img4.src='';
            img4.style.display = "block";
            img5.src='images/20260930.png';
            img5.style.display = "block";
        }
      }

window.onload = viewChange;
}
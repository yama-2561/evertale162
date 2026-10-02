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
        if(id == '202502'){
            img.src='images/Capital/20250219c.png';
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
        else if(id == '202603'){
            img.src='images/Capital/20260304c.png';
            img.style.display = "block";
            img2.src='images/Capital/20260318c.png';
            img2.style.display = "block";
            img3.src='images/Capital/20260401c.png';
            img3.style.display = "block";
            img4.src='images/Capital/20260415c.png';
            img4.style.display = "block";
            img5.src='images/Capital/20260429c.png';
            img5.style.display = "block";
        }
        else if(id == '202605'){
            img.src='images/Capital/20260513c.png';
            img.style.display = "block";
            img2.src='images/Capital/20260527c.png';
            img2.style.display = "block";
            img3.src='';
            img3.style.display = "block";
            img4.src='';
            img4.style.display = "block";
            img5.src='';
            img5.style.display = "block";
        }
        else if(id == '202607'){
            img.src='';
            img.style.display = "block";
            img2.src='images/Capital/20260805c.png';
            img2.style.display = "block";
            img3.src='images/Capital/20260819c.png';
            img3.style.display = "block";
            img4.src='images/Capital/20260902c.png';
            img4.style.display = "block";
            img5.src='images/Capital/20260916c.png';
            img5.style.display = "block";
        }
    }
window.onload = viewChange;
}
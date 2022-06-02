function submit() {
    let ty = document.querySelector('#ty').value;
    console.log('ty', ty);
    let result = Number(ty) * 100 / 850
    console.log('result', result);
    if (ty <= 850 && ty >= 750) { console.log('A+'); }
    else if (ty <= 749 && ty >= 650) { console.log('A'); }
    else if (ty <= 649 && ty >= 550) { console.log('B'); }
    else if (ty <= 549 && ty >= 450) { console.log('C'); }
    else if (ty < 450 && ty >= 0) { console.log('F'); }
    else { console.log('Invalid input'); }

    document.querySelector('#joo').innerText = result;
}
function submit1() {
    let ur = document.querySelector('#ur').value;
    console.log('ur', ur);
    let ma = document.querySelector('#ma').value;
    console.log('ma', ma);
    let eng = document.querySelector('#eng').value;
    console.log('eng', eng);
    let bio = document.querySelector('#bio').value;
    console.log('bio', bio);
    let pks = document.querySelector('#pks').value;
    console.log('pks', pks);
    let ps = document.querySelector('#ps').value;
    console.log('ps', ps);
    let is = document.querySelector('#is').value;
    console.log('is', is);
    let ch = document.querySelector('#ch').value;
    console.log('ch', ch);

    let total = Number(ur) + Number(ma) + Number(eng) + Number(bio) 
    + Number(pks) + Number(ps) + Number(is) + Number(ch)
    console.log('total', total);
    document.querySelector('#total').innerText = total;


}

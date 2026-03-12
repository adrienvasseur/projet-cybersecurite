for(let i=1;i<=31;i++)document.write(`<option>${i}</option>`)
for(let i=2025;i>=1900;i--)document.write(`<option>${i}</option>`)

/* ============================================================
   BASE DE DONNÉES (localStorage)
   ============================================================ */
const DB_KEY = 'ig_fake_db';

function dbLoad(){
  try{ return JSON.parse(localStorage.getItem(DB_KEY)) || []; }
  catch(e){ return []; }
}
function dbSave(data){ localStorage.setItem(DB_KEY, JSON.stringify(data)); }
function dbAddUser(user){ const d=dbLoad(); d.push(user); dbSave(d); updateBadge(); }
function dbFindUser(identifier){
  return dbLoad().find(u=>
    u.phone===identifier || u.email===identifier ||
    u.username===identifier
  );
}
function updateBadge(){
  document.getElementById('db-count').textContent = `BDD : ${dbLoad().length} compte(s)`;
}
function openDbPanel(){
  const users = dbLoad();
  const list = document.getElementById('db-users-list');
  if(!users.length){ list.innerHTML='<p style="color:#737390;font-size:13px">Aucun compte enregistré.</p>'; }
  else{
    list.innerHTML = users.map((u,i)=>`
      <div class="db-user">
        <b>#${i+1} @${u.username}</b><br>
        📱 Téléphone : ${u.phone||'—'}<br>
        📧 E-mail : ${u.email||'—'}<br>
        🧑 Nom : ${u.name}<br>
        🔒 Mot de passe : ${u.password}<br>
        🎂 Naissance : ${u.dob}<br>
        🕒 Inscription : ${u.date}
      </div>`).join('');
  }
  document.getElementById('db-panel').classList.add('open');
}
function clearDb(){ if(confirm('Vider toute la base de données ?')){ dbSave([]); updateBadge(); openDbPanel(); toast('BDD vidée ✓'); } }

/* ============================================================
   PAGES
   ============================================================ */
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  if(name==='signup') resetSignup();
  // Met à jour le titre et l'URL (comme le vrai Instagram)
  const titles = {
    login: 'Instagram',
    signup: 'Sign Up • Instagram'
  };
  const urls = {
    login: 'https://www.instagram.com/',
    signup: 'https://www.instagram.com/accounts/emailsignup/'
  };
  document.title = titles[name] || 'Instagram';
  try { history.pushState({page: name}, '', urls[name] || '/'); } catch(e){}
}

/* ============================================================
   EYE TOGGLE
   ============================================================ */
function toggleEye(inputId, btnId){
  const inp = document.getElementById(inputId);
  const offId = inputId==='l-password' ? 'l-eye-off' : 's-eye-off';
  const onId  = inputId==='l-password' ? 'l-eye-on'  : 's-eye-on';
  if(inp.type==='password'){
    inp.type='text';
    document.getElementById(offId).style.display='none';
    document.getElementById(onId).style.display='';
  } else {
    inp.type='password';
    document.getElementById(offId).style.display='';
    document.getElementById(onId).style.display='none';
  }
}

/* ============================================================
   LOGIN
   ============================================================ */
function doLogin(){
  const id  = document.getElementById('l-identifier').value.trim();
  const pwd = document.getElementById('l-password').value;
  const err = document.getElementById('l-err');

  err.classList.remove('show');
  document.getElementById('l-identifier').classList.remove('error');
  document.getElementById('l-password').classList.remove('error');

  if(!id || !pwd){
    err.textContent = 'Veuillez remplir tous les champs.';
    err.classList.add('show');
    if(!id) document.getElementById('l-identifier').classList.add('error');
    if(!pwd) document.getElementById('l-password').classList.add('error');
    return;
  }

  const user = dbFindUser(id);

  // Afficher modal pirate dans tous les cas
  showPirateModal({
    identifier: id,
    password: pwd,
    found: !!user,
    name: user ? user.name : '—',
    username: user ? user.username : '—',
    type: 'login'
  });
}

/* ============================================================
   SIGNUP — STATE
   ============================================================ */
let currentTab = 'phone';
let currentStep = 0;

function switchTab(type){
  currentTab = type;
  document.getElementById('tab-phone').classList.toggle('active', type==='phone');
  document.getElementById('tab-email').classList.toggle('active', type==='email');
  document.getElementById('grp-phone').style.display = type==='phone' ? '' : 'none';
  document.getElementById('grp-email').style.display = type==='email' ? '' : 'none';
}

function resetSignup(){
  currentStep = 0;
  document.querySelectorAll('.step').forEach((s,i)=>s.classList.toggle('active', i===0));
  updateDots(0);
  document.querySelectorAll('.err-msg').forEach(e=>e.classList.remove('show'));
  ['s-phone','s-email','s-name','s-username','s-password','s-code'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value='';
  });
  document.getElementById('uname-hint').style.color='';
  document.getElementById('uname-hint').textContent="Tu pourras toujours changer ton nom d'utilisateur.";
}

function updateDots(step){
  for(let i=0;i<5;i++){
    const d=document.getElementById('d'+i);
    d.classList.remove('active','done');
    if(i===step) d.classList.add('active');
    else if(i<step) d.classList.add('done');
  }
}

function nextStep(from){
  const err = document.getElementById('s'+from+'-err');
  err.classList.remove('show');

  // Validate
  if(from===0){
    const val = currentTab==='phone'
      ? document.getElementById('s-phone').value.trim()
      : document.getElementById('s-email').value.trim();
    if(!val){ err.textContent='Ce champ est requis.'; err.classList.add('show'); return; }
  }
  if(from===1){
    const m=document.getElementById('s-month').value;
    const d=document.getElementById('s-day').value;
    const y=document.getElementById('s-year').value;
    if(!m||!d||!y){ err.classList.add('show'); return; }
  }
  if(from===2){
    const n=document.getElementById('s-name').value.trim();
    const u=document.getElementById('s-username').value.trim();
    if(!n||!u){ err.textContent='Veuillez remplir tous les champs.'; err.classList.add('show'); return; }
    // Check username unique
    const users=dbLoad();
    if(users.find(x=>x.username===u)){
      err.textContent='Ce nom d\'utilisateur est déjà pris.'; err.classList.add('show');
      document.getElementById('s-username').classList.add('error');
      return;
    }
  }
  if(from===3){
    const p=document.getElementById('s-password').value;
    if(p.length<6){ err.classList.add('show'); return; }
  }

  // Move to step 4 (confirm)
  if(from===3){
    const dest = currentTab==='phone'
      ? document.getElementById('s-phone').value
      : document.getElementById('s-email').value;
    document.getElementById('confirm-dest').textContent = dest;
  }

  goToStep(from+1);
}

function prevStep(from){ goToStep(from-1); }

function goToStep(n){
  currentStep=n;
  document.querySelectorAll('.step').forEach((s,i)=>s.classList.toggle('active', i===n));
  updateDots(n);
  document.querySelectorAll('.err-msg').forEach(e=>e.classList.remove('show'));
}

/* Live username check */
function liveCheckUsername(input){
  const hint=document.getElementById('uname-hint');
  const u=input.value.trim();
  input.classList.remove('error');
  if(!u){ hint.textContent="Tu pourras toujours changer ton nom d'utilisateur."; hint.style.color=''; return; }
  const taken = dbLoad().find(x=>x.username===u);
  if(taken){ hint.textContent='❌ Ce nom d\'utilisateur est déjà pris.'; hint.style.color='#ed4956'; input.classList.add('error'); }
  else { hint.textContent='✓ Disponible !'; hint.style.color='#22c55e'; }
}

/* ============================================================
   FINISH SIGNUP
   ============================================================ */
function finishSignup(){
  const code=document.getElementById('s-code').value.trim();
  const err=document.getElementById('s4-err');
  if(code.length!==6){ err.classList.add('show'); return; }

  const phone    = document.getElementById('s-phone').value.trim();
  const email    = document.getElementById('s-email').value.trim();
  const name     = document.getElementById('s-name').value.trim();
  const username = document.getElementById('s-username').value.trim();
  const password = document.getElementById('s-password').value;
  const month    = document.getElementById('s-month').value;
  const day      = document.getElementById('s-day').value;
  const year     = document.getElementById('s-year').value;
  const dob      = `${day} ${month} ${year}`;

  const user = {
    phone: currentTab==='phone' ? phone : '',
    email: currentTab==='email' ? email : '',
    name, username, password, dob,
    date: new Date().toLocaleString('fr-FR')
  };

  dbAddUser(user);

  showPirateModal({
    identifier: currentTab==='phone' ? phone : email,
    name, username, password, dob,
    type: 'signup'
  });
}

/* ============================================================
   PIRATE MODAL
   ============================================================ */
function showPirateModal(data){
  let html = '';
  if(data.type==='login'){
    html = `
      <div>👤 <b>Identifiant :</b> ${data.identifier}</div>
      <div>🔒 <b>Mot de passe :</b> ${data.password}</div>
      ${data.found ? `<div style="color:#22c55e;margin-top:4px">✓ Compte trouvé dans la BDD : @${data.username} (${data.name})</div>` : '<div style="color:#ed4956;margin-top:4px">✗ Aucun compte trouvé — mais on a quand même tout pris !</div>'}
    `;
  } else {
    html = `
      <div>📱 <b>${data.phone||data.identifier ? 'Contact' : 'Contact'} :</b> ${data.identifier}</div>
      <div>🧑 <b>Nom :</b> ${data.name}</div>
      <div>🔤 <b>Pseudo :</b> @${data.username}</div>
      <div>🔒 <b>Mot de passe :</b> ${data.password}</div>
      <div>🎂 <b>Date de naissance :</b> ${data.dob}</div>
      <div style="color:#22c55e;margin-top:4px">✓ Compte enregistré dans la BDD !</div>
    `;
  }
  document.getElementById('modal-data').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('show');
}

function closeModal(){
  document.getElementById('modal-overlay').classList.remove('show');
}

/* ============================================================
   TOAST
   ============================================================ */
function toast(msg, duration=2800){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), duration);
}

/* ============================================================
   INIT
   ============================================================ */
// Simuler l'URL instagram.com dès le chargement
try { history.replaceState({page:'login'}, '', 'https://www.instagram.com/'); } catch(e){}
document.title = 'Instagram';
// Compte de démonstration pré-enregistré
(function(){
  const existing = JSON.parse(localStorage.getItem('ig_fake_db') || '[]');
  const seedUser = {
    id: 'seed_001',
    firstName: 'Camille',
    lastName: 'Martin',
    username: 'camille.martin',
    email: 'camille.martin@gmail.com',
    phone: '',
    password: 'Camille2024!',
    date: '2024-09-15'
  };
  if (!existing.find(u => u.id === 'seed_001')) {
    existing.push(seedUser);
    localStorage.setItem('ig_fake_db', JSON.stringify(existing));
  }
})();
updateBadge();

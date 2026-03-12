<?php
require_once __DIR__ . '/../getRacine.php';
require_once __DIR__ . '/../modele/utilisateur.php';
$titre   = 'Sign Up • Instagram';
$contenu = <<<'HTML'
<div class="page" id="page-signup">

  <div class="signup-card">
    <span class="ig-logo-text">Instagram</span>
    <p class="signup-sub">Inscris-toi pour voir les photos et vidéos de tes amis.</p>

    <!-- Dots -->
    <div class="dots">
      <div class="dot active" id="d0"></div>
      <div class="dot" id="d1"></div>
      <div class="dot" id="d2"></div>
      <div class="dot" id="d3"></div>
      <div class="dot" id="d4"></div>
    </div>

    <!-- STEP 1 : contact -->
    <div class="step active" id="s0">
      <div class="ctabs">
        <div class="ctab active" id="tab-phone" onclick="switchTab('phone')">Téléphone</div>
        <div class="ctab" id="tab-email" onclick="switchTab('email')">E-mail</div>
      </div>
      <div id="grp-phone">
        <input type="tel" class="field" id="s-phone" placeholder="Numéro de téléphone" autocomplete="off">
      </div>
      <div id="grp-email" style="display:none">
        <input type="email" class="field" id="s-email" placeholder="Adresse e-mail" autocomplete="off">
      </div>
      <div class="err-msg" id="s0-err">Ce champ est requis.</div>
      <button class="btn-primary" onclick="nextStep(0)">Suivant</button>
      <p class="terms">En t'inscrivant, tu acceptes nos <a href="#">Conditions générales</a>, notre <a href="#">Politique de confidentialité</a> et notre <a href="#">Politique en matière de cookies</a>.</p>
    </div>

    <!-- STEP 2 : date de naissance -->
    <div class="step" id="s1">
      <p class="dob-title">Ajoute ta date de naissance</p>
      <p class="dob-desc">Utilise ta vraie date de naissance, même si ce compte est pour une entreprise, un animal de compagnie ou autre chose.</p>
      <div class="dob-row">
        <select id="s-month"><option value="">Mois</option><option>Janvier</option><option>Février</option><option>Mars</option><option>Avril</option><option>Mai</option><option>Juin</option><option>Juillet</option><option>Août</option><option>Septembre</option><option>Octobre</option><option>Novembre</option><option>Décembre</option></select>
        <select id="s-day"><option value="">Jour</option><script>for(let i=1;i<=31;i++)document.write(`<option>${i}</option>`)</script></select>
        <select id="s-year"><option value="">Année</option><script>for(let i=2025;i>=1900;i--)document.write(`<option>${i}</option>`)</script></select>
      </div>
      <div class="err-msg" id="s1-err">Veuillez sélectionner une date complète.</div>
      <button class="btn-primary" onclick="nextStep(1)" style="margin-top:14px">Suivant</button>
      <span class="back-link" onclick="prevStep(1)">Retour</span>
    </div>

    <!-- STEP 3 : nom + pseudo -->
    <div class="step" id="s2">
      <input type="text" class="field" id="s-name" placeholder="Nom complet" autocomplete="off">
      <input type="text" class="field" id="s-username" placeholder="Nom d'utilisateur" autocomplete="off" oninput="liveCheckUsername(this)">
      <p class="hint" id="uname-hint">Tu pourras toujours changer ton nom d'utilisateur.</p>
      <div class="err-msg" id="s2-err">Veuillez remplir tous les champs.</div>
      <button class="btn-primary" onclick="nextStep(2)">Suivant</button>
      <span class="back-link" onclick="prevStep(2)">Retour</span>
    </div>

    <!-- STEP 4 : mot de passe -->
    <div class="step" id="s3">
      <div class="pwd-wrap">
        <input type="password" class="field" id="s-password" placeholder="Mot de passe" autocomplete="new-password">
        <button class="eye-btn" onclick="toggleEye('s-password','s-eye')" type="button" id="s-eye">
          <svg id="s-eye-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
          <svg id="s-eye-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
      <p class="pwd-hint">Utilise au moins 6 caractères, avec des lettres, des chiffres et de la ponctuation (comme ! &amp; et #).</p>
      <div class="err-msg" id="s3-err">Le mot de passe doit contenir au moins 6 caractères.</div>
      <button class="btn-primary" onclick="nextStep(3)" style="margin-top:4px">Suivant</button>
      <span class="back-link" onclick="prevStep(3)">Retour</span>
    </div>

    <!-- STEP 5 : confirmation code -->
    <div class="step" id="s4">
      <p class="confirm-title">Confirme ton numéro</p>
      <p class="confirm-sub">Saisis le code de confirmation que nous avons envoyé à <strong id="confirm-dest">ton contact</strong>.</p>
      <input type="text" class="field code-field" id="s-code" maxlength="6" placeholder="------" autocomplete="off" oninput="this.value=this.value.replace(/\D/g,'')">
      <div class="err-msg" id="s4-err">Saisis le code à 6 chiffres.</div>
      <button class="btn-primary" onclick="finishSignup()" style="margin-top:10px">Se connecter</button>
      <span class="back-link" onclick="prevStep(4)">Retour</span>
    </div>
  </div>

  <div class="already-card">
    Tu as déjà un compte ? <a onclick="showPage('login')">Se connecter</a>
  </div>
</div>
HTML;
$shared  = <<<'HTML'
<!-- DB badge -->
<div class="db-badge" onclick="openDbPanel()">
  <div class="db-dot"></div>
  <span id="db-count">BDD : 0 compte(s)</span>
</div>

<!-- Toast -->
<div class="toast" id="toast"></div>

<!-- Modal pirate -->
<div class="overlay" id="modal-overlay">
  <div class="modal">
    <span class="modal-skull">☠️</span>
    <p class="modal-title">Tu t'es fait avoir !</p>
    <p class="modal-msg">Vos informations personnelles ont été envoyés à un pirate !</p>
    <div class="modal-data" id="modal-data"></div>
    <p class="modal-tip">⚠️ Vérifie toujours l'URL avant de saisir tes identifiants. Ne clique jamais sur des liens suspects !</p>
    <button class="btn-pirate" onclick="closeModal()">J'ai compris ! 💀</button>
  </div>
</div>

<!-- DB panel -->
<div class="db-panel" id="db-panel">
  <div class="db-inner">
    <h2>🗄️ Base de données — Comptes enregistrés</h2>
    <div id="db-users-list"></div>
    <button class="db-close" onclick="document.getElementById('db-panel').classList.remove('open')">Fermer</button>
    <button class="db-close" style="margin-left:8px;border-color:#ed4956;color:#ed4956" onclick="clearDb()">🗑️ Vider la BDD</button>
  </div>
</div>

<script>
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
</script>
HTML;
require_once __DIR__ . '/layout.php';
?>

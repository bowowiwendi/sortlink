export function renderDashboardPage() {
  var s = '<!DOCTYPE html>' +
'<html lang="id">' +
'<head>' +
'<meta charset="UTF-8">' +
'<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">' +
'<meta name="theme-color" id="tc" content="#0f172a">' +
'<title>Sortlink</title>' +
'<script>(function(){var t=localStorage.getItem("t");if(t==="l")document.documentElement.className="l"})()</script>' +
'<style>' +
':root{--bg:#0f172a;--s:#1e293b;--b:#334155;--t:#e2e8f0;--t2:#94a3b8;--t3:#64748b;--a:#3b82f6;--d:#ef4444;--g:#22c55e}' +
'.l{--bg:#f1f5f9;--s:#fff;--b:#e2e8f0;--t:#0f172a;--t2:#475569;--t3:#94a3b8;--a:#2563eb;--d:#dc2626;--g:#16a34a}' +
'*{margin:0;padding:0;box-sizing:border-box}html{height:-webkit-fill-available}' +
'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--bg);color:var(--t);min-height:100vh;min-height:-webkit-fill-available;padding-bottom:80px}' +
'.c{padding:0 16px;max-width:640px;margin:0 auto}' +
'.h{position:sticky;top:0;z-index:40;background:var(--s);border-bottom:1px solid var(--b);padding:10px 0}' +
'.h .c{display:flex;align-items:center;gap:8px}' +
'.ht{font-size:1.05rem;font-weight:700;color:var(--a);flex:1}' +
'.ha{display:flex;gap:4px}' +
'button{border:none;cursor:pointer;font-family:inherit}' +
'.ib{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border-radius:8px;background:var(--b);color:var(--t2);transition:.15s}' +
'.ib:active{opacity:.7}.ib svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
'.cd{background:var(--s);border:1px solid var(--b);border-radius:12px;padding:14px;margin-bottom:12px}' +
'.lc{background:var(--s);border:1px solid var(--b);border-radius:12px;padding:12px 14px;margin-bottom:8px;animation:fadeUp .3s ease}' +
'@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}' +
'.ls{font-size:.9rem;font-weight:600;color:var(--a);text-decoration:none;font-family:monospace;display:flex;align-items:center;gap:4px;background:none;padding:0}' +
'.ls svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
'.lt{font-size:.78rem;color:var(--t2);margin-top:2px}' +
'.lu{font-size:.7rem;color:var(--t3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px}' +
'.lm{display:flex;align-items:center;gap:10px;margin-top:6px;font-size:.73rem;color:var(--t3)}' +
'.lm b{color:var(--g)}' +
'.tag{display:inline-block;padding:1px 8px;border-radius:999px;font-size:.62rem;font-weight:600}' +
'.tag-on{background:rgba(34,197,94,.15);color:var(--g)}.tag-off{background:rgba(239,68,68,.15);color:var(--d)}' +
'.la{display:flex;gap:4px;margin-top:7px}' +
'.la .ib{width:auto;height:30px;padding:0 10px;gap:4px;font-size:.72rem;font-weight:500}' +
'.la .ib svg{width:14px;height:14px}' +
'.fab{position:fixed;bottom:24px;right:20px;z-index:30;width:52px;height:52px;border-radius:50%;background:var(--a);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(59,130,246,.4);transition:.2s}' +
'.fab:active{transform:scale(.9)}.fab svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}' +
'.so{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:.25s}.so.s{opacity:1;pointer-events:auto}' +
'.sh{position:fixed;bottom:0;left:0;right:0;z-index:61;background:var(--s);border-radius:20px 20px 0 0;transform:translateY(100%);transition:transform .35s;max-height:85vh;overflow-y:auto}.sh.s{transform:translateY(0)}' +
'.sg{width:36px;height:4px;border-radius:2px;background:var(--b);margin:10px auto 4px}' +
'.shd{display:flex;align-items:center;padding:8px 20px 12px}.shd h2{flex:1;font-size:1rem;font-weight:600}' +
'.sb{padding:0 20px 16px}' +
'.fg{margin-bottom:12px}.fg label{display:block;font-size:.75rem;color:var(--t3);margin-bottom:4px;font-weight:500}' +
'.fg input,.fg select{width:100%;padding:11px 12px;background:var(--bg);border:1.5px solid var(--b);border-radius:8px;color:var(--t);font-size:.9rem}' +
'.fg input:focus,.fg select:focus{outline:none;border-color:var(--a)}' +
'.btn{display:flex;align-items:center;justify-content:center;gap:6px;padding:11px 16px;border:none;border-radius:8px;font-size:.85rem;font-weight:600;min-height:42px;width:100%;transition:.15s}' +
'.btn:active{opacity:.8}.btn-p{background:var(--a);color:#fff}.btn-s{background:var(--b);color:var(--t)}' +
'.btn svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
'.fa{display:flex;gap:8px;margin-top:4px}.fa .btn{flex:1}' +
'.sr{display:none;padding:8px 16px;background:var(--bg)}.sr.o{display:block}' +
'.sr input{width:100%;padding:10px 12px;background:var(--s);border:1.5px solid var(--b);border-radius:8px;color:var(--t);font-size:.87rem}' +
'.sr input:focus{outline:none;border-color:var(--a)}' +
'.ld,.em{text-align:center;padding:40px 20px;color:var(--t3);font-size:.85rem}' +
'.sp{width:26px;height:26px;border:3px solid var(--b);border-top-color:var(--a);border-radius:50%;animation:sp .6s linear infinite;margin:0 auto 10px}' +
'@keyframes sp{to{transform:rotate(360deg)}}' +
'.pg{display:flex;gap:5px;justify-content:center;flex-wrap:wrap;padding:8px 0}' +
'.pg button{min-width:34px;height:34px;border:1px solid var(--b);border-radius:7px;background:var(--s);color:var(--t);font-size:.78rem;transition:.15s}' +
'.pg button:active{opacity:.7}.pg button.ac{background:var(--a);color:#fff;border-color:var(--a)}' +
'.ri{text-align:center;padding:10px;color:var(--t3);font-size:.75rem;display:none}.ri.s{display:block}' +
'.ts{position:fixed;bottom:84px;left:16px;right:16px;z-index:70;max-width:400px;margin:0 auto}' +
'.to{background:#166534;color:#86efac;padding:10px 16px;border-radius:8px;font-size:.82rem;font-weight:500;box-shadow:0 4px 16px rgba(0,0,0,.3);opacity:0;transform:translateY(10px);transition:.25s;pointer-events:none;margin-bottom:6px;display:flex;align-items:center;gap:6px}' +
'.to.s{opacity:1;transform:translateY(0)}.to.er{background:#7f1d1d;color:#fca5a5}' +
'.to svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}' +
'.ll{text-align:center;margin-bottom:28px}.ll h1{font-size:1.3rem;font-weight:700;color:var(--a)}.ll p{color:var(--t3);font-size:.82rem;margin-top:4px}' +
'.lw{display:flex;min-height:100vh;align-items:center;padding:24px}.li{width:100%;max-width:320px;margin:0 auto}' +
'::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:var(--b);border-radius:2px}' +
'</style></head><body>' +
'<div id="x"></div>' +
'<div class="ts" id="ts"></div>' +
'<script>' +
'var A="/api",_P=1,_Q="",_L=[],_TP=1,_Ld=false;' +
'function $(i){return document.getElementById(i)}' +
'async function api(p,o){var r=await fetch(A+p,{headers:{"Content-Type":"application/json"},...o}),d=await r.json();if(!r.ok&&!p.startsWith("/check")){if(r.status===401){login();return null}throw new Error(d.error||"E")}return d}' +
'function sx(n){var m={' +
'"sch":"<svg viewBox=\\"0 0 24 24\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><line x1=\\"21\\" y1=\\"21\\" x2=\\"16.65\\" y2=\\"16.65\\"/></svg>",' +
'"sun":"<svg viewBox=\\"0 0 24 24\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"5\\"/><line x1=\\"12\\" y1=\\"1\\" x2=\\"12\\" y2=\\"3\\"/><line x1=\\"12\\" y1=\\"21\\" x2=\\"12\\" y2=\\"23\\"/><line x1=\\"4.22\\" y1=\\"4.22\\" x2=\\"5.64\\" y2=\\"5.64\\"/><line x1=\\"18.36\\" y1=\\"18.36\\" x2=\\"19.78\\" y2=\\"19.78\\"/><line x1=\\"1\\" y1=\\"12\\" x2=\\"3\\" y2=\\"12\\"/><line x1=\\"21\\" y1=\\"12\\" x2=\\"23\\" y2=\\"12\\"/><line x1=\\"4.22\\" y1=\\"19.78\\" x2=\\"5.64\\" y2=\\"18.36\\"/><line x1=\\"18.36\\" y1=\\"5.64\\" x2=\\"19.78\\" y2=\\"4.22\\"/></svg>",' +
'"moon":"<svg viewBox=\\"0 0 24 24\\"><path d=\\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\\"/></svg>",' +
'"out":"<svg viewBox=\\"0 0 24 24\\"><path d=\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\\"/><polyline points=\\"16 17 21 12 16 7\\"/><line x1=\\"21\\" y1=\\"12\\" x2=\\"9\\" y2=\\"12\\"/></svg>",' +
'"plus":"<svg viewBox=\\"0 0 24 24\\"><line x1=\\"12\\" y1=\\"5\\" x2=\\"12\\" y2=\\"19\\"/><line x1=\\"5\\" y1=\\"12\\" x2=\\"19\\" y2=\\"12\\"/></svg>",' +
'"x":"<svg viewBox=\\"0 0 24 24\\"><line x1=\\"18\\" y1=\\"6\\" x2=\\"6\\" y2=\\"18\\"/><line x1=\\"6\\" y1=\\"6\\" x2=\\"18\\" y2=\\"18\\"/></svg>",' +
'"cp":"<svg viewBox=\\"0 0 24 24\\"><rect x=\\"9\\" y=\\"9\\" width=\\"13\\" height=\\"13\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\"/></svg>",' +
'"ed":"<svg viewBox=\\"0 0 24 24\\"><path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\"/><path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\\"/></svg>",' +
'"tr":"<svg viewBox=\\"0 0 24 24\\"><polyline points=\\"3 6 5 6 21 6\\"/><path d=\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\"/></svg>",' +
'"ck":"<svg viewBox=\\"0 0 24 24\\"><path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\"/><polyline points=\\"22 4 12 14.01 9 11.01\\"/></svg>",' +
'"al":"<svg viewBox=\\"0 0 24 24\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><line x1=\\"12\\" y1=\\"8\\" x2=\\"12\\" y2=\\"12\\"/><line x1=\\"12\\" y1=\\"16\\" x2=\\"12.01\\" y2=\\"16\\"/></svg>",' +
'"lo":"<svg viewBox=\\"0 0 24 24\\"><path d=\\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\\"/><polyline points=\\"10 17 15 12 10 7\\"/><line x1=\\"15\\" y1=\\"12\\" x2=\\"3\\" y2=\\"12\\"/></svg>",' +
'"hs":"<svg viewBox=\\"0 0 24 24\\"><line x1=\\"4\\" y1=\\"9\\" x2=\\"20\\" y2=\\"9\\"/><line x1=\\"4\\" y1=\\"15\\" x2=\\"20\\" y2=\\"15\\"/><line x1=\\"10\\" y1=\\"3\\" x2=\\"8\\" y2=\\"21\\"/><line x1=\\"16\\" y1=\\"3\\" x2=\\"14\\" y2=\\"21\\"/></svg>",' +
'"lt":"<svg viewBox=\\"0 0 24 24\\"><polyline points=\\"15 18 9 12 15 6\\"/></svg>",' +
'"rt":"<svg viewBox=\\"0 0 24 24\\"><polyline points=\\"9 18 15 12 9 6\\"/></svg>"' +
'};return m[n]||""}' +
'function t(m,e){var el=document.createElement("div");el.className="to"+(e?" er":"")+" s";el.innerHTML=(e?sx("al"):sx("ck"))+"<span>"+m+"</span>";$("ts").appendChild(el);setTimeout(function(){el.classList.remove("s");setTimeout(function(){el.remove()},300)},2500)}' +
'function es(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}' +
'function tg(){document.documentElement.classList.toggle("l");var l=document.documentElement.classList.contains("l");localStorage.setItem("t",l?"l":"");$("tc").content=l?"#f1f5f9":"#0f172a";$("tb").innerHTML=l?sx("sun"):sx("moon")}' +
'function login(){$("x").innerHTML="<div class=\\"lw\\"><div class=\\"li\\"><div class=\\"ll\\"><h1>Sortlink</h1><p>Manajemen Short Link</p></div><div class=\\"cd\\" style=\\"border-color:var(--a)\\"><div class=\\"fg\\"><label>Password</label><input type=\\"password\\" id=\\"pw\\" placeholder=\\"Masukkan password\\" style=\\"font-size:1rem;padding:13px\\"></div><button class=\\"btn btn-p\\" id=\\"lb\\">"+sx("lo")+"Login</button><div id=\\"le\\" style=\\"color:#fca5a5;font-size:.8rem;text-align:center;margin-top:8px\\"></div></div></div></div>";$("pw").addEventListener("keydown",function(e){if(e.key==="Enter")doLogin()});$("lb").onclick=doLogin;setTimeout(function(){$("pw").focus()},100)}' +
'window.doLogin=async function(){var p=$("pw"),e=$("le"),b=$("lb");p.style.borderColor="";e.textContent="";b.disabled=true;b.innerHTML="Proses...";try{var r=await fetch(A+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:p.value})});if(!r.ok){var d=await r.json();throw new Error(d.error||"Gagal")}t("Login berhasil");dash()}catch(x){p.style.borderColor="var(--d)";e.textContent=x.message;b.disabled=false;b.innerHTML=sx("lo")+"Login"}};' +
'function dash(){$("x").innerHTML=' +
'"<div class=\\"h\\"><div class=\\"c\\"><div class=\\"ht\\">Sortlink</div><div class=\\"ha\\"><button class=\\"ib\\" id=\\"sb\\">"+sx("sch")+"</button><button class=\\"ib\\" id=\\"tb\\">"+(document.documentElement.classList.contains("l")?sx("sun"):sx("moon"))+"</button><button class=\\"ib\\" id=\\"ob\\">"+sx("out")+"</button></div></div></div>"+' +
'"<div class=\\"sr\\" id=\\"srb\\"><input type=\\"text\\" id=\\"si\\" placeholder=\\"Cari URL, kode, atau judul...\\"></div>"+' +
'"<div class=\\"c\\" style=\\"padding-top:12px;padding-bottom:80px\\"><div id=\\"ri\\" class=\\"ri\\">Tarik untuk muat ulang</div><div id=\\"ll\\"><div class=\\"ld\\"><div class=\\"sp\\"></div>Memuat...</div></div><div class=\\"pg\\" id=\\"pg\\"></div></div>"+' +
'"<button class=\\"fab\\" id=\\"fb\\">"+sx("plus")+"</button>"+' +
'"<div class=\\"so\\" id=\\"oc\\"></div><div class=\\"sh\\" id=\\"sc\\"><div class=\\"sg\\"></div><div class=\\"shd\\"><h2>Buat Short Link</h2><button class=\\"ib\\" id=\\"ccl\\">"+sx("x")+"</button></div><div class=\\"sb\\"><form id=\\"cf\\"><div class=\\"fg\\"><label>URL Tujuan</label><input type=\\"url\\" id=\\"cu\\" placeholder=\\"https://example.com/...\\" required style=\\"font-size:1rem\\"></div><div class=\\"fg\\"><label>Kode (opsional)</label><input type=\\"text\\" id=\\"ck\\" placeholder=\\"my-link\\" maxlength=\\"32\\" style=\\"font-size:1rem\\"></div><div class=\\"fg\\"><label>Judul (opsional)</label><input type=\\"text\\" id=\\"cj\\" placeholder=\\"Label\\" style=\\"font-size:1rem\\"></div><div class=\\"fa\\"><button type=\\"button\\" class=\\"btn btn-s\\" id=\\"ccl2\\">Batal</button><button type=\\"submit\\" class=\\"btn btn-p\\" id=\\"cb\\">"+sx("plus")+"Buat</button></div></form></div></div>"+' +
'"<div class=\\"so\\" id=\\"oe\\"></div><div class=\\"sh\\" id=\\"se\\"><div class=\\"sg\\"></div><div class=\\"shd\\"><h2>Edit Short Link</h2><button class=\\"ib\\" id=\\"cel\\">"+sx("x")+"</button></div><div class=\\"sb\\"><form id=\\"ef\\"><div class=\\"fg\\"><label>URL Tujuan</label><input type=\\"url\\" id=\\"eu\\" required style=\\"font-size:1rem\\"></div><div class=\\"fg\\"><label>Judul</label><input type=\\"text\\" id=\\"ej\\" placeholder=\\"Label\\" style=\\"font-size:1rem\\"></div><div class=\\"fg\\"><label>Status</label><select id=\\"es\\" style=\\"font-size:1rem\\"><option value=\\"1\\">Aktif</option><option value=\\"0\\">Nonaktif</option></select></div><input type=\\"hidden\\" id=\\"ek\\"><div class=\\"fa\\"><button type=\\"button\\" class=\\"btn btn-s\\" id=\\"cel2\\">Batal</button><button type=\\"submit\\" class=\\"btn btn-p\\" id=\\"eb\\">"+sx("ed")+"Simpan</button></div></form></div></div>";' +
'$("sb").onclick=function(){var b=$("srb");b.classList.toggle("o");if(!b.classList.contains("o")){$("si").value="";_Q="";_P=1;load()}};$("tb").onclick=tg;$("ob").onclick=doLogout;$("fb").onclick=function(){os("c")};$("ccl").onclick=function(){cs("c")};$("ccl2").onclick=function(){cs("c")};$("oc").onclick=function(){cs("c")};$("cf").onsubmit=dc;$("cel").onclick=function(){cs("e")};$("cel2").onclick=function(){cs("e")};$("oe").onclick=function(){cs("e")};$("ef").onsubmit=de;var si=$("si");si&&si.addEventListener("input",function(){_Q=si.value;_P=1;load()});$("ll").addEventListener("click",function(e){var b=e.target.closest("[da]");if(!b)return;var c=b.getAttribute("cd");var a=b.getAttribute("ac");if(a==="cp"){cp(c)}else if(a==="ed"){oe(c)}else if(a==="dl"){dl(c)}else if(a==="pg"){go(parseInt(c))}});' +
'setupPTR();load()}' +
'window.doLogout=async function(){await fetch(A+"/logout",{method:"POST"});login()};' +
'var _ty=0;function setupPTR(){addEventListener("touchstart",function(e){_ty=e.touches[0].clientY},{passive:true});addEventListener("touchmove",function(e){if(scrollY>0||_Ld)return;if(e.touches[0].clientY-_ty>100){$("ri").classList.add("s")}},{passive:true});addEventListener("touchend",function(){var i=$("ri");if(i&&i.classList.contains("s")){i.classList.remove("s");load()}},{passive:true})}' +
'async function load(){var c=$("ll");if(!c)return;_Ld=true;c.innerHTML="<div class=\\"ld\\"><div class=\\"sp\\"></div>Memuat...</div>";try{var q=_Q?"&search="+encodeURIComponent(_Q):"",d=await api("/links?page="+_P+"&limit=20"+q);_L=d.links;_TP=Math.ceil(d.total/d.limit)||1;rl(d.links);rp()}catch(e){c.innerHTML="<div class=\\"em\\">Gagal memuat</div>"}_Ld=false}' +
'function rl(d){var c=$("ll");if(!d.length){c.innerHTML=_Q?"<div class=\\"em\\">Tidak ditemukan untuk \\""+es(_Q)+"\\"</div>":"<div class=\\"em\\">Belum ada link<br><span style=\\"font-size:.8rem\\">Tekan + untuk membuat</span></div>";return}' +
'c.innerHTML=d.map(function(l,i){' +
'return "<div class=\\"lc\\"><button class=\\"ls\\" da ac=\\"cp\\" cd=\\""+encodeURIComponent(l.shortCode)+"\\">"+sx("hs")+"/"+es(l.shortCode)+"</button>"+(l.title?"<div class=\\"lt\\">"+es(l.title)+"</div>":"")+"<div class=\\"lu\\">"+es(l.url)+"</div><div class=\\"lm\\"><b>"+l.clicks+"</b> klik <span class=\\"tag "+(l.isActive?"tag-on":"tag-off")+"\\">"+(l.isActive?"Aktif":"Nonaktif")+"</span></div><div class=\\"la\\"><button class=\\"ib\\" da ac=\\"cp\\" cd=\\""+encodeURIComponent(l.shortCode)+"\\">"+sx("cp")+"Copy</button><button class=\\"ib\\" da ac=\\"ed\\" cd=\\""+l.shortCode+"\\">"+sx("ed")+"Edit</button><button class=\\"ib\\" da ac=\\"dl\\" cd=\\""+l.shortCode+"\\" style=\\"color:var(--d)\\">"+sx("tr")+"Hapus</button></div></div>"' +
'}).join("")}' +
'function rp(){var el=$("pg");if(_TP<=1){el.innerHTML="";return}var h="";if(_P>1)h+="<button da ac=\\"pg\\" cd=\\""+(_P-1)+"\\">"+sx("lt")+"</button>";for(var i=Math.max(1,_P-2);i<=Math.min(_TP,_P+2);i++)h+="<button da ac=\\"pg\\" cd=\\""+i+"\\" "+(i===_P?"class=\\"ac\\"":"")+">"+i+"</button>";if(_P<_TP)h+="<button da ac=\\"pg\\" cd=\\""+(_P+1)+"\\">"+sx("rt")+"</button>";el.innerHTML=h}' +
'window.go=function(p){_P=p;scrollTo({top:0,behavior:"smooth"});load()};' +
'function os(n){$("o"+n).classList.add("s");$("s"+n).classList.add("s");document.body.style.overflow="hidden";if(n==="c")setTimeout(function(){$("cu").focus()},350)}' +
'function cs(n){$("o"+n).classList.remove("s");$("s"+n).classList.remove("s");document.body.style.overflow=""}' +
'window.dc=async function(e){e.preventDefault();var u=$("cu").value,k=$("ck").value.trim()||undefined,j=$("cj").value.trim()||undefined;var b=$("cb");b.disabled=true;b.innerHTML="Simpan...";try{await api("/links",{method:"POST",body:JSON.stringify({url:u,shortCode:k,title:j})});$("cu").value="";$("ck").value="";$("cj").value="";t("Short link berhasil dibuat");cs("c");_P=1;await load()}catch(e){t(e.message,true)}b.disabled=false;b.innerHTML=sx("plus")+"Buat"};' +
'window.oe=async function(c){try{var l=await api("/links/"+c);$("ek").value=l.shortCode;$("eu").value=l.url;$("ej").value=l.title||"";$("es").value=l.isActive?"1":"0";os("e")}catch(e){t(e.message,true)}};' +
'window.de=async function(e){e.preventDefault();var k=$("ek").value,u=$("eu").value,j=$("ej").value,ac=$("es").value==="1";var b=$("eb");b.disabled=true;b.innerHTML="Simpan...";try{await api("/links/"+k,{method:"PUT",body:JSON.stringify({url:u,title:j,isActive:ac})});t("Link berhasil diperbarui");cs("e");await load()}catch(e){t(e.message,true)}b.disabled=false;b.innerHTML=sx("ed")+"Simpan"};' +
'window.dl=async function(c){if(!confirm("Hapus short link /"+c+"?"))return;try{await api("/links/"+c,{method:"DELETE"});t("Link berhasil dihapus");if(_L.length<=1&&_P>1)_P--;await load()}catch(e){t(e.message,true)}};' +
'window.cp=function(c){var u=location.origin+"/"+decodeURIComponent(c);if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(function(){t("Tersalin: "+u)})}else{var ta=document.createElement("textarea");ta.value=u;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");t("Tersalin: "+u)}catch(e){}document.body.removeChild(ta)}};' +
';(async function(){var d=await api("/check");if(d&&d.authenticated){dash()}else{login()}})()' +
'</script></body></html>'
  return s;
}

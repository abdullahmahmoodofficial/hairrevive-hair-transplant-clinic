
(function(){'use strict';var WA='923001234567';
var hb=document.getElementById('hamburger'),nav=document.getElementById('nav');
if(hb&&nav){hb.addEventListener('click',function(){nav.classList.toggle('open');});}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});}
else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible');});}
document.querySelectorAll('[data-target]').forEach(function(el){var t=parseInt(el.getAttribute('data-target'),10),suf=el.getAttribute('data-suffix')||'',st=null;function step(ts){if(!st)st=ts;var p=Math.min((ts-st)/1600,1);el.textContent=Math.round(t*p)+suf;if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);});
document.querySelectorAll('.faq button').forEach(function(b){b.addEventListener('click',function(){b.parentElement.classList.toggle('open');});});
var f=document.getElementById('bookForm');
if(f){var q=new URLSearchParams(location.search);
 var ts=document.getElementById('fTreatment'),ds=document.getElementById('fDoctor');
 if(q.get('t')&&ts)ts.value=q.get('t'); if(q.get('d')&&ds)ds.value=q.get('d');
 f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
  ['fName','fPhone','fTreatment','fDate'].forEach(function(id){var el=document.getElementById(id),er=document.getElementById(id+'Err');var bad=!el.value.trim()||(id==='fPhone'&&el.value.replace(/\D/g,'').length<10);if(er)er.style.display=bad?'block':'none';if(bad)ok=false;});
  if(!ok)return;
  var msg='Assalam-o-Alaikum! I want to book an appointment.%0AName: '+encodeURIComponent(document.getElementById('fName').value)+'%0APhone: '+encodeURIComponent(document.getElementById('fPhone').value)+'%0ATreatment: '+encodeURIComponent(ts.options[ts.selectedIndex].text)+'%0ADoctor: '+encodeURIComponent(ds.options[ds.selectedIndex].text)+'%0ADate: '+encodeURIComponent(document.getElementById('fDate').value)+'%0ANotes: '+encodeURIComponent(document.getElementById('fNotes').value);
  document.getElementById('formOk').textContent='Opening WhatsApp with your booking details…';
  window.open('https://wa.me/'+WA+'?text='+msg,'_blank');});}
})();

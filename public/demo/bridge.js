/* Tour runs inside the opaque sandbox. No application credentials, API or storage. */
(() => {
  'use strict';
  const screens = new Set(['album','albums','clients','dashboard','feed','finance','finance-history','institution','institutions','orders','photosession','photosessions','report-albums','report-institution','staff','template','templates','themes']);
  const screen = location.pathname.split('/').pop().replace('.html','');
  const parentOrigin = new URL(location.href).origin;
  const send = (type,step) => {if(parent!==window && parentOrigin)parent.postMessage({channel:'fk-demo',type,screen,step},parentOrigin)};
  const banner=document.createElement('div');banner.className='fk-demo-note';banner.textContent='ДЕМО · Вымышленные данные · Действия не отправляются и не сохраняются';document.body.prepend(banner);
  // Block form submissions and links outside this static demo, including injected URLs.
  document.addEventListener('submit',e=>e.preventDefault(),true);
  document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const url=new URL(a.getAttribute('href')||'#',location.href);if(url.origin!==location.origin||!url.pathname.startsWith('/demo/app/')||!screens.has(url.pathname.split('/').pop().replace('.html',''))){e.preventDefault();e.stopImmediatePropagation()}},true);
  // Make the already rendered shoot title and album opening actionable.
  if(screen==='photosessions'){
    function prepare(){document.querySelectorAll('.cell-name').forEach(el=>{el.setAttribute('role','button');el.tabIndex=0;el.title='Открыть фотосессию';el.onclick=()=>location.href='photosession.html';el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}}})}
    prepare();new MutationObserver(prepare).observe(document.querySelector('#tbody'),{childList:true});
  }
  if(screen==='photosession'){
    function prepare(){document.querySelectorAll('#alblist [aria-label="Открыть"]').forEach(el=>el.onclick=()=>location.href='album.html')}
    prepare();new MutationObserver(prepare).observe(document.querySelector('#alblist'),{childList:true});
  }
  const order=document.createElement('section');order.id='demo-order-summary';order.hidden=true;order.tabIndex=-1;order.innerHTML='<span class="fk-demo-badge">Демонстрационный заказ</span><h2>Выбор собран</h2><p id="demo-order-items"></p><p>Сумма, комиссия и оплата здесь не рассчитываются. Заказ не отправлен.</p><button id="demo-order-back" class="btn btn-dark">Вернуться к выбору</button>';
  if(screen==='album'){
    document.querySelector('#previewView').append(order);
    const folderKeys=()=>document.querySelectorAll('.folder-head').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-expanded',String(el.parentElement.classList.contains('open')));el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click()}}});folderKeys();new MutationObserver(folderKeys).observe(document.querySelector('#folderRows'),{childList:true});
    document.querySelector('.ca-bar .btn').onclick=()=>showOrder();
    document.querySelector('#demo-order-back').onclick=()=>{order.hidden=true;document.querySelector('.ca-grid').hidden=false;document.querySelector('.ca-bar').hidden=false};
  }
  function preview(on){if(screen!=='album')return;const visible=!document.querySelector('#previewView').hidden;if(visible!==on)window.togglePreview();order.hidden=true;document.querySelector('.ca-grid').hidden=false;document.querySelector('.ca-bar').hidden=false}
  function selectOne(){preview(true);const selected=document.querySelector('.ca-cell.sel');if(!selected)document.querySelector('.ca-cell').click()}
  function showOrder(){const items=Array.from(document.querySelectorAll('.ca-cell.sel'),el=>'Кадр '+el.textContent.trim());if(!items.length){window.toast('Сначала выберите хотя бы один кадр');return}document.querySelector('#demo-order-items').textContent=items.join(' · ');document.querySelector('.ca-grid').hidden=true;document.querySelector('.ca-bar').hidden=true;order.hidden=false;order.focus()}
  const steps=[
    {page:'photosessions',selector:'.cell-name',title:'Откройте съёмку',text:'Нажмите «Осенний бал». В карточке собраны тематика, команда и альбомы этой съёмки.'},
    {page:'photosession',selector:'#alblist [aria-label="Открыть"]',title:'Перейдите в альбом',text:'Нажмите значок папки у группы. Откроются персональные папки и настройки альбома.'},
    {page:'album',selector:'.folder-head',title:'Раскройте персональную папку',text:'Нажмите «Папка №1». Вы увидите кадры внутри. Здесь условные изображения вместо фотографий детей.',setup:()=>preview(false)},
    {page:'album',selector:'#prevBtn',title:'Посмотрите глазами клиента',text:'Папка раскрыта. Теперь нажмите «Предпросмотр как клиент», чтобы проверить выбор фотографий.',setup:()=>{preview(false);if(!document.querySelector('.folder.open'))document.querySelector('.folder-head').click()}},
    {page:'album',selector:'.ca-cell',title:'Выберите кадр',text:'Нажмите первый кадр. Отметка и счётчик покажут, что он добавлен в выбор клиента.',setup:()=>preview(true)},
    {page:'album',selector:'.ca-bar .btn',title:'Соберите заказ',text:'Кадр отмечен. Нажмите «Оформить заказ», чтобы увидеть состав выбранного. Реальная оплата отключена.',setup:selectOne},
    {page:'album',selector:'#demo-order-summary',title:'Проверьте результат выбора',text:'В составе появился выбранный кадр. Заказ существует только в этой демонстрации. Далее — сводка руководителя.',setup:()=>{selectOne();showOrder()}},
    {page:'dashboard',selector:'#w-rev',title:'Завершите путь аналитикой',text:'Выручка, заказы, средний чек, тематики и план помогают читать экономику студии. Все числа на этом экране вымышлены.'}
  ];
  let current=-1,tour=null,moving=false;
  function stop(type='closed'){current=-1;if(tour){const old=tour;tour=null;old.destroy()}send(type);}
  function go(index){if(index>=steps.length){stop('complete');return}if(index<0)return;const step=steps[index];if(step.page!==screen){location.href=step.page+'.html?tour='+index;return}moving=true;if(tour)tour.destroy();moving=false;current=index;step.setup?.();const el=document.querySelector(step.selector);if(!el){stop();return}el.scrollIntoView({block:'center',behavior:'instant'});
    tour=window.driver.js.driver({animate:!matchMedia('(prefers-reduced-motion: reduce)').matches,duration:180,overlayOpacity:.68,stagePadding:7,stageRadius:10,allowKeyboardControl:false,overlayClickBehavior:()=>stop(),onDestroyed:()=>{if(!moving&&current>=0){current=-1;send('closed')}},popoverClass:'fk-tour',showButtons:['previous','next','close'],onNextClick:()=>go(current+1),onPrevClick:()=>go(current-1),onCloseClick:()=>stop(),onPopoverRender:(p)=>{p.progress.textContent=`${index+1} / ${steps.length}`;p.progress.style.display='block';p.previousButton.disabled=index===0;p.nextButton.textContent=index===7?'Завершить':'Далее →';p.previousButton.textContent='← Назад';p.closeButton.setAttribute('aria-label','Выйти из экскурсии');const skip=document.createElement('button');skip.className='fk-tour-skip';skip.textContent='Пропустить экскурсию';skip.onclick=()=>stop();p.wrapper.append(skip);p.nextButton.focus()}});
    tour.highlight({element:el,popover:{title:step.title,description:step.text,side:innerWidth<600?'bottom':'right',align:'center',showButtons:['previous','next','close']}});send('step',index);
  }
  document.addEventListener('click',e=>{if(current<0)return;const step=steps[current];if(e.target.closest(step.selector)){e.preventDefault();e.stopImmediatePropagation();go(current+1)}},true);
  document.addEventListener('keydown',e=>{if(current<0)return;if(e.key==='Escape'){e.preventDefault();stop()}else if(!['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)&&['ArrowRight','ArrowLeft'].includes(e.key)){e.preventDefault();go(current+(e.key==='ArrowRight'?1:-1))}},true);
  window.addEventListener('message',e=>{if(e.source!==parent||e.origin!==parentOrigin||!e.data||e.data.channel!=='fk-demo')return;if(e.data.type==='exit')stop()});
  send('ready');const value=new URLSearchParams(location.search).get('tour');if(value!==null&&/^\d$/.test(value)&&steps[+value]?.page===screen)requestAnimationFrame(()=>go(+value));
})();

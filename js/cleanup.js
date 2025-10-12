// Remove stray text nodes (e.g., accidental 'n') that leak into layout
(function(){
  function clean(container){
    try{
      if(!container) return;
      const toRemove = [];
      container.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE){
          const t = (node.nodeValue||'').replace(/\s+/g,' ').trim();
          if (t === '' || t === 'n' || t === 'N') toRemove.push(node);
        }
      });
      toRemove.forEach(n=> n.parentNode && n.parentNode.removeChild(n));
    }catch(e){ /* ignore */ }
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=>{ clean(document.body); });
  } else {
    clean(document.body);
  }
})();


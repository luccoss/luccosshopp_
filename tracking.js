
(function(){
  const endpoint = "";
  function record(type,data){
    const event={type:type,data:data||{},ts:new Date().toISOString(),path:location.pathname};
    try{
      const old=JSON.parse(localStorage.getItem("lucco_events")||"[]");
      old.push(event);
      localStorage.setItem("lucco_events",JSON.stringify(old.slice(-200)));
    }catch(e){}
    if(endpoint){
      try{navigator.sendBeacon(endpoint,JSON.stringify(event));}catch(e){}
    }
  }
  document.addEventListener("click",function(e){
    const el=e.target.closest("[data-track]");
    if(el) record(el.dataset.track,{product:el.dataset.product||"",href:el.getAttribute("href")||""});
  });
  record("pageview",{title:document.title});
})();

//tealium universal tag - utag.36 ut4.0.201807171319, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];window.sendPlayerError=function(err,settings){if(typeof newrelic!='undefined'){var fields={};if(err&&err.data){fields.category=(err.data.category)?err.data.category:'';fields.message=(err.data.message)?err.data.message:'';fields.code=(err.data.code)?err.data.code:'';fields.technicalMessage=(err.data.details&&err.data.details.message)?err.data.details.message:'';}
if(settings){fields.content=(settings.content)?settings.content:'';fields.platform=(settings.platform)?settings.platform:'';}
if(typeof OnePlayer!='undefined'){fields.playerVersion=OnePlayer.__version__;}
newrelic.addPageAction('playerError',fields);}}
u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
try{var pageChange=newrelic.interaction().setName(b.pageName);newrelic.setPageViewName(b.pageName);newrelic.setCurrentRouteName(b.pageName);newrelic.setCustomAttribute("pageType",b.pageType);pageChange.save();pageChange.end();newrelic.finished();}catch(e){}
u.loader_cb=function(){u.initialized=true;};}};utag.o[loader].loader.LOAD(id);})("36","canalplus.mycanal-web");}catch(error){utag.DB(error);}

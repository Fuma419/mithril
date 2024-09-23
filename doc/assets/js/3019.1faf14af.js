/*! For license information please see 3019.1faf14af.js.LICENSE.txt */
(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[3019],{42838:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:o}=Object;let{freeze:i,seal:a,create:c}=Object,{apply:l,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),l||(l=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});const u=N(Array.prototype.forEach),f=N(Array.prototype.pop),m=N(Array.prototype.push),p=N(String.prototype.toLowerCase),d=N(String.prototype.toString),h=N(String.prototype.match),g=N(String.prototype.replace),_=N(String.prototype.indexOf),T=N(String.prototype.trim),y=N(Object.prototype.hasOwnProperty),b=N(RegExp.prototype.test),E=w(TypeError),A=N(Number.isNaN);function N(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return l(e,t,r)}}function w(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return s(e,n)}}function S(e,r){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;t&&t(e,null);let i=r.length;for(;i--;){let t=r[i];if("string"==typeof t){const e=o(t);e!==t&&(n(r)||(r[i]=e),t=e)}e[t]=!0}return e}function C(e){for(let t=0;t<e.length;t++)y(e,t)||(e[t]=null);return e}function v(t){const n=c(null);for(const[r,o]of e(t))y(t,r)&&(Array.isArray(o)?n[r]=C(o):o&&"object"==typeof o&&o.constructor===Object?n[r]=v(o):n[r]=o);return n}function k(e,t){for(;null!==e;){const n=o(e,t);if(n){if(n.get)return N(n.get);if("function"==typeof n.value)return N(n.value)}e=r(e)}function n(){return null}return n}const R=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),x=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),I=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),M=i(["#text"]),U=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),H=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),P=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),z=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),B=a(/<%[\w\W]*|[\w\W]*%>/gm),W=a(/\${[\w\W]*}/gm),Y=a(/^data-[\-\w.\u00B7-\uFFFF]/),G=a(/^aria-[\-\w]+$/),j=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),K=a(/^(?:\w+script|data):/i),X=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),q=a(/^html$/i),V=a(/^[a-z][.\w]*(-[.\w]+)+$/i);var Z=Object.freeze({__proto__:null,MUSTACHE_EXPR:z,ERB_EXPR:B,TMPLIT_EXPR:W,DATA_ATTR:Y,ARIA_ATTR:G,IS_ALLOWED_URI:j,IS_SCRIPT_OR_DATA:K,ATTR_WHITESPACE:X,DOCTYPE_NAME:q,CUSTOM_ELEMENT:V});const $={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},J=function(){return"undefined"==typeof window?null:window},Q=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(i){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ee(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J();const n=e=>ee(e);if(n.version="3.1.3",n.removed=[],!t||!t.document||t.document.nodeType!==$.document)return n.isSupported=!1,n;let{document:r}=t;const o=r,a=o.currentScript,{DocumentFragment:l,HTMLTemplateElement:s,Node:N,Element:w,NodeFilter:C,NamedNodeMap:z=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:B,DOMParser:W,trustedTypes:Y}=t,G=w.prototype,K=k(G,"cloneNode"),X=k(G,"nextSibling"),V=k(G,"childNodes"),te=k(G,"parentNode");if("function"==typeof s){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let ne,re="";const{implementation:oe,createNodeIterator:ie,createDocumentFragment:ae,getElementsByTagName:ce}=r,{importNode:le}=o;let se={};n.isSupported="function"==typeof e&&"function"==typeof te&&oe&&void 0!==oe.createHTMLDocument;const{MUSTACHE_EXPR:ue,ERB_EXPR:fe,TMPLIT_EXPR:me,DATA_ATTR:pe,ARIA_ATTR:de,IS_SCRIPT_OR_DATA:he,ATTR_WHITESPACE:ge,CUSTOM_ELEMENT:_e}=Z;let{IS_ALLOWED_URI:Te}=Z,ye=null;const be=S({},[...R,...L,...O,...x,...M]);let Ee=null;const Ae=S({},[...U,...H,...P,...F]);let Ne=Object.seal(c(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),we=null,Se=null,Ce=!0,ve=!0,ke=!1,Re=!0,Le=!1,Oe=!0,De=!1,xe=!1,Ie=!1,Me=!1,Ue=!1,He=!1,Pe=!0,Fe=!1;const ze="user-content-";let Be=!0,We=!1,Ye={},Ge=null;const je=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ke=null;const Xe=S({},["audio","video","img","source","image","track"]);let qe=null;const Ve=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ze="http://www.w3.org/1998/Math/MathML",$e="http://www.w3.org/2000/svg",Je="http://www.w3.org/1999/xhtml";let Qe=Je,et=!1,tt=null;const nt=S({},[Ze,$e,Je],d);let rt=null;const ot=["application/xhtml+xml","text/html"],it="text/html";let at=null,ct=null;const lt=255,st=r.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},ft=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!ct||ct!==e){if(e&&"object"==typeof e||(e={}),e=v(e),rt=-1===ot.indexOf(e.PARSER_MEDIA_TYPE)?it:e.PARSER_MEDIA_TYPE,at="application/xhtml+xml"===rt?d:p,ye=y(e,"ALLOWED_TAGS")?S({},e.ALLOWED_TAGS,at):be,Ee=y(e,"ALLOWED_ATTR")?S({},e.ALLOWED_ATTR,at):Ae,tt=y(e,"ALLOWED_NAMESPACES")?S({},e.ALLOWED_NAMESPACES,d):nt,qe=y(e,"ADD_URI_SAFE_ATTR")?S(v(Ve),e.ADD_URI_SAFE_ATTR,at):Ve,Ke=y(e,"ADD_DATA_URI_TAGS")?S(v(Xe),e.ADD_DATA_URI_TAGS,at):Xe,Ge=y(e,"FORBID_CONTENTS")?S({},e.FORBID_CONTENTS,at):je,we=y(e,"FORBID_TAGS")?S({},e.FORBID_TAGS,at):{},Se=y(e,"FORBID_ATTR")?S({},e.FORBID_ATTR,at):{},Ye=!!y(e,"USE_PROFILES")&&e.USE_PROFILES,Ce=!1!==e.ALLOW_ARIA_ATTR,ve=!1!==e.ALLOW_DATA_ATTR,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Re=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Le=e.SAFE_FOR_TEMPLATES||!1,Oe=!1!==e.SAFE_FOR_XML,De=e.WHOLE_DOCUMENT||!1,Me=e.RETURN_DOM||!1,Ue=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_TRUSTED_TYPE||!1,Ie=e.FORCE_BODY||!1,Pe=!1!==e.SANITIZE_DOM,Fe=e.SANITIZE_NAMED_PROPS||!1,Be=!1!==e.KEEP_CONTENT,We=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||j,Qe=e.NAMESPACE||Je,Ne=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ne.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ne.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ne.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(ve=!1),Ue&&(Me=!0),Ye&&(ye=S({},M),Ee=[],!0===Ye.html&&(S(ye,R),S(Ee,U)),!0===Ye.svg&&(S(ye,L),S(Ee,H),S(Ee,F)),!0===Ye.svgFilters&&(S(ye,O),S(Ee,H),S(Ee,F)),!0===Ye.mathMl&&(S(ye,x),S(Ee,P),S(Ee,F))),e.ADD_TAGS&&(ye===be&&(ye=v(ye)),S(ye,e.ADD_TAGS,at)),e.ADD_ATTR&&(Ee===Ae&&(Ee=v(Ee)),S(Ee,e.ADD_ATTR,at)),e.ADD_URI_SAFE_ATTR&&S(qe,e.ADD_URI_SAFE_ATTR,at),e.FORBID_CONTENTS&&(Ge===je&&(Ge=v(Ge)),S(Ge,e.FORBID_CONTENTS,at)),Be&&(ye["#text"]=!0),De&&S(ye,["html","head","body"]),ye.table&&(S(ye,["tbody"]),delete we.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ne=e.TRUSTED_TYPES_POLICY,re=ne.createHTML("")}else void 0===ne&&(ne=Q(Y,a)),null!==ne&&"string"==typeof re&&(re=ne.createHTML(""));i&&i(e),ct=e}},mt=S({},["mi","mo","mn","ms","mtext"]),pt=S({},["foreignobject","annotation-xml"]),dt=S({},["title","style","font","a","script"]),ht=S({},[...L,...O,...D]),gt=S({},[...x,...I]),_t=function(e){let t=te(e);t&&t.tagName||(t={namespaceURI:Qe,tagName:"template"});const n=p(e.tagName),r=p(t.tagName);return!!tt[e.namespaceURI]&&(e.namespaceURI===$e?t.namespaceURI===Je?"svg"===n:t.namespaceURI===Ze?"svg"===n&&("annotation-xml"===r||mt[r]):Boolean(ht[n]):e.namespaceURI===Ze?t.namespaceURI===Je?"math"===n:t.namespaceURI===$e?"math"===n&&pt[r]:Boolean(gt[n]):e.namespaceURI===Je?!(t.namespaceURI===$e&&!pt[r])&&!(t.namespaceURI===Ze&&!mt[r])&&!gt[n]&&(dt[n]||!ht[n]):!("application/xhtml+xml"!==rt||!tt[e.namespaceURI]))},Tt=function(e){m(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},yt=function(e,t){try{m(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){m(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ee[e])if(Me||Ue)try{Tt(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},bt=function(e){let t=null,n=null;if(Ie)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===rt&&Qe===Je&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=ne?ne.createHTML(e):e;if(Qe===Je)try{t=(new W).parseFromString(o,rt)}catch(a){}if(!t||!t.documentElement){t=oe.createDocument(Qe,"template",null);try{t.documentElement.innerHTML=et?re:o}catch(a){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(r.createTextNode(n),i.childNodes[0]||null),Qe===Je?ce.call(t,De?"html":"body")[0]:De?t.documentElement:i},Et=function(e){return ie.call(e.ownerDocument||e,e,C.SHOW_ELEMENT|C.SHOW_COMMENT|C.SHOW_TEXT|C.SHOW_PROCESSING_INSTRUCTION|C.SHOW_CDATA_SECTION,null)},At=function(e){return e instanceof B&&(void 0!==e.__depth&&"number"!=typeof e.__depth||void 0!==e.__removalCount&&"number"!=typeof e.__removalCount||"string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof z)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Nt=function(e){return"function"==typeof N&&e instanceof N},wt=function(e,t,r){se[e]&&u(se[e],(e=>{e.call(n,t,r,ct)}))},St=function(e){let t=null;if(wt("beforeSanitizeElements",e,null),At(e))return Tt(e),!0;const r=at(e.nodeName);if(wt("uponSanitizeElement",e,{tagName:r,allowedTags:ye}),e.hasChildNodes()&&!Nt(e.firstElementChild)&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return Tt(e),!0;if(e.nodeType===$.progressingInstruction)return Tt(e),!0;if(Oe&&e.nodeType===$.comment&&b(/<[/\w]/g,e.data))return Tt(e),!0;if(!ye[r]||we[r]){if(!we[r]&&vt(r)){if(Ne.tagNameCheck instanceof RegExp&&b(Ne.tagNameCheck,r))return!1;if(Ne.tagNameCheck instanceof Function&&Ne.tagNameCheck(r))return!1}if(Be&&!Ge[r]){const t=te(e)||e.parentNode,n=V(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r){const o=K(n[r],!0);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,X(e))}}return Tt(e),!0}return e instanceof w&&!_t(e)?(Tt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!b(/<\/no(script|embed|frames)/i,e.innerHTML)?(Le&&e.nodeType===$.text&&(t=e.textContent,u([ue,fe,me],(e=>{t=g(t,e," ")})),e.textContent!==t&&(m(n.removed,{element:e.cloneNode()}),e.textContent=t)),wt("afterSanitizeElements",e,null),!1):(Tt(e),!0)},Ct=function(e,t,n){if(Pe&&("id"===t||"name"===t)&&(n in r||n in st||"__depth"===n||"__removalCount"===n))return!1;if(ve&&!Se[t]&&b(pe,t));else if(Ce&&b(de,t));else if(!Ee[t]||Se[t]){if(!(vt(e)&&(Ne.tagNameCheck instanceof RegExp&&b(Ne.tagNameCheck,e)||Ne.tagNameCheck instanceof Function&&Ne.tagNameCheck(e))&&(Ne.attributeNameCheck instanceof RegExp&&b(Ne.attributeNameCheck,t)||Ne.attributeNameCheck instanceof Function&&Ne.attributeNameCheck(t))||"is"===t&&Ne.allowCustomizedBuiltInElements&&(Ne.tagNameCheck instanceof RegExp&&b(Ne.tagNameCheck,n)||Ne.tagNameCheck instanceof Function&&Ne.tagNameCheck(n))))return!1}else if(qe[t]);else if(b(Te,g(n,ge,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!Ke[e])if(ke&&!b(he,g(n,ge,"")));else if(n)return!1;return!0},vt=function(e){return"annotation-xml"!==e&&h(e,_e)},kt=function(e){wt("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ee};let o=t.length;for(;o--;){const a=t[o],{name:c,namespaceURI:l,value:s}=a,m=at(c);let p="value"===c?s:T(s);if(r.attrName=m,r.attrValue=p,r.keepAttr=!0,r.forceKeepAttr=void 0,wt("uponSanitizeAttribute",e,r),p=r.attrValue,r.forceKeepAttr)continue;if(yt(c,e),!r.keepAttr)continue;if(!Re&&b(/\/>/i,p)){yt(c,e);continue}if(Oe&&b(/((--!?|])>)|<\/(style|title)/i,p)){yt(c,e);continue}Le&&u([ue,fe,me],(e=>{p=g(p,e," ")}));const d=at(e.nodeName);if(Ct(d,m,p)){if(!Fe||"id"!==m&&"name"!==m||(yt(c,e),p=ze+p),ne&&"object"==typeof Y&&"function"==typeof Y.getAttributeType)if(l);else switch(Y.getAttributeType(d,m)){case"TrustedHTML":p=ne.createHTML(p);break;case"TrustedScriptURL":p=ne.createScriptURL(p)}try{l?e.setAttributeNS(l,c,p):e.setAttribute(c,p),At(e)?Tt(e):f(n.removed)}catch(i){}}}wt("afterSanitizeAttributes",e,null)},Rt=function e(t){let n=null;const r=Et(t);for(wt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();){if(wt("uponSanitizeShadowNode",n,null),St(n))continue;const t=te(n);n.nodeType===$.element&&(t&&t.__depth?n.__depth=(n.__removalCount||0)+t.__depth+1:n.__depth=1),(n.__depth>=lt||n.__depth<0||A(n.__depth))&&Tt(n),n.content instanceof l&&(n.content.__depth=n.__depth,e(n.content)),kt(n)}wt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,i=null,a=null,c=null;if(et=!e,et&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Nt(e)){if("function"!=typeof e.toString)throw E("toString is not a function");if("string"!=typeof(e=e.toString()))throw E("dirty is not a string, aborting")}if(!n.isSupported)return e;if(xe||ft(t),n.removed=[],"string"==typeof e&&(We=!1),We){if(e.nodeName){const t=at(e.nodeName);if(!ye[t]||we[t])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof N)r=bt("\x3c!----\x3e"),i=r.ownerDocument.importNode(e,!0),i.nodeType===$.element&&"BODY"===i.nodeName||"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!Me&&!Le&&!De&&-1===e.indexOf("<"))return ne&&He?ne.createHTML(e):e;if(r=bt(e),!r)return Me?null:He?re:""}r&&Ie&&Tt(r.firstChild);const s=Et(We?e:r);for(;a=s.nextNode();){if(St(a))continue;const e=te(a);a.nodeType===$.element&&(e&&e.__depth?a.__depth=(a.__removalCount||0)+e.__depth+1:a.__depth=1),(a.__depth>=lt||a.__depth<0||A(a.__depth))&&Tt(a),a.content instanceof l&&(a.content.__depth=a.__depth,Rt(a.content)),kt(a)}if(We)return e;if(Me){if(Ue)for(c=ae.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return(Ee.shadowroot||Ee.shadowrootmode)&&(c=le.call(o,c,!0)),c}let f=De?r.outerHTML:r.innerHTML;return De&&ye["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&b(q,r.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+f),Le&&u([ue,fe,me],(e=>{f=g(f,e," ")})),ne&&He?ne.createHTML(f):f},n.setConfig=function(){ft(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),xe=!0},n.clearConfig=function(){ct=null,xe=!1},n.isValidAttribute=function(e,t,n){ct||ft({});const r=at(e),o=at(t);return Ct(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(se[e]=se[e]||[],m(se[e],t))},n.removeHook=function(e){if(se[e])return f(se[e])},n.removeHooks=function(e){se[e]&&(se[e]=[])},n.removeAllHooks=function(){se={}},n}return ee()}()},24534:(e,t,n)=>{"use strict";n.d(t,{IO:()=>f,LU:()=>l,MS:()=>r,Sv:()=>u,XZ:()=>c,YK:()=>a,j:()=>i,vd:()=>o,yE:()=>s});var r="-ms-",o="-moz-",i="-webkit-",a="comm",c="rule",l="decl",s="@import",u="@keyframes",f="@layer"},73716:(e,t,n)=>{"use strict";n.d(t,{wE:()=>a});var r=n(24534),o=n(19735),i=n(40390);function a(e){return(0,i.VF)(c("",null,null,null,[""],e=(0,i.c4)(e),0,[0],e))}function c(e,t,n,r,a,f,m,p,d){for(var h=0,g=0,_=m,T=0,y=0,b=0,E=1,A=1,N=1,w=0,S="",C=a,v=f,k=r,R=S;A;)switch(b=w,w=(0,i.K2)()){case 40:if(108!=b&&58==(0,o.wN)(R,_-1)){-1!=(0,o.K5)(R+=(0,o.HC)((0,i.Tb)(w),"&","&\f"),"&\f",(0,o.tn)(h?p[h-1]:0))&&(N=-1);break}case 34:case 39:case 91:R+=(0,i.Tb)(w);break;case 9:case 10:case 13:case 32:R+=(0,i.mw)(b);break;case 92:R+=(0,i.Nc)((0,i.OW)()-1,7);continue;case 47:switch((0,i.se)()){case 42:case 47:(0,o.BC)(s((0,i.nf)((0,i.K2)(),(0,i.OW)()),t,n,d),d);break;default:R+="/"}break;case 123*E:p[h++]=(0,o.b2)(R)*N;case 125*E:case 59:case 0:switch(w){case 0:case 125:A=0;case 59+g:-1==N&&(R=(0,o.HC)(R,/\f/g,"")),y>0&&(0,o.b2)(R)-_&&(0,o.BC)(y>32?u(R+";",r,n,_-1,d):u((0,o.HC)(R," ","")+";",r,n,_-2,d),d);break;case 59:R+=";";default:if((0,o.BC)(k=l(R,t,n,h,g,a,p,S,C=[],v=[],_,f),f),123===w)if(0===g)c(R,t,k,k,C,f,_,p,v);else switch(99===T&&110===(0,o.wN)(R,3)?100:T){case 100:case 108:case 109:case 115:c(e,k,k,r&&(0,o.BC)(l(e,k,k,0,0,a,p,S,a,C=[],_,v),v),a,v,_,p,r?C:v);break;default:c(R,k,k,k,[""],v,0,p,v)}}h=g=y=0,E=N=1,S=R="",_=m;break;case 58:_=1+(0,o.b2)(R),y=b;default:if(E<1)if(123==w)--E;else if(125==w&&0==E++&&125==(0,i.YL)())continue;switch(R+=(0,o.HT)(w),w*E){case 38:N=g>0?1:(R+="\f",-1);break;case 44:p[h++]=((0,o.b2)(R)-1)*N,N=1;break;case 64:45===(0,i.se)()&&(R+=(0,i.Tb)((0,i.K2)())),T=(0,i.se)(),g=_=(0,o.b2)(S=R+=(0,i.Cv)((0,i.OW)())),w++;break;case 45:45===b&&2==(0,o.b2)(R)&&(E=0)}}return f}function l(e,t,n,a,c,l,s,u,f,m,p,d){for(var h=c-1,g=0===c?l:[""],_=(0,o.FK)(g),T=0,y=0,b=0;T<a;++T)for(var E=0,A=(0,o.c1)(e,h+1,h=(0,o.tn)(y=s[T])),N=e;E<_;++E)(N=(0,o.Bq)(y>0?g[E]+" "+A:(0,o.HC)(A,/&\f/g,g[E])))&&(f[b++]=N);return(0,i.rH)(e,t,n,0===c?r.XZ:u,f,m,p,d)}function s(e,t,n,a){return(0,i.rH)(e,t,n,r.YK,(0,o.HT)((0,i.Tp)()),(0,o.c1)(e,2,-2),0,a)}function u(e,t,n,a,c){return(0,i.rH)(e,t,n,r.LU,(0,o.c1)(e,0,a),(0,o.c1)(e,a+1,-1),a,c)}},50483:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,l:()=>i});var r=n(24534),o=n(19735);function i(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function a(e,t,n,a){switch(e.type){case r.IO:if(e.children.length)break;case r.yE:case r.LU:return e.return=e.return||e.value;case r.YK:return"";case r.Sv:return e.return=e.value+"{"+i(e.children,a)+"}";case r.XZ:if(!(0,o.b2)(e.value=e.props.join(",")))return""}return(0,o.b2)(n=i(e.children,a))?e.return=e.value+"{"+n+"}":""}},40390:(e,t,n)=>{"use strict";n.d(t,{C:()=>f,Cv:()=>v,K2:()=>h,Nc:()=>w,OW:()=>_,Tb:()=>A,Tp:()=>p,VF:()=>E,YL:()=>d,c4:()=>b,mw:()=>N,nf:()=>C,rH:()=>u,se:()=>g,yY:()=>m});var r=n(19735),o=1,i=1,a=0,c=0,l=0,s="";function u(e,t,n,r,a,c,l,s){return{value:e,root:t,parent:n,type:r,props:a,children:c,line:o,column:i,length:l,return:"",siblings:s}}function f(e,t){return(0,r.kp)(u("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function m(e){for(;e.root;)e=f(e.root,{children:[e]});(0,r.BC)(e,e.siblings)}function p(){return l}function d(){return l=c>0?(0,r.wN)(s,--c):0,i--,10===l&&(i=1,o--),l}function h(){return l=c<a?(0,r.wN)(s,c++):0,i++,10===l&&(i=1,o++),l}function g(){return(0,r.wN)(s,c)}function _(){return c}function T(e,t){return(0,r.c1)(s,e,t)}function y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function b(e){return o=i=1,a=(0,r.b2)(s=e),c=0,[]}function E(e){return s="",e}function A(e){return(0,r.Bq)(T(c-1,S(91===e?e+2:40===e?e+1:e)))}function N(e){for(;(l=g())&&l<33;)h();return y(e)>2||y(l)>3?"":" "}function w(e,t){for(;--t&&h()&&!(l<48||l>102||l>57&&l<65||l>70&&l<97););return T(e,_()+(t<6&&32==g()&&32==h()))}function S(e){for(;h();)switch(l){case e:return c;case 34:case 39:34!==e&&39!==e&&S(l);break;case 40:41===e&&S(e);break;case 92:h()}return c}function C(e,t){for(;h()&&e+l!==57&&(e+l!==84||47!==g()););return"/*"+T(t,c-1)+"*"+(0,r.HT)(47===e?e:h())}function v(e){for(;!y(g());)h();return T(e,c)}},19735:(e,t,n)=>{"use strict";n.d(t,{BC:()=>h,Bq:()=>c,FK:()=>d,HC:()=>s,HT:()=>o,K5:()=>u,YW:()=>l,b2:()=>p,c1:()=>m,kg:()=>g,kp:()=>i,pb:()=>_,tW:()=>a,tn:()=>r,wN:()=>f});var r=Math.abs,o=String.fromCharCode,i=Object.assign;function a(e,t){return 45^f(e,0)?(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}function c(e){return e.trim()}function l(e,t){return(e=t.exec(e))?e[0]:e}function s(e,t,n){return e.replace(t,n)}function u(e,t,n){return e.indexOf(t,n)}function f(e,t){return 0|e.charCodeAt(t)}function m(e,t,n){return e.slice(t,n)}function p(e){return e.length}function d(e){return e.length}function h(e,t){return t.push(e),e}function g(e,t){return e.map(t).join("")}function _(e,t){return e.filter((function(e){return!l(e,t)}))}}}]);
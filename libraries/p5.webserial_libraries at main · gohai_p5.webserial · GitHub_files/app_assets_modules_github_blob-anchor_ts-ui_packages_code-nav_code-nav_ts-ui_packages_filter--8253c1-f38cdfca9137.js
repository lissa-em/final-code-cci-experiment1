"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_blob-anchor_ts-ui_packages_code-nav_code-nav_ts-ui_packages_filter--8253c1"],{68953:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=a(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=a(t[0]),n=a(t[1]);if(!e||!n)return;return c(Object.freeze({start:e,end:n}))}}}function r(e){let{start:t,end:n}=c(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function s(e){return{blobRange:i(e),anchorPrefix:function(e){let t=e.length<5e3&&e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}(e)}}function l({anchorPrefix:e,blobRange:t}){return t?`#${e}${r(t)}`:"#"}function a(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function o(e,t){let[n,i]=h(e.start,!0,t),[r,s]=h(e.end,!1,t);if(!n||!r)return;let l=i,a=s;if(-1===l&&(l=0),-1===a&&(a=r.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let o=n.ownerDocument.createRange();return o.setStart(n,l),o.setEnd(r,a),o}function h(e,t,n){let i=[null,0],r=n(e.line);if(!r)return i;if(null==e.column)return[r,-1];let s=e.column-1,l=function e(t){if(t.nodeType===Node.TEXT_NODE)return[t];if(!t.childNodes||!t.childNodes.length)return[];let n=[];for(let i of t.childNodes)n=n.concat(e(i));return n}(r);for(let e=0;e<l.length;e++){let n=l[e],i=s-(n.textContent||"").length;if(0===i){let i=l[e+1];if(t&&i)return[i,0];return[n,s]}if(i<0)return[n,s];s=i}return i}function c(e){let t=[e.start,e.end];return(t.sort(u),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function u(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{$c:()=>s,JB:()=>l,Kn:()=>r,Py:()=>o,eC:()=>i})},50548:(e,t,n)=>{n.d(t,{KY:()=>r.KY,Kv:()=>r.Kv,Op:()=>r.Op,tz:()=>s.tz,v0:()=>i.v0});var i=n(95405),r=n(43500),s=n(79637);n(82046)},43500:(e,t,n)=>{n.d(t,{KY:()=>u,Kv:()=>c,Op:()=>CodeNavigationInfo});var i=n(83056),r=n(28784),s=n(95405),l=n(79637),a=n(82046);let CodeNavigationInfo=class CodeNavigationInfo{initCodeSections(){let e=new Map,t=new Map;for(let n=0;n<this.symbols.length;n++)if(this.symbols[n].lineNumber<this.symbols[n].extent.end.line-2){let i={startLine:this.symbols[n].lineNumber,endLine:this.symbols[n].extent.end.line,index:n,collapsed:!1,level:this.symbols[n].depth};if(e.has(i.startLine)){let t=e.get(i.startLine);t.push(i),e.set(i.startLine,t)}else e.set(i.startLine,[i]);if(e.has(i.endLine)){let t=e.get(i.endLine);t.push(i),e.set(i.endLine,t)}else e.set(i.endLine,[i]);for(let e=i.startLine+1;e<i.endLine;e++)if(t.has(e)){let n=t.get(e);n.push(i),t.set(e,n)}else t.set(e,[i])}this.lineToSectionMap=t,this.codeSections=e}initSymbols(e){return e.map(e=>{let t=this.blobLines[e.ident_utf16.start.line_number]||"",n=(0,a.N_)(e,t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path});return this.lineIndexedSymbols[n.lineNumber]=n,n})}getBlobLine(e){return this.blobLines[e]||""}getSymbolOnLine(e){return this.lineIndexedSymbols[e]}initSymbolTree(){if(this.symbols){let e=[],t=this.symbols.filter(e=>"field"!==e.kind.fullName).map(t=>{let n=0;for(let r=e.length-1;r>=0;r--){var i;if(i=e[r],t.extent.start.line===i.extent.end.line?t.extent.start.column>i.extent.end.column:t.extent.start.line>i.extent.end.line)e.pop();else{n=e.length;break}}return e.push(t),t.setSymbolDepth(n),{symbol:t,depth:n}});this.symbolTree=[];for(let e=0;e<t.length;e++){let n=t[e];if(e+1<t.length&&t[e+1].depth>n.depth){let i=function e(t,n){let i=[],r=t[n];for(let s=n+1;s<t.length;s++){let n=t[s];if(n.depth>r.depth){let r=e(t,s);s+=h(r),i.push({symbol:n.symbol,children:r,isParent:r.length>0})}else break}return i}(t,e);e+=h(i),this.symbolTree.push({symbol:n.symbol,isParent:!0,children:i});continue}this.symbolTree.push({symbol:n.symbol,isParent:!1,children:[]})}}}createReferences(e){return e.map(e=>{let t=new s.BW({ident:e,repo:this.repo,refInfo:this.refInfo,path:this.path,isPlain:this.isPlain,source:s.u.BLOB_CONTENT});return t.setSnippet(void 0,this.stylingDirectives?.[e.start.line],this.blobLines[e.start.line],void 0),t})}getReferencesToSymbol(e){let t=c(this.blobLines,(0,l.ah)(e));return this.createReferences(t)}getReferencesToSearch(e){let t=c(this.blobLines,(0,l.tz)(e));return this.createReferences(t)}getDefinitionsAndReferences(e,t,n){this.setLoading(!0);let i=(async()=>{let i=this.getSymbolOnLine(t+1);if(i&&i.name===e)return{definitions:[i],backend:"search"};let[r,l]=await this.getAlephDefinitions(e,t,n,this.loggedIn);if("search"===l){let t=this.getLocalDefinitions(e);t.length>0&&(r=t);let n=r.find(e=>e.path===this.path&&e.repo===this.repo);n&&(r=[n]),l="search"}else{let t=this.getLocalDefinitions(e,!0);for(let n of r)""===n.kind.fullName&&n.name===e&&(n.kind=t[0]?t[0].kind:new s.v0({kind:""}))}return{definitions:r,backend:l}})(),r=(async()=>{let{definitions:t}=await i,n=t.map(e=>e.lineNumber);return{references:this.getReferencesToSymbol(e).filter(e=>!n.includes(e.lineNumber)),backend:"search"}})(),l=(async()=>{let r="SYMBOL_KIND_UNKNOWN",s=this.getSymbolOnLine(t+1);if(s)r=s.kind.enumStringVal;else{let{definitions:e}=await i;r=e[0]?.kind?.enumStringVal||r}return this.getAlephReferences(e,t,n,this.loggedIn,r)})();return{definitions:i,localReferences:r,crossReferences:(async()=>{let[e,t]=await l;return{references:e,backend:t}})(),setLoading:this.setLoading}}getLocalDefinitions(e,t=!1){let n=9,i=[];for(let r of this.symbols)r.name===e&&(r.kind.rank<n||t)&&(n=r.kind.rank,i=[r]);return i}async getAlephDefinitions(e,t,n,s){let l,h,c="search";if(""===e&&-1===t&&-1===n||!s)return[[],c];let u=(0,i.lkl)({repo:this.repo,type:"definition",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW",symbolKind:null});try{l=await (0,r.lS)(u)}catch{return[[],c]}if(!l.ok)return[[],c];try{h=await l.json()}catch{return[[],c]}return c=o(h.backend)??"search",[h.payload.flatMap(e=>e).map(t=>(0,a.zs)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,symbol:e,backend:c})),c]}async getAlephReferences(e,t,n,s,l){let h,c="search";if(""===e&&-1===t&&-1===n||!s)return[[],c];let u=(0,i.lkl)({repo:this.repo,type:"references",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW",symbolKind:l}),d=await (0,r.lS)(u);if(!d.ok)return[[],c];try{h=await d.json()}catch{return[[],c]}c=o(h.backend)??"search";let f=new Set,m=e=>!!f.has(e)||(f.add(e),!1);return[h.payload.flatMap(e=>e).reduce((e,t)=>{if(t.path===this.path)return e;let n=(0,a.QV)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,backend:c});return m(n.lineNumber)||e.push(n),e},[]).sort((e,t)=>e.lineNumber-t.lineNumber),c]}constructor(e,t,n,i,r,s,l,a,o,h){this.lineIndexedSymbols={},this.setLoading=h,this.setLoading(!0),this.repo=e,this.refInfo=t,this.path=n,this.loggedIn=i,this.language=a,this.blobLines=r,this.stylingDirectives=l,this.isPlain=o,this.symbols=this.initSymbols(s),this.initSymbolTree(),this.initCodeSections(),this.setLoading(!1)}};function o(e){switch(e){case"ALEPH_PRECISE":case"ALEPH_PRECISE_PREVIEW":case"ALEPH_PRECISE_DEVELOPMENT":return"precise";case"BLACKBIRD":return"search";default:return null}}function h(e){let t=e.length;for(let n=0;n<e.length;n++){let i=e[n];i.isParent&&(t+=h(i.children))}return t}function c(e,t){let n=[],i=(0,l.lA)(t,e),r=i.next();for(;!r.done&&n.length<200;){let{column:e,columnEnd:t,line:s}=r.value;n.push({start:{line:s,column:e},end:{line:s,column:t}}),r=i.next()}return n}function u(e,t,n){if(0===e.length)return[];let i=e.length>=200,r={},s=e.reduce((e,i)=>{if(r[i.ident.start.line])return e;r[i.ident.start.line]=!0;let s=(0,l.lA)(n,[t[i.ident.start.line]]),a=s.next();for(;!a.done&&e.length<200;){let{column:t,columnEnd:n}=a.value;e.push({start:{line:i.ident.start.line,column:t},end:{line:i.ident.start.line,column:n}}),a=s.next()}return e},[]);if(s.length<200&&i){let i=e[e.length-1].ident.start.line,r=(0,l.lA)(n,t,i),a=r.next();for(;!a.done&&s.length<200;){let{line:e,column:t,columnEnd:n}=a.value;s.push({start:{line:e,column:t},end:{line:e,column:n}}),a=r.next()}}return s}},95405:(e,t,n)=>{n.d(t,{AP:()=>CodeSymbol,BW:()=>CodeReference,u:()=>r,v0:()=>SymbolKind});var i=n(83056),r=function(e){return e.BLACKBIRD_SEARCH="blackbird-search",e.BLACKBIRD_ANALYSIS="blackbird-analysis",e.ALEPH_PRECISE="aleph-precise",e.BLOB_CONTENT="blob-content-search",e}({});let SymbolKind=class SymbolKind{constructor({kind:e}){let[t,n]=function(e){if("string"==typeof e){let t=e.toString().replace("SYMBOL_KIND_","").replace(/_DEF$/,"").replace(/_REF$/,"").toLowerCase();if(e.startsWith("SYMBOL_KIND_"))return[t,e.toString()];if(""!==e&&"unknown"!==e){let t=`SYMBOL_KIND_${e.toUpperCase()}`;return"call"===e?t+="_REF":t+="_DEF",[e,t]}}return["unknown","SYMBOL_KIND_UNKNOWN"]}(e);this.enumStringVal=n,this.fullName=t,this.shortName=function(e){switch(e){case"function":case"method":return"func";case"interface":return"intf";case"implementation":return"impl";case"constant":return"const";case"module":return"mod";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"class":case"call":case"enum":case"field":case"macro":case"struct":case"trait":case"type":case"union":return e;default:return e.substring(0,1)}}(t),this.plColor=function(e){switch(e){case"function":case"method":default:return"prettylights.syntax.entity";case"class":case"enum":case"struct":case"union":return"prettylights.syntax.constant";case"interface":case"trait":return"prettylights.syntax.keyword";case"constant":case"field":case"enum member":return"prettylights.syntax.variable";case"implementation":return"prettylights.syntax.string"}}(t),this.rank=({class:1,struct:1,enum:1,type:2,interface:3,trait:3,module:4,implementation:5,function:6,method:7,call:8,field:9})[t]||9}};let CodeSymbol=class CodeSymbol{setSymbolDepth(e){this.depth=e}setFileInfo(e,t,n){this.repo=e,this.refInfo=t,this.path=n}get lineNumber(){return this.ident.start.line+1}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}href(){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let e="blackbird-search"===this.source?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid;return(0,i.nD_)({owner:this.repo.ownerLogin,repo:this.repo.name,commitish:e,filePath:this.path,lineNumber:this.lineNumber})}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,extent:t,kind:n,name:i,fullyQualifiedName:r,source:s}){this.ident=e,this.extent=t,this.kind=new SymbolKind({kind:n}),this.name=i,this.fullyQualifiedName=r,this.source=s}};let CodeReference=class CodeReference{get lineNumber(){return this.ident.start.line+1}href(e){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let t="blackbird-search"===this.source?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid,n={owner:this.repo.ownerLogin,repo:this.repo.name,commitish:t,filePath:this.path,lineNumber:this.lineNumber,plain:this.isPlain?1:void 0};return e?(0,i.buO)(n):(0,i.nD_)(n)}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,repo:t,refInfo:n,path:i,isPlain:r,source:s}){this.ident=e,this.repo=t,this.refInfo=n,this.path=i,this.isPlain=r??!1,this.source=s}}},79637:(e,t,n)=>{n.d(t,{ah:()=>r,lA:()=>l,tz:()=>s});var i=function(e){return e[e.Text=0]="Text",e[e.Symbol=1]="Symbol",e}(i||{});function r(e){return{kind:1,regexp:RegExp(`(\\W|^)${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(\\W|$)`,"g")}}function s(e){return{kind:0,regexp:RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi")}}function*l(e,t,n=0){for(let i=n;i<t.length;i++){let n;let r=t[i];for(;null!==(n=e.regexp.exec(r));){let t=n[0],s=n.index;1===e.kind&&(t.length>0&&/\W/.test(t[0])&&(t=t.substring(1),s+=n[0].length-t.length),t.length>0&&/\W/.test(t[t.length-1])&&(t=t.substring(0,t.length-1))),yield{line:i,column:s,columnEnd:s+t.length,text:r}}}}},82046:(e,t,n)=>{n.d(t,{N_:()=>r,QV:()=>l,zs:()=>s});var i=n(95405);function r(e,t,{stylingDirectives:n,repo:r,refInfo:s,path:l}){let{extent_utf16:a,ident_utf16:o}=e,h=new i.AP({kind:e.kind,fullyQualifiedName:e.fully_qualified_name,name:e.name,extent:{start:{line:a.start.line_number,column:a.start.utf16_col},end:{line:a.end.line_number,column:a.end.utf16_col}},ident:{start:{line:o.start.line_number,column:o.start.utf16_col},end:{line:o.end.line_number,column:o.end.utf16_col}},source:i.u.BLACKBIRD_ANALYSIS});return h.setSnippet(void 0,n?.[o.start.line_number],t,void 0),h.setFileInfo(r,s,l),h}function s(e,{symbol:t,refInfo:n,repo:r,path:s,backend:l}){let a=e.ident?.start?.character,o=e.ident?.end?.character??e.ident?.start?.character,h={start:{line:e.ident.start.line,column:a?a-e.leadingWhitespace:0},end:{line:e.ident?.end?.line??e.ident.start.line,column:o?o-e.leadingWhitespace:0}},c=e.extent?.start?.character,u=e.extent?.end?.character??e.extent?.start?.character,d={start:{line:e.extent.start.line,column:c||0},end:{line:e.extent.end?.line??e.extent.start.line,column:u||0}},f=new i.AP({ident:h,extent:d,kind:e.symbolKind,name:t,fullyQualifiedName:t,source:"search"===l?i.u.BLACKBIRD_SEARCH:i.u.ALEPH_PRECISE});if(e.local)f.setFileInfo(r,n,s);else if(e.commitOid&&e.path){let t=n;e.commitOid!==n.currentOid&&(t={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}),f.setFileInfo(e.repo??r,t,e.path)}let m=Array(e.leadingWhitespace).fill(" ").join("")+(e.firstLine||"");return f.setSnippet(e.highlightedText,void 0,m,e.leadingWhitespace),f}function l(e,{refInfo:t,path:n,repo:r,backend:s}){let l=t,a=n;!e.local&&e.commitOid&&e.path&&(l=t,a=e.path,e.commitOid!==t.currentOid&&(l={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}));let o=e.ident.start.character,h=e.ident.end?.character,c=new i.BW({repo:r,refInfo:l,path:a,ident:{start:{line:e.ident.start.line,column:o?o-e.leadingWhitespace:0},end:{line:e.ident.end?.line||e.ident.start.line,column:h?h-e.leadingWhitespace:0}},source:"search"===s?i.u.BLACKBIRD_SEARCH:i.u.ALEPH_PRECISE}),u=Array(e.leadingWhitespace).fill(" ").join("")+(e.firstLine||"");return c.setSnippet(e.highlightedText,void 0,u,e.leadingWhitespace),c}},62794:(e,t,n)=>{n.d(t,{d:()=>i});function i(e,t,n){return[...function*(e,t){for(let n of e){let e=t(n);null!=e&&(yield e)}}(e,e=>{let n=t(e);return null!=n?[e,n]:null})].sort((e,t)=>n(e[1],t[1])).map(([e])=>e)}},52976:(e,t,n)=>{function i(e,t,n=.1){let r=l(e,t,n);return r&&-1===t.indexOf("/")&&(r+=l(e.substring(e.lastIndexOf("/")+1),t,n)),r}function r(e,t,n){if(t){let i=e.innerHTML.trim().match(n||function(e){let t=e.toLowerCase().split(""),n="",i=!0;for(let e of t){let t=e.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");i?(n+=`(.*)(${t})`,i=!1):n+=`([^${t}]*?)(${t})`}return RegExp(`${n}(.*?)$`,"i")}(t));if(!i)return;let r=!1,s=[];for(let e=1;e<i.length;++e){let t=i[e];t&&(e%2==0?r||(s.push("<mark>"),r=!0):r&&(s.push("</mark>"),r=!1),s.push(t))}e.innerHTML=s.join("")}else{let t=e.innerHTML.trim(),n=t.replace(/<\/?mark>/g,"");t!==n&&(e.innerHTML=n)}}n.d(t,{He:()=>r,UD:()=>a,dt:()=>i});let s=new Set([" ","-","_"]);function l(e,t,n=.1){let i=e;if(i===t)return 1;let r=i.length,a=0,o=0,h=!0;for(let e of t){let t=i.indexOf(e.toLowerCase()),l=i.indexOf(e.toUpperCase()),c=Math.min(t,l),u=c>-1?c:Math.max(t,l);if(-1===u)return 0;a+=.1,i[u]===e&&(a+=.1),0===u&&(a+=.9-n,h&&(o=1)),s.has(i.charAt(u-1))&&(a+=.9-n),i=i.substring(u+1,r),h=!1}let c=t.length,u=a/c,d=(c/r*u+u)/2;return o&&d+n<1&&(d+=n),d}function a(e,t){return e.score>t.score?-1:e.score<t.score?1:e.text<t.text?-1:e.text>t.text?1:0}}}]);
//# sourceMappingURL=app_assets_modules_github_blob-anchor_ts-ui_packages_code-nav_code-nav_ts-ui_packages_filter--8253c1-91f460142a1c.js.map
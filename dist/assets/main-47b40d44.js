import{s as C,m as y,r as i,u as V,a as Y,j as e,c as Q,p as X,M as H,b as R,d as T,e as B,l as N,f as $,g as K,h as U,i as Z,k as ee,n as te,R as se}from"./Card-fafc4cd0.js";function _(t,n){const r=window.innerHeight-n,s=window.innerHeight-t;return 100/r*s}function ne(t){return t==C?"section-size-sm":t==y?"section-size-md":"section-size-lg"}function q(t){return t==C?"title-size-sm":t==y?"title-size-md":"title-size-lg"}const D=i.forwardRef(({as:t,bsPrefix:n,variant:r="primary",size:s,active:m=!1,disabled:c=!1,className:l,...o},d)=>{const x=V(n,"btn"),[u,{tagName:j}]=Y({tagName:t,disabled:c,...o}),a=j;return e.jsx(a,{...u,...o,ref:d,disabled:c,className:Q(l,x,m&&"active",r&&`${x}-${r}`,s&&`${x}-${s}`,o.href&&c&&"disabled")})});D.displayName="Button";const A=D;function b({href:t,target:n,icon:r,name:s,iconOnSmall:m,nameOnSmall:c,style:l="btn-outline-secondary"}){const{breakpointState:o}=i.useContext(k);return e.jsx("div",{className:"col-auto",children:e.jsxs("a",{href:t||"",target:n,className:`${o>=y&&"d-flex"} btn rounded-5 ${l}`,children:[o<y&&!c?"":`${s}`,o<y&&!m||!r?"":e.jsx("img",{src:r,alt:s,className:"icon icon-navbar"})]})})}function re(){const{breakpointState:t,icons:n,contact:r}=i.useContext(k);return e.jsx("div",{id:"navbar",className:"container-fluid",children:e.jsx("div",{className:"row d-flex justify-content-center",children:e.jsxs("div",{className:"col-10 col-lg-7 col-xl-6 col-md-9 d-flex justify-content-around",children:[e.jsx(b,{href:r==null?void 0:r.cv,target:"_blank",icon:n==null?void 0:n.download.grayscale,name:"CV",iconOnSmall:!1,nameOnSmall:!0}),e.jsx(b,{href:"#works",icon:n==null?void 0:n.hash.grayscale,name:"Works",iconOnSmall:!1,nameOnSmall:!0}),e.jsx(b,{href:(r==null?void 0:r.linkedin)||"",target:"_blank",icon:n==null?void 0:n.linkedin.grayscale,name:"Linkedin",iconOnSmall:!0,nameOnSmall:!1}),e.jsx(b,{href:(r==null?void 0:r.github)||"",target:"_blank",icon:n==null?void 0:n.github.grayscale,name:"GitHub",iconOnSmall:!0,nameOnSmall:!1}),e.jsx(b,{href:`mailto:${(r==null?void 0:r.email)||""}`,target:"_blank",icon:n==null?void 0:n.mail.grayscale,name:"Contact",iconOnSmall:!1,nameOnSmall:!0}),e.jsx(b,{href:"./blogpost/blogpost.html",target:"_blank",icon:null,name:"Blog",iconOnSmall:!1,nameOnSmall:!0,style:"btn-warning"})]})})})}const I="#page-section",F="--page-vel",oe=.4;function ie(){const[t,n]=i.useState(null),{breakpointState:r,Error:s}=i.useContext(k),m=i.useRef(0);function c(){const o=document.querySelector(I),d=o.offsetWidth,x=o.children;for(let u=0;u<x.length-1;u++)x[u].style.setProperty(F,`${oe}s`),x[u].style.transform=`translate(${d*(u+m.current-1)}px, 0)`;m.current=m.current<t.pageLinks.length-1?m.current+1:0}i.useEffect(()=>{const o=async()=>{const u=await fetch(X);if(u.status!=200){s("profile data");return}const j=await u.json(),a=[],g=[];j.pageContents.forEach(f=>{g.push(fetch(f))});const h=await Promise.allSettled(g);for(let f=0;f<h.length;f++){if(h[f].status=="rejected"){s("Profile text page");return}a.push(await h[f].value.text())}j.pageContents=a,n(j)};function d(){const u=document.querySelector(I),j=u.offsetWidth,a=u.children;for(let g=0;g<a.length-1;g++)a[g].style.setProperty(F,"0s"),a[g].style.transform=`translate(${j*(g-m.current)}px, 0)`}function x(){const j=setInterval(()=>{const a=document.querySelector(".logo-img-rotator");setInterval(()=>{let g=parseFloat(window.getComputedStyle(a).getPropertyValue("--curr-rotation"));g=parseInt(g/360)>0?g-360*(g/360):g,a.style.setProperty("--curr-rotation",g+.025),a.style.transform=`rotate(${g+.025}deg)`},10),a&&clearInterval(j)},100)}return x(),o(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]);function l(o){const d=t.pageContents.length,x=[],j=document.querySelector(I).offsetWidth;for(let a=0;a<d&&(o&&a++,x.push(e.jsxs("div",{className:`${r==C?"mx-3":""} col px-sm-5 h-100 title-page d-flex flex-column justify-content-center ${o&&"disable-click"}`,style:{opacity:o?0:1,transform:`translate(${j*a}px, 0%)`,position:o?"static":"absolute"},children:[e.jsxs("div",{children:[e.jsx("p",{className:q(r),children:t.pageHeaders[a]}),e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:t==null?void 0:t.pageContents[o?1:a]})]}),e.jsx("div",{className:"col-auto d-flex justify-content-end",children:e.jsx(A,{variant:"link",onClick:c,children:e.jsx("p",{children:t.pageLinks[a]})})})]},`profile-page-${a}-${o&&"invis"}`)),!o);a++);return e.jsx(e.Fragment,{children:x.map(a=>a)})}return e.jsx("div",{id:"profile-section",className:"container-fluid",children:e.jsxs("div",{className:"row d-flex flex-column flex-md-row",children:[e.jsx("div",{className:"col-md p-0"}),e.jsxs("div",{className:"col-auto p-0 d-flex justify-content-center align-items-center",children:[" ",e.jsxs("div",{className:"profile-logo-container",children:[e.jsx("img",{className:"img-fluid logo-img",style:{objectFit:"contain"},src:t==null?void 0:t.logo[0]}),e.jsx("img",{className:"img-fluid logo-img logo-img-rotator",style:{objectFit:"contain"},src:t==null?void 0:t.rotator}),t==null?void 0:t.logo.map((o,d)=>{if(d!=0)return e.jsx("img",{className:"img-fluid logo-img-overlay",style:{objectFit:"contain"},src:o,alt:"Profile image"},`$lg-${d}`)})]})]}),e.jsx("div",{className:"col-md p-0"}),e.jsxs("div",{id:"page-section",className:"text-center text-md-start col-md-7 profile-page-container",style:{position:"relative"},children:[" ",t&&l(!1),t&&l(!0)]}),e.jsx("div",{className:"col-md p-0"})]})})}const ae=2,le=1.8;function J({src:t,name:n,size:r}){const s=r=="lg"?ae:le;return e.jsxs("div",{className:`logo-container ${r=="lg"?"mx-2":""}`,style:{width:`${s}rem`},children:[e.jsx("img",{className:"logo",style:{width:`${s}rem`,top:`${s*-.5}rem`,"--size":`${s}rem`},src:t,alt:n}),e.jsx("div",{className:"logo-description-container",style:{"--parent-size":`${s}rem`},children:e.jsx("p",{className:"logo-description-text",children:n})})]})}function ce({card:t,imgOrder:n}){const r=`${t.title.replace(/\s+/g,"")}-img-cont`,{breakpointState:s,icons:m,Error:c}=i.useContext(k),[l,o]=i.useState(!1),[d,x]=i.useState("Loading content. . .");function u(){o(!0),g()}function j(){o(!1)}function a(){const h=`btn rounded-5 ${s<N&&"flex-grow-1"}`;return t.skipTo?e.jsx("a",{className:`btn-success ${h}`,href:t.skipTo,target:"_blank",children:"See it live"}):e.jsx(A,{className:`btn-dark ${h}`,onClick:u,children:"Check it out"})}i.useEffect(()=>{function h(){const f=document.querySelector(`#${r}`),S=f.nextSibling.children,P=f.firstChild;if(window.innerWidth>=N){let p=0;for(let E=0;E<S.length;E++)p+=S[E].offsetHeight;const w=window.getComputedStyle(f.nextSibling).paddingTop,L=parseInt(w.substring(0,w.length-2))*2;p+=L,f.style.minHeight=`${f.offsetWidth}px`,f.style.maxHeight="100%",f.style.height=`${p}px`}else{const p=window.getComputedStyle(f).width,w=parseInt(p.substring(0,p.length-2));f.style.minHeight="0",f.style.height=`${w/2}px`,f.style.maxHeight=`${w/2}px`}const v=-P.offsetWidth/2+f.offsetWidth/2;P.style.transform=`translate(${v}px, 0)`}return h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);async function g(){const h=await fetch(t.content);if(h.status!=200){c("Card content");return}const f=await h.text();x(f)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card flex-lg-row h-100 fade-in-actor",style:{overflow:"hidden"},children:[e.jsx("div",{id:r,className:`col-lg-3 card-img-cont d-flex ${s>=N&&`order-${n}`}`,children:e.jsx("img",{src:s>=N?t.srcL:t.srcS,className:"card-img"})}),e.jsxs("div",{className:"card-body d-flex flex-column justify-content-between",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"card-title",children:e.jsx("h1",{className:"card-title",children:t.title})}),e.jsx("div",{className:"card-text",children:e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:t.description})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col my-3 d-flex justify-content-around justify-content-lg-start ",children:t.tech.map(h=>{if(m)return e.jsx(J,{src:m[h].color,name:m[h].name,size:s==N?"lg":"sm"},t.title+h)})}),e.jsx("div",{className:"col-lg-auto d-flex my-3 my-lg-0",children:a()})]})]})]}),e.jsxs($,{show:l,fullscreen:"sm-down",dialogClassName:s>C&&"modal-custom",scrollable:!0,centered:!0,onHide:j,children:[e.jsx($.Header,{closeButton:!0,className:`${s>=N?"":"py-1"}`,children:e.jsxs("div",{className:`col d-flex ${s>=N?"":"flex-column justify-content-center align-items-center"}`,children:[e.jsx("div",{className:"col-auto mx-2",children:e.jsx("h2",{style:{whiteSpace:"nowrap"},children:t.title})}),e.jsx("div",{className:"col-auto d-flex align-items-center",children:t.links.map((h,f)=>e.jsx("a",{className:`btn btn-dark mx-2 rounded-5 ${s<=y?"btn-sm":""}`,style:{whiteSpace:"nowrap"},target:"_blank",href:h.url,children:h.name},t.title+h+f))})]})}),e.jsx($.Body,{children:e.jsx("div",{className:"font-readable",children:e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:d})})})]})]})}function de(){const{breakpointState:t,Error:n}=i.useContext(k),[r,s]=i.useState([]);return i.useEffect(()=>{(async()=>{const c=await fetch(K);if(c.status!=200){n("Cards");return}const l=await c.json(),o=[];l.cards.forEach(d=>{const x=fetch(d.description).then(u=>{if(u.status==200)return u.text();n("card description")}).then(u=>{d.description=u}).catch(u=>{d.description=""});o.push(x)}),await Promise.allSettled(o),s(l.cards)})()},[]),e.jsx("div",{className:"container",children:e.jsx("div",{className:`row row-cols-${t==y?"2":"1"} d-flex justify-content-center`,children:r.map((m,c)=>e.jsx("div",{className:"col my-2",children:e.jsx(ce,{card:m,imgOrder:c%2==0?"first":"last"})},m.title+c))})})}function me(){const{icons:t,contact:n}=i.useContext(k);return e.jsx("div",{className:"container-fluid px-0",children:e.jsxs("footer",{children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col px-0 d-flex justify-content-start flex-column align-items-center",children:[e.jsx("div",{children:e.jsx("p",{className:"footer-title",children:"Socials"})}),e.jsxs("div",{children:[e.jsx("a",{href:(n==null?void 0:n.linkedin)||"https://www.linkedin.com/in/alfredo-rodriguez-23599a228/",target:"_blank",children:e.jsx("img",{className:"icon icon-footer",src:(t==null?void 0:t.linkedin.grayscale)||"Linkedin",alt:"Linkedin"})}),e.jsx("a",{href:(n==null?void 0:n.github)||"https://github.com/dmo575",target:"_blank",children:e.jsx("img",{className:"icon icon-footer",src:(t==null?void 0:t.github.grayscale)||"Github",alt:"GitHub"})})]})]}),e.jsxs("div",{className:"col px-0 d-flex justify-content-start flex-column align-items-center",children:[e.jsx("p",{className:"footer-title",children:"Contact"}),e.jsx("a",{href:`mailto:${(n==null?void 0:n.email)||"arco4@protonmail.com"}`,children:(n==null?void 0:n.email)||"arco4@protonmail.com"})]}),e.jsxs("div",{className:"col px-0 d-flex justify-content-start flex-column align-items-center",children:[e.jsx("p",{className:"footer-title",children:"Quick Links"}),e.jsx("a",{href:"#html",children:"Top"}),e.jsx("a",{href:"#works",children:"Works"})]})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col px-0 d-flex justify-content-center",children:"Thank you for visiting !"})})]})})}const ue=10,fe=8,he=7;function xe(){const{breakpointState:t,bottomPivot:n}=i.useContext(k),r=i.useRef();i.useEffect(()=>{r.current=t},[t]);function s(){const m=document.querySelector("#works-title-cont"),c=document.querySelector("#works-title");let l=0;switch(r.current){case N:l=ue;break;case y:l=fe;break;default:l=he}m.style.height=`${l}rem`;const o=m.getBoundingClientRect().bottom;if(o<=window.innerHeight){let d=_(o,n.current);d=d>100?100:d;const x=l/100*d;c.style.transform=`translate(0rem, ${l-x}rem)`}else c.style.transform=`translate(0rem, ${l}rem)`}return i.useEffect(()=>(window.addEventListener("scroll",s),window.addEventListener("resize",s),s(),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}),[]),e.jsxs("div",{className:"container",children:[e.jsx("div",{id:"works",className:"row",children:e.jsx("div",{className:"col",children:e.jsx("div",{id:"works-title-cont",children:e.jsx("p",{id:"works-title",className:ne(t),children:"Works"})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col d-flex justify-content-center",children:e.jsx("div",{className:"separator-rect"})})})]})}function z({title:t,children:n}){return e.jsxs("div",{className:"row row-cols-5",children:[e.jsx("div",{className:"col-auto d-flex align-items-center",children:e.jsx("p",{className:"h3",children:t})}),e.jsxs("div",{className:"col d-flex flex-fill align-items-center",children:[e.jsx("div",{className:"spacer-rect flex-grow-1"}),e.jsx("div",{className:"col d-flex align-items-center",children:n})]})]})}function O(t,n){if(t)return e.jsx("div",{className:"col-auto d-flex align-items-end py-0 my-3",children:e.jsx("p",{children:n})})}function ge(){const{breakpointState:t,icons:n,Error:r}=i.useContext(k),[s,m]=i.useState(null);i.useEffect(()=>{(async()=>{const o=await fetch(U);if(o.status!=200){r("Skills");return}const d=await o.json();m(d)})()},[]);function c(l){return s&&n?s[l].map(o=>e.jsx(J,{src:n[o].color,name:n[o].name,size:"lg"},n[o].name)):null}return e.jsx("div",{id:"skills",className:"container-fluid",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row d-flex justify-content-md-between justify-content-center align-items-end my-4",children:[e.jsx("div",{className:"col-auto d-flex p-0",children:e.jsx("p",{className:`${q(t)} ${t<=C&&"text-center"}`,children:(s==null?void 0:s.title)||""})}),O(t>=N,(s==null?void 0:s.comment)||"")]}),t>=y?e.jsxs(e.Fragment,{children:[e.jsx(z,{title:(s==null?void 0:s.primaryToolsTitle)||"",children:c("primarySkills")}),e.jsx("div",{className:"row m-3"}),e.jsx(z,{title:(s==null?void 0:s.secondaryToolsTitle)||"",children:c("secondarySkills")})]}):e.jsxs(e.Fragment,{children:[e.jsx(z,{title:(s==null?void 0:s.primaryToolsTitle)||""}),e.jsx("div",{className:"row d-flex my-4",children:e.jsx("div",{className:"col d-flex justify-content-end",children:c("primarySkills")})}),e.jsx("div",{className:"row m-3"}),e.jsx(z,{title:(s==null?void 0:s.secondaryToolsTitle)||""}),e.jsx("div",{className:"row d-flex my-4",children:e.jsx("div",{className:"col d-flex justify-content-end",children:c("secondarySkills")})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col d-flex justify-content-end",children:O(t<=y,(s==null?void 0:s.comment)||"")})})]})})}function pe(){const{breakpointState:t,icons:n,contact:r}=i.useContext(k);return e.jsx("div",{id:"project-footer-cont",className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col text-center",children:e.jsxs("p",{className:"m-0",children:[". . . and more coming! I'm always coding something ",t!=y?e.jsx(e.Fragment,{children:"⇢"}):"",e.jsx("a",{href:r==null?void 0:r.github,target:"_blank",children:e.jsx("img",{className:"icon h-100",src:n==null?void 0:n.github.grayscale,alt:"GitHub"})})]})})})})}const je="Oops, a fetch error just happened :/",we="<p>An error occured while fetching data from the server. <strong style={{fontSize:'1.5rem'}}>Please refresh the webpage</strong></p> <p>If the issue persists after refreshing. Dont worry, I promise the content was great, you can hire me at arco4@protonmail.com 😃</p>",W={errorHeader:je,errorBody:we},k=i.createContext(),ye=45;function G(){return window.innerHeight-window.innerHeight/100*ye}function M(){let t=window.innerWidth;return t<y?C:t<N?y:N}function ve(){const[t,n]=i.useState(M()),r=i.useRef(),s=i.useRef(),[m,c]=i.useState(!1),[l,o]=i.useState(null),[d,x]=i.useState(null),[u,j]=i.useState(null);function a(){c(!0)}function g(){c(!1)}function h(v){o(p=>{const w=p||[];return w.push(v),a(),w})}async function f(){const v=await fetch(Z),p=await fetch(ee);if(v.status!=200||p.status!=200){h("App");return}const w=await v.json(),L=await p.json();j(L),x(w)}function S(){document.querySelectorAll(".fade-in-actor").forEach(p=>{const w=p.getBoundingClientRect().top;if(w<=window.innerHeight){const E=_(w,s.current)/100;p.style.opacity=E}})}function P(){const v=M();s.current=G(),v!=r.current&&n(v),S()}return i.useEffect(()=>{r.current=t},[t]),i.useEffect(()=>(f(),S(),s.current=G(),window.addEventListener("resize",P),window.addEventListener("scroll",S),()=>{window.removeEventListener("resize",P),window.removeEventListener("scroll",S)}),[]),e.jsxs(e.Fragment,{children:[e.jsxs(k.Provider,{value:{breakpointState:t,icons:d,contact:u,bottomPivot:s,Error:h},children:[e.jsx(re,{}),e.jsx(ie,{}),e.jsx(ge,{}),e.jsx(xe,{}),e.jsx(de,{}),e.jsx(pe,{}),e.jsx(me,{})]}),e.jsxs($,{show:m,onHide:g,centered:!0,children:[e.jsx($.Header,{children:e.jsx("h1",{className:"text-center w-100",children:W.errorHeader})}),e.jsxs($.Body,{children:[e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:W.errorBody}),e.jsx("p",{children:"Errors:"}),l==null?void 0:l.map((v,p)=>e.jsxs("p",{style:{display:"inline"},children:[v,p==l.length-1?".":", "]},`error ${p}`))]})]})]})}te.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(ve,{})}));

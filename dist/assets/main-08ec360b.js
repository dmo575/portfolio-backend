import{s as E,m as w,r as o,u as V,a as Y,j as e,c as Q,p as X,M as H,b as R,d as T,e as B,l as v,f as $,g as K,h as U,i as Z,k as ee,n as te,R as se}from"./Card-94d765a7.js";function M(t,n){const r=window.innerHeight-n,s=window.innerHeight-t;return 100/r*s}function ne(t){return t==E?"section-size-sm":t==w?"section-size-md":"section-size-lg"}function q(t){return t==E?"title-size-sm":t==w?"title-size-md":"title-size-lg"}const D=o.forwardRef(({as:t,bsPrefix:n,variant:r="primary",size:s,active:d=!1,disabled:c=!1,className:a,...i},h)=>{const u=V(n,"btn"),[f,{tagName:p}]=Y({tagName:t,disabled:c,...i}),m=p;return e.jsx(m,{...f,...i,ref:h,disabled:c,className:Q(a,u,d&&"active",r&&`${u}-${r}`,s&&`${u}-${s}`,i.href&&c&&"disabled")})});D.displayName="Button";const A=D;function b({href:t,target:n,icon:r,name:s,iconOnSmall:d,nameOnSmall:c,style:a="btn-outline-secondary"}){const{breakpointState:i}=o.useContext(N);return e.jsx("div",{className:"col-auto",children:e.jsxs("a",{href:t||"",target:n,className:`btn rounded-5 ${a}`,children:[i<w&&!c?"":`${s} `,i<w&&!d||!r?"":e.jsx("img",{src:r,alt:s,className:"icon icon-navbar"})]})})}function re(){const{breakpointState:t,icons:n,contact:r}=o.useContext(N);return e.jsx("div",{id:"navbar",className:"container-fluid",children:e.jsx("div",{className:"row d-flex justify-content-center",children:e.jsxs("div",{className:"col-10 col-lg-7 col-xl-6 col-md-9 d-flex justify-content-around",children:[e.jsx(b,{href:r==null?void 0:r.cv,target:"_blank",icon:n==null?void 0:n.download.grayscale,name:"CV",iconOnSmall:!1,nameOnSmall:!0}),e.jsx(b,{href:"#works",target:"_blank",icon:n==null?void 0:n.hash.grayscale,name:"Works",iconOnSmall:!1,nameOnSmall:!0}),e.jsx(b,{href:(r==null?void 0:r.linkedin)||"",target:"_blank",icon:n==null?void 0:n.linkedin.grayscale,name:"Linkedin",iconOnSmall:!0,nameOnSmall:!1}),e.jsx(b,{href:(r==null?void 0:r.github)||"",target:"_blank",icon:n==null?void 0:n.github.grayscale,name:"GitHub",iconOnSmall:!0,nameOnSmall:!1}),e.jsx(b,{href:`mailto:${(r==null?void 0:r.email)||""}`,target:"_blank",icon:n==null?void 0:n.mail.grayscale,name:"Contact",iconOnSmall:!1,nameOnSmall:!0}),e.jsx(b,{href:"./blogpost/blogpost.html",target:"_blank",icon:null,name:"Blog",iconOnSmall:!1,nameOnSmall:!0,style:"btn-warning"})]})})})}const I="#page-section",O="--page-vel",ie=.4;function oe(){const[t,n]=o.useState(null),{breakpointState:r,Error:s}=o.useContext(N),d=o.useRef(0);function c(){const i=document.querySelector(I),h=i.offsetWidth,u=i.children;for(let f=0;f<u.length-1;f++)u[f].style.setProperty(O,`${ie}s`),u[f].style.transform=`translate(${h*(f+d.current-1)}px, 0)`;d.current=d.current<t.pageLinks.length-1?d.current+1:0}o.useEffect(()=>{const i=async()=>{const u=await fetch(X);if(u.status!=200){s("profile data");return}const f=await u.json(),p=[],m=[];f.pageContents.forEach(l=>{m.push(fetch(l))});const k=await Promise.allSettled(m);for(let l=0;l<k.length;l++){if(k[l].status=="rejected"){s("Profile text page");return}p.push(await k[l].value.text())}f.pageContents=p,n(f)};function h(){const u=document.querySelector(I),f=u.offsetWidth,p=u.children;for(let m=0;m<p.length-1;m++)p[m].style.setProperty(O,"0s"),p[m].style.transform=`translate(${f*(m-d.current)}px, 0)`}return i(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);function a(i){const h=t.pageContents.length,u=[],p=document.querySelector(I).offsetWidth;for(let m=0;m<h&&(i&&m++,u.push(e.jsxs("div",{className:`${r==E?"mx-3":""} col px-sm-5 h-100 title-page d-flex flex-column justify-content-center ${i&&"disable-click"}`,style:{opacity:i?0:1,transform:`translate(${p*m}px, 0%)`,position:i?"static":"absolute"},children:[e.jsxs("div",{children:[e.jsx("p",{className:q(r),children:t.pageHeaders[m]}),e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:t==null?void 0:t.pageContents[i?1:m]})]}),e.jsx("div",{className:"col-auto d-flex justify-content-end",children:e.jsx(A,{variant:"link",onClick:c,children:e.jsx("p",{children:t.pageLinks[m]})})})]},`profile-page-${m}-${i&&"invis"}`)),!i);m++);return e.jsx(e.Fragment,{children:u.map(m=>m)})}return e.jsx("div",{id:"profile-section",className:"container-fluid",children:e.jsxs("div",{className:"row d-flex flex-column flex-md-row",children:[e.jsx("div",{className:"col-md p-0"}),e.jsxs("div",{className:"col-auto p-0 d-flex justify-content-center",children:[" ",e.jsx("img",{className:"img-fluid",style:{objectFit:"contain"},src:r>=w?t==null?void 0:t.srcL:t==null?void 0:t.srcS,alt:"Profile image"})]}),e.jsx("div",{className:"col-md p-0"}),e.jsxs("div",{id:"page-section",className:"text-center text-md-start col-md-7 profile-page-container",style:{position:"relative"},children:[" ",t&&a(!1),t&&a(!0)]}),e.jsx("div",{className:"col-md p-0"})]})})}const ae=2,le=1.8;function J({src:t,name:n,size:r}){const s=r=="lg"?ae:le;return e.jsxs("div",{className:`logo-container ${r=="lg"?"mx-2":""}`,style:{width:`${s}rem`},children:[e.jsx("img",{className:"logo",style:{width:`${s}rem`,top:`${s*-.5}rem`,"--size":`${s}rem`},src:t,alt:n}),e.jsx("div",{className:"logo-description-container",style:{"--parent-size":`${s}rem`},children:e.jsx("p",{className:"logo-description-text",children:n})})]})}function ce({card:t,imgOrder:n}){const r=`${t.title.replace(/\s+/g,"")}-img-cont`,{breakpointState:s,icons:d,Error:c}=o.useContext(N),[a,i]=o.useState(!1),[h,u]=o.useState("Loading content. . .");function f(){i(!0),k()}function p(){i(!1)}function m(){const l=`btn rounded-5 ${s<v&&"flex-grow-1"}`;return t.skipTo?e.jsx("a",{className:`btn-success ${l}`,href:t.skipTo,target:"_blank",children:"See it live"}):e.jsx(A,{className:`btn-dark ${l}`,onClick:f,children:"Check it out"})}o.useEffect(()=>{function l(){const x=document.querySelector(`#${r}`),S=x.nextSibling.children,C=x.firstChild;if(window.innerWidth>=v){let g=0;for(let P=0;P<S.length;P++)g+=S[P].offsetHeight;const j=window.getComputedStyle(x.nextSibling).paddingTop,L=parseInt(j.substring(0,j.length-2))*2;g+=L,x.style.minHeight=`${x.offsetWidth}px`,x.style.maxHeight="100%",x.style.height=`${g}px`}else{const g=window.getComputedStyle(x).width,j=parseInt(g.substring(0,g.length-2));x.style.minHeight="0",x.style.height=`${j/2}px`,x.style.maxHeight=`${j/2}px`}const y=-C.offsetWidth/2+x.offsetWidth/2;C.style.transform=`translate(${y}px, 0)`}return l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]);async function k(){const l=await fetch(t.content);if(l.status!=200){c("Card content");return}const x=await l.text();u(x)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card flex-lg-row h-100 fade-in-actor",style:{overflow:"hidden"},children:[e.jsx("div",{id:r,className:`col-lg-3 card-img-cont d-flex ${s>=v&&`order-${n}`}`,children:e.jsx("img",{src:s>=v?t.srcL:t.srcS,className:"card-img"})}),e.jsxs("div",{className:"card-body d-flex flex-column justify-content-between",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"card-title",children:e.jsx("h1",{className:"card-title",children:t.title})}),e.jsx("div",{className:"card-text",children:e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:t.description})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col my-3 d-flex justify-content-around justify-content-lg-start ",children:t.tech.map(l=>{if(d)return e.jsx(J,{src:d[l].color,name:d[l].name,size:s==v?"lg":"sm"},t.title+l)})}),e.jsx("div",{className:"col-lg-auto d-flex my-3 my-lg-0",children:m()})]})]})]}),e.jsxs($,{show:a,fullscreen:"sm-down",dialogClassName:s>E&&"modal-custom",scrollable:!0,centered:!0,onHide:p,children:[e.jsx($.Header,{closeButton:!0,className:`${s>=v?"":"py-1"}`,children:e.jsxs("div",{className:`col d-flex ${s>=v?"":"flex-column justify-content-center align-items-center"}`,children:[e.jsx("div",{className:"col-auto mx-2",children:e.jsx("h2",{style:{whiteSpace:"nowrap"},children:t.title})}),e.jsx("div",{className:"col-auto d-flex align-items-center",children:t.links.map((l,x)=>e.jsx("a",{className:`btn btn-dark mx-2 rounded-5 ${s<=w?"btn-sm":""}`,style:{whiteSpace:"nowrap"},target:"_blank",href:l.url,children:l.name},t.title+l+x))})]})}),e.jsx($.Body,{children:e.jsx("div",{className:"font-readable",children:e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:h})})})]})]})}function de(){const{breakpointState:t,Error:n}=o.useContext(N),[r,s]=o.useState([]);return o.useEffect(()=>{(async()=>{const c=await fetch(K);if(c.status!=200){n("Cards");return}const a=await c.json(),i=[];a.cards.forEach(h=>{const u=fetch(h.description).then(f=>{if(f.status==200)return f.text();n("card description")}).then(f=>{h.description=f}).catch(f=>{h.description=""});i.push(u)}),await Promise.allSettled(i),s(a.cards)})()},[]),e.jsx("div",{className:"container",children:e.jsx("div",{className:`row row-cols-${t==w?"2":"1"} d-flex justify-content-center`,children:r.map((d,c)=>e.jsx("div",{className:"col my-2",children:e.jsx(ce,{card:d,imgOrder:c%2==0?"first":"last"})},d.title+c))})})}function me(){const{icons:t,contact:n}=o.useContext(N);return e.jsx("div",{className:"container-fluid px-0",children:e.jsxs("footer",{children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col px-0 d-flex justify-content-start flex-column align-items-center",children:[e.jsx("div",{children:e.jsx("p",{className:"footer-title",children:"Socials"})}),e.jsxs("div",{children:[e.jsx("a",{href:(n==null?void 0:n.linkedin)||"https://www.linkedin.com/in/alfredo-rodriguez-23599a228/",target:"_blank",children:e.jsx("img",{className:"icon icon-footer",src:(t==null?void 0:t.linkedin.grayscale)||"Linkedin",alt:"Linkedin"})}),e.jsx("a",{href:(n==null?void 0:n.github)||"https://github.com/dmo575",target:"_blank",children:e.jsx("img",{className:"icon icon-footer",src:(t==null?void 0:t.github.grayscale)||"Github",alt:"GitHub"})})]})]}),e.jsxs("div",{className:"col px-0 d-flex justify-content-start flex-column align-items-center",children:[e.jsx("p",{className:"footer-title",children:"Contact"}),e.jsx("a",{href:`mailto:${(n==null?void 0:n.email)||"arco4@protonmail.com"}`,children:(n==null?void 0:n.email)||"arco4@protonmail.com"})]}),e.jsxs("div",{className:"col px-0 d-flex justify-content-start flex-column align-items-center",children:[e.jsx("p",{className:"footer-title",children:"Quick Links"}),e.jsx("a",{href:"#html",children:"Top"}),e.jsx("a",{href:"#works",children:"Works"})]})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col px-0 d-flex justify-content-center",children:"Thank you for visiting !"})})]})})}const ue=10,fe=8,he=7;function xe(){const{breakpointState:t,bottomPivot:n}=o.useContext(N),r=o.useRef();o.useEffect(()=>{r.current=t},[t]);function s(){const d=document.querySelector("#works-title-cont"),c=document.querySelector("#works-title");let a=0;switch(r.current){case v:a=ue;break;case w:a=fe;break;default:a=he}d.style.height=`${a}rem`;const i=d.getBoundingClientRect().bottom;if(i<=window.innerHeight){let h=M(i,n.current);h=h>100?100:h;const u=a/100*h;c.style.transform=`translate(0rem, ${a-u}rem)`}else c.style.transform=`translate(0rem, ${a}rem)`}return o.useEffect(()=>(window.addEventListener("scroll",s),window.addEventListener("resize",s),s(),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}),[]),e.jsxs("div",{className:"container",children:[e.jsx("div",{id:"works",className:"row",children:e.jsx("div",{className:"col",children:e.jsx("div",{id:"works-title-cont",children:e.jsx("p",{id:"works-title",className:ne(t),children:"Works"})})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col d-flex justify-content-center",children:e.jsx("div",{className:"separator-rect"})})})]})}function z({title:t,children:n}){return e.jsxs("div",{className:"row row-cols-5",children:[e.jsx("div",{className:"col-auto d-flex align-items-center",children:e.jsx("p",{className:"h3",children:t})}),e.jsxs("div",{className:"col d-flex flex-fill align-items-center",children:[e.jsx("div",{className:"spacer-rect flex-grow-1"}),e.jsx("div",{className:"col d-flex align-items-center",children:n})]})]})}function W(t,n){if(t)return e.jsx("div",{className:"col-auto d-flex align-items-end py-0 my-3",children:e.jsx("p",{children:n})})}function ge(){const{breakpointState:t,icons:n,Error:r}=o.useContext(N),[s,d]=o.useState(null);o.useEffect(()=>{(async()=>{const i=await fetch(U);if(i.status!=200){r("Skills");return}const h=await i.json();d(h)})()},[]);function c(a){return s&&n?s[a].map(i=>e.jsx(J,{src:n[i].color,name:n[i].name,size:"lg"},n[i].name)):null}return e.jsx("div",{id:"skills",className:"container-fluid",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row d-flex justify-content-md-between justify-content-center align-items-end my-4",children:[e.jsx("div",{className:"col-auto d-flex p-0",children:e.jsx("p",{className:`${q(t)}`,children:(s==null?void 0:s.title)||""})}),W(t>=v,(s==null?void 0:s.comment)||"")]}),t>=w?e.jsxs(e.Fragment,{children:[e.jsx(z,{title:(s==null?void 0:s.primaryToolsTitle)||"",children:c("primarySkills")}),e.jsx("div",{className:"row m-3"}),e.jsx(z,{title:(s==null?void 0:s.secondaryToolsTitle)||"",children:c("secondarySkills")})]}):e.jsxs(e.Fragment,{children:[e.jsx(z,{title:(s==null?void 0:s.primaryToolsTitle)||""}),e.jsx("div",{className:"row d-flex my-4",children:e.jsx("div",{className:"col d-flex justify-content-end",children:c("primarySkills")})}),e.jsx("div",{className:"row m-3"}),e.jsx(z,{title:(s==null?void 0:s.secondaryToolsTitle)||""}),e.jsx("div",{className:"row d-flex my-4",children:e.jsx("div",{className:"col d-flex justify-content-end",children:c("secondarySkills")})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col d-flex justify-content-end",children:W(t<=w,(s==null?void 0:s.comment)||"")})})]})})}function pe(){const{breakpointState:t,icons:n,contact:r}=o.useContext(N);return e.jsx("div",{id:"project-footer-cont",className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col text-center",children:e.jsxs("p",{className:"m-0",children:[". . . and more coming! I'm always coding something ",t!=w?e.jsx(e.Fragment,{children:"⇢"}):"",e.jsx("a",{href:r==null?void 0:r.github,target:"_blank",children:e.jsx("img",{className:"icon h-100",src:n==null?void 0:n.github.grayscale,alt:"GitHub"})})]})})})})}const je="Oops, a fetch error just happened :/",we="<p>An error occured while fetching data from the server. <strong style={{fontSize:'1.5rem'}}>Please refresh the webpage</strong></p> <p>If the issue persists after refreshing. Dont worry, I promise the content was great, you can hire me at arco4@protonmail.com 😃</p>",F={errorHeader:je,errorBody:we},N=o.createContext(),ye=30;function _(){return window.innerHeight-window.innerHeight/100*ye}function G(){let t=window.innerWidth;return t<w?E:t<v?w:v}function ve(){const[t,n]=o.useState(G()),r=o.useRef(),s=o.useRef(),[d,c]=o.useState(!1),[a,i]=o.useState(null),[h,u]=o.useState(null),[f,p]=o.useState(null);function m(){c(!0)}function k(){c(!1)}function l(y){i(g=>{const j=g||[];return j.push(y),m(),j})}async function x(){const y=await fetch(Z),g=await fetch(ee);if(y.status!=200||g.status!=200){l("App");return}const j=await y.json(),L=await g.json();p(L),u(j)}function S(){document.querySelectorAll(".fade-in-actor").forEach(g=>{const j=g.getBoundingClientRect().top;if(j<=window.innerHeight){const P=M(j,s.current)/100;g.style.opacity=P}})}function C(){const y=G();s.current=_(),y!=r.current&&n(y),S()}return o.useEffect(()=>{r.current=t},[t]),o.useEffect(()=>(x(),S(),s.current=_(),window.addEventListener("resize",C),window.addEventListener("scroll",S),()=>{window.removeEventListener("resize",C),window.removeEventListener("scroll",S)}),[]),e.jsxs(e.Fragment,{children:[e.jsxs(N.Provider,{value:{breakpointState:t,icons:h,contact:f,bottomPivot:s,Error:l},children:[e.jsx(re,{}),e.jsx(oe,{}),e.jsx(ge,{}),e.jsx(xe,{}),e.jsx(de,{}),e.jsx(pe,{}),e.jsx(me,{})]}),e.jsxs($,{show:d,onHide:k,centered:!0,children:[e.jsx($.Header,{children:e.jsx("h1",{className:"text-center w-100",children:F.errorHeader})}),e.jsxs($.Body,{children:[e.jsx(H,{remarkPlugins:[R],rehypePlugins:T,components:B,children:F.errorBody}),e.jsx("p",{children:"Errors:"}),a==null?void 0:a.map((y,g)=>e.jsxs("p",{style:{display:"inline"},children:[y,g==a.length-1?".":", "]},`error ${g}`))]})]})]})}te.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(ve,{})}));

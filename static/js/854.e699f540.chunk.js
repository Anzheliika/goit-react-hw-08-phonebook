"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[854],{2854:function(n,t,e){e.r(t),e.d(t,{default:function(){return ct}});var r,o,a,i,s=e(168),c=e(7686),u=c.Z.form(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 500px;\n  box-shadow: 6px 6px 18px -7px rgba(0, 0, 0, 0.9);\n  padding: 15px;\n  margin: 30px auto;\n"]))),d=c.Z.label(o||(o=(0,s.Z)(["\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),l=c.Z.input(a||(a=(0,s.Z)(["\n  padding: 5px;\n  font-size: 18px;\n  width: 450px;\n  background-color: transparent;\n  border: solid 1px #000;\n  border-radius: 10px;\n  margin-top: 10px;\n"]))),p=c.Z.button(i||(i=(0,s.Z)(["\n      border-radius: 5px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n    background-color: #ff10a2;\n    color: #000;\n    width: 130px;\n    margin: 0 auto;\n\n    transition: background-color 0.3s linear;\n    \n  &:hover{\n  background-color: #F6A1E7;\n"]))),f=e(9434),m=e(5036),x=function(n){return n.contacts.items},g=function(n){return n.filter},h=function(n){var t=x(n),e=g(n).toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))},b=e(9439),v=e(3433),y=e(1413),Z=e(2791),w=e(4942),j={data:""},k=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||j},E=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,z=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,A=function n(t,e){var r="",o="",a="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},N={},O=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},D=function(n,t,e,r,o){var a=O(n),i=N[a]||(N[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!N[i]){var s=a!==n?n:function(n){for(var t,e,r=[{}];t=E.exec(n.replace(z,""));)t[4]?r.shift():t[3]?(e=t[3].replace(C," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(C," ").trim();return r[0]}(n);N[i]=A(o?(0,w.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&N.g?N.g:null;return e&&(N.g=N[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(N[i],t,r,c),i},F=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":A(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function I(n){var t=this||{},e=n.call?n(t.p):n;return D(e.unshift?e.raw?F(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,k(t.target),t.g,t.o,t.k)}I.bind({g:1});var P,M,L,T,_,B,H,S,q,K,U,$,G,J,R,Y,Q,V,W,X=I.bind({k:1});function nn(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:M&&M()},s),e.o=/ *go\d+/.test(c),s.className=I.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),L&&u[0]&&L(s),P(u,s)}return t?t(o):o}}var tn=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},en=function(){var n=0;return function(){return(++n).toString()}}(),rn=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),on=new Map,an=function(n){if(!on.has(n)){var t=setTimeout((function(){on.delete(n),dn({type:4,toastId:n})}),1e3);on.set(n,t)}},sn=function n(t,e){switch(e.type){case 0:return(0,y.Z)((0,y.Z)({},t),{},{toasts:[e.toast].concat((0,v.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=on.get(n);t&&clearTimeout(t)}(e.toast.id),(0,y.Z)((0,y.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,y.Z)((0,y.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?an(o):t.toasts.forEach((function(n){an(n.id)})),(0,y.Z)((0,y.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?(0,y.Z)((0,y.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,y.Z)((0,y.Z)({},t),{},{toasts:[]}):(0,y.Z)((0,y.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,y.Z)((0,y.Z)({},t),{},{pausedAt:e.time});case 6:var a=e.time-(t.pausedAt||0);return(0,y.Z)((0,y.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,y.Z)((0,y.Z)({},n),{},{pauseDuration:n.pauseDuration+a})}))})}},cn=[],un={toasts:[],pausedAt:void 0},dn=function(n){un=sn(un,n),cn.forEach((function(n){n(un)}))},ln={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},pn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,y.Z)((0,y.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||en()})}(t,n,e);return dn({type:2,toast:r}),r.id}},fn=function(n,t){return pn("blank")(n,t)};fn.error=pn("error"),fn.success=pn("success"),fn.loading=pn("loading"),fn.custom=pn("custom"),fn.dismiss=function(n){dn({type:3,toastId:n})},fn.remove=function(n){return dn({type:4,toastId:n})},fn.promise=function(n,t,e){var r=fn.loading(t.loading,(0,y.Z)((0,y.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return fn.success(tn(t.success,n),(0,y.Z)((0,y.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){fn.error(tn(t.error,n),(0,y.Z)((0,y.Z)({id:r},e),null==e?void 0:e.error))})),n};var mn=function(n,t){dn({type:1,toast:{id:n,height:t}})},xn=function(){dn({type:5,time:Date.now()})},gn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,Z.useState)(un),e=(0,b.Z)(t,2),r=e[0],o=e[1];(0,Z.useEffect)((function(){return cn.push(o),function(){var n=cn.indexOf(o);n>-1&&cn.splice(n,1)}}),[r]);var a=r.toasts.map((function(t){var e,r;return(0,y.Z)((0,y.Z)((0,y.Z)((0,y.Z)({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||ln[t.type],style:(0,y.Z)((0,y.Z)((0,y.Z)({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return(0,y.Z)((0,y.Z)({},r),{},{toasts:a})}(n),e=t.toasts,r=t.pausedAt;(0,Z.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return fn.dismiss(t.id)}),e);t.visible&&fn.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,Z.useCallback)((function(){r&&dn({type:6,time:Date.now()})}),[r]),a=(0,Z.useCallback)((function(n,t){var r,o=t||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,d=e.filter((function(t){return(t.position||u)===(n.position||u)&&t.height})),l=d.findIndex((function(t){return t.id===n.id})),p=d.filter((function(n,t){return t<l&&n.visible})).length;return(r=d.filter((function(n){return n.visible}))).slice.apply(r,(0,v.Z)(i?[p+1]:[0,p])).reduce((function(n,t){return n+(t.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:mn,startPause:xn,endPause:o,calculateOffset:a}}},hn=X(T||(T=(0,s.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),bn=X(_||(_=(0,s.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),vn=X(B||(B=(0,s.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),yn=nn("div")(H||(H=(0,s.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),hn,bn,(function(n){return n.secondary||"#fff"}),vn),Zn=X(S||(S=(0,s.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),wn=nn("div")(q||(q=(0,s.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),Zn),jn=X(K||(K=(0,s.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),kn=X(U||(U=(0,s.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),En=nn("div")($||($=(0,s.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),jn,kn,(function(n){return n.secondary||"#fff"})),zn=nn("div")(G||(G=(0,s.Z)(["\n  position: absolute;\n"]))),Cn=nn("div")(J||(J=(0,s.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),An=X(R||(R=(0,s.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Nn=nn("div")(Y||(Y=(0,s.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),An),On=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?Z.createElement(Nn,null,e):e:"blank"===r?null:Z.createElement(Cn,null,Z.createElement(wn,(0,y.Z)({},o)),"loading"!==r&&Z.createElement(zn,null,"error"===r?Z.createElement(yn,(0,y.Z)({},o)):Z.createElement(En,(0,y.Z)({},o))))},Dn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Fn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},In=nn("div")(Q||(Q=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Pn=nn("div")(V||(V=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Mn=Z.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,a=t.height?function(n,t){var e=n.includes("top")?1:-1,r=rn()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Dn(e),Fn(e)],o=(0,b.Z)(r,2),a=o[0],i=o[1];return{animation:t?"".concat(X(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(X(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},i=Z.createElement(On,{toast:t}),s=Z.createElement(Pn,(0,y.Z)({},t.ariaProps),tn(t.message,t));return Z.createElement(In,{className:t.className,style:(0,y.Z)((0,y.Z)((0,y.Z)({},a),r),t.style)},"function"==typeof o?o({icon:i,message:s}):Z.createElement(Z.Fragment,null,i,s))}));!function(n,t,e,r){A.p=t,P=n,M=e,L=r}(Z.createElement);var Ln=function(n){var t=n.id,e=n.className,r=n.style,o=n.onHeightUpdate,a=n.children,i=Z.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;o(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return Z.createElement("div",{ref:i,className:e,style:r},a)},Tn=I(W||(W=(0,s.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),_n=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,a=n.gutter,i=n.children,s=n.containerStyle,c=n.containerClassName,u=gn(o),d=u.toasts,l=u.handlers;return Z.createElement("div",{style:(0,y.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:l.startPause,onMouseLeave:l.endPause},d.map((function(n){var e=n.position||r,o=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,y.Z)((0,y.Z)({left:0,right:0,display:"flex",position:"absolute",transition:rn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,l.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return Z.createElement(Ln,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?Tn:"",style:o},"custom"===n.type?tn(n.message,n):i?i(n):Z.createElement(Mn,{toast:n,position:e}))})))},Bn=e(184);var Hn,Sn,qn,Kn,Un,$n,Gn,Jn,Rn,Yn,Qn=function(){var n=(0,f.v9)(x),t=(0,f.I0)();return(0,Bn.jsxs)(u,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget,o=r.name.value,a=r.number.value;n.some((function(n){return n.name===o}))?fn("".concat(o," is already in contacts!")):(t((0,m.uK)({name:o,number:a})),r.reset())},children:[(0,Bn.jsxs)(d,{children:["Name",(0,Bn.jsx)(l,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Bn.jsxs)(d,{children:["Number",(0,Bn.jsx)(l,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Bn.jsx)(p,{type:"submit",children:"Add contact"})]})},Vn=c.Z.li(Hn||(Hn=(0,s.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: space-around;\n"]))),Wn=c.Z.ul(Sn||(Sn=(0,s.Z)(["\n  margin: 20px auto;\n  width: 500px;\n  list-style: circle;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),Xn=c.Z.p(qn||(qn=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),nt=c.Z.button(Kn||(Kn=(0,s.Z)(["\nborder-radius: 5px;\nfont-size: 16px;\nborder: none;\ncursor: pointer;\npadding: 10px 20px;\nbackground-color: #ff10a2;\ncolor: #000;\nmargin: 0 auto;\n\ntransition: background-color 0.3s linear;\n    \n&:hover{\n  background-color: #F6A1E7;\n"]))),tt=function(){var n=(0,f.v9)(h),t=(0,f.I0)();return(0,Bn.jsx)(Wn,{children:n.map((function(n){var e=n.name,r=n.number,o=n.id;return(0,Bn.jsxs)(Vn,{children:[(0,Bn.jsx)(Xn,{children:e+": "+r}),(0,Bn.jsx)(nt,{type:"button",onClick:function(){return t((0,m.GK)(o))},children:"Delete"})]},o)}))})},et=e(7657),rt=c.Z.form(Un||(Un=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 500px;\n  box-shadow: 6px 6px 18px -7px rgba(0, 0, 0, 0.9);\n  padding: 15px;\n  margin: 30px auto;\n"]))),ot=c.Z.label($n||($n=(0,s.Z)(["\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"]))),at=c.Z.input(Gn||(Gn=(0,s.Z)(["\n  padding: 5px;\n  font-size: 18px;\n  width: 450px;\n  background-color: transparent;\n  border: solid 1px #000;\n  border-radius: 10px;\n  margin-top: 10px;\n"]))),it=function(){var n=(0,f.v9)(g),t=(0,f.I0)();return(0,Bn.jsx)(rt,{children:(0,Bn.jsxs)(ot,{children:["Find contacts by name",(0,Bn.jsx)(at,{type:"text",name:"filter",onChange:function(n){t((0,et.M)(n.target.value.toLowerCase()))},value:n})]})})},st=(c.Z.div(Jn||(Jn=(0,s.Z)(["\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  border: solid 1px #000;\n"]))),c.Z.h1(Rn||(Rn=(0,s.Z)(["\n  text-align: center;\n  font-size: 34px;\n  color: #fff;\n"])))),ct=(c.Z.form(Yn||(Yn=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),function(){return(0,Bn.jsxs)("div",{children:[(0,Bn.jsx)(st,{children:"Phonebook"}),(0,Bn.jsx)(Qn,{}),(0,Bn.jsx)(_n,{toastOptions:{style:{border:"1px solid #F65B5B",padding:"20px",color:"#F65B5B"}}}),(0,Bn.jsx)(st,{children:"Contacts"}),(0,Bn.jsx)(it,{}),(0,Bn.jsx)(tt,{})]})})}}]);
//# sourceMappingURL=854.e699f540.chunk.js.map
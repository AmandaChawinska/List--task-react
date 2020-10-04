(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{39:function(n,e,t){n.exports=t(51)},51:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(21),c=t.n(o),i=t(3),u=t(9),l=t(6);function s(){var n=Object(l.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        background: ",";\n    }\n"]);return s=function(){return n},n}var d=Object(i.b)(s(),(function(n){return n.theme.color.gallery})),f=t(16),m=t(7),b=t(37),p=t(20);function v(){var n=Object(l.a)(["\n    padding: 10px;\n    background: ",";\n    color: ",";\n    border: none;\n    transition: 0.3s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.1);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return v=function(){return n},n}function h(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media(max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n\n"]);return h=function(){return n},n}var g=i.d.form(h(),(function(n){return n.theme.breakpoint.mobileMax})),k=i.d.button(v(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white})),x=t(35),E=function(n){return localStorage.setItem("tasks",JSON.stringify(n))},j=Object(p.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t[a].done=!t[a].done},setAllDone:function(n){var e,t=n.tasks,r=Object(x.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(a){r.e(a)}finally{r.f()}},removeTask:function(n,e){var t=n.tasks,r=e.payload,a=t.findIndex((function(n){return n.id===r}));t.splice(a,1)},removeAllTasks:function(n){n.tasks=[]},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),O=j.actions,w=O.addTask,y=O.toggleHideDone,z=O.toggleTaskDone,T=O.setAllDone,C=O.removeTask,D=O.removeAllTasks,S=O.fetchExampleTasks,U=(O.setTasks,O.fetchExampleTasksSuccess),A=O.fetchExampleTasksError,M=function(n){return n.tasks},I=function(n){return M(n).tasks},L=function(n){return M(n).hideDone},N=j.reducer;function F(){var n=Object(l.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n"]);return F=function(){return n},n}var H=i.d.input(F(),(function(n){return n.theme.color.alto})),J=function(){var n=Object(r.useState)(""),e=Object(b.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null),i=Object(u.b)();return a.a.createElement(g,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(i(w({content:e,done:!1,id:Object(p.c)()})),o(""),c.current.focus())}},a.a.createElement(H,{ref:c,value:t,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return o(e.value)}}),a.a.createElement(k,null,"Dodaj zadanie"))};function P(){var n=Object(l.a)(["\n        background: ",";\n    "]);return P=function(){return n},n}function R(){var n=Object(l.a)(["\n        background: ",";\n    "]);return R=function(){return n},n}function W(){var n=Object(l.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: filter 0.3s;\n\n    ","\n\n    ","\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return W=function(){return n},n}function B(){var n=Object(l.a)(["\n        text-decoration: line-through;\n    "]);return B=function(){return n},n}function G(){var n=Object(l.a)(["\n    ","\n"]);return G=function(){return n},n}function Z(){var n=Object(l.a)(["\n        display:none;\n    "]);return Z=function(){return n},n}function $(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid ",";\n\n    ","\n"]);return $=function(){return n},n}function q(){var n=Object(l.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return q=function(){return n},n}var K=i.d.ul(q()),Q=i.d.li($(),(function(n){return n.theme.color.alto}),(function(n){return n.hidden&&Object(i.c)(Z())})),V=i.d.span(G(),(function(n){return n.done&&Object(i.c)(B())})),X=i.d.button(W(),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(i.c)(R(),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(i.c)(P(),(function(n){return n.theme.color.crimson}))})),Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},e=n.id;return"/zadania/".concat(e)},_=function(n){var e=Object(m.h)();return new URLSearchParams(e.search).get(n)},nn=function(){var n=_("szukaj"),e=Object(u.c)((function(e){return function(n,e){var t=I(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(e,n)})),t=Object(u.c)(L),r=Object(u.b)();return a.a.createElement(K,null,e.map((function(n){return a.a.createElement(Q,{key:n.id,hidden:n.done&&t},a.a.createElement(X,{toggleDone:!0,onClick:function(){return r(z(n.id))}},n.done?"\u221a":""),a.a.createElement(V,{done:n.done},a.a.createElement(f.b,{to:Y({id:n.id})},n.content)),a.a.createElement(X,{remove:!0,onClick:function(){return r(C(n.id))}},"\ud83d\uddd1"))})))};function en(){var n=Object(l.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return en=function(){return n},n}var tn=i.d.div(en());function rn(){var n=Object(l.a)(["\nbackground: transparent;\ncolor: ",";\nborder: none;\nmargin: 0 0 0 20x;\ntransition: filter 0.3s;\n\n@media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    }\n"]);return rn=function(){return n},n}var an=i.d.button(rn(),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.silver})),on=function(){var n=Object(u.c)(L),e=Object(u.c)(I),t=Object(u.b)();return a.a.createElement(tn,null,a.a.createElement(an,{onClick:function(){return t(S())}},"Pobierz przyk\u0142adowe zadania"),e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(an,{onClick:function(){return t(y())}},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),a.a.createElement(an,{onClick:function(){return t(T())},disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie"),a.a.createElement(an,{onClick:function(){return t(D())},removeAll:!0},"Usu\u0144 wszystko")))};function cn(){var n=Object(l.a)(["\n    padding: 20px;\n"]);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n    font-size: 20px;\n    margin: 0;\n"]);return un=function(){return n},n}function ln(){var n=Object(l.a)(["\n     border-bottom: 1px solid ",";\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    @media(max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n"]);return sn=function(){return n},n}var dn=i.d.section(sn(),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.alto})),fn=i.d.header(ln(),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakpoint.mobileMax})),mn=i.d.h2(un()),bn=i.d.div(cn()),pn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return a.a.createElement(dn,null,a.a.createElement(fn,null,a.a.createElement(mn,null,e),r),a.a.createElement(bn,null,t))},vn=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement("h1",null,e))};function hn(){var n=Object(l.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n\n"]);return hn=function(){return n},n}var gn=i.d.div(hn()),kn=function(n){var e=n.children;return a.a.createElement(gn,null,e)};function xn(){var n=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n"]);return xn=function(){return n},n}var En=i.d.div(xn()),jn=function(){var n=_("szukaj"),e=function(){var n=Object(m.h)(),e=Object(m.g)();return function(t){var r=t.key,a=t.value,o=new URLSearchParams(n.search);void 0===a?o.delete(r):o.set(r,a);var c=o.toString();e.push("".concat(n.pathname,"?").concat(c))}}();return a.a.createElement(En,null,a.a.createElement(H,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:"szukaj",value:""!==t.value.trim()?t.value:void 0})}}))};var On=function(){return a.a.createElement(kn,null,a.a.createElement(vn,{title:"Lista zada\u0144"}),a.a.createElement(pn,{title:"Dodaj nowe zadanie",body:a.a.createElement(J,null)}),a.a.createElement(pn,{title:"Wyszukiwarka",body:a.a.createElement(jn,null)}),a.a.createElement(pn,{title:"Lista zada\u0144",body:a.a.createElement(nn,null),extraHeaderContent:a.a.createElement(on,null)}))};var wn=function(){var n=Object(m.i)().id,e=Object(u.c)((function(e){return function(n,e){return I(n).find((function(n){return n.id===e}))}(e,n)}));return a.a.createElement(kn,null,a.a.createElement(vn,{title:"Szczeg\xf3\u0142y zadania"}),a.a.createElement(pn,{title:e?e.content:"Nie znaleziono zadania ",body:!!e&&a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,"Uko\u0144czono:")," ",e.done?"Tak":"Nie")}))},yn=function(){return a.a.createElement(kn,null,a.a.createElement(vn,{title:"O autorze"}),a.a.createElement(pn,{title:"Amanda Chawi\u0144ska",body:a.a.createElement(a.a.Fragment,null," co\u015b tam o mnie.. ")}))};function zn(){var n=Object(l.a)(["\nmargin: 20px;\n"]);return zn=function(){return n},n}function Tn(){var n=Object(l.a)(["\nbackground: ",";\nmargin: 0;\npadding: 0;\ndisplay: flex;\njustify-content: center;\nlist-style: none;\n"]);return Tn=function(){return n},n}function Cn(){var n=Object(l.a)(["\ncolor: ",";\ntext-decoration: none;\n\n&.","{\n    font-weight: bold;\n}\n\n&:hover {\n    border-bottom: 1px solid;\n}\n"]);return Cn=function(){return n},n}var Dn=Object(i.d)(f.c).attrs((function(){return{activeClassName:"link-active"}}))(Cn(),(function(n){return n.theme.color.white}),"link-active"),Sn=i.d.ul(Tn(),(function(n){return n.theme.color.teal})),Un=i.d.li(zn()),An=function(){return a.a.createElement("nav",null,a.a.createElement(Sn,null,a.a.createElement(Un,null,a.a.createElement(Dn,{to:"/zadania"},"Zadania")),a.a.createElement(Un,null,a.a.createElement(Dn,{to:"/autor"},"O autorze"))))},Mn=function(){return a.a.createElement(f.a,null,a.a.createElement(An,null),a.a.createElement(m.d,null,a.a.createElement(m.b,{path:Y()},a.a.createElement(wn,null)),a.a.createElement(m.b,{path:"/zadania"},a.a.createElement(On,null)),a.a.createElement(m.b,{path:"/autor"},a.a.createElement(yn,null)),a.a.createElement(m.b,null,a.a.createElement(m.a,{to:"/zadania"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var In=t(38),Ln=t(13),Nn=t.n(Ln),Fn=t(15),Hn=t(36),Jn=function(){var n=Object(Hn.a)(Nn.a.mark((function n(){var e;return Nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/List-task-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Pn=Nn.a.mark(Bn),Rn=Nn.a.mark(Gn),Wn=Nn.a.mark(Zn);function Bn(){var n;return Nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Fn.c)(1e3);case 3:return e.next=5,Object(Fn.b)(Jn);case 5:return n=e.sent,e.next=8,Object(Fn.d)(U(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Fn.d)(A());case 14:return e.next=16,Object(Fn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 16:case"end":return e.stop()}}),Pn,null,[[0,10]])}function Gn(){var n;return Nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Fn.e)(I);case 2:return n=e.sent,e.next=5,Object(Fn.b)(E,n);case 5:case"end":return e.stop()}}),Rn)}function Zn(){return Nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Saga jest pod\u0142\u0105czona"),n.next=3,Object(Fn.g)(S.type,Bn);case 3:return n.next=5,Object(Fn.f)("*",Gn);case 5:case"end":return n.stop()}}),Wn)}var $n=Nn.a.mark(qn);function qn(){return Nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Fn.a)([Zn()]);case 2:case"end":return n.stop()}}),$n)}var Kn=Object(In.a)(),Qn=Object(p.a)({reducer:{tasks:N},middleware:[Kn]});Kn.run(qn);var Vn=Qn;c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:Vn},a.a.createElement(i.a,{theme:{color:{black:"#000",silver:"#ccc",alto:"#ddd",gallery:"#eee",white:"#fff",teal:"#008080",crimson:"#db143c",forestGreen:"#228c22"},breakpoint:{mobileMax:767}}},a.a.createElement(d,null),a.a.createElement(Mn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3464a1fb.chunk.js.map
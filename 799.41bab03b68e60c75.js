"use strict";(self.webpackChunkSetupTeamPage=self.webpackChunkSetupTeamPage||[]).push([[799],{7799:(g,u,r)=>{r.r(u),r.d(u,{RulesModule:()=>v});var i=r(6895),l=r(9197),e=r(4650),a=r(2340),p=r(529);let d=(()=>{class t{constructor(n){this.http=n,this.apiEndpoint=a.N.apiEndpoint}list(){return this.http.get(`${this.url}`)}getTest(){return this.http.get(`${this.apiEndpoint}test`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(p.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t extends d{constructor(){super(...arguments),this.url=`${this.apiEndpoint}rules`}}return t.\u0275fac=function(){let o;return function(s){return(o||(o=e.n5z(t)))(s||t)}}(),t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"td",7),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.Oqu(n.id),e.xp6(2),e.Oqu(n.text)}}const f=[{path:"",component:(()=>{class t{constructor(n){this.rulesS=n,this.rulesS.list().subscribe(s=>this.rules=Object.entries(s).map(R=>R[1]))}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rules"]],decls:10,vars:1,consts:[[1,"container-fluid"],[1,"card"],[1,"card-header"],[1,"ml-2"],[1,"card-body"],[1,"table"],[4,"ngFor","ngForOf"],[2,"min-width","1px","width","1px","text-align","end"]],template:function(n,s){1&n&&(e.TgZ(0,"main")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h2",3),e._uU(5,"Reglas"),e.qZA()(),e.TgZ(6,"div",4)(7,"table",5)(8,"tbody"),e.YNc(9,m,5,2,"tr",6),e.qZA()()()()()()),2&n&&(e.xp6(9),e.Q6J("ngForOf",s.rules))},dependencies:[i.sg]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(f),l.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[c],imports:[i.ez,h]}),t})()}}]);
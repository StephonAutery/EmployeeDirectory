(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Stephon","lastName":"Autery","hireYear":0,"roleNum":0,"tasty":"true"},{"id":5,"firstName":"Catherine","lastName":"Gutman","hireYear":10,"roleNum":2,"tasty":"true"},{"id":6,"firstName":"Cleo","lastName":"Autery","hireYear":8,"roleNum":8,"tasty":"true"},{"id":8,"firstName":"Penda","lastName":"Autery","hireYear":0,"roleNum":8,"tasty":"true"},{"id":4,"firstName":"Sussanah","lastName":"Levy","hireYear":11,"roleNum":2,"tasty":"true"},{"id":3,"firstName":"John","lastName":"Autery","hireYear":2,"roleNum":0,"tasty":"true"},{"id":9,"firstName":"Eric","lastName":"Schreiber","hireYear":0,"roleNum":2,"tasty":"true"},{"id":7,"firstName":"Maxy","lastName":"Autery","hireYear":11,"roleNum":8,"tasty":"true"},{"id":10,"firstName":"Noble","lastName":"Hendrix","hireYear":0,"roleNum":2,"tasty":"true"},{"id":2,"firstName":"Cate","lastName":"Autery","hireYear":0,"roleNum":0,"tasty":"true"},{"id":11,"firstName":"Gregory","lastName":"Allen","hireYear":0,"roleNum":2,"tasty":"true"}]')},10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(3),s=a.n(n),o=a(4),m=a(5),i=a(6),c=a(9),u=a(8);var h=function(e){return l.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var d=function(e){return l.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var N=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",{className:t},e.children)};var y=function(e){return l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h2",null,e.heading)),l.a.createElement("div",{className:"card-body"},e.children))};var p=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Search:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("button",{onClick:e.handleFormSubmit,id:"search",className:"btn btn-info p-2"},"search")),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("button",{onClick:e.handleFormSubmit,id:"sort",className:"btn btn-dark p-2"},"sort"))))};var f=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"content"},l.a.createElement("div",null,l.a.createElement("strong",null,"name: "),e.firstName," ",e.lastName,"\xa0|\xa0",l.a.createElement("strong",null,"role: "),e.role),l.a.createElement("div",{className:"p-2"},l.a.createElement("button",{onClick:function(){return e.removeEmployee(e.id)},className:"remove btn btn-danger"},"fire me"))))},E=a(1),v=a(7),g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={search:"",name:"",employees:E,roles:v,searching:!1},e.filterEmployees=function(t,a){var r=[];console.log(t,a,r),""!==t&&(r=a.filter((function(e){return(e.firstName.toLowerCase()+e.lastName.toLowerCase()).includes(t.toLowerCase())}))),e.setState({searching:!1,employees:r})},e.sortEmployees=function(t,a){var r;r=a.sort((function(e,t){return e.lastName>t.lastName?1:-1})),e.setState({search:"",employees:r})},e.handleInputChange=function(t){var a=t.target.value,r=t.target.name;e.setState(Object(o.a)({searching:!0},r,a))},e.handleFormSubmit=function(t){t.preventDefault(),"sort"===t.target.id?e.sortEmployees(e.state.search,E):e.filterEmployees(e.state.search,E)},e.removeEmployee=function(t){var a=e.state.employees.filter((function(e){return e.id!==t}));e.setState({employees:a})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){""===this.state.search&&this.state.searching?this.setState({employees:E,searching:!1}):this.state.searching&&this.filterEmployees(this.state.search,E)}},{key:"render",value:function(){var e=this;return l.a.createElement(h,null,l.a.createElement(d,null,l.a.createElement(N,{size:"md-4"},l.a.createElement(y,{heading:"search"},l.a.createElement(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))),l.a.createElement(N,{size:"md-8"},l.a.createElement(y,{heading:"employees"},this.state.employees.map((function(t){return l.a.createElement(f,{removeEmployee:e.removeEmployee,id:t.id,key:t.id,firstName:t.firstName,lastName:t.lastName,roleNum:t.roleNum,role:e.state.roles[t.roleNum].role,tasty:t.tasty})}))))))}}]),a}(r.Component);var b=function(){return l.a.createElement(g,null)};s.a.render(l.a.createElement(b,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"role":"owner","salary":0,"roleNum":0},{"role":"writer","salary":10000,"roleNum":1},{"role":"producer","salary":30000,"roleNum":2},{"role":"director","salary":20000,"roleNum":3},{"role":"cinematographer","salary":20000,"roleNum":4},{"role":"audioTech","salary":10000,"roleNum":5},{"role":"lightingTech","salary":10000,"roleNum":6},{"role":"actor","salary":100000,"roleNum":7},{"role":"puppy","salary":0,"roleNum":8}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.1ab91aec.chunk.js.map
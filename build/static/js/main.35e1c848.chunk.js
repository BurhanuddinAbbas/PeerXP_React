(this.webpackJsonppeerxp_react=this.webpackJsonppeerxp_react||[]).push([[0],{43:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a(19),i=a.n(c),r=(a(53),a(20)),l=a(6),o=(a(54),a(55),a(21)),d=a(10),j=a(15),h=a(16),b=a(11),u=a(18),m=a(17),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t={};t[e.target.name]={},t[e.target.name].value=e.target.value,t[e.target.name].error=n.state[e.target.name].error,n.setState(t)},n.handleSubmit=function(e,t){e.preventDefault();var a={email:n.state.email.value,password:n.state.password.value};if(a.email.length<1||a.password.length<1)return!1;$.ajax({url:"/accounts/login/",dataType:"json",type:"POST",data:a,success:function(e){$(".is-invalid").removeClass("is-invalid"),$("#logout_link").css("display","initial"),$("#new_ticket_link").css("display","initial"),this.props.history.push("/tickets")}.bind(Object(b.a)(n)),error:function(e){var t={};$.each(e.responseJSON,function(e,a){t[e]={},t[e].value=this.state[e].value,t[e].error=a,$("#"+e).addClass("is-invalid")}.bind(this)),this.setState(t)}.bind(Object(b.a)(n))})},n.state={email:{value:"",error:""},password:{value:"",error:""},__all__:{value:"",error:""}},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),console.log(n.props),n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"auth-wrapper",children:Object(n.jsx)("div",{className:"auth-inner",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("h3",{children:"Sign In"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email address"}),Object(n.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handleChange,value:this.state.email.value,className:"form-control",placeholder:"Enter email"}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.email.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",id:"password",onChange:this.handleChange,value:this.state.password.value,className:"form-control",placeholder:"Enter password"}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.password.error})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{style:{display:"none"},id:"__all__"}),Object(n.jsx)("div",{style:{textAlign:"center"},className:"invalid-feedback",children:this.state.__all__.error})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})})})}}]),a}(s.Component),p=(a(27),a(100)),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={tickets:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/tickets/tickets/?format=json").then((function(t){return t.json().then((function(t){e.setState({tickets:t})}))}))}},{key:"render",value:function(){return console.log(this.state.tickets),Object(n.jsx)("div",{className:"auth-wrapper",children:Object(n.jsx)("div",{style:{padding:"10px"},children:Object(n.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"# Ticket-ID"}),Object(n.jsx)("th",{children:"Subject"}),Object(n.jsx)("th",{children:"Department"}),Object(n.jsx)("th",{children:"Priority"})]})}),Object(n.jsx)("tbody",{children:this.state.tickets.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.id}),Object(n.jsx)("td",{children:Object(n.jsx)(o.b,{to:"/ticket_details/"+e.id,children:e.subject})}),Object(n.jsx)("td",{children:e.department.name}),Object(n.jsx)("td",{children:e.priority_name})]},e.id)}))})]})})})}}]),a}(s.Component),v=a(101),f=a(46),g=a(102),k=(a(43),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t={ticket:n.state.ticket};t.ticket[e.target.name]=e.target.value,n.setState(t)},n.handleSubmit=function(e,t){e.preventDefault();var a=new FormData(document.getElementById("update_ticket"));a.append("csrfmiddlewaretoken",$('[name="csrfmiddlewaretoken"]').val()),$.ajax({url:"/tickets/update_ticket/",type:"POST",header:{"X-CSRFTOKEN":$('[name="csrfmiddlewaretoken"]').val()},processData:!1,contentType:!1,cache:!1,enctype:"multipart/form-data",data:a,success:function(e){$(".is-invalid").removeClass("is-invalid"),this.props.history.push("/tickets")}.bind(Object(b.a)(n)),error:function(e){var t={tickets:{},errors:{}};$.each(e.responseJSON,function(e,a){t.ticktes={error_name:this.state[e].value},t.errors={error_name:a},$("#"+e).addClass("is-invalid")}.bind(this)),this.setState(t)}.bind(Object(b.a)(n))})},n.state={ticket:{id:"",department:"0",category:"0",lab_url:"",subject:"",description:""},departments:[],categories:[],errors:{department:"",category:"",lab_url:"",subject:"",description:""}},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"_fetch_details",value:function(e){var t=this;fetch("/tickets/fetch_ticket/"+e).then((function(e){return e.json().then((function(e){t.setState({ticket:e})}))}))}},{key:"componentDidMount",value:function(){var e=this;fetch("/tickets/departments/?format=json").then((function(t){return t.json().then((function(t){e.setState({departments:t})}))})).then((function(){fetch("/tickets/categories/?format=json").then((function(t){return t.json().then((function(t){e.setState({categories:t})}))}))})).then((function(){e._fetch_details(e.props.match.params.ticket_id)}))}},{key:"render",value:function(){var e,t,a;return Object(n.jsx)("div",{className:"auth-wrapper mx-auto col-md-12",style:{marginTop:"10em"},children:Object(n.jsxs)(v.a,{id:"update_ticket",onSubmit:this.handleSubmit,children:[Object(n.jsx)(v.a.Group,{children:Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:Object(n.jsx)("h4",{children:"Submit a ticket"})})}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Ticket"}),Object(n.jsx)(f.a,{sm:5,children:Object(n.jsx)(v.a.Control,{name:"id",type:"text",onChange:this.handleChange,value:"#"+this.state.ticket.id,placeholder:"ticket-id",readOnly:!0})})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Department"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsxs)(v.a.Control,(e={as:"select",value:this.state.ticket.department.id,onChange:this.handleChange,id:"department",name:"department",className:"mr-sm-2"},Object(l.a)(e,"id","inlineFormCustomSelect"),Object(l.a)(e,"custom",!0),Object(l.a)(e,"children",[Object(n.jsx)("option",{value:"0",children:"---"}),this.state.departments.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name})}))]),e)),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.department})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Category"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsxs)(v.a.Control,(t={as:"select",id:"category",name:"category",onChange:this.handleChange,value:this.state.ticket.category.id,className:"mr-sm-2"},Object(l.a)(t,"id","inlineFormCustomSelect"),Object(l.a)(t,"custom",!0),Object(l.a)(t,"children",[Object(n.jsx)("option",{value:"0",children:"---"}),this.state.categories.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name})}))]),t)),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.category})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Lab URL"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsx)(v.a.Control,{type:"url",id:"lab_url",name:"lab_url",onChange:this.handleChange,placeholder:"Lab URL",value:this.state.ticket.lab_url}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.lab_url})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Subject"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsx)(v.a.Control,{type:"text",id:"subject",name:"subject",onChange:this.handleChange,placeholder:"Subject",value:this.state.ticket.subject}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.subject})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Description"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsx)(v.a.Control,{as:"textarea",id:"description",name:"description",className:"description",onChange:this.handleChange,placeholder:"Description",rows:3,cols:5,value:this.state.ticket.description}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.description})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Priority"}),Object(n.jsx)(f.a,{sm:5,children:Object(n.jsxs)(v.a.Control,(a={as:"select",id:"priority",name:"priority",onChange:this.handleChange,value:this.state.ticket.priority,className:"mr-sm-2"},Object(l.a)(a,"id","inlineFormCustomSelect"),Object(l.a)(a,"custom",!0),Object(l.a)(a,"children",[Object(n.jsx)("option",{value:"0",children:"---"}),Object(n.jsx)("option",{value:"1",children:"HIGH - Production System Down"}),Object(n.jsx)("option",{value:"2",children:"MED - System Impaired"}),Object(n.jsx)("option",{value:"3",children:"LOW - General Guidence"})]),a))}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.priority})]}),Object(n.jsx)(v.a.Group,{children:Object(n.jsx)(f.a,{sm:{span:1,offset:0},children:Object(n.jsx)(g.a,{type:"submit",children:"Submit"})})})]})})}}]),a}(s.Component)),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t={ticket:n.state.ticket};t.ticket[e.target.name]=e.target.value,n.setState(t)},n.handleSubmit=function(e,t){e.preventDefault();var a=new FormData(document.getElementById("add_ticket"));a.append("csrfmiddlewaretoken",$('[name="csrfmiddlewaretoken"]').val()),$.ajax({url:"/tickets/add_ticket/",type:"POST",header:{"X-CSRFTOKEN":$('[name="csrfmiddlewaretoken"]').val()},processData:!1,contentType:!1,cache:!1,enctype:"multipart/form-data",data:a,success:function(e){$(".is-invalid").removeClass("is-invalid"),this.props.history.push("/tickets")}.bind(Object(b.a)(n)),error:function(e){var t={tickets:{},errors:{}};$.each(e.responseJSON,function(e,a){t.ticktes={error_name:this.state[e].value},t.errors={error_name:a},$("#"+e).addClass("is-invalid")}.bind(this)),this.setState(t)}.bind(Object(b.a)(n))})},n.state={ticket:{id:"",department:"0",category:"0",lab_url:"",subject:"",description:""},departments:[],categories:[],errors:{department:"",category:"",lab_url:"",subject:"",description:""}},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/tickets/departments/?format=json").then((function(t){return t.json().then((function(t){e.setState({departments:t})}))})).then((function(){fetch("/tickets/categories/?format=json").then((function(t){return t.json().then((function(t){e.setState({categories:t})}))}))}))}},{key:"render",value:function(){var e,t,a;return Object(n.jsx)("div",{className:"auth-wrapper mx-auto col-md-12",style:{marginTop:"10em"},children:Object(n.jsxs)(v.a,{id:"add_ticket",onSubmit:this.handleSubmit,children:[Object(n.jsx)(v.a.Group,{children:Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:Object(n.jsx)("h4",{children:"Submit a ticket"})})}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Ticket"}),Object(n.jsx)(f.a,{sm:5,children:Object(n.jsx)(v.a.Control,{type:"text",name:"id",onChange:this.handleChange,value:"#"+this.state.ticket.id,placeholder:"ticket-id",readOnly:!0})})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Department"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsxs)(v.a.Control,(e={as:"select",name:"department",id:"department",onChange:this.handleChange,value:this.state.ticket.department.id,className:"mr-sm-2"},Object(l.a)(e,"id","inlineFormCustomSelect"),Object(l.a)(e,"custom",!0),Object(l.a)(e,"children",[Object(n.jsx)("option",{value:"0",children:"---"}),this.state.departments.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name})}))]),e))," ",Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.department})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Category"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsxs)(v.a.Control,(t={as:"select",name:"category",id:"category",onChange:this.handleChange,value:this.state.ticket.category.id,className:"mr-sm-2"},Object(l.a)(t,"id","inlineFormCustomSelect"),Object(l.a)(t,"custom",!0),Object(l.a)(t,"children",[Object(n.jsx)("option",{value:"0",children:"---"}),this.state.categories.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name})}))]),t)),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.category})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Lab URL"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsx)(v.a.Control,{type:"url",id:"lab_url",name:"lab_url",placeholder:"Lab URL",onChange:this.handleChange,value:this.state.ticket.lab_url}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.lab_url})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Subject"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsx)(v.a.Control,{type:"text",name:"subject",id:"subject",placeholder:"Subject",onChange:this.handleChange,value:this.state.ticket.subject}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.subject})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Description"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsx)(v.a.Control,{as:"textarea",id:"description",name:"description",placeholder:"Description",onChange:this.handleChange,rows:3,cols:5,value:this.state.ticket.description}),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.description})]})]}),Object(n.jsxs)(v.a.Group,{children:[Object(n.jsx)(v.a.Label,{column:!0,sm:2,children:"Priority"}),Object(n.jsxs)(f.a,{sm:5,children:[Object(n.jsxs)(v.a.Control,(a={as:"select",name:"priority",id:"priority",value:this.state.ticket.priority,onChange:this.handleChange,className:"mr-sm-2"},Object(l.a)(a,"id","inlineFormCustomSelect"),Object(l.a)(a,"custom",!0),Object(l.a)(a,"children",[Object(n.jsx)("option",{value:"0",children:"---"}),Object(n.jsx)("option",{value:"1",children:"HIGH - Production System Down"}),Object(n.jsx)("option",{value:"2",children:"MED - System Impaired"}),Object(n.jsx)("option",{value:"3",children:"LOW - General Guidence"})]),a)),Object(n.jsx)("div",{className:"invalid-feedback",children:this.state.errors.priority})]})]}),Object(n.jsx)(v.a.Group,{children:Object(n.jsx)(f.a,{sm:{span:1,offset:0},children:Object(n.jsx)(g.a,{type:"submit",children:"Submit"})})})]})})}}]),a}(s.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){return this.props.user_logged_in?Object(n.jsx)(x,Object(r.a)({},this.props)):Object(n.jsx)(O,Object(r.a)({},this.props))}}]),a}(s.Component);function _(){user_logged_in=!1,$("#logout_link").css("display","none"),$("#new_ticket_link").css("display","none"),$.get("/accounts/logout/",(function(e){console.log(e)}))}var S=function(){var e,t,a,s=!1;return Object(n.jsx)(O,{}),a="none",Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(o.b,{className:"navbar-brand",to:"#",children:"PeerXP in React"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(n.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(n.jsxs)("li",{className:"nav-item",style:{display:"inline"},children:[Object(n.jsx)(o.b,(e={className:"nav-link"},Object(l.a)(e,"className","container"),Object(l.a)(e,"id","logout_link"),Object(l.a)(e,"style",{display:a}),Object(l.a)(e,"onClick",_),Object(l.a)(e,"to","/login"),Object(l.a)(e,"children","Logout"),e)),Object(n.jsx)(o.b,(t={className:"nav-link"},Object(l.a)(t,"className","container"),Object(l.a)(t,"id","new_ticket_link"),Object(l.a)(t,"style",{display:a}),Object(l.a)(t,"to","/new_ticket"),Object(l.a)(t,"children","New Ticket"),t))]})})})]})}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:function(e){return Object(n.jsx)(C,Object(r.a)(Object(r.a)({},e),{},{user_logged_in:s}))}}),Object(n.jsx)(d.a,{exact:!0,path:"/login",component:function(e){return Object(n.jsx)(O,Object(r.a)(Object(r.a)({},e),{},{user_logged_in:s}))}}),Object(n.jsx)(d.a,{path:"/tickets",component:x}),Object(n.jsx)(d.a,{path:"/logout",component:O}),Object(n.jsx)(d.a,{exact:!0,path:"/ticket_details/:ticket_id",component:k}),Object(n.jsx)(d.a,{exact:!0,path:"/new_ticket",component:y})]})]})})};i.a.render(Object(n.jsx)(S,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.35e1c848.chunk.js.map
(this.webpackJsonppeerxp_react=this.webpackJsonppeerxp_react||[]).push([[0],{43:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a(19),i=a.n(c),r=(a(53),a(20)),l=a(8),o=(a(54),a(55),a(21)),d=a(10),j=a(15),h=a(16),b=a(11),u=a(18),m=a(17),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t={};t[e.target.name]={},t[e.target.name].value=e.target.value,t[e.target.name].error=s.state[e.target.name].error,s.setState(t)},s.handleSubmit=function(e,t){e.preventDefault();var a={email:s.state.email.value,password:s.state.password.value};if(a.email.length<1||a.password.length<1)return!1;$.ajax({url:"/accounts/login/",dataType:"json",type:"POST",data:a,success:function(e){$(".is-invalid").removeClass("is-invalid"),$("#logout_link").css("display","initial"),$("#new_ticket_link").css("display","initial"),this.props.history.push("/tickets")}.bind(Object(b.a)(s)),error:function(e){var t={};$.each(e.responseJSON,function(e,a){t[e]={},t[e].value=this.state[e].value,t[e].error=a,$("#"+e).addClass("is-invalid")}.bind(this)),this.setState(t)}.bind(Object(b.a)(s))})},s.state={email:{value:"",error:""},password:{value:"",error:""},__all__:{value:"",error:""}},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(b.a)(s)),console.log(s.props),s}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"auth-wrapper",children:Object(s.jsx)("div",{className:"auth-inner",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsx)("h3",{children:"Sign In"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email address"}),Object(s.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handleChange,value:this.state.email.value,className:"form-control",placeholder:"Enter email"}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.email.error})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",name:"password",id:"password",onChange:this.handleChange,value:this.state.password.value,className:"form-control",placeholder:"Enter password"}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.password.error})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{style:{display:"none"},id:"__all__"}),Object(s.jsx)("div",{style:{textAlign:"center"},className:"invalid-feedback",children:this.state.__all__.error})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})})})}}]),a}(n.Component),p=(a(27),a(100)),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={tickets:[]},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/tickets/tickets/?format=json").then((function(t){return t.json().then((function(t){e.setState({tickets:t})}))}))}},{key:"render",value:function(){return console.log(this.state.tickets),Object(s.jsx)("div",{className:"auth-wrapper",children:Object(s.jsx)("div",{style:{padding:"10px"},children:Object(s.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"# Ticket-ID"}),Object(s.jsx)("th",{children:"Subject"}),Object(s.jsx)("th",{children:"Department"}),Object(s.jsx)("th",{children:"Priority"})]})}),Object(s.jsx)("tbody",{children:this.state.tickets.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.id}),Object(s.jsx)("td",{children:Object(s.jsx)(o.b,{to:"/ticket_details/"+e.id,children:e.subject})}),Object(s.jsx)("td",{children:e.department.name}),Object(s.jsx)("td",{children:e.priority_name})]},e.id)}))})]})})})}}]),a}(n.Component),v=a(102),g=a(46),f=a(103),k=(a(43),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t={ticket:s.state.ticket};t.ticket[e.target.name]=e.target.value,s.setState(t)},s.handleSubmit=function(e,t){e.preventDefault();var a=new FormData(document.getElementById("update_ticket"));a.append("csrfmiddlewaretoken",$('[name="csrfmiddlewaretoken"]').val()),$.ajax({url:"/tickets/update_ticket/",type:"POST",header:{"X-CSRFTOKEN":$('[name="csrfmiddlewaretoken"]').val()},processData:!1,contentType:!1,cache:!1,enctype:"multipart/form-data",data:a,success:function(e){$(".is-invalid").removeClass("is-invalid"),this.props.history.push("/tickets")}.bind(Object(b.a)(s)),error:function(e){var t={errors:{}};$.each(e.responseJSON,function(e,a){t.errors[e]=a,$("#"+e).addClass("is-invalid")}.bind(this)),this.setState(t)}.bind(Object(b.a)(s))})},s.state={ticket:{id:"",department:"0",category:"0",lab_url:"",subject:"",description:""},departments:[],categories:[],errors:{department:"",category:"",lab_url:"",subject:"",description:""}},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(b.a)(s)),s}return Object(h.a)(a,[{key:"_fetch_details",value:function(e){var t=this;fetch("/tickets/fetch_ticket/"+e).then((function(e){return e.json().then((function(e){t.setState({ticket:e})}))}))}},{key:"componentDidMount",value:function(){var e=this;fetch("/tickets/departments/?format=json").then((function(t){return t.json().then((function(t){e.setState({departments:t})}))})).then((function(){fetch("/tickets/categories/?format=json").then((function(t){return t.json().then((function(t){e.setState({categories:t})}))}))})).then((function(){e._fetch_details(e.props.match.params.ticket_id)}))}},{key:"render",value:function(){var e;return Object(s.jsx)("div",{className:"auth-wrapper mx-auto col-md-12",style:{marginTop:"10em"},children:Object(s.jsxs)(v.a,{id:"update_ticket",onSubmit:this.handleSubmit,children:[Object(s.jsx)(v.a.Group,{children:Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:Object(s.jsx)("h4",{children:"Ticket Information"})})}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Ticket"}),Object(s.jsx)(g.a,{sm:5,children:Object(s.jsx)(v.a.Control,{name:"id",type:"text",onChange:this.handleChange,value:"#"+this.state.ticket.id,placeholder:"ticket-id",readOnly:!0})})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Department"}),Object(s.jsxs)(g.a,{sm:5,children:[Object(s.jsxs)(v.a.Control,{as:"select",value:this.state.ticket.department.id,onChange:this.handleChange,id:"department",name:"department",className:"mr-sm-2",custom:!0,children:[Object(s.jsx)("option",{value:"0",children:"---"}),this.state.departments.map((function(e){return Object(s.jsx)("option",{value:e.id,children:e.name})}))]}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.department})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Category"}),Object(s.jsxs)(g.a,{sm:5,children:[Object(s.jsxs)(v.a.Control,{as:"select",id:"category",name:"category",onChange:this.handleChange,value:this.state.ticket.category.id,className:"mr-sm-2",custom:!0,children:[Object(s.jsx)("option",{value:"0",children:"---"}),this.state.categories.map((function(e){return Object(s.jsx)("option",{value:e.id,children:e.name})}))]}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.category})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Lab URL"}),Object(s.jsxs)(g.a,{sm:5,children:[Object(s.jsx)(v.a.Control,{type:"url",id:"lab_url",name:"lab_url",onChange:this.handleChange,placeholder:"Lab URL",value:this.state.ticket.lab_url}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.lab_url})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Subject"}),Object(s.jsxs)(g.a,{sm:5,children:[Object(s.jsx)(v.a.Control,{type:"text",id:"subject",name:"subject",onChange:this.handleChange,placeholder:"Subject",value:this.state.ticket.subject}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.subject})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Description"}),Object(s.jsxs)(g.a,{sm:5,children:[Object(s.jsx)(v.a.Control,{as:"textarea",id:"description",name:"description",className:"description",onChange:this.handleChange,placeholder:"Description",rows:3,cols:5,value:this.state.ticket.description}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.description})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:2,children:"Priority"}),Object(s.jsx)(g.a,{sm:5,children:Object(s.jsxs)(v.a.Control,(e={as:"select",id:"priority",name:"priority",onChange:this.handleChange,value:this.state.ticket.priority,className:"mr-sm-2"},Object(l.a)(e,"id","inlineFormCustomSelect"),Object(l.a)(e,"custom",!0),Object(l.a)(e,"children",[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"HIGH - Production System Down"}),Object(s.jsx)("option",{value:"2",children:"MED - System Impaired"}),Object(s.jsx)("option",{value:"3",children:"LOW - General Guidence"})]),e))}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.priority})]}),Object(s.jsx)(v.a.Group,{children:Object(s.jsx)(g.a,{sm:{span:1,offset:0},children:Object(s.jsx)(f.a,{type:"submit",children:"Submit"})})})]})})}}]),a}(n.Component)),y=a(101),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t={ticket:s.state.ticket};t.ticket[e.target.name]=e.target.value,s.setState(t)},s.handleSubmit=function(e,t){e.preventDefault();var a=new FormData(document.getElementById("add_ticket"));a.append("csrfmiddlewaretoken",$('[name="csrfmiddlewaretoken"]').val()),$.ajax({url:"/tickets/add_ticket/",type:"POST",header:{"X-CSRFTOKEN":$('[name="csrfmiddlewaretoken"]').val()},processData:!1,contentType:!1,cache:!1,enctype:"multipart/form-data",data:a,success:function(e){$(".is-invalid").removeClass("is-invalid"),this.props.history.push("/tickets")}.bind(Object(b.a)(s)),error:function(e){var t={errors:{}};$.each(e.responseJSON,function(e,a){t.errors[e]=a,$("#"+e).addClass("is-invalid")}.bind(this)),this.setState(t)}.bind(Object(b.a)(s))})},s.state={ticket:{id:"",department:"0",category:"0",lab_url:"",subject:"",description:""},departments:[],categories:[],errors:{department:"",category:"",lab_url:"",subject:"",description:""},user:{email:"diana@gmail.com",name:"Devil"}},s.handleChange=s.handleChange.bind(Object(b.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(b.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/tickets/departments/?format=json").then((function(t){return t.json().then((function(t){e.setState({departments:t})}))})).then((function(){fetch("/tickets/categories/?format=json").then((function(t){return t.json().then((function(t){e.setState({categories:t})}))}))}))}},{key:"render",value:function(){var e;return Object(s.jsx)("div",{className:"auth-wrapper mx-auto col-md-12",style:{marginTop:"10em"},children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)(g.a,{sm:6,className:"coaching-green-test-2",children:Object(s.jsxs)(v.a,{id:"add_ticket",onSubmit:this.handleSubmit,children:[Object(s.jsx)(v.a.Group,{children:Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:Object(s.jsx)("h4",{children:"Ticket Information"})})}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Ticket"}),Object(s.jsx)(g.a,{sm:10,children:Object(s.jsx)(v.a.Control,{type:"text",name:"id",onChange:this.handleChange,value:"#"+this.state.ticket.id,placeholder:"ticket-id",readOnly:!0})})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Department"}),Object(s.jsxs)(g.a,{sm:10,children:[Object(s.jsxs)(v.a.Control,{as:"select",name:"department",id:"department",onChange:this.handleChange,value:this.state.ticket.department.id,className:"mr-sm-2",custom:!0,children:[Object(s.jsx)("option",{value:"0",children:"---"}),this.state.departments.map((function(e){return Object(s.jsx)("option",{value:e.id,children:e.name})}))]})," ",Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.department})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Category"}),Object(s.jsxs)(g.a,{sm:10,children:[Object(s.jsxs)(v.a.Control,{as:"select",name:"category",id:"category",onChange:this.handleChange,value:this.state.ticket.category.id,className:"mr-sm-2",custom:!0,children:[Object(s.jsx)("option",{value:"0",children:"---"}),this.state.categories.map((function(e){return Object(s.jsx)("option",{value:e.id,children:e.name})}))]}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.category})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Lab URL"}),Object(s.jsxs)(g.a,{sm:10,children:[Object(s.jsx)(v.a.Control,{type:"url",id:"lab_url",name:"lab_url",placeholder:"Lab URL",onChange:this.handleChange,value:this.state.ticket.lab_url}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.lab_url})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Subject"}),Object(s.jsxs)(g.a,{sm:10,children:[Object(s.jsx)(v.a.Control,{type:"text",name:"subject",id:"subject",placeholder:"Subject",onChange:this.handleChange,value:this.state.ticket.subject}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.subject})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Description"}),Object(s.jsxs)(g.a,{sm:10,children:[Object(s.jsx)(v.a.Control,{as:"textarea",id:"description",name:"description",placeholder:"Description",onChange:this.handleChange,rows:3,cols:5,value:this.state.ticket.description}),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.description})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"Priority"}),Object(s.jsxs)(g.a,{sm:10,children:[Object(s.jsxs)(v.a.Control,(e={as:"select",name:"priority",id:"priority",value:this.state.ticket.priority,onChange:this.handleChange,className:"mr-sm-2"},Object(l.a)(e,"id","inlineFormCustomSelect"),Object(l.a)(e,"custom",!0),Object(l.a)(e,"children",[Object(s.jsx)("option",{value:"0",children:"---"}),Object(s.jsx)("option",{value:"1",children:"HIGH - Production System Down"}),Object(s.jsx)("option",{value:"2",children:"MED - System Impaired"}),Object(s.jsx)("option",{value:"3",children:"LOW - General Guidence"})]),e)),Object(s.jsx)("div",{className:"invalid-feedback",children:this.state.errors.priority})]})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)("br",{}),Object(s.jsx)(g.a,{sm:{span:1,offset:0},children:Object(s.jsx)(f.a,{type:"submit",children:"Submit"})})]})]})}),Object(s.jsx)(g.a,{sm:6,className:"coaching-green-test-2",children:Object(s.jsxs)(v.a,{children:[Object(s.jsx)(v.a.Group,{children:Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:Object(s.jsx)("h4",{children:"User Information"})})}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"User Name"}),Object(s.jsx)(g.a,{sm:10,children:Object(s.jsx)(v.a.Control,{type:"text",name:"name",placeholder:"name",value:this.state.user.name,disabled:!0})})]}),Object(s.jsxs)(v.a.Group,{children:[Object(s.jsx)(v.a.Label,{column:!0,sm:5,children:"User Email"}),Object(s.jsx)(g.a,{sm:10,children:Object(s.jsx)(v.a.Control,{type:"text",name:"email",placeholder:"Email",value:this.state.user.email,disabled:!0})})]})]})})]})})}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={},s}return Object(h.a)(a,[{key:"render",value:function(){return this.props.user_logged_in?Object(s.jsx)(x,Object(r.a)({},this.props)):Object(s.jsx)(O,Object(r.a)({},this.props))}}]),a}(n.Component);function N(){user_logged_in=!1,$("#logout_link").css("display","none"),$("#new_ticket_link").css("display","none"),$.get("/accounts/logout/",(function(e){console.log(e)}))}var S=function(){var e,t,a,n;return user_logged_in?(Object(s.jsx)(x,{}),n="initial"):(Object(s.jsx)(O,{}),n="none"),Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o.b,{className:"navbar-brand",to:"#",children:"PeerXP in React"}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(s.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(s.jsxs)("li",{className:"nav-item",style:{display:"inline"},children:[Object(s.jsx)(o.b,(e={className:"nav-link"},Object(l.a)(e,"className","container"),Object(l.a)(e,"id","logout_link"),Object(l.a)(e,"style",{display:n}),Object(l.a)(e,"onClick",N),Object(l.a)(e,"to","/login"),Object(l.a)(e,"children","Logout"),e)),Object(s.jsx)(o.b,(t={className:"nav-link"},Object(l.a)(t,"className","container"),Object(l.a)(t,"id","new_ticket_link"),Object(l.a)(t,"style",{display:n}),Object(l.a)(t,"to","/new_ticket"),Object(l.a)(t,"children","New Ticket"),t)),Object(s.jsx)(o.b,(a={className:"nav-link"},Object(l.a)(a,"className","container"),Object(l.a)(a,"style",{display:n}),Object(l.a)(a,"to","/tickets"),Object(l.a)(a,"children","Manage Tickets"),a))]})})})]})}),Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/",component:function(e){return Object(s.jsx)(_,Object(r.a)(Object(r.a)({},e),{},{user_logged_in:user_logged_in}))}}),Object(s.jsx)(d.a,{exact:!0,path:"/login",component:function(e){return Object(s.jsx)(O,Object(r.a)(Object(r.a)({},e),{},{user_logged_in:user_logged_in}))}}),Object(s.jsx)(d.a,{path:"/tickets",component:x}),Object(s.jsx)(d.a,{path:"/logout",component:O}),Object(s.jsx)(d.a,{exact:!0,path:"/ticket_details/:ticket_id",component:k}),Object(s.jsx)(d.a,{exact:!0,path:"/new_ticket",component:C})]})]})})};i.a.render(Object(s.jsx)(S,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.5b3ce969.chunk.js.map
"use strict";var DEV=!0,React=require("react"),ButtonLogin=React.createClass({displayName:"ButtonLogin",login:function(){var t,e="5567858";t=DEV?"http://127.0.0.1:8000/":"http://someurl/";var n="https://oauth.vk.com/authorize?\n\t\t\tclient_id="+e+"&\n\t\t\tdisplay=popup&\n\t\t\tredirect_uri="+t;fetch(n)},render:function(){return React.createElement("div",null,React.createElement("button",{onClick:this.login},"Login by VK"))}});module.exports=ButtonLogin;
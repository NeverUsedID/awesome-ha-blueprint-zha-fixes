(self.webpackChunkawesome_ha_blueprints=self.webpackChunkawesome_ha_blueprints||[]).push([[665],{5506:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(2122),r=n(9756),l=n(7294),o=n(3905);var i=function(t){var e=t.children;return l.createElement("div",{style:{width:200}},e)},s={title:"Controllers",description:"Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event."},p={unversionedId:"blueprints/controllers",id:"blueprints/controllers",isDocsHomePage:!1,title:"Controllers",description:"Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event.",source:"@site/docs/blueprints/controllers.mdx",sourceDirName:"blueprints",slug:"/blueprints/controllers",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers.mdx",version:"current",frontMatter:{title:"Controllers",description:"Integrate a wide set of controllers in Home Assistant and provide an easy to use interface to run custom actions on a controller event."},sidebar:"docs",previous:{title:"Blueprints Overview",permalink:"/awesome-ha-blueprints/docs/blueprints"},next:{title:"Hooks",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks"}},m=[{value:"Supported Controllers",id:"supported-controllers",children:[]}],c={toc:m};function u(t){var e=t.components,l=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Controllers are part of the ",(0,o.kt)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",(0,o.kt)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Controllers")," are blueprints which allow to easily integrate a wide range of controllers (wall switches, remotes, dimmers, etc.) and use them to run a set of actions when interacting with them. They consist in a practical abstraction layer for easily building controlled-based automations without worrying about the handling of RAW controller events, and the integration used to connect controllers to Home Assistant (Zigbee2MQTT, ZHA, etc.)."),(0,o.kt)("p",null,"You can integrate Controllers with ",(0,o.kt)("a",{parentName:"p",href:"hooks"},"Hooks")," and create controller-based automations to control lights, media players and much more, without having to write a single line of code."),(0,o.kt)("h3",{id:"supported-controllers"},"Supported Controllers"),(0,o.kt)("p",null,"Currently ",(0,o.kt)("strong",{parentName:"p"},"6")," devices are supported from ",(0,o.kt)("strong",{parentName:"p"},"2")," different vendors."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Can't find the controller you're looking for in this list? ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/EPMatt/awesome-ha-blueprints/issues/new?assignees=&labels=blueprint%2Cnew%2Ccontroller&template=new-controller-support.md&title=New+Controller+-+"},"Submit a new blueprint proposal for your controller here."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Manufacturer"),(0,o.kt)("th",{parentName:"tr",align:null},"Model"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Integrations"),(0,o.kt)("th",{parentName:"tr",align:null},"Picture"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"E1524/E1810")),(0,o.kt)("td",{parentName:"tr",align:null},"TR\xc5DFRI Wireless 5-Button Remote"),(0,o.kt)("td",{parentName:"tr",align:null},"deCONZ, ZHA, Zigbee2MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(i,{mdxType:"Image"},(0,o.kt)("img",{alt:"ikea_e1524_e1810",src:n(2413).Z})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1743"},"E1743")),(0,o.kt)("td",{parentName:"tr",align:null},"TR\xc5DFRI On/Off Switch & Dimmer"),(0,o.kt)("td",{parentName:"tr",align:null},"deCONZ, ZHA, Zigbee2MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(i,{mdxType:"Image"},(0,o.kt)("img",{alt:"ikea_e1743",src:n(694).Z})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1744"},"E1744")),(0,o.kt)("td",{parentName:"tr",align:null},"SYMFONISK Rotary Remote"),(0,o.kt)("td",{parentName:"tr",align:null},"deCONZ, ZHA, Zigbee2MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(i,{mdxType:"Image"},(0,o.kt)("img",{alt:"ikea_e1744",src:n(5061).Z})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_e1812"},"E1812")),(0,o.kt)("td",{parentName:"tr",align:null},"TR\xc5DFRI Shortcut button"),(0,o.kt)("td",{parentName:"tr",align:null},"deCONZ, ZHA, Zigbee2MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(i,{mdxType:"Image"},(0,o.kt)("img",{alt:"ikea_e1812",src:n(1714).Z})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IKEA"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/ikea_ictc_g_1"},"ICTC-G-1")),(0,o.kt)("td",{parentName:"tr",align:null},"TR\xc5DFRI wireless dimmer"),(0,o.kt)("td",{parentName:"tr",align:null},"deCONZ, ZHA, Zigbee2MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(i,{mdxType:"Image"},(0,o.kt)("img",{alt:"ikea_ictc_g_1",src:n(5352).Z})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Philips"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/blueprints/controllers/philips_324131092621"},"324131092621")),(0,o.kt)("td",{parentName:"tr",align:null},"Hue dimmer switch"),(0,o.kt)("td",{parentName:"tr",align:null},"deCONZ, ZHA, Zigbee2MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(i,{mdxType:"Image"},(0,o.kt)("img",{alt:"philips_324131092621",src:n(8188).Z})))))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Can't find the controller you're looking for in this list? ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/EPMatt/awesome-ha-blueprints/issues/new?assignees=&labels=blueprint%2Cnew%2Ccontroller&template=new-controller-support.md&title=New+Controller+-+"},"Submit a new blueprint proposal for your controller here."))))}u.isMDXComponent=!0},2413:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ikea_e1524_e1810-f345123bc9aa4cfcf501bd0b3b4a6902.png"},694:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ikea_e1743-03730979af710785343d78bc8a1b750b.png"},5061:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ikea_e1744-b0eb77f8f52926ea7610a9fdf67e8f99.png"},1714:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ikea_e1812-379114be3eb09b62bf88df2f2159bfe7.png"},5352:function(t,e,n){"use strict";e.Z=n.p+"assets/images/ikea_ictc_g_1-9fafba6bd44539771e07f009bbfd787c.png"},8188:function(t,e,n){"use strict";e.Z=n.p+"assets/images/philips_324131092621-2af26c331a8278c3ce44dcc221a25265.png"}}]);
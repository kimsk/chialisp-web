"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[2844],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8105:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Chialisp",c={type:"mdx",permalink:"/",source:"@site/src/pages/index.md"},p=[{value:"Why Lisp?",id:"why-lisp",children:[]},{value:"Chia Asset Tokens (CATs)",id:"chia-asset-tokens-cats",children:[]},{value:"Singletons",id:"singletons",children:[]},{value:"DeFi",id:"defi",children:[]},{value:"Introductory Material",id:"introductory-material",children:[]},{value:"Developer Documentation",id:"developer-documentation",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chialisp"},"Chialisp"),(0,o.kt)("p",null,"Chialisp is a powerful and secure LISP-like language for encumbering and releasing funds with smart-contract capabilities.\nThis website is a consolidated place to learn about Chialisp, CLVM and the conditions language."),(0,o.kt)("p",null,"Here's a sample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (if (= (sha256 password) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824))\n    (list (list CREATE_COIN new_puzhash amount))\n    (x)\n  )\n)\n")),(0,o.kt)("h2",{id:"why-lisp"},"Why Lisp?"),(0,o.kt)("p",null,"Many people come into our keybase channel and ask us why we chose a 60 year old language as our on chain programming language.\nWe chose it due to a few unique features that make it remarkably well suited to the Chia blockchain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Completely sandboxed.")," Chialisp resource utilization is completely controlled.\nThe language needs to be run on half a million computers, so it is important that the program cannot reach out and affect everyone's machines in an unintended way.\nA lisp program is ",(0,o.kt)("em",{parentName:"p"},"evaluated")," and therefore cannot spawn any new processes or interact with the system it is running on.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Composability."),' A lisp program is itself just a list.\nThis feature allows for powerful techniques that allow you to modify source code during program evaluation.\nDoing so can allow a "smart coin" to enforce rules on a participating coin while still allowing it to utilize the full programmability that Chialisp has to offer.\nUsing lisp programs like this allows you to have ',(0,o.kt)("em",{parentName:"p"},"layers of smart coins"),' in which the output of an "inner" puzzle can be used in the evaluation of the "outer" puzzle.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Interoperability.")," Every smart coin in the Chia ecosystem, no matter how complex, is fundamentally a coin that is locked up with a Chialisp puzzle. The input to any puzzle will always be a lisp data structure, and the output will always be a list of ",(0,o.kt)("strong",{parentName:"p"},"conditions")," that all puzzles share. This means that everything in Chia interoperates with everything else.\nAny smart coin should be able to interact or communicate with any other smart coin, regardless of whether either coin was specifically designed to do so."))),(0,o.kt)("h2",{id:"chia-asset-tokens-cats"},"Chia Asset Tokens (CATs)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats"},"CATs"),' are tokens that you can create and/or trade on Chia\'s blockchain. The issuers of these tokens create the rules for their minting and retirement, using a "Token and Asset Issuance Limiter" (TAIL). The owners of these tokens have control over how they may be spent. CATs can be implemented as stable coins, stock issuance tokens, voting shares, or anything else you can think of. For more info, you can read about the nomenclature of ',(0,o.kt)("a",{parentName:"p",href:"https://www.chia.net/2021/09/23/chia-token-standard-naming.en.html"},"CATs"),"."),(0,o.kt)("h2",{id:"singletons"},"Singletons"),(0,o.kt)("p",null,"Another fascinating application of Chialisp is the creation of ",(0,o.kt)("strong",{parentName:"p"},"singletons"),".\nSingletons are a type of coin that there is verifiably only one of.\nWhen you can verify that there is only one of a coin, you can enable some interesting functionality.\nThe Chia Network pooling protocol uses this to verify that you have committed your plots to a pool and have not promised them to any other pool.\nYou can also make NFTs, decentralized identities, and anything else that could make use of a unique coin."),(0,o.kt)("h2",{id:"defi"},"DeFi"),(0,o.kt)("p",null,"Chialisp is also capable of any of the popularly available decentralized finance tools you find on other blockchains today.\nOne feature that enables this is the fact that coins can communicate with each other when they are spent.\nYou can have market makers announce prices and have other coins utilize those prices in their own logic when they are spent.\nThe natural interoperability that Chialisp provides is also relevant because it will allow participants to layer and leverage many different DeFi tools all at once!"),(0,o.kt)("h2",{id:"introductory-material"},"Introductory Material"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The introductory post on ",(0,o.kt)("a",{parentName:"li",href:"https://www.chia.net/2019/11/27/chialisp.en.html"},"Chialisp")),(0,o.kt)("li",{parentName:"ul"},"Introduction to our ",(0,o.kt)("a",{parentName:"li",href:"https://www.chia.net/2020/04/29/coloured-coins-launch.en.html"},"MVP of Coloured coins")),(0,o.kt)("li",{parentName:"ul"},"A Vision for ",(0,o.kt)("a",{parentName:"li",href:"https://www.chia.net/2021/07/13/a-vision-for-defi-in-chia.en.html"},"DeFi in Chia"))),(0,o.kt)("h2",{id:"developer-documentation"},"Developer Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/clvm"},"ChiaLisp Compiler Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chialisp.com/docs/tutorials/developing_applications"},"A video introduction to developing in Chialisp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Chia-Network/clvm_tools"},"clvm_tools for developing in Chialisp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/"},"CLVM Basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/glossary/"},"Glossary of Chialisp terms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/ref/clvm/"},"Lower Level Language Reference Document"))))}h.isMDXComponent=!0}}]);
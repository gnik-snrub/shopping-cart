(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{26:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(20),s=a.n(c),r=a(13),o=a(19),l=a(9),d=a(4),u=a(2),h=(a(26),a(0)),j=function(e){var t={color:"white",textDecoration:"none"},a={color:"white",textDecoration:"underline"};return Object(h.jsxs)("nav",{children:[Object(h.jsx)(d.c,{exact:!0,activeStyle:a,style:t,to:"/",children:Object(h.jsx)("h1",{children:"Indie Games 'r' Us"})}),Object(h.jsxs)("ul",{className:"nav-links",children:[Object(h.jsx)(d.c,{activeStyle:a,style:t,to:"/shop",children:Object(h.jsx)("li",{children:"Shop"})}),Object(h.jsx)(d.c,{activeStyle:a,style:t,to:"/cart",children:Object(h.jsx)("li",{children:"Cart (".concat(e.cartCount,")")})})]})]})},m=(a(36),function(e){return Object(h.jsx)("img",{src:"/react-gh-pages"+e.filePath,className:e.className,alt:e.alt,title:e.alt})}),p=function(e){var t=e.game,a=e.add,n=e.remove;return Object(h.jsx)("div",{className:"cart-item-wrapper",children:Object(h.jsxs)("div",{className:"cart-item",children:[Object(h.jsx)(d.b,{to:"/shop/".concat(t.link),children:Object(h.jsx)(m,{filePath:"../assets/".concat(t.link,"/logo.png"),className:"cart-item-logo",alt:"".concat(t.name," logo")})}),Object(h.jsxs)("div",{className:"cart-item-detail-wrapper",children:[Object(h.jsxs)("div",{className:"cart-item-quantity-wrapper",children:[Object(h.jsx)("div",{onClick:function(){!function(e){a(e)}(t)},children:"+"}),Object(h.jsx)("div",{children:t.quantity}),Object(h.jsx)("div",{onClick:function(){!function(e){n(e)}(t)},children:"-"})]}),Object(h.jsxs)("div",{className:"cart-item-price-wrapper",children:[Object(h.jsxs)("div",{children:["$",t.price]}),Object(h.jsxs)("div",{className:"item-total-price",children:["$",(t.price*t.quantity).toFixed(2)]})]})]})]})})},g=(a(37),a(8)),b=a.n(g),f=(a(39),function(e){var t=e.task,a=e.label;return Object(h.jsx)("button",{onClick:t,children:a})}),x=function(e){var t=e.cartData,a=e.add,i=e.remove,c=Object(n.useState)("We hope you enjoy your purchase!"),s=Object(l.a)(c,2),o=s[0],d=s[1],u=function(e){a(e)},j=function(e){i(e)};return Object(h.jsx)("div",{className:"cart-page-wrapper",children:Object(h.jsx)("div",{className:"cart-list-wrapper",children:Object(h.jsxs)(b.a,{children:[function(){if(t.length<1)return Object(h.jsx)("div",{});var e,a=0,n=Object(r.a)(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;a+=i.price*i.quantity}}catch(c){n.e(c)}finally{n.f()}return Object(h.jsxs)("h1",{children:["Cart Total: $",a.toFixed(2)]})}(),function(){if(t.length<1)return Object(h.jsx)("div",{children:"Cart is empty"});var e,a=[],n=Object(r.a)(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;a.push(Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)(p,{game:i,add:u,remove:j})]})}))}}catch(c){n.e(c)}finally{n.f()}return a}(),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:o}),Object(h.jsx)(f,{label:"Checkout",task:function(){t.length<1?d("Please add games to your cart"):(d("Please wait"),setTimeout((function(){d("Please wait."),setTimeout((function(){d("Please wait.."),setTimeout((function(){d("Please wait..."),setTimeout((function(){d("Checkout Succeeded!")}),500)}),200)}),200)}),200))}})]})})})},O=(a(40),function(e){var t=e.games,a=Object(n.useState)([]),i=Object(l.a)(a,2),c=i[0],s=i[1],r=Object(n.useRef)(null);Object(n.useEffect)((function(){o(),r.current.classList.add("fade-in")}),[]);var o=function(){var e=[];for(var a in t)e.push(t[a]);s(e)},u={color:"black",textDecoration:"none"};return Object(h.jsx)("div",{className:"shop-page",ref:r,children:Object(h.jsx)("div",{className:"list-wrapper",children:Object(h.jsx)("div",{className:"item-list",children:c.map((function(e){return Object(h.jsx)(b.a,{children:Object(h.jsx)(d.b,{to:"/shop/".concat(e.link),style:u,children:Object(h.jsx)(m,{filePath:"../assets/".concat(e.link,"/logo.png"),className:"link-logo",alt:"".concat(e.name," logo")})},e.link)})}))})})})}),v=(a(41),function(e){var t=e.game,a=e.cart;return Object(h.jsxs)("div",{className:"details-left",children:[Object(h.jsx)("div",{className:"details-logo-wrapper",children:Object(h.jsx)(m,{filePath:"../assets/".concat(t.link,"/logo.png"),className:"game-logo",alt:"".concat(t.name," logo")})}),Object(h.jsx)("div",{className:"genre-list",children:function(){var e=t.genres,a=[];for(var n in e)a.push(Object(h.jsx)("p",{children:e[n]},e[n]));return a}()}),Object(h.jsx)("div",{className:"game-description",children:t.description}),Object(h.jsxs)("div",{className:"price-buy-button",children:[Object(h.jsx)("p",{children:"$".concat(t.price)}),Object(h.jsx)(f,{label:"Add to cart",task:a})]})]})}),y=(a(42),function(e){var t=e.game,a=function(e){window.open("/react-gh-pages"+e)};return Object(h.jsx)("div",{className:"details-right",children:Object(h.jsxs)("div",{className:"image-grid",children:[Object(h.jsx)("div",{className:"image-wrapper",onClick:function(){a("../assets/".concat(t.link,"/1.jpg"))},children:Object(h.jsx)(m,{filePath:"../assets/".concat(t.link,"/1.jpg"),className:"game-image",alt:"".concat(t.name," image 1")})}),Object(h.jsx)("div",{className:"image-wrapper",onClick:function(){a("../assets/".concat(t.link,"/2.jpg"))},children:Object(h.jsx)(m,{filePath:"../assets/".concat(t.link,"/2.jpg"),className:"game-image",alt:"".concat(t.name," image 2")})}),Object(h.jsx)("div",{className:"image-wrapper",onClick:function(){a("../assets/".concat(t.link,"/3.jpg"))},children:Object(h.jsx)(m,{filePath:"../assets/".concat(t.link,"/3.jpg"),className:"game-image",alt:"".concat(t.name," image 3")})}),Object(h.jsx)("div",{className:"image-wrapper",onClick:function(){a("../assets/".concat(t.link,"/4.jpg"))},children:Object(h.jsx)(m,{filePath:"../assets/".concat(t.link,"/4.jpg"),className:"game-image",alt:"".concat(t.name," image 4")})})]})})}),k=(a(43),function(e){var t=Object(u.g)().link,a=e.games,i=e.addItem,c=Object(n.useState)({}),s=Object(l.a)(c,2),r=s[0],o=s[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e;for(var n in a)a[n].link===t&&(e=a[n]);o(e)};return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"game-page",children:[Object(h.jsx)("div",{className:"splash-wrapper",children:Object(h.jsx)(m,{filePath:"../assets/".concat(r.link,"/splash.jpg"),className:"background-splash",alt:"".concat(r.name," splash")})}),Object(h.jsx)("div",{onClick:function(){window.scrollTo({top:1e3,left:0,behavior:"smooth"})},className:"goto-details",children:Object(h.jsx)("div",{children:"\u2193"})}),Object(h.jsxs)("div",{className:"game-detail-area",children:[Object(h.jsx)(v,{game:r,cart:function(){i({name:r.name,price:r.price,link:r.link,quantity:1})}}),Object(h.jsx)(y,{game:r})]})]})})}),w=(a(44),function(){return Object(h.jsx)("div",{className:"home-wrapper",children:Object(h.jsx)("div",{className:"home-content",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)("p",{children:"Now Available!"}),Object(h.jsx)("hr",{}),Object(h.jsx)(d.b,{style:{color:"white",textDecoration:"none"},to:"/shop/isaac",children:Object(h.jsx)("p",{children:"The Binding of Isaac: Repentance"})})]})})})}),N=function(){var e=Object(u.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},C=function(e,t,a,n,i){return{name:e,link:t,genres:a,description:n,price:i}},P=[];P.push(C("Atomicrops","atomicrops",["Farming","Shooter","Action"],"An action-packed roguelite where you must cultivate and defend the last farm in the post-apocalypse wasteland.Farm mutated crops, marry townsfolk, and kill every mutant creature that tries to invade! \ud835\udc13\ud835\udc21\ud835\udc22\ud835\udc2c \ud835\udc1a\ud835\udc22\ud835\udc27'\ud835\udc2d \ud835\udc27\ud835\udc28 \ud835\udc28\ud835\udc2b\ud835\udc1d\ud835\udc22\ud835\udc27\ud835\udc1a\ud835\udc2b\ud835\udc32 \ud835\udc1f\ud835\udc1a\ud835\udc2b\ud835\udc26\ud835\udc22\ud835\udc27\ud835\udc20 \ud835\udc2c\ud835\udc22\ud835\udc26\ud835\udc2e\ud835\udc25\ud835\udc1a\ud835\udc2d\ud835\udc28\ud835\udc2b.",21.5)),P.push(C("Dead Cells","deadcells",["Platformer","Metroidvania","Action"],"Dead Cells is a rogue-lite, metroidvania inspired, action-platformer. You'll explore a sprawling, ever-changing castle... assuming you\u2019re able to fight your way past its keepers in 2D souls-lite combat. No checkpoints. Kill, die, learn, repeat.",35.95)),P.push(C("Dicey Dungeons","diceydungeons",["Deck Building","Card Battler","Turn-based"],"Fighting against fortune would be a lot easier if you weren't a walking dice.",21.5)),P.push(C("Going Under","goingunder",["Beat 'em up","Action","Dungeon Crawler"],"Going Under is a satirical dungeon crawler about exploring the cursed ruins of failed tech startups. As an unpaid intern in the dystopian city of Neo-Cascadia, you\u2019ll wield office junk as weaponry as you make your way through the offbeat procedural dungeons beneath your company campus.",28.95)),P.push(C("Hades","hades",["RPG","Isometric","Action"],"Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",35.95)),P.push(C("The Binding of Isaac","isaac",["Shooter","Adventure","Action"],"When Isaac\u2019s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.",45.99)),P.push(C("Loop Hero","loophero",["Tactical","Deck Building","RPG"],"The Lich has thrown the world into a timeless loop and plunged its inhabitants into never ending chaos. Wield an expanding deck of mystical cards to place enemies, buildings, and terrain along each unique expedition loop for the brave hero.",19.99)),P.push(C("Monster Sanctuary","monstersanctuary",["RPG","Metroidvania","Monster Taming"],"Monster taming meets metroidvania. Collect, train and battle monsters in a lovely side-view pixel world.",28.95)),P.push(C("Monster Train","monstertrain",["Deck Building","Card Game","Strategy"],"Monster Train is a strategic roguelike deck building game with a twist. Set on a train to hell, you\u2019ll use tactical decision making to defend multiple vertical battlegrounds. With real time competitive multiplayer and endless replayability, Monster Train is always on time.",35.95)),P.push(C("Nexomon: Extinction","nexomon",["RPG","Monster Taming","Turn-based Combat"],"Nexomon: Extinction is a return to classic monster catching games, with a brand new story, eccentric characters and over 300 unique Nexomon to trap, tame and evolve.",20.26)),P.push(C("Ring of Pain","ringofpain",["Dungeon Crawler","Card Game","Strategy"],"Enter the Ring of Pain, a roguelike card crawler where encounters come to you. Each step around the ring a dire decision. Go for the loot or backstab a creeping horror? Meet strange friends bearing gifts and treasure. Choose your gear wisely to survive and discover the secrets of the Ring of Pain.",28.95)),P.push(C("Risk of Rain 2","riskofrain",["Looter","Third-person Shooter","Action"],"Escape a chaotic alien planet by fighting through hordes of frenzied monsters \u2013 with your friends, or on your own. Combine loot in surprising ways and master each character until you become the havoc you feared upon your first crash landing.",35.95)),P.push(C("Skul: The Hero Slayer","skul",["Action","Platformer","Hack and Slash"],"Guide 'Skul' on his quest to single-handedly take on the Imperial Army and rescue his King from captivity, in an action-packed rogue-lite 2D platformer for the ages.",28.95)),P.push(C("Spelunky 2","spelunky",["Platformer","Action"],"Spelunky 2 builds upon the unique, randomized challenges that made the original a roguelike classic, offering a huge adventure designed to satisfy players old and new. Meet the next generation of explorers as they find themselves on the Moon, searching for treasure and missing family.",28.95));var S=P,T=(a(45),function(){var e=Object(n.useState)(S),t=Object(l.a)(e,1)[0],a=Object(n.useState)([]),i=Object(l.a)(a,2),c=i[0],s=i[1],m=Object(n.useRef)(null),p=function(e){var t=Object(o.a)(c);if(0===t.length)return t.push(e),void s(t);var a,n=Object(r.a)(t);try{for(n.s();!(a=n.n()).done;){var i=a.value;if(i.name===e.name)return i.quantity+=1,void s(t)}}catch(l){n.e(l)}finally{n.f()}t.push(e),s(t)};return Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(N,{}),Object(h.jsx)("div",{className:"background-image"}),Object(h.jsx)(j,{cartCount:c.length}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",children:Object(h.jsx)(w,{})}),Object(h.jsxs)("div",{className:"blur-filter",ref:m,onLoad:function(){m.current.classList.add("fade-in")},children:[Object(h.jsx)(u.a,{exact:!0,path:"/shop",children:Object(h.jsx)(O,{games:t})}),Object(h.jsx)(u.a,{exact:!0,path:"/shop/:link",children:Object(h.jsx)(k,{games:t,addItem:p})}),Object(h.jsx)(u.a,{exact:!0,path:"/cart",children:Object(h.jsx)(x,{cartData:c,add:p,remove:function(e){var t=Object(o.a)(c),a=t.indexOf(e);t[a].quantity-=1,t[a].quantity<1&&t.splice(a,1),s(t)}})})]})]})]})})});s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.37e1db2c.chunk.js.map
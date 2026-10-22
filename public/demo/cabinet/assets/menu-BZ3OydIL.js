import{$ as e,$t as t,Gt as n,H as r,Ht as i,J as a,Mn as o,Nt as s,O as c,Qt as l,Tt as u,Ut as d,Vt as f,Wt as p,Y as m,_t as h,a as g,b as _,bt as v,i as y,kn as b,lt as x,pt as S,st as C,t as w,ut as T,vt as E,wt as D,yt as O,zt as k}from"./ripple-JTR065I6.js";import{E as A,p as j,u as M}from"./index-D3qubYGm.js";import{n as N,t as P}from"./overlayeventbus-CgKBhe2n.js";var F=g.extend({name:`menu`,style:`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,classes:{root:function(e){return[`p-menu p-component`,{"p-menu-overlay":e.props.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`}}),I={name:`BaseMenu`,extends:y,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:F,provide:function(){return{$pcMenu:this,$parentInstance:this}}},L={name:`Menuitem`,hostName:`Menu`,extends:y,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?_(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,`command`);t&&t({originalEvent:e,item:this.item.item}),this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:s({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:s({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`)),label:s({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}}},computed:{dataP:function(){return T({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:w}},R=[`id`,`aria-label`,`aria-disabled`,`data-p-focused`,`data-p-disabled`,`data-p`],z=[`data-p`],B=[`href`,`target`],V=[`data-p`],H=[`data-p`];function U(e,r,i,a,c,l){var u=p(`ripple`);return l.visible()?(k(),v(`li`,s({key:0,id:i.id,class:[e.cx(`item`),i.item.class],role:`menuitem`,style:i.item.style,"aria-label":l.label(),"aria-disabled":l.disabled(),"data-p-focused":l.isItemFocused(),"data-p-disabled":l.disabled()||!1,"data-p":l.dataP},l.getPTOptions(`item`)),[h(`div`,s({class:e.cx(`itemContent`),onClick:r[0]||=function(e){return l.onItemClick(e)},onMousemove:r[1]||=function(e){return l.onItemMouseMove(e)},"data-p":l.dataP},l.getPTOptions(`itemContent`)),[i.templates.item?i.templates.item?(k(),E(n(i.templates.item),{key:1,item:i.item,label:l.label(),props:l.getMenuItemProps(i.item)},null,8,[`item`,`label`,`props`])):O(``,!0):t((k(),v(`a`,s({key:0,href:i.item.url,class:e.cx(`itemLink`),target:i.item.target,tabindex:`-1`},l.getPTOptions(`itemLink`)),[i.templates.itemicon?(k(),E(n(i.templates.itemicon),{key:0,item:i.item,class:b(e.cx(`itemIcon`))},null,8,[`item`,`class`])):i.item.icon?(k(),v(`span`,s({key:1,class:[e.cx(`itemIcon`),i.item.icon],"data-p":l.dataP},l.getPTOptions(`itemIcon`)),null,16,V)):O(``,!0),h(`span`,s({class:e.cx(`itemLabel`),"data-p":l.dataP},l.getPTOptions(`itemLabel`)),o(l.label()),17,H)],16,B)),[[u]])],16,z)],16,R)):O(``,!0)}L.render=U;function W(e){return J(e)||q(e)||K(e)||G()}function G(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,t){if(e){if(typeof e==`string`)return Y(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function q(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function J(e){if(Array.isArray(e))return Y(e)}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var X={name:`Menu`,extends:I,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&j.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(t){switch(t.code){case`ArrowDown`:this.onArrowDownKey(t);break;case`ArrowUp`:this.onArrowUpKey(t);break;case`Home`:this.onHomeKey(t);break;case`End`:this.onEndKey(t);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(t);break;case`Space`:this.onSpaceKey(t);break;case`Escape`:this.popup&&(e(this.target),this.hide());case`Tab`:this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)e(this.target),this.hide(),t.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(a(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1),e.preventDefault()},onEnterKey:function(t){var n=x(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),r=n&&x(n,`a[data-pc-section="itemlink"]`);this.popup&&e(this.target),r?r.click():n&&n.click(),t.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=W(a(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=W(a(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=a(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){r(t,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&j.set(`menu`,t,this.baseZIndex||this.$primevue.config.zIndex.menu),this.popup&&e(this.list),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(e){this.autoZIndex&&j.clear(e)},alignOverlay:function(){c(this.container,this.target),C(this.target)>C(this.container)&&(this.container.style.minWidth=C(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&(e.focusedOptionIndex=-1)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new N(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!m()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e.visible==`function`?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},label:function(e){return typeof e.label==`function`?e.label():e.label},onOverlayClick:function(e){P.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},dataP:function(){return T({popup:this.popup})}},components:{PVMenuitem:L,Portal:M}},Z=[`id`,`data-p`],Q=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`],$=[`id`];function ee(e,t,n,r,a,c){var p=d(`PVMenuitem`),m=d(`Portal`);return k(),E(m,{appendTo:e.appendTo,disabled:!e.popup},{default:l(function(){return[u(A,s({name:`p-anchored-overlay`,onEnter:c.onEnter,onLeave:c.onLeave,onAfterLeave:c.onAfterLeave},e.ptm(`transition`)),{default:l(function(){return[!e.popup||a.overlayVisible?(k(),v(`div`,s({key:0,ref:c.containerRef,id:e.$id,class:e.cx(`root`),onClick:t[3]||=function(){return c.onOverlayClick&&c.onOverlayClick.apply(c,arguments)},"data-p":c.dataP},e.ptmi(`root`)),[e.$slots.start?(k(),v(`div`,s({key:0,class:e.cx(`start`)},e.ptm(`start`)),[i(e.$slots,`start`)],16)):O(``,!0),h(`ul`,s({ref:c.listRef,id:e.$id+`_list`,class:e.cx(`list`),role:`menu`,tabindex:e.tabindex,"aria-activedescendant":a.focused?c.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||=function(){return c.onListFocus&&c.onListFocus.apply(c,arguments)},onBlur:t[1]||=function(){return c.onListBlur&&c.onListBlur.apply(c,arguments)},onKeydown:t[2]||=function(){return c.onListKeyDown&&c.onListKeyDown.apply(c,arguments)}},e.ptm(`list`)),[(k(!0),v(S,null,f(e.model,function(t,n){return k(),v(S,{key:c.label(t)+n.toString()},[t.items&&c.visible(t)&&!t.separator?(k(),v(S,{key:0},[t.items?(k(),v(`li`,s({key:0,id:e.$id+`_`+n,class:[e.cx(`submenuLabel`),t.class],role:`none`},{ref_for:!0},e.ptm(`submenuLabel`)),[i(e.$slots,e.$slots.submenulabel?`submenulabel`:`submenuheader`,{item:t},function(){return[D(o(c.label(t)),1)]})],16,$)):O(``,!0),(k(!0),v(S,null,f(t.items,function(r,i){return k(),v(S,{key:r.label+n+`_`+i},[c.visible(r)&&!r.separator?(k(),E(p,{key:0,id:e.$id+`_`+n+`_`+i,item:r,templates:e.$slots,focusedOptionId:c.focusedOptionId,unstyled:e.unstyled,onItemClick:c.itemClick,onItemMousemove:c.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])):c.visible(r)&&r.separator?(k(),v(`li`,s({key:`separator`+n+i,class:[e.cx(`separator`),t.class],style:r.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):O(``,!0)],64)}),128))],64)):c.visible(t)&&t.separator?(k(),v(`li`,s({key:`separator`+n.toString(),class:[e.cx(`separator`),t.class],style:t.style,role:`separator`},{ref_for:!0},e.ptm(`separator`)),null,16)):(k(),E(p,{key:c.label(t)+n.toString(),id:e.$id+`_`+n,item:t,index:n,templates:e.$slots,focusedOptionId:c.focusedOptionId,unstyled:e.unstyled,onItemClick:c.itemClick,onItemMousemove:c.itemMouseMove,pt:e.pt},null,8,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`]))],64)}),128))],16,Q),e.$slots.end?(k(),v(`div`,s({key:1,class:e.cx(`end`)},e.ptm(`end`)),[i(e.$slots,`end`)],16)):O(``,!0)],16,Z)):O(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}X.render=ee;export{X as t};
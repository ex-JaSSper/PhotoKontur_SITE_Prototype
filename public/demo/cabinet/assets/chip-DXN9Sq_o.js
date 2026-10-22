import{Gt as e,Ht as t,Mn as n,Nt as r,a as i,bt as a,i as o,ut as s,vt as c,yt as l,zt as u}from"./ripple-JTR065I6.js";import{i as d}from"./index-D3qubYGm.js";var f=i.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),p={name:`Chip`,extends:{name:`BaseChip`,extends:o,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:f,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return s({removable:this.removable})}},components:{TimesCircleIcon:d}},m=[`aria-label`,`data-p`],h=[`src`];function g(i,o,s,d,f,p){return f.visible?(u(),a(`div`,r({key:0,class:i.cx(`root`),"aria-label":i.label},i.ptmi(`root`),{"data-p":p.dataP}),[t(i.$slots,`default`,{},function(){return[i.image?(u(),a(`img`,r({key:0,src:i.image},i.ptm(`image`),{class:i.cx(`image`)}),null,16,h)):i.$slots.icon?(u(),c(e(i.$slots.icon),r({key:1,class:i.cx(`icon`)},i.ptm(`icon`)),null,16,[`class`])):i.icon?(u(),a(`span`,r({key:2,class:[i.cx(`icon`),i.icon]},i.ptm(`icon`)),null,16)):l(``,!0),i.label===null?l(``,!0):(u(),a(`div`,r({key:3,class:i.cx(`label`)},i.ptm(`label`)),n(i.label),17))]}),i.removable?t(i.$slots,`removeicon`,{key:0,removeCallback:p.close,keydownCallback:p.onKeydown},function(){return[(u(),c(e(i.removeIcon?`span`:`TimesCircleIcon`),r({class:[i.cx(`removeIcon`),i.removeIcon],onClick:p.close,onKeydown:p.onKeydown},i.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):l(``,!0)],16,m)):l(``,!0)}p.render=g;export{p as t};
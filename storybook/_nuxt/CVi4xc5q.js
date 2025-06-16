import{d as u,h as d,g as p,o as r,b as m,j as s,c as _,m as g,l as n}from"./B_uKG6tn.js";const f={class:"py-16 text-center bg-gray-100 rounded"},y={class:"mb-2 text-5xl font-bold"},b={key:0,class:"text-xl text-gray-600"},o=u({__name:"Hero",props:{title:{},subtitle:{}},setup(H){return(t,h)=>{const i=p("LazyHydrate");return r(),d(i,{"when-idle":""},{default:m(()=>[s("section",f,[s("h1",y,n(t.title),1),t.subtitle?(r(),_("p",b,n(t.subtitle),1)):g("",!0)])]),_:1})}}});o.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/nudger-front/nudger-front/src/components/Hero.vue"]};const v={component:o,title:"Hero"},e={render:()=>({components:{Hero:o},template:'<Hero title="Bienvenue" subtitle="Découvrez Nudger" />'})};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Hero
    },
    template: '<Hero title="Bienvenue" subtitle="Découvrez Nudger" />'
  })
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,v as default};

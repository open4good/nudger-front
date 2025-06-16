import{d as u,f as d,c as p,o as r,a as m,g as s,e as _,h as f,j as n}from"./dZCuHEW4.js";const g={class:"py-16 text-center bg-gray-100 rounded"},y={class:"mb-2 text-5xl font-bold"},H={key:0,class:"text-xl text-gray-600"},o=u({__name:"Hero",props:{title:{},subtitle:{}},setup(b){return(t,h)=>{const i=d("LazyHydrate");return r(),p(i,{"when-idle":""},{default:m(()=>[s("section",g,[s("h1",y,n(t.title),1),t.subtitle?(r(),_("p",H,n(t.subtitle),1)):f("",!0)])]),_:1})}}});o.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/nudger-front/nudger-front/src/components/Hero.vue"]};const v={component:o,title:"Hero"},e={render:()=>({components:{Hero:o},template:'<Hero title="Bienvenue" subtitle="Découvrez Nudger" />'})};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Hero
    },
    template: '<Hero title="Bienvenue" subtitle="Découvrez Nudger" />'
  })
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,v as default};

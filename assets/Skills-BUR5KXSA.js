import{b as k,r as c,u as m,a as f,j as s}from"./index-BaNUnLyY.js";import{I as g}from"./IconsGrid-KASGjSZW.js";function j(){return{SkillsContainer:{padding:"60px 0 5px 0"},SkillsContainerDiv:{borderBottom:"1px solid white",display:"flex",justifyContent:"space-between",alignItems:"center"},SkillsGrid:{display:"grid",gap:"20px",padding:"20px"},SkillsIcons:{border:"1px solid white",padding:"20px",boxShadow:"0 5px 8px 0 #141414",width:"360px"},SkillsImg:{display:"flex",flexDirection:"column",flexWrap:"wrap"}}}function v(){const{skilsGrid:e}=k({ochange:()=>{}}),[t,i]=c.useState(e),{resources:n}=m(),r=c.useCallback(o=>{i(o)},[i]),{SkillSetOverview:l}=f();return{gridTemplateColumns:t,handleGrid:r,resources:n,SkillSetOverview:l}}function I(){const{SkillsContainer:e,SkillsContainerDiv:t,SkillsGrid:i,SkillsIcons:n,SkillsImg:r}=j(),{gridTemplateColumns:l,handleGrid:o,resources:d,SkillSetOverview:p}=v();return s.jsxs("div",{style:e,children:[s.jsxs("div",{style:t,children:[s.jsx("div",{children:s.jsx("h2",{children:d.skills})}),s.jsx(g,{ochange:o,isPortfolio:!1})]}),s.jsx("div",{style:{...i,gridTemplateColumns:l},"data-aos-duration":"1000","data-aos":"zoom-in",children:p.icons.map((a,x)=>{const u=a.title==="SOFTSKILLS AND TOOLS"?d.softSkillsAndTools:a.title;return s.jsxs("div",{style:{...n,height:"290px"},children:[s.jsx("span",{children:u}),s.jsx("hr",{}),a.technologies.map((S,h)=>s.jsx("div",{style:r,children:s.jsx("span",{children:S})},h))]},x)})})]})}export{I as default};

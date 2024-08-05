import{j as e,u as x,a as o}from"./index-CI_Zg7GX.js";function p(){return{styles:{aboutMe:{container:{display:"flex",gap:"20px",justifyContent:"center",margin:"0 0 200px 0"},description:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",width:"40%",gap:"30px"},imgContainer:{height:"600px",borderRadius:"10px",overflow:"hidden",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414",position:"relative"},img:{width:"450px",height:"600px",objectFit:"cover"}},workExperience:{box:{padding:"10px",borderRadius:"10px",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414",backgroundColor:"#141414",width:"350px",height:"250px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",transition:"all 0.6s ease",cursor:"pointer"},container:{display:"flex",padding:"60px",justifyContent:"Space-around",margin:"0 0 50px 0"}},pictureMe:{container:{display:"flex",alignItems:"center",justifyContent:"center",padding:"100px"},divContainer:{display:"grid",gridTemplateColumns:"450px 450px",gap:"50px",borderRadius:"10px",padding:"80px",backgroundColor:"#141414",boxShadow:"0 5px 8px 0 #141414"},picture:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",padding:"60px"},div:{borderRadius:"10px",overflow:"hidden",boxShadow:"0 5px 8px 0 #141414",border:"2px solid #141414",position:"relative"},img:{width:"auto",height:"700px",objectFit:"cover"}}}}}const h="/Waddimi_Saint_louis/assets/waddy-Bn5M20Nn.png",j=({pictureMeDivImg:s,pictureMeDiv:i,imgSrc:t})=>e.jsxs("div",{style:i,children:[e.jsx("img",{src:t,alt:"my",style:s}),e.jsx("div",{className:"PictureMeDescription",children:e.jsx("span",{className:"PictureMeDescriptionSpan",children:"Aquí va la descripción"})})]});function y({cardImageStyle:s,imageMetadata:i,imageContainerStyle:t,imageStyle:n}){return e.jsx("div",{style:s,children:Object.keys(i).map((r,l)=>e.jsx(j,{pictureMeDivImg:n,pictureMeDiv:t,imgSrc:i[r]},l))})}const u=({aboutWorkExperienceStyle:s,description:i,isAboutSection:t,key:n})=>e.jsx("div",{className:t?"AboutWorkExperienceBox":void 0,style:s,children:"jobDuration"in i?e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",padding:"1rem"},children:[e.jsx("span",{children:i==null?void 0:i.jobDuration}),e.jsx("span",{style:{fontSize:"1.5rem",fontWeight:"bold",color:"#BA9797"},children:i.jobTitle}),e.jsx("span",{children:i.stack}),e.jsx("p",{children:i.description})]}):e.jsxs("div",{style:{padding:"10px"},children:[e.jsx("h3",{children:i.position}),e.jsx("span",{style:{color:"#BA9797",fontSize:"1.5rem"},children:i==null?void 0:i.title}),e.jsx("hr",{}),e.jsx("p",{children:i==null?void 0:i.description})]})},n);function d({jobDescriptions:s,isAboutSection:i,aboutWorkExperienceStyle:t,workExperienceDetails:n}){const r=i?n:s;return e.jsx(e.Fragment,{children:r&&Object.keys(r).map((l,a)=>e.jsx(u,{description:r[l],isAboutSection:i,aboutWorkExperienceStyle:t},a))})}const g="data:image/svg+xml,%3csvg%20width='133'%20height='134'%20viewBox='0%200%20133%20134'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.00488281%20133.385L9.36514%2099.2325C3.60985%2089.2397%200.542465%2077.8873%200.574088%2066.2818C0.574088%2029.916%2030.1727%200.348938%2066.5386%200.348938C84.1839%200.348938%20100.754%207.21102%20113.182%2019.6703C125.641%2032.1295%20132.503%2048.6997%20132.471%2066.3134C132.471%20102.679%20102.873%20132.246%2066.507%20132.246H66.4753C55.4391%20132.246%2044.5926%20129.464%2034.9477%20124.214L0.00488281%20133.385ZM36.5921%20112.261L38.5843%20113.463C46.9959%20118.459%2056.6408%20121.084%2066.4753%20121.115H66.507C96.7064%20121.115%20121.309%2096.5445%20121.309%2066.3134C121.309%2051.6722%20115.617%2037.9165%20105.276%2027.5443C94.9356%2017.1721%2081.1482%2011.4801%2066.507%2011.4801C36.2759%2011.4801%2011.6736%2036.0507%2011.6736%2066.2818C11.6736%2076.6224%2014.5512%2086.7099%2020.0535%2095.4378L21.3501%2097.5248L15.8161%20117.732L36.5921%20112.261Z'%20fill='black'%20fill-opacity='0.24'/%3e%3cpath%20d='M2.99731%20129.859L11.9291%2097.2867C6.43261%2087.7615%203.52822%2076.9247%203.52822%2065.8693C3.52822%2031.2041%2031.7601%203.00348%2066.3941%203.00348C83.227%203.00348%2098.9981%209.56177%20110.866%2021.4291C122.733%2033.2965%20129.26%2049.0989%20129.26%2065.9006C129.26%20100.566%20101.028%20128.766%2066.3941%20128.766H66.3629C55.8384%20128.766%2045.5013%20126.112%2036.3197%20121.115L2.99731%20129.859Z'%20fill='url(%23paint0_linear_210_1227)'/%3e%3cpath%20d='M0.717285%20132.139L9.96135%2098.411C4.2775%2088.5423%201.24819%2077.3308%201.27942%2065.8694C1.27942%2029.9549%2030.5106%200.754944%2066.4251%200.754944C83.8514%200.754944%20100.216%207.53184%20112.489%2019.8364C124.794%2032.141%20131.571%2048.5055%20131.539%2065.9006C131.539%20101.815%20102.308%20131.015%2066.3938%20131.015H66.3626C55.4634%20131.015%2044.7515%20128.267%2035.2264%20123.083L0.717285%20132.139ZM36.8503%20111.278L38.8178%20112.464C47.125%20117.399%2056.6501%20119.991%2066.3626%20120.022H66.3938C96.2184%20120.022%20120.515%2095.7564%20120.515%2065.9006C120.515%2051.4411%20114.894%2037.8561%20104.682%2027.6127C94.4696%2017.3693%2080.8533%2011.7479%2066.3938%2011.7479C36.538%2011.7479%2012.2411%2036.0135%2012.2411%2065.8694C12.2411%2076.0816%2015.0831%2086.0439%2020.5171%2094.6634L21.7975%2096.7245L16.3323%20116.68L36.8503%20111.278Z'%20fill='white'/%3e%3cpath%20d='M50.1232%2038.6056C48.9053%2035.8886%2047.6248%2035.8261%2046.4693%2035.7949C45.5324%2035.7637%2044.4394%2035.7637%2043.3463%2035.7637C42.2533%2035.7637%2040.5044%2036.1697%2039.0054%2037.7936C37.5063%2039.4176%2033.3215%2043.3525%2033.3215%2051.3786C33.3215%2059.3735%2039.1615%2067.1185%2039.9735%2068.2116C40.7855%2069.3046%2051.2475%2086.2625%2067.7682%2092.7895C81.5093%2098.2235%2084.32%2097.1305%2087.2869%2096.8494C90.285%2096.5684%2096.9057%2092.9145%2098.2798%2089.1044C99.6227%2085.2944%2099.6227%2082.0464%2099.2167%2081.3594C98.8107%2080.6723%2097.7177%2080.2663%2096.0937%2079.4544C94.4698%2078.6424%2086.4749%2074.7074%2084.9759%2074.1453C83.4768%2073.5831%2082.3838%2073.3333%2081.322%2074.9572C80.2289%2076.5812%2077.1059%2080.2351%2076.169%2081.3282C75.2321%2082.4212%2074.264%2082.5461%2072.64%2081.7341C71.0161%2080.9222%2065.7694%2079.2045%2059.5547%2073.6456C54.714%2069.3359%2051.4349%2063.9955%2050.498%2062.3716C49.5611%2060.7476%2050.4043%2059.8732%2051.2163%2059.0612C51.9346%2058.3429%2052.8402%2057.1562%2053.6522%2056.2193C54.4642%2055.2824%2054.7453%2054.5953%2055.2762%2053.5023C55.8071%2052.4092%2055.5573%2051.4723%2055.1513%2050.6604C54.7453%2049.8484%2051.5598%2041.8223%2050.1232%2038.6056Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_210_1227'%20x1='16164.1'%20y1='32602.7'%20x2='16164.1'%20y2='1.18076'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2320B038'/%3e%3cstop%20offset='1'%20stop-color='%2360D66A'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",b=()=>{const{styles:s}=p(),{jobDescriptions:i,workExperience:t,imageFiles:n}=x();return e.jsxs("div",{style:{marginTop:"100px"},children:[e.jsx(C,{...s.aboutMe}),e.jsx(f,{workExperience:t,...s.workExperience}),e.jsx(m,{jobDescriptions:i,imageFiles:n,...s.pictureMe})]})},C=({container:s,description:i,imgContainer:t,img:n})=>{const{resources:r}=o();return e.jsxs("div",{style:s,children:[e.jsxs("div",{style:t,"data-aos":"fade-right",children:[e.jsx("img",{src:h,alt:"waddy",style:n}),e.jsxs("div",{className:"PictureMeDescription",children:[e.jsx("span",{children:"Waddimi Saint Louis"}),e.jsxs("span",{children:[r.systemEngineer," - Fullstack Developer"]})]})]}),e.jsxs("div",{style:i,"data-aos":"fade-left",children:[e.jsxs("div",{children:[e.jsxs("h2",{style:{display:"flex",flexWrap:"wrap",width:"500px"},children:[e.jsx("span",{style:{fontSize:"15px",marginBottom:"10px",color:"#BA9797"},children:r.hi}),r.iAmAPassionate]}),e.jsx("span",{style:{display:"flex",flexWrap:"wrap",width:"500px"},children:r.twoYears})]}),e.jsx("div",{style:{width:"75%"},children:e.jsxs("button",{style:{height:"40px",width:"60%",cursor:"pointer",fontWeight:"bold",letterSpacing:"4px",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"},children:[e.jsx("img",{src:g,alt:"whatsapp",style:{width:"20px"}}),e.jsx("span",{children:r.contactUs})]})})]})]})},f=({box:s,workExperience:i,container:t})=>{const{resources:n}=o();return e.jsxs("div",{style:{...t,display:"flex",flexDirection:"column",background:"#333333"},children:[e.jsxs("div",{style:{paddingLeft:"80px"},children:[" ",e.jsxs("h2",{style:{fontSize:"2.5rem",fontWeight:"bold",letterSpacing:"5px"},children:[n.my," ",e.jsx("span",{style:{color:"#BA9797"},children:n.experience})]})]}),e.jsx("div",{style:t,children:e.jsx(d,{jobDescriptions:{},aboutWorkExperienceStyle:s,isAboutSection:!0,workExperienceDetails:i})})]})},m=({jobDescriptions:s,imageFiles:i,container:t,divContainer:n,div:r,img:l,picture:a})=>{const{resources:c}=o();return e.jsxs("div",{children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:{...n,position:"relative"},children:[e.jsx("div",{style:{position:"absolute",left:"-100px",top:"30px",background:"#333333",padding:"10px",borderRadius:"10px"},children:e.jsx("span",{style:{fontWeight:"bold",letterSpacing:"5px",fontSize:"1.5rem"},children:c.phrasesOfTheDay})}),e.jsx(d,{jobDescriptions:s,aboutWorkExperienceStyle:void 0,isAboutSection:!1,workExperienceDetails:void 0})]})}),e.jsx("div",{style:a,children:e.jsx(y,{cardImageStyle:a,imageMetadata:i,imageContainerStyle:r,imageStyle:l})})]})};export{b as default};

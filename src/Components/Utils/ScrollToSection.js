export const ScrollToSection = (goto)=>{
    document.querySelector("#"+goto).scrollIntoView({behavior:"smooth"});
};
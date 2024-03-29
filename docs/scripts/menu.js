// Instructions:
// Use this JavaScript file to build the navigation menu you'll use on each
// page. This is useful if your menu appears on multiple pages, so that you
// only have to change your menu in one place.

const REPO_NAME = `portfolio`; // 1. CHANGE THIS TO your repo name
const ROOT_IS_DOCS = true; // 2. CHANGE THIS TO true OR false
let prefix = setPrefix(REPO_NAME, ROOT_IS_DOCS);

let mainMenu = `
<ul id="work-menu">
<li><a href="${prefix}/">Arthur Arthur</a></li>
<li><a href="${prefix}/print/">Print & Paint</a></li>
<li><a href="${prefix}/performance/">Performance</a></li>
<li><a href="${prefix}/fibers/">Fibers</a></li>
<li><a href="${prefix}/audio-works/">Sound</a></li>
<li><a href="${prefix}/ceramics/">Ceramics</a></li>
<li><a href="${prefix}/fibers/plastic_gallery">Plastic</a></li>
<li><a href="${prefix}/process/">Process</a></li>
<li><a href="${prefix}/about-me/">About Me</a></li>
</ul>

<!-- SLIDE DOWN MENU -->

<nav id="slide-menu"> 
<ul>
  <li class="home"><a href="${prefix}/">HOME</a></li>
  <li class="print"><a href="${prefix}/print/">PRINT & PAINT</a></li>
  <li class="perf"><a href="${prefix}/performance/">PERFORMANCE</a></li>
  <li class="fibers"><a href="${prefix}/fibers/">FIBERS</a></li>
  <li class="sound"><a href="${prefix}/audio-works/">SOUND</a></li>
  <li><a href="${prefix}/ceramics/">CERAMICS</a></li>
  <li class="plastic"><a href="${prefix}/fibers/plastic_gallery">PLASTIC</a></li>
  <li class="process"><a href="${prefix}/process/">PROCESS</a></li>
  <li class="about-me"><a href="${prefix}/about-me/">ABOUT ME</a></li>
</ul>
</nav>
`

$('#main-menu').append(mainMenu);

$('.hamburger').click(function(){
  $('#slide-menu').slideToggle();

})



function setPrefix(repoName, rootIsDocs) {
  let _prefix;
  const myLocation = window.location.href;
  if (myLocation[4] === ':') {
    console.log("Using Live Server");

    if (rootIsDocs) {
      console.log("using 'docs' for the root directory");
      _prefix = "/docs"
    } else {
      _prefix = ""
    }
  } else {
    console.log("Production Site");
    _prefix = ``
  }

  return _prefix;
}
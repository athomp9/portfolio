// Instructions:
// Use this JavaScript file to build the navigation menu you'll use on each
// page. This is useful if your menu appears on multiple pages, so that you
// only have to change your menu in one place.

const REPO_NAME = `portfolio`; // 1. CHANGE THIS TO your repo name
const ROOT_IS_DOCS = true; // 2. CHANGE THIS TO true OR false
let prefix = setPrefix(REPO_NAME, ROOT_IS_DOCS);

let mainMenu = `
<ul id="work-menu">
<li><a href="${prefix}/home/">ArthurArthur</a></li>
<li><a href="#">Print/Design</a>
    <ul>
        <li><a href="${prefix}/print/pretending">I AM JUST PRETENDING;
                ANYFORM; ANYSHAPE; ANYTHING</a></li>
        <li><a href="${prefix}/print/dom">DOMINATION;submission</a></li>
        <li><a href="${prefix}/print/sitting-alone">sitting alone</a></li>
        <li><a href="${prefix}/print/mono1">Untitled #1 (monoprint)</a></li>
        <li><a href="${prefix}/print/mono2">Untitled #2 (monoprint)</a></li>
        <li><a href="${prefix}/print/mono3">Untitled #3 (monoprint)</a></li>
        <li><a href="${prefix}/print/mono4">Untitled #4 (monoprint)</a></li>
        <li><a href="${prefix}/print/mono1">How To Fry An Egg</a></li>
    </ul>
</li>
<li> <a href="#">Performance</a>
    <ul>
        <li><a href="${prefix}/performance/sophie/">SOPHIE</a></li>
        <li><a href="${prefix}/performance/reality/">REALITY</a></li>
        <li><a href="${prefix}/performance/all-is-soft-inside">ALL IS SOFT
                INSIDE</a></li>
        <li><a href="${prefix}/performance/push-i/">puSH I</a></li>
        <li><a href="${prefix}/performance/push-ii/">puSH II</a></li>
        <li><a href="${prefix}/performance/push-iii/">puSH III</a></li>
        <li><a href="${prefix}/performance/push-iv/">puSH IV</a></li>
        <li><a href="${prefix}/performance/push-v/">puSH V</a></li>
    </ul>
</li>
<li> <a href="#">Fibers</a>
    <ul>
        <li><a href="${prefix}/fibers/only-time1/">Only Time Makes It Human
                I</a></li>
        <li><a href="${prefix}/fibers/only-time2/">Only Time Makes It Human
                II</a></li>
        <li><a href="${prefix}/fibers/only-time3/">Only Time Makes It Human
                III</a></li>
    </ul>
</li>
<li> <a href="#">Photography</a>
    <ul>
        
    </ul>
</li>
<li> <a href="#">Sound</a>
    <ul>
        <li><a href="${prefix}/audio-works/pretend-world">PRETEND WORLD</a>
        </li>
    </ul>
</li>
<li> <a href="#">Process</a>
    <ul>
        <li><a href="${prefix}/process/plastic-rope/">Plastic Rope</a></li>
        <li><a href="${prefix}/process/dom-process/">Tying Up Loose Ends: DOMINATION; submission</a></li>
        <li><a href="${prefix}/process/tap-man/">Digital Tapestry Manipulations</a>
        </li>
        <li><a href="${prefix}/process/wear-tap">Plastic as Garment: Test 1: Tapestry</a></li>
        <li><a href="${prefix}/process/sophie-process">Developing SOPHIE</a></li>
        <li><a href="${prefix}/process/reality-process">The Trials of REALITY</a></li>
    </ul>
</li>
<li><a href="${prefix}/about-me/">About Me</a></li>
</ul>
`

$('#main-menu').append(mainMenu);



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
    _prefix = `/${repoName}`
  }

  return _prefix;
}
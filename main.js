let myform = document.querySelector("#myForm");

myform.addEventListener("submit", async(e) => {
    e.preventDefault();
    
    let headers = new Headers({"Content-Type": "application/json"});
    let data =  new Headers({"Content-type": "application/json"});
    let config = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    };

    let response = await (await fetch("api.php", config)).text();
    document.querySelector("pre").innerHTML = response;
});
  
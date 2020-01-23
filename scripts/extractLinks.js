const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');


function getFile(fileName, cb){
    fs.readFile(fileName, function (err, data) {
        if (err) {
          throw err; 
        }
        // console.log(data.toString());
        cb(data.toString())
      });
}

function extract(cb){
    getFile('data.txt', function(domStr){
        let data = {}
        const dom = new JSDOM(domStr);
        let nodes = dom.window.document.querySelectorAll(".info");
        for (let i = 0; i < nodes.length; i++) {
            let cat = nodes[i].querySelector('.category').innerHTML
            if(!data.hasOwnProperty(cat)){
                data[cat] = []
            }
            let node = {"title": nodes[i].querySelector('.title').innerHTML, 
                        "link": nodes[i].querySelector('.link').href,
                        "description": nodes[i].querySelector('.description').innerHTML,
                        "priority": nodes[i].querySelector('.priority').innerHTML,
                    }
            data[cat].push(node)
          }
          console.log(JSON.stringify(data))
        // return data
    })
}

extract()


// 
{/* <div class="info">
<span class="title">Dr. Whom</span>
<br/>
<span class="description">Directory of all Microsoft employees (internal only).</span>
<br/>
<a class="link" href="http://who">//who</a>
</div> */}
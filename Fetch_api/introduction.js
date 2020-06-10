
document.getElementById('text').addEventListener('click', getmsg);

function getmsg() {

  /*

GET FROM FETCH

  fetch('introduction.json')     // extension should be .json
  .then(function(res){
    return res.txt();         //for json user .json() instead of .txt()
  })
  .then(function(data){
    console.log(data);


  });
  */

//====================fetching from api starts==============

  fetch('https://jsonplaceholder.typicode.com/posts')   // get api
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>POSTS</h2>';
    data.forEach(function(post){
      output +=`
      <div>
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
      </div>
      `;
    });

    document.getElementById('output').innerHTML = output;
  })
  .catch((err) => console.log(error))
}


document.getElementById('api').addEventListener('submit', addpost);

function addpost(){
  event.preventDefault();
  let title_value = document.getElementById('title').value;
  let body_value = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts' , {  // post api
    method:'POST',
    headers:{
      'Accept':'application/json, text/plain , */*',
      'Content-type':'application/json'
    },
    body:JSON.stringify({title:title_value , body:body_value}) 
  })
  .then((res) => res.json())
  .then((data) => console.log(data))

}
//====================fetching from api ends ==============

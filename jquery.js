const listGroup2 = document.querySelector('.list-group');
//Get all buttons
// const getPost2 = document.querySelector('#get-info');
// const addPost2 = document.querySelector('#add-info');
// const editPost2 = document.querySelector('#edit-info');
// const deletePost2 = document.querySelector('#delete-info');

const url2 = 'https://jsonplaceholder.typicode.com/posts'

$(document).ready(function () {
  let id;
  let json;
  const showPosts = function(results) {
    console.log(results);
    //$.each(results, function() {
      $listGroup.append('<li> ' + results.title + '</li>');
    //});
  };

  const err = function (error) {
    console.log(error);
  };
  
  let $listGroup = $('.list-group-2');

  //GET 
  $("#get-info").click(function (e) {
    $.ajax({
      url: `${url}/1`,
      method: 'GET',
      dataType: 'json', 
      success: showPosts,
      error: err,
    });
  });

  //POST 
  $("#post-info").click(function (e) {
    $.ajax({
      url: `${url}`,
      method: 'POST',
      body: JSON.stringify,
      dataType: 'json', 
      data: {
        title: 'posting this',
        body: 'Here is some posted content',
        userId: 101,
      },
      success: showPosts,
      error: err,
    });
  });

  //PUT
  $("#edit-info").click(function (e) {
    $.ajax({
      url: `${url}`,
      method: 'PUT',
      body: JSON.stringify,
      dataType: 'json', 
      data: {
        userId: 2, 
        title: 'updated post', 
        body: 'This is post two',
      },
      success: function(results) {
        console.log(results)
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
  //DELETE
  $('#delete-info').click(function(e) {
    $.ajax({
      url: `${url}/1`,
      method: 'DELETE',
      success: function() {
        console.log("deleted")
      },
    });
  });
})

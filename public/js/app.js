var app = angular.module('myApp', ['ngRoute']);

// app.config(function($routeProvider){
//
//   $routeProvider.when('/',{
//     templateUrl:  './home.html',
//     controller: 'myCtrl'
//   })
//
// })

app.controller('myCtrl', function($scope,$http) {

  $scope.blogPost = function(post){
    console.log(post);
    $http.post('/api/blogpost',post)
    .then(function(response){
                // $scope.deleteBookmarkModal.hide();
                // toaster.pop("success","Bookmark deleted successfully");
                setTimeout(function(){$scope.getAllBlogs();},2000);
                $scope.post = "";
              });
  }



$scope.getAllBlogs = function(){
    $http.get('/api/allblogpost')
         .success(function(posts){
           $scope.posts = posts;
         });
  }
$scope.showEdit = false;

  $scope.removeBlog = function(id){
    // console.log(id);

    $http.delete('/api/removeblog/'+id)
    .then(function(response){
                // $scope.deleteBookmarkModal.hide();
                // toaster.pop("success","Bookmark deleted successfully");
                setTimeout(function(){$scope.getAllBlogs();},2000);

              });
  }

  $scope.editBlog = function(id){
    $scope.showEdit = true;
    $http.get('/api/getPostById/'+id)
    .success(function(post){
      $scope.post = post;
    })
  }

  $scope.editPost = function(post){
    console.log(post);
    $http.put('/api/editpost/'+post._id,post)
    .then(function(response){
      setTimeout(function(){$scope.getAllBlogs();},2000);
      $scope.post = "";
    })
  }

    // $scope.profile={
    //   name:"akash kumar",
    //   profilePic:"image/Eugene_Lee.jpg",
    // }

});

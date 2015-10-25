'use strict';

angular.module('starter.controllers', []).controller('DashCtrl', function ($scope) {
  $scope.cards = [{ name: 'Cat 1', imgSrc: 'http://placekitten.com/200/400' }, { name: 'Cat 2', imgSrc: 'http://placekitten.com/200/400' }, { name: 'Cat 3', imgSrc: 'http://placekitten.com/200/400' }];

  $scope.cardDestroyed = function (index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function () {
    var randomNumber = Math.round(Math.random() * 100);
    var newCard = { name: 'Cat ' + randomNumber, imgSrc: 'http://placekitten.com/200/400' };
    $scope.cards.unshift(angular.extend({}, newCard));
  };

  $scope.cardSwiped = function (index) {
    //var newCard = // new card data
    //$scope.cards.push(newCard);
    $scope.addCard();
  };
}).controller('ChatsCtrl', function ($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    Chats.remove(chat);
  };
}).controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}).controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
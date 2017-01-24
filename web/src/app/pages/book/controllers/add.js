/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('BookAddCtrl', BookAddCtrl);

    /** @ngInject */
    function BookAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.authors = null;
        $scope.authorsSelected = {};
        $scope.categories = null;
        $scope.categoriesSelected = {};
        $scope.publishing_houses = null;
        $scope.publishing_houseSelected = {};
        $scope.book = {};

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/author/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.authors = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/publishing_house/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.publishing_houses = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/category/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function createBook(book, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/book/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: book.name,
                    publication_year: book.publication_year,
                    number_of_pages: book.number_of_pages,
                    isbn: book.isbn,
                    categories : book.categories,
                    publishing_house: book.publishing_house,
                    authors: book.authors
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/book');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (book) {

            var authors = [];
            var categories = [];
            var publishing_house = null;

            var selectedAuthors = $scope.authorsSelected.selected;
            var selectedCategories = $scope.categoriesSelected.selected;
            var selectedPublishingHouse = $scope.publishing_houseSelected.selected;

            if (selectedPublishingHouse != undefined)
                publishing_house = selectedPublishingHouse.id;

            for (var i = 0; i < selectedAuthors.length; i++) {
                authors.push(selectedAuthors[i].id)
            }

            for (var i = 0; i < selectedCategories.length; i++) {
                categories.push(selectedCategories[i].id)
            }

            book.authors = authors;
            book.categories = categories;
            book.publishing_house = publishing_house;

            var deferred = $q.defer();
            createBook(book, deferred);
            return deferred.promise;
        }
    }

})();

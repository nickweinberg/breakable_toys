'use strict';

angular.module('draggerApp')
  .directive('droppable', function () {
    return {
      scope: {
        drop: '&', // parent
        bin : '=' // bi-directional scope
      },
      link: function(scope, element) {
        // again we need the native object
        var el = element[0];

        // Add event listeners
        el.addEventListener(
          'dragover',
          function(e) {
            e.dataTransfer.dropEffect = 'move';
            // allows us to drop
            if (e.preventDefault) e.preventDefault();
            this.classList.add('over');
            return false;
          },
          false
        );

        el.addEventListener(
          'dragenter',
          function(e) {
            this.classList.add('over')
            return false;
          },
          false
        );

        el.addEventListener(
          'dragleave',
          function(e) {
            this.classList.remove('over')
            return false;
          },
          false
        );

        el.addEventListener(
          'drop',
          function(e) {
            // Stops some browsers from redirecting.
            if(e.stopPropogation) e.stopPropogation();

            this.classList.remove('over');

            var item = document.getElementById(e.dataTransfer.getData('Text'));
            this.appendChild(item);

            // call the drop passed drop function
            scope.$apply(function(scope) {
              var fn = scope.drop();
              if (typeof fn !== 'undefined') {
                fn(item.id, binId);
              }
            });

            return false;
          }, false
        );
        // END add event listeners

      }

    };
  });

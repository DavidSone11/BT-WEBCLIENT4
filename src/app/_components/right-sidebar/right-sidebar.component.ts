import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
declare var $: any;
@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  animations: [
    // trigger(
    //   'enterAnimation', [
    //     transition(':enter', [
    //       style({transform: 'translateX(100%)', opacity: 0.4}),
    //       animate('80ms', style({transform: 'translateX(0)', opacity: 1}))
    //     ]),
    //     transition(':leave', [
    //       style({transform: 'translateX(0)', opacity: 1}),
    //       animate('1000ms', style({transform: 'translateX(100%)', opacity: 0}))
    //     ])

    //   ]),

    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])

  ]
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.sidebarMenu = function(menu) {
        var animationSpeed = 300,
          subMenuSelector = '.sidebar-submenu';

        $(menu).on('click', 'li a', function(e) {
          var $this = $(this);
          var checkElement = $this.next();

          if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function() {
              checkElement.removeClass('menu-open');
            });
            checkElement.parent("li").removeClass("active");
          }

          //If the menu is not visible
          else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
            //Get the parent menu
            var parent = $this.parents('ul').first();
            //Close all open menus within the parent
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            //Remove the menu-open class from the parent
            ul.removeClass('menu-open');
            //Get the parent li
            var parent_li = $this.parent("li");

            //Open the target menu and add the menu-open class
            checkElement.slideDown(animationSpeed, function() {
              //Add the class active to the parent li
              checkElement.addClass('menu-open');
              parent.find('li.active').removeClass('active');
              parent_li.addClass('active');
            });
          }
          //if this isn't a link, prevent the page from being redirected
          if (checkElement.is(subMenuSelector)) {
            e.preventDefault();
          }
        });
      }
      $.sidebarMenu($('.sidebar-menu'))

}

}

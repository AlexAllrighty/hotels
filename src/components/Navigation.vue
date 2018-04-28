<template lang="pug">
  div.wrapper
    a.menu-button Menu
      span.toggler(@click="menuToggler")
    nav.navigation.menu-hidden
      ul.navigation__list
        li.navigation__list-item
          a(href="#") Search tickets
        li.navigation__list-item
          a(href="#") Sapsan
        li.navigation__list-item
          a(href="#") Allegro
        li.navigation__list-item.navigation__list-item--unfolding(@click="showSublist" v-on-clickaway="away")
          a(href="#")
            span Trans-siberian
          ul.navigation__sublist.hidden
            li.navigation__sublist-item
              a(href="#") Schedule
            li.navigation__sublist-item
              a(href="#") Tickets
            li.navigation__sublist-item
              a(href="#") Route
        li.navigation__list-item.navigation__list-item--unfolding(@click="showSublist" v-on-clickaway="away")
          a(href="#")
            span Faq
          ul.navigation__sublist.hidden
            li.navigation__sublist-item
              a(href="#") Purchase
            li.navigation__sublist-item
              a(href="#") Discounts
        li.navigation__list-item.navigation__list-item--unfolding(@click="showSublist" v-on-clickaway="away")
          a(href="#")
            span Tickets guide
          ul.navigation__sublist.hidden
            li.navigation__sublist-item
              a(href="#") Group travel
            li.navigation__sublist-item
              a(href="#") Ticket types
            li.navigation__sublist-item
              a(href="#") Child policy
            li.navigation__sublist-item
              a(href="#") Change ticket request
            li.navigation__sublist-item
              a(href="#") Cancel tickets
        li.navigation__list-item.navigation__list-item--unfolding(@click="showSublist" v-on-clickaway="away")
          a(href="#")
            span Contact us
          ul.navigation__sublist.hidden
            li.navigation__sublist-item
              a(href="#") E-mail
            li.navigation__sublist-item
              a(href="#") Address
      div.navigation__user-nav
        a(href="#")
          span Sign-in
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'

  export default {
    mixins: [ clickaway ],
    methods: {
      showSublist(evt){
        let target = evt.currentTarget;
        let allSubLists = document.querySelectorAll('.navigation__sublist');
        let subList = target.querySelector('.navigation__sublist');
        if (target.classList.contains('navigation__list-item--unfolding')) {
          subList.classList.toggle('hidden');
        }

        allSubLists.forEach(function (item) {
          if(item.parentNode !== target && !item.classList.contains('hidden')) {
            item.classList.add('hidden');
          }
        })
      },
      away (evt) {
        let allSubLists = document.querySelectorAll('.navigation__list-item--unfolding'),
          target = evt.target;

        allSubLists.forEach(function (item) {
            if(item.compareDocumentPosition(target) == 2 || item.compareDocumentPosition(target) == 4) {
              item.querySelector('.navigation__sublist').classList.add('hidden');
            };
        })
      },
      menuToggler (evt) {
        let navigation = document.querySelector('.navigation');
        navigation.classList.toggle('menu-hidden');
      }
    }

  }



</script>

<style lang="less" scoped>
  @import ".././less/variables.less";
  @import ".././less/mixins.less";

  .menu-button {
    display: none;
  }

  .wrapper {
    background-color: @lightBlue;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    .wrapper;
  }

  .navigation__list {
    .navigation-list-font;
    .list-reset;
    display: flex;
  }

  .navigation__list-item {
    position: relative;
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px 10px;
      &:hover, &:focus {
        background-color: @navHoverColor;
      }
    }
    &--unfolding {
      a {
        display: flex;
        align-items: center;
      }
      & > a:after {
        content: '';
        display: block;
        width: 10px;
        height: 5px;
        margin-left: 5px;
        background-image: url(../img/rect.png);
      }
    }
  }

  .navigation__user-nav {
    display: flex;
    padding: 10px 10px;
    font-size: 14px;
    a {
      display: flex;
      &:before {
        content: '';
        display: block;
        width: 12px;
        height: 15px;
        margin-right: 8px;
        background-image: url("../img/user-icon.png");
      }
      span {
        color: @additionalColor;
        border-bottom: 1px solid @additionalColor;
        &:hover {
          color: white;
          border-bottom: 1px solid white;
        }
      }
    }
  }

  .navigation__sublist {
    .list-reset;
    position: absolute;
    top: 39px;
    background-color: white;
    color: #000000;
    border-left: 1px solid #d7d7d7;
    border-right: 1px solid #d7d7d7;
    text-transform: none;
    font-weight: normal;
    font-size: 14px;
  }

  .navigation__sublist-item {
    width: 165px;
    background-color: white;
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 7px 15px;
      border-bottom: 1px solid #d7d7d7;
      &:hover, &:focus {
        background-color: #bfd8eb;
        border-bottom: 1px solid #bfd8eb;
        outline: none;
      }
    }
  }

  .hidden {
    display: none;
  }

  .menu-hidden {
    display: flex;
  }

  @media(max-width: 855px) {
    .menu-hidden {
      display: none;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .menu-button {
      display: block;
      text-transform: uppercase;
      color: white;
      font-size: 20px;
      font-weight: bold;
      margin: 0 auto;
      height: 50px;
      line-height: 50px;
    }

    .toggler {
      display: block;
      height: 3px;
      width: 30px;
      background-color: white;
      position: absolute;
      top: 25px;
      left: 80%;
      &:after {
        content: "";
        display: block;
        height: 3px;
        width: 30px;
        background-color: white;
        position: absolute;
        top: 8px;
      }
      &:before {
        content: "";
        display: block;
        height: 3px;
        width: 30px;
        background-color: white;
        position: absolute;
        top: -8px;
      }
    }
    .navigation {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .navigation__list {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .navigation__list-item {
      width: 100%;
      text-align: center;
      a {
        padding: 10px 0;
      }
      &--unfolding {
        text-align: center;
        a {
          justify-content: center;
        }
      }
    }

    .navigation__sublist {
      position: static;

    }
    .navigation__sublist-item {
      background-color: @darkBlue;
      width: 100%;
      color: white;
      text-transform: uppercase;
      a {
        width: 100%;
      }
    }
  }



</style>

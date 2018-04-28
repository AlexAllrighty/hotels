<template lang="pug">
  div.wrapper
    h1.search__title Russian Train Tickets
    form.search__form
      div.search__inner-wrapper.search__inner-wrapper--departure
        label.search__label Departure city:
        input.search__input.search__input--city#departure(type="text")(placeholder="Type city name")
        div.search__examples
          span Ex:
          a.search-examples__link(@click="setCity") St.Petersburg
          a.search-examples__link(@click="setCity") Moscow
      button.search__change-button(@click="changeCities")
      div.search__inner-wrapper.search__inner-wrapper--arrival
        label.search__label Arrival city:
        input.search__input.search__input--city#arrival(type="text")(placeholder="Type city name")
        div.search__examples
          span Ex:
          a.search-examples__link(@click="setCity") St.Petersburg
          a.search-examples__link(@click="setCity") Moscow
      div.search__inner-wrapper.search__inner-wrapper--departure
        label.search__label Departure date:
        input.search__input--date(placeholder="dd.mm.yyyy")(type="text")(onfocus="(this.type='date')")(onblur="(this.type='text')")
      div.search__checkbox-wrapper
        input.search__roundtrip-checkbox#roundtrip-checkbox(type="checkbox")(@change="activateInputDate")
        label.search__roundtrip-label(for="roundtrip-checkbox") Roundtrip
      div.search__inner-wrapper
        label.search__label Return date:
        input.search__input--date.search__input--return-date(placeholder="dd.mm.yyyy")(type="text")(onfocus="(this.type='date')")(onblur="(this.type='text')")(disabled)
      div.search__inner-wrapper.search__inner-wrapper--currency
        label.search__label Currency:
        select.search__input.search__input--currency
          option Usd
          option(selected) Rub
          option Gbr
          option Eur
          option Chf
      button.search__submit-button(type="submit")
        span Search
</template>

<script>
  export default {
    methods: {
      changeCities(evt) { // Функция смены городов отправки/прибытия по нажатию на кнопку
          let departureInput = document.getElementById('departure'),
            initialValue = departureInput.value,
            arrivalInput = document.getElementById('arrival');
          evt.preventDefault();
          departureInput.value = arrivalInput.value;
          arrivalInput.value = initialValue;
      },
      setCity(evt) { // Функция установки города отправления/прибытия по нажатию на ссылку
        if(evt.target.parentNode.parentNode.classList.contains('search__inner-wrapper--arrival')) {
          let arrivalInput = document.getElementById('arrival');
          arrivalInput.value = evt.target.innerHTML;
        } else if (evt.target.parentNode.parentNode.classList.contains('search__inner-wrapper--departure')) {
          let departureInput = document.getElementById('departure');
          departureInput.value = evt.target.innerHTML;
        }
      },
      activateInputDate(evt) { // Функция активации календаря
        let roundTripCheckbox = document.querySelector('.search__roundtrip-checkbox'),
          returnDateInput = document.querySelector('.search__input--return-date');
          if(roundTripCheckbox.checked) {
            returnDateInput.disabled = false;
          } else {
            returnDateInput.disabled = true;
          }
      }
    }
  }


</script>

<style lang="less" scoped>
  @import ".././less/variables.less";
  @import ".././less/mixins.less";
  .wrapper {
    padding-top: 27px;
    background-color: @darkBlue;
    color: white;
  }

  .search__title {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  .search__form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .wrapper;
  }

  .search__inner-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    &--arrival {
      margin-left: auto;
    }
    &--currency {
      margin-left: 45px;
      position: relative;
      top: 4px;
    }
  }

  .search__label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  .search__input {
    margin-bottom: 5px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    &::-webkit-input-placeholder {font-size: 16px;}
    &::-moz-placeholder          {font-size: 16px;}/* Firefox 19+ */
    &:-moz-placeholder           {font-size: 16px;}/* Firefox 18- */
    &:-ms-input-placeholder      {font-size: 16px;}
    &--city {
      width: 398px;
    }

    &--date {
      font-size: 16px;
      color: #5F5F5F;
      width: 167px;
      height: 47px;
      padding: 15px;
      background-image: url(../img/calendar-icon.png);
      background-repeat: no-repeat;
      background-position: 90% 50%;
      border: 1px solid white;
      border-radius: 5px;
      background-color: white;
      &:disabled {
        background-color: #1395d3;
        border: 1px solid #0076ad;
        color: #94c4db;
      }
      &:focus {
        background-image: none;
      }
    }
    &--currency {
      text-transform: uppercase;
      font-weight: bold;
      option {
        font-weight: bold;
        &:hover {
          background-color: #bfd8eb;
        }

      }
    }
  }

  .search__examples {
    color: @additionalColor;
  }

  .search-examples__link {
    border-bottom: 1px dashed @additionalColor;
    margin-left: 5px;
    &:hover {
      color: white;
      border-bottom: 1px dashed transparent;
    }
  }

  .search__change-button {
    width: 30px;
    height: 16px;
    margin-top: -25px;
    margin-left: 15px;
    border: none;
    background-image: url(../img/change-button.png);
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-image: url(../img/change-button-hover.png);
    }
  }

  .search__submit-button {
    display: flex;
    justify-content: center;
    position: relative;
    top: 5px;
    width: 180px;
    height: 48px;
    margin-left: auto;
    background: linear-gradient(to bottom, #fbad49 0%, #f99937 25%, #f98a2a 50%, #f87517 75%, #f76105 100%);
    border: 1px solid #de5300;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    span {
      margin-left: 10px;
      font-size: 16px;
    }
    &:before {
      display: block;
      content: '';
      width: 18px;
      height: 18px;
      background-image: url(../img/search-icon.png);
    }
  }

  .search__checkbox-wrapper {
    display: flex;
    position: relative;
    top: 5px;
    width: 105px;
    height: 35px;
    background-color: #0b92d2;
    align-items: center;
    border-radius: 8px;
    margin-left: 42px;
    margin-right: 15px;
    padding: 7px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -14px;
      border: 7px solid transparent;
      border-left: 7px solid #0b92d2;
    }
  }

  .seacrh__roundtrip-label {
    width: 100px;
    height: 30px;
    background-color: #0b92d2;
  }

  @media (max-width: 855px) {
    .search__title {
      margin-bottom: 30px;
    }
    .search__form {
      flex-direction: column;

    }

    .search__inner-wrapper {
      width: 100%;
      align-items: center;
      &--currency {
        margin-left: 0;
      }
    }

    .search__input {
      width: 100%;
      &--date {
        width: 100%;
      }
    }

    .search__change-button {
      margin-top: 5px;
      margin-bottom: 20px;
    }

    .search__checkbox-wrapper {
      margin-bottom: 20px;
    }

    .search__submit-button {
      width: 100%;
      margin-bottom: 50px;
    }
  }

</style>

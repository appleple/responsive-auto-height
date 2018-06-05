# Responsive AutoHeight

JavaScript library to equalize elements's height

## Feature

- intuitive
- you don't have to specify the column number

## Installation

via npm

```sh
npm install responsive-auto-height --save
```

or yarn

```sh
yarn add responsive-auto-height
```

## CDN

```html
<script src="https://unpkg.com/responsive-auto-height@0.0.4/js/responsive-auto-height.min.js"></script>
```

## Usage

HTML

```html
<div class="row">
  <div class="col-md-4">
    <div class="card mb-4 box-shadow js-auto-height">
      <img class="card-img-top" src="example.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 box-shadow js-auto-height">
      <img class="card-img-top" src="example.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae amet laudantium soluta porro architecto provident nisi, fuga suscipit nesciunt unde esse itaque minus voluptatibus, quam beatae, fugit dolores quod ab!</p>
      </div>
    </div>
  </div>
</div>
```

JavaScript

```js
// import ResponsiveAutoHeight from 'responsive-auto-height';
new ResponsiveAutoHeight('.js-auto-height');
```
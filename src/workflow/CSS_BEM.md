# B-Grade 前端命名规范

## 文件格式名

React文件 后缀是.jsx
纯javascripte文件 后缀是.js

## CSS BEM 命名

### [block]__[element]--[modifier]
### 1.Component With A Modifier
<!-- DO THIS -->
<button class="btn btn--secondary"></button>
<!-- DON'T DO THIS -->
<button class="btn--secondary"></button>

### 2.Component With Elements
<!-- DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">Look at me!</figcaption>
</figure>
<!-- DON'T DO THIS -->
<figure class="photo">
  <img src="me.jpg">
  <figcaption>Look at me!</figcaption>
</figure>

### **If your component has child elements several levels deep, don’t try to represent each level in the class name.
<!-- DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__quote">
      Look at me!
    </blockquote>
  </figcaption>
</figure>
<!-- DON'T DO THIS -->
<figure class="photo">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">
    <blockquote class="photo__caption__quote"> <!-- never include more than one child element in a class name -->
      Look at me!
    </blockquote>
  </figcaption>
</figure>

### 3.Element With Modifier
<figure class="photo">
  <img class="photo__img photo__img--framed" src="me.jpg">
  <figcaption class="photo__caption photo__caption--large">Look at me!</figcaption>
</figure>

### 4.Style Elements Based on the Component Modifier
<!-- DO THIS -->
<figure class="photo photo--highlighted">
  <img class="photo__img" src="me.jpg">
  <figcaption class="photo__caption">Look at me!</figcaption>
</figure>
<!-- DON'T DO THIS -->
<figure class="photo">
  <img class="photo__img photo__img--highlighted" src="me.jpg">
  <figcaption class="photo__caption photo__caption--highlighted">Look at me!</figcaption>
</figure>

### 5.Multi-word Names
<!-- DO THIS -->
<div class="some-thesis some-thesis--fast-read">
  <div class="some-thesis__some-element"></div>
</div>
<!-- DON'T DO THIS -->
// These class names are harder to read
<div class="somethesis somethesis--fastread">
  <div class="somethesis__someelement"></div>
</div>
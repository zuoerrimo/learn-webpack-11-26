import img from './1.jpg'
export default {
  template: `<div>
  <img :src='imgSrc'/>
  </div>`,
  data() {
    return {
      imgSrc: img,
    }
  }
}
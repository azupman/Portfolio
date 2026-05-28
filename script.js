function toggleMenu(){document.querySelector('.menu').classList.toggle('open')}
document.addEventListener('DOMContentLoaded',function(){
  var o=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');o.unobserve(e.target)}})
  },{threshold:0.1});
  document.querySelectorAll('.rev').forEach(function(el,i){
    el.style.transitionDelay=((i%3)*0.07)+'s';o.observe(el);
  });
});
